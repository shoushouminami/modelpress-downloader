const ga = require("./google-analytics");
const downloader = require("./downloader");
const utils = require("./utils");
const messaging = require("./messaging");
const React = require("react");
const ReactDOM = require("react-dom");
const mdprApp = require("./remote/mdpr-app");
const logger = require("./logger2")(module.id);
const asyncUtils = require("./utils/async-utils");
const config = require("./config");
const globals = require("./globals");


ga.bootstrap("popup.js");
ga.bootstrapGA4();
downloader.listenForDownloadFailureAndRetry();

/**
 * @param chrome
 * @param job {{images: [{url: "", folder: "abc/", ext: "jpg"}], type : "msg"|"reg", context: {}}}
 * @param resolve Invoked when all download jobs are started (not necessarily finished)
 */
function downloadInBackgroundOrPopup(chrome, job, resolve) {
    messaging.sendToRuntime("download", job, function (downloadResp) {
        logger.debug("Done: " + job.images.length + " images", "resp=", downloadResp);
        // Due to Chrome bug 1345528 https://bugs.chromium.org/p/chromium/issues/detail?id=1345528
        // check for USER_CANCELED error and retry download from popup
        if (downloadResp["downloadIds"] && downloadResp["downloadIds"].length > 0) {
            // if all download ids are null, retry with original folder path, in case the folder path is broken
            if (downloadResp["downloadIds"].every(val => val == null)) {
                job.context.folder = job.context.originalFolder;
                messaging.sendToRuntime("download", job); // not listening to the response
            } else {
                asyncUtils.wait(200).then(() => {
                    messaging.sendToRuntime("queryUserCanceled", null,
                        function (queryResp) {
                            logger.debug("queryResp=", queryResp);
                            if (queryResp["userCanceledCount"]) {
                                ga.trackEvent("retry_popup_download", "retried", globals.getChromeVersion(), 1);
                                ga.trackEventGA4("retry_popup_download");
                                logger.debug("userCanceledCount=", queryResp["userCanceledCount"], " restarting download in popup");
                                downloader.downloadJob(job, () => {
                                    // do not close the popup, as chrome waits for user to select download folder
                                    // closing popup will ignore the rest of the files
                                    // resolve();
                                });
                            } else if (resolve instanceof Function) {
                                resolve();
                            }
                        });
                });
            }
        } else if (resolve instanceof Function) {
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
                ga.trackEventGA4("support_link_click");
            });
        }
    );
}

function downloadHandler(resolve) {
    const imagesNeedTab = [];
    const downloadInBg = [];
    const downloadWithMsg = [];
    const images = message.images.slice(0, message.images.length);

    if (message.permissions_request) {
        ga.trackEventGA4("optional_perm_req", {
            "domain": message.host
        });
        chrome.permissions.request(
            message.permissions_request,
            (granted) => {
            if (granted) {
                ga.trackEventGA4("optional_perm_granted", {
                    "domain": message.host
                });
            } else {
                ga.trackEventGA4("optional_perm_not_granted", {
                    "domain": message.host
                });
            }
        });
    }

    ga.trackDownload(message.host, images.length);
    ga.trackEventGA4("download", {
        "domain": message.host,
        "count": images.length
    });
    const setJobId = config.getConf(config.DOWNLOAD_PREPEND_JOBID);
    const context = {
        tabId: message.fromTabId,
        folder: message.folder,
        originalFolder: message.originalFolder,
        host: message.host,
        title: message.title,
        configMap: config.getConfigMap(),
        ext: message.ext,
        headers: message.headers
    };
    let jobId = 1;
    for (const image of images) {
        if (typeof image === "string") {
            downloadInBg.push(
                {
                    context: context,
                    url: image,
                    jobId: setJobId ? jobId : null
                }
            );
        } else if (typeof image === "object" && image.type === "tab") {
            image.context = context;
            image.jobId = setJobId ? jobId : null;
            imagesNeedTab.push(image);
        } else if (typeof image === "object" && (image.url != null || image.type === "msg")) {
            image.context = context;
            image.jobId = setJobId ? jobId : null;

            if (image.type === "msg") {
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
        downloadInBackgroundOrPopup(chrome,
            {
                images: downloadWithMsg,
                type: "msg",
                context: context
            },
            function () {
                if (downloadInBg.length === 0 && imagesNeedTab.length === 0) {
                    resolve();
                }
            });
    }

    if (downloadInBg.length > 0) {
        downloadInBackgroundOrPopup(chrome,
            {
                images: downloadInBg,
                type: "reg",
                context: context
            },
            function () {
            if (imagesNeedTab.length === 0) {
                resolve();
            }
        });
    }

    if (imagesNeedTab.length) {
        ga.trackEvent("tab_download", "started", message.host, imagesNeedTab.length);
        ga.trackEventGA4("tab_dl_start", {
            "domain": message.host,
            "count": imagesNeedTab.length
        })
        let downloadViaTabContext = {
            p: Promise.resolve(),
            folder: message.folder,
            finishCount: 0,
            errorCount: 0,
            totalCount: imagesNeedTab.length,
            host: message.host,
            title: message.title,
            configMap: config.getConfigMap()
        };

        downloadViaTabContext.totalCount = imagesNeedTab.length;
        for (let image of imagesNeedTab) {
            downloader.downloadWithNewTab(chrome, image, downloadViaTabContext);
        }
        // after download finishes
        downloadViaTabContext.p = downloadViaTabContext.p.then(resolve);
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
    ga.trackEventGA4(message.supported ? "website_supported" : "website_not_supported", {
        "domain": message.host
    })
    updatePopupUI();
}

// process updateResult message (from content script)
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

