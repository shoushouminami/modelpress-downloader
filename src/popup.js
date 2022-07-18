const ga = require("./google-analytics");
const downloader = require("./downloader");
const utils = require("./utils");
const isDev = require("./is-dev");
const messaging = require("./messaging");
const React = require("react");
const ReactDOM = require("react-dom");
const mdprApp = require("./remote/mdpr-app");
const logger = require("./logger2")(module.id);
const asyncUtils = require("./utils/async-utils");
const config = require("./config");

ga.bootstrap();

/**
 * @param chrome
 * @param job {{images: [{url: "", folder: "abc/", ext: "jpg"}], type : "msg"|"reg"}}
 * @param resolve Invoked when all download jobs are started (not necessarily finished)
 */
function downloadInBackground (chrome, job, resolve) {
    messaging.sendToRuntime("download", job, function () {
        logger.debug("Done: " + job.images.length + " images");
        if (resolve instanceof Function) {
            resolve();
        }
    });
}

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

const PopupComponent = require("./components/popup-component").PopupComponent;
let popupKey = 1;

function updatePopupUI() {
    logger.debug("update popup UI", "message=", message);
    ReactDOM.render(
        <PopupComponent
            key={popupKey++} // just need something unique
            supported={message.supported}
            count={message.images && message.images.length}
            loading={message.loading}
            hasAppImage={message.remoteImages != null && Object.keys(message.remoteImages).length > 0}
            hasAppPerm={mdprApp.isAppPermGranted()}
            appFetchStatus={mdprApp.getAppFetchStatus()}
            appImageCount={mdprApp.getAddedCount()}
            downloadHandler={downloadHandler}
        />,
        document.getElementById("react-root"),
        function () {
            addClickListenerForLinks(document.getElementById("supportRequest"), () => {
                ga.trackEvent("support_link", "clicked");
            });
        }
    );
}

function downloadHandler(resolve) {
    const imagesNeedTab = [];
    const downloadInBg = [];
    const downloadWithMsg = [];
    const images = message.images.slice(0, message.images.length);

    ga.trackDownload(message.host, images.length);
    let jobId = 1;
    for (const image of images) {
        if (typeof image === "string") {
            downloadInBg.push({url: image, folder: message.folder, ext: message.ext, jobId: jobId});
        } else if (typeof image === "object" && image.type === "tab") {
            image.jobId = jobId;
            imagesNeedTab.push(image);
        } else if (typeof image === "object" && (image.url != null || image.type === "msg")) {
            image.folder = message.folder;
            image.ext = message.ext;
            image.jobId = jobId;

            if (image.type === "msg") {
                image.tabId = message.fromTabId;
                image.host = message.host;
                downloadWithMsg.push(image);
            } else {
                downloadInBg.push(image);
            }
        } else {
            logger.error("event=unknown_type image=" + JSON.stringify(image));
        }

        jobId++;
    }

    if (downloadWithMsg.length > 0) {
        downloadInBackground(chrome,
            {
                images: downloadWithMsg,
                type: "msg",
                context: {
                    tabId: message.fromTabId,
                    folder: message.folder,
                    host: message.host,
                    title: message.title,
                    configMap: config.getConfigMap()
                }
            },
            function () {
                if (downloadInBg.length === 0 && imagesNeedTab.length === 0) {
                    resolve();
                }
            });
    }

    if (downloadInBg.length > 0) {
        downloadInBackground(chrome,
            {
                images: downloadInBg,
                type: "reg",
                context: {
                    tabId: message.fromTabId,
                    folder: message.folder,
                    host: message.host,
                    title: message.title,
                    configMap: config.getConfigMap()
                }
            },
            function () {
            if (imagesNeedTab.length === 0) {
                resolve();
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
            host: message.host,
            title: message.title,
            configMap: config.getConfigMap()
        };

        context.totalCount = imagesNeedTab.length;
        for (let image of imagesNeedTab) {
            downloader.downloadWithNewTab(chrome, image, context, message.fromTabId);
        }
        // after download finishes
        context.p = context.p.then(resolve);
    }
}

function startFetchMdprMobileImages(articleId) {
    mdprApp.fetchMdprMobileImages(articleId, message.images,function (newImages) {
        utils.pushArray(message.images, newImages);
        updatePopupUI();
    });
    updatePopupUI();
}

function updateMessage(result, tabId) {
    logger.debug(result);
    if (result) {
        logger.debug("\n!!!! TEST CASE !!!!\n\n" + utils.printTestAssertion(result));
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

// process updateResult message (from content script)
messaging.clear("updateResult"); // in case there was one handler before
messaging.listen("updateResult", function (msg){
    if (msg) {
        logger.debug("updating message", msg);
        updateMessage(msg, message.fromTabId);
    }
});

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    // inject script with 1 retry.
    const tabId = tabs[0].id;
    chrome.scripting.executeScript(
        {
            target: {"tabId": tabId},
            files: ["inject-cs.js"]
        },
        function (results) {
            if (results && results.length > 0) {
                let result = results[0];
                if (result.retry) {
                    // retry in 100ms
                    asyncUtils
                        .wait(100)
                        .then(() => {
                            chrome.scripting.executeScript(
                                {
                                    target: {"tabId": tabId},
                                    files: ["inject-cs.js"]
                                },
                                function (results) {
                                    updateMessage(results && results[0].result, tabId);
                                });
                        });
                } else {
                    updateMessage(results[0].result, tabId);
                }
            } else {
                updateMessage(null, tabs[0].id);
            }
        });
});

