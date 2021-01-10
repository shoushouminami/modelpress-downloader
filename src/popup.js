const ga = require("./google-analytics");
const downloader = require("./downloader");
const utils = require("./utils");
const isDev = require("./is-dev");
const scan = require("./scan");
const messaging = require("./messaging");
const inject = require("./inject");
const i18n = require("./i18n");
const {getWindow, getChrome} = require("./globals");
const React = require("react");
const ReactDOM = require("react-dom");
const logger = require("./logger");

ga.bootstrap();
downloader.init();

let getFileName = function(url, ext) {
    let filename = url.split("?")[0].split("/");
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
                        // retry on other domains
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

    if (element && element.childNodes) {
        for (const child of element.childNodes) {
            addClickListenerForLinks(child, callback);
        }
    }
}

let message = require("./inject/return-message").notSupported();

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

const Popup = require("./components/popup").Popup;
let popupKey = 1;

const updatePopupUI = function () {
    let appFetchStatus = null;
    if (state.startedFetchMobile && !state.finishedFetchMobile) {
        appFetchStatus = "started";
    }

    if (state.finishedFetchMobile) {
        appFetchStatus = state.fetchStatus + "";
    }

    ReactDOM.render(
        <Popup
            key={popupKey++} // just need something unique
            supported={message.supported}
            count={message.images && message.images.length}
            loading={message.loading}
            hasAppImage={Object.keys(message.remoteImages).length > 0}
            hasAppPerm={state.canDownloadMobile}
            appFetchStatus={appFetchStatus}
            appImageCount={state.addedCount}
            downloadHandler={downloadHandler}
            permHandler={grantDownloadMobilePermission}
        />,
        document.getElementById("react-root"),
        function () {
            addClickListenerForLinks(document.getElementById("support-request"), () => {
                ga.trackEvent("support_link", "clicked");
            });
        }
    );
};

function downloadHandler() {
    let imagesNeedTab = [];
    let downloadInBg = [];
    let downloadWithMsg = [];
    let images = message.images.slice(0, message.images.length);
    ga.trackDownload(message.host, images.length);
    document.getElementById("download").disabled = true;
    let i = 0;
    for (const image of images) {
        if (typeof image === "string") {
            downloadInBg.push({url: image, folder: message.folder, ext: message.ext});
        } else if (typeof image === "object" && image.type === "tab") {
            imagesNeedTab.push(image);
        } else if (typeof image === "object" && image.type === "msg") {
            downloadWithMsg.push(image);
        } else if (typeof image === "object" && image.url) {
            image.folder = message.folder;
            image.ext = message.ext;
            if (image.url.startsWith("data:")) {
                downloader.download(chrome, image, function () {
                    i++;
                    if (i === message.images.length) {
                        window.close();
                    }
                });
            } else {
                downloadInBg.push(image);
            }
        } else {
            console.error("event=unknown_type image=" + JSON.stringify(image));
        }
    }

    if (downloadWithMsg.length > 0) {
        downloader.downloadWithMsg(chrome, message.fromTabId, message.folder, downloadWithMsg, function () {
            if (downloadInBg.length === 0 && imagesNeedTab.length === 0) {
                window.close();
            }
        });
    }

    if (downloadInBg.length > 0) {
        downloadInBackground(chrome, downloadInBg, function () {
            if (imagesNeedTab.length === 0) {
                window.close();
            }
        });
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
            downloader.downloadWithNewTab(chrome, image, context, message.fromTabId);
        }
        // after download finishes
        context.p = context.p.then(function() {
            window.close();
        });
    }
}

function grantDownloadMobilePermission() {
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
}

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

const updateMessage = function (result, tabId) {
    if (isDev) {
        console.debug(result);
    }
    if (result) {
        if (isDev) {
            console.debug(utils.printTestAssertion(result));
        }
        message = result;
        message.fromTabId = tabId;
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
    ga.trackSupport(message.host, message.supported);
    updatePopupUI();
}

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    let action = function (results) {
        updateMessage(results && results[0], tabs[0].id);
    };

    //injectScanScript(chrome, tabId);
    let doScan = scan.hasScanInQuery(window);
    if (doScan) {
        injectScan(tabs[0].id);
    } else {
        // inject script with 1 retry.
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "inject-cs.js", matchAboutBlank: true},
            function (results) {
                if (results && results.length) {
                    let result = results[0];
                    if (result.retry) {
                        // retry in 100ms
                        setTimeout(function () {
                            chrome.tabs.executeScript(
                                tabs[0].id,
                                {file: "inject-cs.js", matchAboutBlank: true},
                                action);
                        }, 100);
                    } else {
                        if (result.scan && !scan.hasStoredAlwaysScan()) {
                            scan.navigateToConfirmPage(result.host);
                        }
                        action(results);
                    }
                } else {
                    action(results);
                }
            });
    }

});

const injectScan = function (tabId) {
    scan.injectScanScript(chrome, tabId,
        (results, tabId) => {
            updateMessage(results[0], tabId)
        },
        function () {
            inject.injectInjectScript(chrome, tabId,
                (results, tabId) => {
                    message.scanState = "stopped";
                    ga.trackEvent("scan", "success", message.host, message.images.length);
                    // window.close()
                }
            )
        });
    document.getElementById("scan").disabled = "disabled";
}

// process updateResult message (from content script)
messaging.listen("updateResult", function (msg){
    if (msg) {
        updateMessage(msg, message.fromTabId);
    }
});

window.addEventListener("load", function(){
    let supportedSitesDiv = document.getElementById("supported-sites");
}, false);

module.exports = {
    fetchMdprMobileImages: fetchMdprMobileImages
};
