"use strict";
const sites = require("./inject/sites");
const ga = require("./google-analytics");
const downloader = require("./downloader");
const utils = require("./utils");
const isDev = require("./is-dev");

downloader.init();

let getFileName = function(url, ext) {
    var filename = url.split("?")[0].split("/");
    filename = filename[filename.length - 1];
    if (filename.indexOf(":") > -1) {
        filename = filename.split(":")[0];
    }

    if (ext) {
        return filename + "." + ext;
    }

    return filename;
};

/**
 * @param chrome
 * @param image <code> {url: "", folder: "abc/", ext: "jpg"} </code>
 * @param resolve
 * @param error is called when the download started and failed because of server side error, in addition to resolve.
 */
const download = function (chrome, image, resolve, error) {
    chrome.downloads.download(
        {
            url: image.url,
            saveAs: false,
            method: "GET",
            filename: image.folder + getFileName(image.url, image.ext)
        }, function (downloadId) {
            console.log("downloadId=" + downloadId);
            if (downloadId && typeof error === "function") {
                downloader.addDownloadCompleteListener(downloadId, undefined, function (){
                    error();
                });
            }

            if (typeof resolve === "function") {
                resolve();
            }
        });
};

/**
 * @param chrome
 * @param images a list of objects: <code> {url: "", folder: "abc/", ext: "jpg"} </code>
 * @param resolve Invoked when all download jobs are started (not necessarily finished)
 */
const downloadInBackground = function (chrome, images, resolve) {
    chrome.runtime.sendMessage({what: "download", images: images}, function (response) {
        if (response.what === "done") {
            console.debug("Done: " + images.length + " images");
            if (resolve instanceof Function) {
                resolve();
            }
        }
    });
};

/**
 * @param chrome
 */
const startDownloadInBackground = function (chrome) {
    chrome.runtime.sendMessage({what: "start"}, function (response) {
        console.debug("Background download started " +  response);
    });
};

const displayInNewTab = function(tabId, url, resolve, error) {
    chrome.tabs.create({
        url: url,
        active: false
    }, (newTab) => {
        chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
            if (tabId === newTab.id && changeInfo.status === "complete") {
                chrome.tabs.remove(newTab.id, () => {
                    resolve();
                });
            }
        });
    });
};

const downloadWithNewTab = function (chrome, image, context, tabId) {
    if (image.websiteUrl) {
        context.p = context.p.then(function () {
            return new Promise(function (resolve) {
                console.debug("event=creating_new_iframe totalCount=%d finishCount=%d ", context.totalCount, context.finishCount);
                displayInNewTab(tabId, image.websiteUrl, function () {
                    console.debug("event=created_new_iframe totalCount=%d finishCount=%d ", context.totalCount, context.finishCount);
                    download(chrome, {url: image.imageUrl, folder: context.folder} , () => {
                        context.finishCount++;
                        if (context.finishCount === context.totalCount) {
                            if (context.errorCount > 0) {
                                ga.trackEvent("tab_download", "failure", context.host, context.errorCount);
                            }

                            if (context.finishCount > context.errorCount) {
                                ga.trackEvent("tab_download", "success", context.host, context.finishCount - context.errorCount);
                            }
                        }
                        resolve();
                    }, function () {
                        console.error("event=download_with_iframe_failed");
                        context.errorCount++;
                    });
                }, function (msg) {
                    console.error(msg);
                });
            });
        });
    }
};

/**
 * get all images from mdpr mobile apis
 * @param callback - the callback function which will receive an array of additional image urls when successful. On
 *                  failure it will receive an empty array.
 * @param domains - The domains to try in order
 */
const fetchMdprMobileImages = function (articleId, callback, domains){
    if (!articleId || !articleId.match(/^\d+$/) || !callback || !(callback instanceof Function)) {
        console.error("Invalid article id: " + articleId + " or callback " + callback);
        return null;
    }

    // Test code begins
    // setTimeout(function () {
    //     state.fetchStatus = 0;
    //     let arr = [];
    //     for (let i = 0 ; i < 999; i++) {
    //         arr.push("abc" + i);
    //     }
    //     callback(arr);
    // }, 1000);
    // return;
    // Test code ends

    if (!domains) {
        domains = ["app2-mdpr.freetls.fastly.net", "app-mdpr.freetls.fastly.net", "app1-mdpr.freetls.fastly.net"];
    }

    if (domains.length > 0) {
        const domain = domains.shift();
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://" + domain + "/api/images/dialog/article?index=0&image_id=0&article_id=" + articleId, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                state.fetchStatus = xhr.status;
                if (xhr.status / 100 === 2) {
                    console.debug("Retrieved remote images: " + xhr.responseText);
                    let resp = undefined;
                    let list = [];
                    try {
                        resp = JSON.parse(xhr.responseText);
                    } catch (e) {
                        console.error("Failed parsing JSON: " + e);
                    }

                    if (resp && resp.list && resp.list.length) {
                        for (const item of resp.list) {
                            list.push(item.url);
                        }
                    }
                    ga.trackEvent("mdpr_remote", "success", "count", list.length);
                    callback(list);
                } else {
                    ga.trackEvent("mdpr_remote", "failure", xhr.status + "", 1);
                    console.error("Failed loading remote images: " + xhr.status + " " + xhr.statusText);
                    if (domains.length > 0) {
                        fetchMdprMobileImages(articleId, callback, domains);
                    } else {
                        callback([]);
                    }
                }
            }
        };
        xhr.send();
    }
};

/**
 * Recursively enhance A element so a click on the element would update the active chrome tab.
 * Runs callback before navigating.
 */
function addClickListenerForLinks(element, callback) {
    if (element && element.nodeName === "A") {
        element.addEventListener("click", function (e) {
            if (typeof callback === "function") {
                callback();
            }
            chrome.tabs.update({url:element.href});
        })
    }

    for (const child of element.childNodes) {
        addClickListenerForLinks(child, callback);
    }
}

let message = {
    supported: false,
    retry: false,
    images: [],
    remoteImages: {}, // for example {"mdpr.jp": "1234567"}
    ext: undefined,
    folder: undefined,
    fromTabId: null,
};

let state = {
    canDownloadMobile: false,
    startedFetchMobile: false,
    finishedFetchMobile: false,
    fetchStatus: 0,
    addedCount: 0
};

// Used in Chrome permission request
const ORIGINS = {
    "mdpr.jp": ["https://*.freetls.fastly.net/"]
};

const updatePopupUI = function () {
    if (message.supported) {
        if (message.images && message.images.length) {
            document.getElementById("buttonText").innerText = chrome.i18n.getMessage("downloadButtonMessage", [message.images.length]);
            if (Object.keys(message.remoteImages).length > 0) {
                if (!state.canDownloadMobile) {
                    document.getElementById("downloadMobileLabel").innerText = chrome.i18n.getMessage("downloadMobileLabel");
                    document.getElementById("downloadMobileCheck").checked = state.canDownloadMobile;
                    document.getElementById("downloadMobilePermission").hidden = false;
                    document.getElementById("downloadMobilePermissionHelpLink").href = chrome.i18n.getMessage("downloadMobileStatusHelpLink");
                } else {
                    document.getElementById("downloadMobilePermission").hidden = true;
                    document.getElementById("downloadMobileStatusHelpLink").hidden = true;
                    document.getElementById("downloadMobileStatus").hidden = false;
                    if (state.startedFetchMobile && !state.finishedFetchMobile) {
                        document.getElementById("downloadMobileStatusText").innerText = chrome.i18n.getMessage("downloadMobileStatusTextInProgress");
                    } else if (state.finishedFetchMobile) {
                        switch (state.fetchStatus) {
                            case 404:
                                document.getElementById("downloadMobileStatusText").innerText = chrome.i18n.getMessage("downloadMobileStatusTextNotFound");
                                break;
                            case 200:
                                document.getElementById("downloadMobileStatusText").innerText = chrome.i18n.getMessage("downloadMobileStatusTextSuccess", [state.addedCount]);
                                break;
                            default:
                                document.getElementById("downloadMobileStatusText").innerText = chrome.i18n.getMessage("downloadMobileStatusTextFailed");
                                document.getElementById("downloadMobileStatusHelpLink").href = chrome.i18n.getMessage("downloadMobileStatusFailedHelp");
                                document.getElementById("downloadMobileStatusHelpLink").hidden = false;
                                break;
                        }
                    }
                }

            }
        } else {
            document.getElementById("download").disabled = "disabled";
            document.getElementById("download").innerText = chrome.i18n.getMessage("noImageMessage");
        }
    } else {
        document.getElementById("download").hidden = "hidden";
        document.getElementById("app-name").innerText = chrome.i18n.getMessage("appName");
        document.getElementById("supported-sites-title").innerText = chrome.i18n.getMessage("supportedSitesTitle");
        document.getElementById("supported-sites").hidden = false;
        document.getElementById("support-request").innerHTML = chrome.i18n.getMessage("supportMessageML");
        addClickListenerForLinks(document.getElementById("support-request"), () => {
            ga.trackEvent("support_link", "clicked");
        });
        document.getElementById("support-request").hidden = false;
    }
};

document.getElementById("download").addEventListener("click", function () {
    let imagesNeedTab = [];
    let downloadInBg = [];
    ga.trackDownload(message.host, message.images.length);
    for (const image of message.images) {
        if (typeof image === "string") {
            downloadInBg.push({url: image, folder: message.folder, ext: message.ext});
        } else if (typeof image === "object" && image.websiteUrl && image.imageUrl) {
            imagesNeedTab.push(image);
        } else if (typeof image === "object" && image.url && image.retries) {
            image.folder = message.folder;
            image.ext = message.ext;
            downloadInBg.push(image);
            // download(chrome, {url: image.url, retries: image.retries, folder: message.folder, ext: message.ext});
        } else {
            console.error("event=unknown_type image=" + JSON.stringify(image));
        }
    }

    if (downloadInBg.length > 0) {
        downloadInBackground(chrome, downloadInBg);
    }

    if (imagesNeedTab.length) {
        ga.trackEvent("tab_download", "started", message.host, imagesNeedTab.length);
        let context = {
            p: Promise.resolve(),
            tempTab: null,
            tempIframe: null,
            folder: message.folder,
            finishCount: 0,
            errorCount: 0,
            totalCount: imagesNeedTab.length,
            host: message.host
        };

        context.totalCount = imagesNeedTab.length;
        for (let image of imagesNeedTab) {
            downloadWithNewTab(chrome, image, context, message.fromTabId);
        }
    }
});

document.getElementById("downloadMobileCheck").addEventListener("click", function (event) {
    let checkBox = document.getElementById("downloadMobileCheck");
    if (event.target.id === checkBox.id) {
        if (checkBox.checked) {
            ga.trackEvent("mdpr_remote", "perm_ask");
            chrome.permissions.request({
                origins: ORIGINS["mdpr.jp"]
            }, function(granted) {
                state.canDownloadMobile = granted;
                if (granted) {
                    ga.trackEvent("mdpr_remote", "perm_grant");
                    startFetchMdprMobileImages();
                } else {
                    ga.trackEvent("mdpr_remote", "perm_deny");
                }
                updatePopupUI();
            });
        } else {
            chrome.permissions.remove({
                origins: ORIGINS["mdpr.jp"]
            }, function(removed) {
                state.canDownloadMobile = !removed;
            });
        }
    }

});

const startFetchMdprMobileImages = function() {
    ga.trackEvent("mdpr_remote", "fetch");
    fetchMdprMobileImages(message.remoteImages["mdpr.jp"], function (images) {
        state.addedCount = 0;
        for (const image of images) {
            if (message.images.indexOf(image) === -1) {
                state.addedCount++;
                message.images.push(image);
            }
        }
        state.finishedFetchMobile = true;
        updatePopupUI();
    });
    state.startedFetchMobile = true;
    updatePopupUI();
};

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    let action = function (results) {
        if (isDev) {
            console.debug(results);
        }
        if (results && results.length) {
            if (isDev) {
                console.debug(utils.printTestAssertion(results[0]));
            }
            message = results[0];
            message.fromTabId = tabs[0].id;
            if (message.remoteImages) {
                if (message.remoteImages["mdpr.jp"]) {
                    chrome.permissions.contains({
                        origins: ORIGINS["mdpr.jp"]
                    }, function (granted) {
                        state.canDownloadMobile = granted;
                        if (granted) {
                            startFetchMdprMobileImages();
                        }
                        updatePopupUI();
                    });
                }
            }

        }
        ga.trackSupport(message.host, message.supported)
        updatePopupUI();
    };

    // inject script with 1 retry.
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: "inject.js", matchAboutBlank: true},
        function (results) {
            if (results && results.length && results[0].retry) {
                // retry in 100ms
                setTimeout(function () {
                    chrome.tabs.executeScript(
                        tabs[0].id,
                        {file: "inject.js", matchAboutBlank: true},
                        action);
                }, 100);
            } else {
                action(results);
            }
        });
});

window.addEventListener("load", function(){
    let supportedSitesDiv = document.getElementById("supported-sites");
    let appendSite = function(iconUrl, siteUrl) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let a = document.createElement("a");

        div.appendChild(a);
        // div.appendChild(document.createTextNode(" "));
        div.classList.add("site");

        img.src = iconUrl;
        img.alt = siteUrl;
        img.title = siteUrl;
        img.classList.add("siteIcon");

        a.href = siteUrl;
        addClickListenerForLinks(a, () => {
            ga.trackEvent("site_icon", "clicked", siteUrl);
        });
        a.classList.add("siteLink");
        a.appendChild(img);

        supportedSitesDiv.appendChild(div);
    };

    for (const site of sites.all()) {
        let url;
        if (site.url != null) {
            url = new URL(site.url);
        } else if (typeof site.host === "string") {
            url = new URL("https://" + site.host);
        }

        if (url && !site.hidden) {
            let image = site.image || "../images/" + url.host + ".png";
            appendSite(image, url.toString());
        }
    }
}, false);

module.exports = {
    fetchMdprMobileImages: fetchMdprMobileImages
};
