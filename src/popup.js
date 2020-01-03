'use strict';

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
 */
let download = function (chrome, image, resolve) {
    chrome.downloads.download(
        {
            url: image.url,
            saveAs: false,
            method: "GET",
            filename: image.folder + getFileName(image.url, image.ext)
        }, function () {
            if (resolve instanceof Function) {
                resolve();
            }
        });
};

/**
 * @param chrome
 * @param image <code> {url: "", folder: "abc/", ext: "jpg"} </code>
 * @param resolve
 */
let downloadInBackground = function (chrome, image, resolve) {
    chrome.runtime.sendMessage({what: "download", image: image}, function (response) {
        if (response.what === "done") {
            console.debug("Done: " + image.url);
        }
    });
};

/**
 * @param chrome
 */
let startDownloadInBackground = function (chrome) {
    chrome.runtime.sendMessage({what: "start"}, function (response) {
        console.debug("Background download started " +  response);
    });
};

let displayInIframe = function(tabId, url, resolve, error) {
    chrome.tabs.sendMessage(tabId, {what: "showIframe", url: url}, function(response) {
        if (response) {
            if (response.status === "ok") {
                if (resolve instanceof Function) {
                    resolve();
                }
            } else {
                if (error instanceof Function) {
                    error("Something went wrong...");
                }
            }
        } else if (chrome.runtime.lastError) {
            if (error instanceof Function) {
                error(chrome.runtime.lastError.message);
            }
        }
    });
};

let downloadWithIframe = function (chrome, image, context, tabId) {
    if (image.websiteUrl) {
        context.p = context.p.then(function () {
            return new Promise(function (resolve) {
                console.debug("event=creating_new_iframe totalCount=%d finishCount=%d ", context.totalCount, context.finishCount);
                displayInIframe(tabId, image.websiteUrl, function () {
                    console.debug("event=created_new_iframe totalCount=%d finishCount=%d ", context.totalCount, context.finishCount);
                    download(chrome, {url: image.imageUrl, folder: context.folder} , resolve);
                }, function (msg) {
                    console.error(msg);
                });
            });
        });
    }
};

/**
 * get all images from mdpr mobile apis
 */
let fetchMdprMobileImages = function (articleId, callback){
    if (!articleId || !articleId.match(/^\d+$/) || !callback || !(callback instanceof Function)) {
        console.error("Invalid article id: " + articleId + " or callback " + callback);
        return null;
    }

    // Test code
    // setTimeout(function () {
    //     state.fetchStatus = 200;
    //     let arr = [];
    //     for (let i = 0 ; i < 10; i++) {
    //         arr.push("abc" + i);
    //     }
    //     callback(arr);
    // }, 1000);
    // return;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://app-mdpr.freetls.fastly.net/api/images/dialog/article?index=0&article_id=" + articleId, true);
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

                callback(list);
            } else {
                console.log("Failed loading remote images: " + xhr.status + " " + xhr.statusText);
                callback([]);
            }
        }
    };
    xhr.send();
};

let message = {
    supported: false,
    retry: false,
    images: [],
    remoteImages: {}, // for example {"mdpr.jp": "1234567"}
    ext: undefined,
    folder: undefined,
};

let state = {
    canDownloadMobile: false,
    startedFetchMobile: false,
    finishedFetchMobile: false,
    fetchStatus: 0,
    addedCount: 0
};

const ORIGINS = {
    "mdpr.jp": ["https://app-mdpr.freetls.fastly.net/"]
};

let updatePopupUI = function () {
    if (message.supported) {
        if (message.images && message.images.length) {
            document.getElementById("buttonText").innerText = chrome.i18n.getMessage("downloadButtonMessage", [message.images.length]);
            if (Object.keys(message.remoteImages).length > 0) {
                if (!state.canDownloadMobile) {
                    document.getElementById("downloadMobileLabel").innerText = chrome.i18n.getMessage("downloadMobileLabel");
                    document.getElementById("downloadMobileCheck").checked = state.canDownloadMobile;
                    document.getElementById("downloadMobilePermission").hidden = false;
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
            document.getElementById('download').disabled = "disabled";
            document.getElementById('download').innerText = chrome.i18n.getMessage("noImageMessage");
        }
    } else {
        document.getElementById('download').hidden = "hidden";
        document.getElementById("supported-sites-title").innerText = chrome.i18n.getMessage("supportedSitesTitle");
        document.getElementById("supported-sites").hidden = false;
    }
};

document.getElementById('download').addEventListener("click", function () {
    let imagesNeedTab = [];
    let startBg = false;
    for (const image of message.images) {
        if (typeof image === "string") {
            downloadInBackground(chrome, {url: image, folder: message.folder, ext: message.ext});
            startBg = true;
        } else if (typeof image === "object") {
            if (image.websiteUrl && image.imageUrl) {
                imagesNeedTab.push(image);
            } else {
                console.error("event=unknown_object image=" + image);
            }
        } else {
            console.error("event=unknown_type image=" + image);
        }
    }

    if (startBg) {
        startDownloadInBackground(chrome);
    }

    if (imagesNeedTab.length) {
        let context = {
            p: Promise.resolve(),
            tempTab: null,
            tempIframe: null,
            folder: message.folder,
            finishCount: 0,
            totalCount: imagesNeedTab.length
        };

        context.totalCount = imagesNeedTab.length;
        for (let image of imagesNeedTab) {
            downloadWithIframe(chrome, image, context, tabs[0].id);
        }
    }
});

document.getElementById("downloadMobileCheck").addEventListener("click", function (event) {
    let checkBox = document.getElementById("downloadMobileCheck");
    if (event.target.id === checkBox.id) {
        if (checkBox.checked) {
            chrome.permissions.request({
                origins: ORIGINS["mdpr.jp"]
            }, function(granted) {
                state.canDownloadMobile = granted;
                if (granted) {
                    startFetchMdprMobileImages();
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

let startFetchMdprMobileImages = function() {
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
        console.debug(results);
        if (results && results.length) {
            message = results[0];
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
        updatePopupUI();
    };

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

let supportedSites = [
    "https://mdpr.jp/",
    "https://tokyopopline.com/",
    "http://blog.nogizaka46.com/",
    "https://twitter.com/",
    // ["https://www.instagram.com/", "instagram.com"],
    ["https://www.bilibili.com/read/home", "www.bilibili.com/read"],
    "https://news.dwango.jp",
    "https://www.facebook.com",
    "http://popwave.jp",
    "https://mikan-incomplete.com",
    //"https://www.asahi.com/and_M/"
    "https://cancam.jp",
    "https://bltweb.jp"
];

window.addEventListener("load", function(){
    let supportedSitesDiv = document.getElementById("supported-sites");
    let appendSite = function(iconUrl, siteUrl, displayUrl) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let a = document.createElement("a");
        div.appendChild(img);
        div.appendChild(document.createTextNode(" "));
        div.appendChild(a);

        img.src = iconUrl;
        img.alt = siteUrl;
        img.height = 10;
        a.href = siteUrl;
        a.innerText = displayUrl;
        a.addEventListener("click", function () {
            chrome.tabs.update({url:siteUrl});
        });

        supportedSitesDiv.appendChild(div);
    };

    for (const site of supportedSites) {
        if (typeof site === "string") {
            let url = new URL(site);
            appendSite("../images/" + url.host + ".ico", url.toString(), url.host + (url.pathname.length > 1 ?  (url.pathname) : ""));
        } else if (Array.isArray(site)) {
            let url = new URL(site[0]);
            appendSite("../images/" + url.host + ".ico", url.toString(), site[1]);
        }
    }
}, false);