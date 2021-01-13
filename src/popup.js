const ga = require("./google-analytics");
const downloader = require("./downloader");
const utils = require("./utils");
const isDev = require("./is-dev");
const messaging = require("./messaging");
const React = require("react");
const ReactDOM = require("react-dom");
const mdprApp = require("./remote/mdpr-app");
const logger = require("./logger");
const window = require("./globals").getWindow();
ga.bootstrap();
downloader.init();

/**
 * @param chrome
 * @param images a list of objects: <code> {url: "", folder: "abc/", ext: "jpg"} </code>
 * @param resolve Invoked when all download jobs are started (not necessarily finished)
 */
const downloadInBackground = function (chrome, images, resolve) {
    chrome.runtime.sendMessage({what: "download", images: images}, function (response) {
        if (response.what === "done") {
            logger.debug("Done: " + images.length + " images");
            if (resolve instanceof Function) {
                resolve();
            }
        }
    });
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

const Popup = require("./components/popup").Popup;
let popupKey = 1;

const updatePopupUI = function () {
    ReactDOM.render(
        <Popup
            key={popupKey++} // just need something unique
            supported={message.supported}
            count={message.images && message.images.length}
            loading={message.loading}
            hasAppImage={Object.keys(message.remoteImages).length > 0}
            hasAppPerm={mdprApp.isAppPermGranted()}
            appFetchStatus={mdprApp.getAppFetchStatus()}
            appImageCount={mdprApp.getAddedCount()}
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
    mdprApp.requestAppPerm( function(granted) {
        if (granted) {
            startFetchMdprMobileImages(message.remoteImages["mdpr.jp"]);
        }
        updatePopupUI();
    });
}

function startFetchMdprMobileImages(articleId) {
    mdprApp.fetchMdprMobileImages(articleId, message.images,function (newImages) {
        utils.pushArray(message.images, newImages);
        updatePopupUI();
    });
    updatePopupUI();
}

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
        if (message.remoteImages && message.remoteImages["mdpr.jp"]) {
            mdprApp.checkAppPerm(function (granted) {
                if (granted) {
                    startFetchMdprMobileImages(message.remoteImages["mdpr.jp"]);
                }
                updatePopupUI();
            })
        }
    }
    ga.trackSupport(message.host, message.supported);
    updatePopupUI();
}

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
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
                            function (results) {
                                updateMessage(results && results[0], tabs[0].id);
                            });
                    }, 100);
                } else {
                    updateMessage(results[0], tabs[0].id);
                }
            } else {
                updateMessage(null, tabs[0].id);
            }
        });
});

// process updateResult message (from content script)
messaging.listen("updateResult", function (msg){
    if (msg) {
        updateMessage(msg, message.fromTabId);
    }
});

//for debugging
if (isDev) {
    window.removeAppPerm = mdprApp.removeAppPerm;
}
