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
i18n.autoBind("popup");
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
 * TODO: refactor into {@link downloader.js}
 * @deprecated Only tab download calls this.
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

const updatePopupUI = function () {
    let appFetchStatus = null;
    if (state.startedFetchMobile && !state.finishedFetchMobile) {
        appFetchStatus = "started";
    }

    if (state.finishedFetchMobile) {
        appFetchStatus = state.fetchStatus + "";
    }

    const node = ReactDOM.render(
        <Popup
            supported={message.supported}
            count={message.images && message.images.length}
            loading={message.loading}
            hasAppImage={Object.keys(message.remoteImages).length > 0}
            hasAppPerm={state.canDownloadMobile}
            appFetchStatus={appFetchStatus}
            appImageCount={state.addedCount}
            downloadHandler={downloadHandler}
        />,
        document.getElementById("react-root")
    );
    logger.debug("node=", node);
    //
    // if (message.supported) {
    //     const DownloadButton = require("./components/popup").DownloadButton;
    //     ReactDOM.render(
    //         <DownloadButton
    //             count={message.images && message.images.length}
    //             loading={message.loading}
    //             onClick={downloadHandler}
    //         />,
    //         document.getElementById("download-button-react-root")
    //     );
    //     if (message.images && message.images.length) {
    //         if (Object.keys(message.remoteImages).length > 0) {
    //             const DownloadMobilePermission = require("./components/popup").DownloadMobilePermission;
    //             ReactDOM.render(
    //                 <DownloadMobilePermission
    //                     granted={state.canDownloadMobile}
    //                     onClick={grantDownloadMobilePermission}
    //                 />,
    //                 document.getElementById("download-mobile-permission-react-root")
    //             );
    //
    //             const DownloadMobileStatus = require("./components/popup").DownloadMobileStatus;
    //             if (state.startedFetchMobile && !state.finishedFetchMobile) {
    //                 ReactDOM.render(
    //                     <DownloadMobileStatus
    //                         granted={state.canDownloadMobile}
    //                         status={i18n.getText("downloadMobileStatusTextInProgress")}
    //                     />,
    //                     document.getElementById("download-mobile-status-react-root")
    //                 );
    //             } else if (state.finishedFetchMobile) {
    //                 switch (state.fetchStatus) {
    //                     case 404:
    //                         ReactDOM.render(
    //                             <DownloadMobileStatus
    //                                 granted={state.canDownloadMobile}
    //                                 status={i18n.getText("downloadMobileStatusTextNotFound")}
    //                             />,
    //                             document.getElementById("download-mobile-status-react-root")
    //                         );
    //                         break;
    //                     case 200:
    //                         ReactDOM.render(
    //                             <DownloadMobileStatus
    //                                 granted={state.canDownloadMobile}
    //                                 status={i18n.getText("downloadMobileStatusTextSuccess", null, [state.addedCount])}
    //                             />,
    //                             document.getElementById("download-mobile-status-react-root")
    //                         );
    //                         break;
    //                     default:
    //                         ReactDOM.render(
    //                             <DownloadMobileStatus
    //                                 granted={state.canDownloadMobile}
    //                                 status={i18n.getText("downloadMobileStatusTextFailed")}
    //                                 helpLink={i18n.getText("downloadMobileStatusFailedHelp")}
    //                             />,
    //                             document.getElementById("download-mobile-status-react-root")
    //                         );
    //                 }
    //             }
    //         }
    //     }
    // } else {
    //     const SupportedSites = require("./components/supported-sites");
    //     require("react-dom").render(<SupportedSites sites={require("./inject/sites").all()}/>, document.getElementById("supported-sites-react-root"));
    //     //document.getElementById("download").hidden = "hidden";
    //     //document.getElementById("supported-sites").hidden = false;
    //     addClickListenerForLinks(document.getElementById("support-request"), () => {
    //         ga.trackEvent("support_link", "clicked");
    //     });
    //     document.getElementById("support-request").hidden = false;
    // }
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
            downloadWithNewTab(chrome, image, context, message.fromTabId);
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

// process updateImage message (from scan.js)
messaging.listen("updateImage", function (msg){
    if (msg.image) {
        if (message.images == null) {
            message.images = [];
        }

        downloader.downloadWithMsg(chrome, message.fromTabId, message.folder, [msg.image]);
        utils.pushIfNew(message.images, msg.image);
    }

    updatePopupUI();
});

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
