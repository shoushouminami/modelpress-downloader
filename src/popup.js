const ga = require("./google-analytics");
const downloader = require("./downloader");
const utils = require("./utils");
const messaging = require("./messaging");
const React = require("react");
const ReactDOM = require("react-dom");
const mdprApp = require("./remote/mdpr-app");
const logger = require("./logger2")(module.id);
const { wait } = require("./utils/async-utils");
const config = require("./config");
const globals = require("./globals");
const {getGA4UID} = require("./ga/ga4-uid");
const { createSiteOptions, DOWNLOAD_PREPEND_JOBID } = require("./site-options.js");
const { guessMediaType, thumbnail } = require("./utils/url-utils");
const { getCallStack } = require("./utils/js-utils");

ga.bootstrapGA4();
downloader.listenForDownloadFailureAndRetry();

/**
 * Sends jobs to service worker for download. When failed, fall back to download in popup.js.
 * This is for job type "msg", "msg_seq", and "reg"
 * @param chrome
 * @param job {{images: [{url: "", folder: "abc/", ext: "jpg"}], type : "msg"|"reg", context: {}}}
 * @param resolve Invoked when all download jobs are started (not necessarily finished)
 */
function downloadInBackgroundOrPopup(chrome, job, resolve) {
    // pass user id to background.js
    const userId = getGA4UID();
    if (userId) {
        job["userId"] = userId;
    }

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
                wait(200).then(() => {
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
            chrome.tabs.update({url:element.href}, function () {
                wait(1000).then(() => window.close());
            });
        })
    }

    if (element && element.childNodes) {
        for (const child of element.childNodes) {
            addClickListenerForLinks(child, callback);
        }
    }
}

let message = require("./inject/return-message").notSupported();
let getAllOptions, getOption, updateOption, userInteracted = null;

const { PopupComponent, createThrottledEventEmitter } = require("./components/popup-component");
let renderEventEmitter = createThrottledEventEmitter(); // used to notify the PopupComponent to re-render.
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
            optionHandler={optionHandler}
            options={message.options}
            getImageThumbnails={getImageThumbnails}
            imagePickerHandler={imagePickerHandler}
            renderEvent={renderEventEmitter}
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

function createDownloadContext() {
    const context = {
        tabId: message.fromTabId,
        folder: message.folder,
        originalFolder: message.originalFolder,
        host: message.host,
        title: message.title,
        pathname: message.pathname,
        configMap: config.getConfigMap(),
        ext: message.ext,
        headers: message.headers,
        ignoreJobId: message.ignoreJobId
    };

    // copies over customizable context keys
    message.additionalContextKeys?.forEach(k => {
        context[k] = message[k];
    });

    return context;
}
/** 
 * Prepare download job from parsing {@link message}. The job is then sent to service worker for download in the background.
*/
function prepareDownloadJobs() {
    const imagesNeedTab = [];
    const downloadInBg = [];
    const downloadWithMsg = [];
    const images = message.selectedIndexes ?
        message.selectedIndexes.map(i => message.images[i]) :
        message.images.slice(0, message.images.length);

    logger.debug("func=", prepareDownloadJobs.name, "images=", images, "selectedIndexes=", message.selectedIndexes);

    const context = createDownloadContext();
    let jobId = 1; // seq number on downloaded images
    for (const image of images) {
        const imageJob = typeof image === "string" ? {url: image} : image;
        imageJob.context = context;
        imageJob.jobId = getConfigSetJobId() ? jobId : null;
        imageJob.seqId = jobId;
        imageJob.host = message.host;
        imageJob.folderFilename = downloader.getFolderFilename(imageJob);
        
        if (typeof image === "string") {
            // "reg"
            downloadInBg.push(imageJob);
        } else if (typeof image === "object" && image.type === "tab") {
            imagesNeedTab.push(imageJob);
        } else if (typeof image === "object" && (image.type === "msg" || image.type === "msg_seq")) {
            downloadWithMsg.push(imageJob);
            if (imageJob.loaded) {
                imageJob.thumbnail = imageJob.url;
            } else if (!image.loading) {
                // pre-fetch image.url as thumbnail
                const setThumbnail = (imageFromResp) => {
                    if (imageFromResp) {
                        imageJob.thumbnail = imageFromResp.url;
                        renderEventEmitter.emit();
                    }
                };
                if (image.type === "msg") {
                    downloader.getImageUrlFromContentScriptIfNotLoaded(imageJob, context, setThumbnail);
                } else {
                    downloader.getImageUrlFromContentScriptInSeq(imageJob, context, setThumbnail, 250);
                }
            } 
        } else if (typeof image === "object" && image.url != null) {
            // assume "reg"
            downloadInBg.push(imageJob);
        } else {
            logger.error("event=unknown_type image=" + JSON.stringify(image));
        }

        jobId++;
    }

    const jobs = [];
    // "msg" or "msg_seq"
    if (downloadWithMsg.length > 0) {
        // split each image as 1 job
        // in case the total size is over 64MB (messaging limit)
        downloadWithMsg.forEach(imageJob => {
            jobs.push({
                images: [imageJob],
                type: imageJob.type,
                context: context
            });
        });
    }

    // "reg"
    if (downloadInBg.length > 0) {
        jobs.push({
            images: downloadInBg,
            type: "reg",
            context: context
        });
    }

    // "tab"
    if (imagesNeedTab.length) {
        // a few extra properties needed in context
        Object.assign(context, {
            p: Promise.resolve(),
            finishCount: 0,
            errorCount: 0,
            totalCount: imagesNeedTab.length,
        });

        jobs.push({
            images: imagesNeedTab,
            type: imagesNeedTab[0].type,
            context: context,
        });
    }

    logger.debug("func=", prepareDownloadJobs.name, "jobs=", jobs);
    return jobs;
}

function getImageThumbnails() {
    const jobs = prepareDownloadJobs();
    const thumbnails = message.images.map((img, index) => {
        if (img.thumbnail) {
            return {
                src: img.thumbnail
            };
        }

        
        const mediaType = guessMediaType(typeof img === "string" ? img : img.url, img.filename);
        switch (mediaType) {
            case "image":
                if (img.type == "msg" || img.type == "msg_seq") {
                    return {
                        src: thumbnail("spinner")
                    };
                }
                return {
                    src: typeof img === "string" ? img : img.url
                };
            case "video":
            case "audio":
            case "html":
            case "text":
            case "unknown":
                return {
                    src: thumbnail(mediaType)
                };
        }
    });

    jobs.forEach(job => {
        job.images.forEach((img) => {
            thumbnails[message.images.findIndex(item => ((typeof item === "string") ? item === img.url : item.url === img.url))].label = img.folderFilename;
        });
    });

    return thumbnails;
}

function downloadHandler(resolve) {
    function _downloadHandler() {
        const jobs = prepareDownloadJobs();
        const totalImageCount = jobs.reduce((sum, job) => sum + job.images.length, 0);
        ga.trackDownload(message.host, totalImageCount);
        ga.trackEventGA4("download", {
            "domain": message.host,
            "count": totalImageCount
        });
        
        jobs.forEach((job, index) => {
            switch (job.type) {
                case "reg": // fall through
                case "msg": // fall through
                case "msg_seq":
                    downloadInBackgroundOrPopup(
                        chrome,
                        job,
                        function () {
                            // only the last job calls resolve, which closes the popup window
                            if (index === jobs.length - 1) {
                                resolve();
                            }
                        });
                    break;
                case "tab":
                    ga.trackEvent("tab_download", "started", message.host, job.images.length);
                    ga.trackEventGA4("tab_dl_start", {
                        "domain": message.host,
                        "count": job.images.length
                    })
                    for (const image of job.images) {
                        downloader.downloadWithNewTab(chrome, image, job.context);
                    }
                    // close popup window after download finishes
                    job.context.p = job.context.p.then(resolve);
                    break;
                default:
                    logger.error("func=downloadHandler unknown job type=", job.type, "job=", job);
            }
        });
    }

    // proceed to download when no permission request
    if (message.permissionRequest == null) {
        _downloadHandler();
        return;
    }

    // needs permission request before download
    ga.trackEventGA4("optional_perm_req", {
        "domain": message.host
    });

    chrome.permissions.request(
        message.permissionRequest,
        (granted) => {
            if (granted) {
                ga.trackEventGA4("optional_perm_granted", {
                    "domain": message.host
                });
                _downloadHandler();
            } else {
                ga.trackEventGA4("optional_perm_not_granted", {
                    "domain": message.host
                });
            }
        });
}

function getConfigSetJobId() {
    const siteOpt = message.options[DOWNLOAD_PREPEND_JOBID];
    // prefer site level config
    if (siteOpt && // when this option is hidden, we always use the site level default value, which likely is false
        (siteOpt.userInteracted || siteOpt.hidden)) { 
        return siteOpt.checked;
    }
    // then use the global extension persisted config
    return config.getConf(config.DOWNLOAD_PREPEND_JOBID);
}

/** 
 * Call createSiteOptions() for the 1st time to initialize functions getAllOptions, updateOption, and userInteracted
*/
function createSiteOptionsOnce(host, defaultOptions) {
    if (getAllOptions == null) {
        logger.debug("func=createSiteOptionsOnce with host=", host, "defaultOptions=", defaultOptions, "stack=", getCallStack());
        ({ getAllOptions, getOption, updateOption, userInteracted } = createSiteOptions({
            host: host,
            options: defaultOptions
        }));
    } else {
        logger.debug("func=createSiteOptionsOnce site options already created stack=", getCallStack())
    }
}

function optionHandler(updatedOptions) {
    logger.debug("optionHandler updatedOptions=", updatedOptions);
    // persist options that is user interacted
    Object.keys(updatedOptions).forEach((optName) => {
        if (userInteracted(updatedOptions[optName])) {
            updateOption(optName, updatedOptions[optName]);
        }
    });
    message.options = getAllOptions();
    notifyCSOptionsChanged();
}

function notifyCSOptionsChanged() {
    messaging.sendToCS(message.fromTabId, "optionsChanged", {
        host: message.host,
        options: getAllOptions()
    });
}

/**
 * Called when image picker is used to select images to download. 
 * @param {int[]} selectedIndexes 
 */
function imagePickerHandler(selectedIndexes = []) {
    message.selectedIndexes = selectedIndexes;
    // no need to update UI as this event is propogated from UI
}

function startFetchMdprMobileImages(articleId) {
    mdprApp.fetchMdprMobileImages(articleId, message.images,function (newImages) {
        utils.pushArray(message.images, newImages);
        updatePopupUI();
    });
    updatePopupUI();
}

function updateMessage(result, tabId) {
    logger.debug("func=updateMessage result=", result, "tabId=", tabId);
    if (result) {
        logger.debug("\n!!!! TEST CASE !!!!\n\n" + utils.printTestAssertion(result));
        message = result;

        // Fetch site options from local storage (if not yet done so)
        createSiteOptionsOnce(message.host, message.options);
        
        message.options = getAllOptions();

        // Patch the config flag config.DOWNLOAD_PREPEND_JOBID
        // in messsage.options so the UI displays the correct checkbox.
        // Use the CS level flag if user clicked, otherwise use the extension level flag
        if (message.options && message.options[DOWNLOAD_PREPEND_JOBID]) {
            message.options[DOWNLOAD_PREPEND_JOBID].checked = getConfigSetJobId();
        }

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

// listen for updateResult message from content script
messaging.listen("updateResult", function (msg){
    if (msg) {
        logger.debug("updating message", msg);
        updateMessage(msg, message.fromTabId);
    }
});

// listen for getSiteOptions message from content script
messaging.listen("getSiteOptions", function (msg, sendResp) {
    if (msg && msg.host && msg.options) {
        createSiteOptionsOnce(msg.host, msg.options);
        const allOptions = getAllOptions();
        logger.debug("host=", msg.host, "options=", allOptions);
        sendResp({
            host: msg.host,
            options: allOptions
        });
    }
});

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    // inject script with 1 retry.
    const tabId = tabs[0].id;
    // tear down the content script injected before. removing event listeners etc.
    messaging.sendToCS(tabId, "tearDown", {
        before: Date.now()
    });
    chrome.scripting.executeScript(
        {
            target: {"tabId": tabId},
            files: ["inject-cs.js"]
        },
        function (results) {
            if (results && results.length > 0) {
                let result = results[0].result;
                logger.debug("results[0].result=", result, "retry=", result.retry);
                if (result.retry) {
                    // retry in result.retryAfterMs or by default 100ms
                    const retryMs = result.retryAfterMs || 100;
                    wait(retryMs)
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
                } 

                updateMessage(results[0].result, tabId);
            } else {
                updateMessage(null, tabs[0].id);
            }
        });
});
