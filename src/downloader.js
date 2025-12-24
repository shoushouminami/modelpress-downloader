const messaging = require("./messaging");
const {wait, every} = require("./utils/async-utils");
const utils = require("./utils");
const { getGA4UID } = require("./ga/ga4-uid");

const retryMap = {}; // for keeping retry urls
const errorMap = {}; // for keeping USER_CANCELED errors; downloadId => error
const tabIdOnUpdatedFunctionMap = {}; // tabId => function
const downloadIdToFolderFilenameMap = {}; // downloadId => original folderFilename. used to fix download filename

const ga = require("./google-analytics");
const chrome = require("./globals").getChrome();
const logger = require("./logger2")(module.id);

const CHROME_ERROR_USER_CANCELED = "USER_CANCELED";
const CHROME_ERROR_SERVER_BAD_CONTENT = "SERVER_BAD_CONTENT";
const CHROME_ERROR_SERVER_FORBIDDEN = "SERVER_FORBIDDEN";

const EXTENSION_ID = require("./runtime").getExtensionID()

/**
 * @param image {{context: {folder: "", ext: ""}, url: "", filename: "", folder: "abc/", ext: "jpg", jobId: 123}}
 */
function getFolderFilename(image) {
    return decodeURI(image.context.folder)
        + (image.context.folder.endsWith("/") ? "" : "/")
        + (image.jobId != null ? image.jobId + "-" : "")
        + utils.getFileName(image.url, image.context.ext, image.filename);
}

/**
 * Use Chrome API to download the given image
 * @param chrome
 * @param image {{url: "", folder: "abc/", ext: "jpg", jobId: 123}}
 * @param resolve
 */
function download(chrome, image, resolve) {
    const folderFilename = image.folderFilename ?? getFolderFilename(image);
    const headers = image.context?.headers ?? [];
    logger.debug("func=download image=", image, "folderFilename=", folderFilename, "headers=", headers);
    chrome.downloads.download(
        {
            url: image.url,
            saveAs: false,
            method: "GET",
            filename: folderFilename,
            headers: headers
        }, function (downloadId) {
            logger.debug("func=download downloadId=", downloadId, "folderFilename=", folderFilename);
            if (downloadId) {
                downloadIdToFolderFilenameMap[downloadId] = folderFilename;
            }
            
            if (downloadId && image.retries && image.retries.length > 0) {
                retryMap[downloadId] = image;
            }

            if (resolve instanceof Function) {
                resolve(downloadId);
            }
        });
}

/**
 * First send a message to get the url of the image. Once we have the url, call {@link download} to download the image.
 * @param chrome
 * @param context {{tabId:number, folder:string, host:string}}
 * @param images {any[]}
 * @param done {function():void} is called when all downloads are initiated in Chrome.
 */
function downloadWithMsg(chrome, context, images, done) {
    if (images.length > 0) {
        let count = 0;
        let startMs = new Date().getTime();
        logger.debug("downloadWithMsg images.length=", images.length);
        ga.trackEventGA4("msg_dl_start", {
            "domain": context.host,
            "count": images.length
        });

        const downloadIds = []; // collect download ids of all images

        for (const image of images) {
            getImageUrlFromContentScriptIfNotLoaded(image, context, function (imageFromResp){
                const completed = ++count === images.length;
                if (imageFromResp) {
                    download(chrome, imageFromResp, function (downloadId) {
                        downloadIds.push(downloadId);
                        if (completed) {
                            // logger.debug("downloadWithMsg done count=", count);
                            ga.trackEventGA4("msg_dl_comp", {
                                "domain": context.host,
                                "count": images.length,
                                "latency_s": Math.round((new Date().getTime() - startMs) / 1000.0)
                            });
                            if (done instanceof Function) {
                                wait(1000).then(function () {
                                    done({
                                        "downloadIds": downloadIds
                                    });
                                });
                            }
                        }
                    });
                } else {
                    ga.trackEventGA4("msg_dl_null", {
                        "domain": context.host
                    });
                }
            });
        }

        wait(15000)
            .then(() => {
                if (count < images.length) {
                    ga.trackEventGA4("msg_dl_incomp", {
                        "count": images.length,
                        "latency_s": 15
                    })
                    every(2000)
                        .then(() => {
                            const sec = Math.round((new Date().getTime() - startMs) / 1000.0);
                            if (count === images.length) {
                                ga.trackEventGA4("msg_dl_comp", {
                                    "domain": context.host,
                                    "count": images.length,
                                    "latency_s": sec
                                })
                                return true;
                            } else {
                                if (sec >= 40) {
                                    ga.trackEventGA4("msg_dl_incomp", {
                                        "count": images.length,
                                        "latency_s": sec
                                    });
                                    return true;
                                }
                            }
                        });
                }
            });
    }
}

/**
 * Similar to {@link downloadWithMsg} but download sequentially.
 * @param chrome
 * @param job.context {{tabId:number, folder:string, host:string}}
 * @param job.images {any[]}
 // * @param done {function():void} is called when all downloads are initiated in Chrome.
 * @return Promise
 */
function downloadWithMsgSeq(chrome, job) {
    const context = job.context;
    const images = job.images;
    if (images.length > 0) {
        let count = 0;
        let startMs = new Date().getTime();
        logger.debug("downloadWithMsgSeq images.length=", images.length);
        ga.trackEventGA4("msg_dl_start", {
            "domain": context.host,
            "count": images.length
        });

        for (const image of images) {
            getImageUrlFromContentScriptInSeq(image, context, (imageFromResp) => {
                const completed = ++count === images.length;
                if (imageFromResp) {
                    download(chrome, imageFromResp, () => {
                        if (completed) {
                            ga.trackEventGA4("msg_dl_comp", {
                                "domain": context.host,
                                "count": images.length,
                                "latency_s": Math.round((new Date().getTime() - startMs) / 1000.0)
                            });
                        }
                    });
                } else {
                    ga.trackEventGA4("msg_dl_null", {
                        "domain": context.host
                    });
                }
            }, 0);
        }
    }
}

/**
 * Register chrome download change listener that retries on failed download with the first url from retries array.
 */
function listenForDownloadFailureAndRetry() {
    // listen for download failure and retry if possible
    chrome.downloads.onChanged.addListener(function (downloadDelta) {
        if (downloadDelta && downloadDelta.state) {
            logger.debug("event=onchange downloadId=",downloadDelta.id, "state=", downloadDelta.state, "error=", downloadDelta.error);
            if (downloadDelta.state.previous === "in_progress" && (downloadDelta.state.current === "complete" || downloadDelta.state.current === "interrupted")) {
                // retry if exists
                if (downloadDelta.state.current === "interrupted" &&
                    (downloadDelta.error.current === CHROME_ERROR_SERVER_BAD_CONTENT ||
                        downloadDelta.error.current === CHROME_ERROR_SERVER_FORBIDDEN)
                ) {
                    if (retryMap[downloadDelta.id]) {
                        let image = retryMap[downloadDelta.id];
                        delete retryMap[downloadDelta.id];
                        logger.debug("event=retry downloadId=" + downloadDelta.id + " url=" + image.url + " retryUrl=" + image.retries[0]);
                        image.url = image.retries.shift();
                        download(chrome, image); // retry download from retryMap
                    }
                } else if (downloadDelta.state.current === "interrupted" && downloadDelta.error.current === CHROME_ERROR_USER_CANCELED) {
                    // no retry. check for USER_CANCELED error
                    errorMap[downloadDelta.id] = CHROME_ERROR_USER_CANCELED;
                }
            }
        }
    });

    // listen for tab updates and inject content scripts
    chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
        if (tabIdOnUpdatedFunctionMap[tabId] != null && changeInfo.status === "complete") {
            logger.debug("Tab updated tabId=", tabId);
            const f = tabIdOnUpdatedFunctionMap[tabId];
            f();
        }
    });
}

/**
 * Register listener to fix download filename. For example, enforce .m4a if Chrome tries to rename to .mp4
 * Also to mitigate Chromium bug https://issues.chromium.org/issues/40146766. 
 * In this bug ANY extension which registered an `onDeterminingFilename` event listener 
 * will impact downloads initiated by ALL other extenstions. For MID this causes the custom subfolder to be ignored.
 */
function listenForOnDeterminingFilename() {
    // track filename renames
    chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
        if (downloadItem.byExtensionId !== EXTENSION_ID) {
            return; // be a good citizen don't change the names of downloads initiated by other Exts.
            // however, this is still impacting other extensions because of Chromium bug.
        }

        if (downloadIdToFolderFilenameMap[downloadItem.id]) {
            const folderFilename = downloadIdToFolderFilenameMap[downloadItem.id];
            delete downloadIdToFolderFilenameMap[downloadItem.id]; // cleanup
            logger.debug("func=listenForOnDeterminingFilename downloadItem.id=", downloadItem.id, 
                "downloadItem.mime=", downloadItem.mime,
                "folderFilename=", folderFilename, "downloadItem.filename=", downloadItem.filename
            );
            // rename to m4a if Chrome had changed to mp4
            if (utils.getFileExt(downloadItem.filename) === "mp4" && utils.getFileExt(folderFilename) === "m4a") {
                logger.debug("func=listenForOnDeterminingFilename suggest=", folderFilename)
                suggest({ filename: folderFilename });
                return;
            }

            // fix folder path
            logger.debug("func=listenForOnDeterminingFilename suggest=", folderFilename)
            suggest({ filename: folderFilename });
        }
    });
}

/**
 * Sends jobs to service worker for download. When failed, fall back to download in popup.js.
 * This is for job type "msg", "msg_seq", and "reg"
 * @param chrome
 * @param job {{images: [{url: "", folder: "abc/", ext: "jpg"}], type : "msg"|"reg", context: {}}}
 * @param resolve Invoked when all download jobs are started (not necessarily finished)
 */
function downloadInBackgroundOrPopup(job, resolve) {
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
                                ga.trackEventGA4("retry_popup_download");
                                logger.debug("userCanceledCount=", queryResp["userCanceledCount"], " restarting download in popup");
                                downloadJob(job, () => {
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

function downloadWithNewTab(chrome, image, context) {
    if (image.url) {
        context.p = context.p.then(function () {
            return new Promise(function (resolve) {
                logger.debug("event=creating_new_tab totalCount=", context.totalCount,
                    "finishCount=",  context.finishCount);
                displayInNewTab(image.websiteUrl, image.websiteCS, image.retries, function (result) {
                    logger.debug("event=created_new_tab totalCount=", context.totalCount,
                        "finishCount=",  context.finishCount,
                        "websiteUrl=", image.websiteUrl,
                        "result=", result
                    );
                    
                    // download in background.js with single image job
                    downloadInBackgroundOrPopup(
                        {
                            context,
                            images: [{
                                url: result && result.images[0] && result.images[0].url || image.url,
                                folder: context.folder,
                                jobId: image.jobId,
                                context: context,
                                filename: image.filename
                            }],
                            type: "reg"
                        },
                        // TODO error is not counted correctly
                        () => {
                            context.finishCount++;
                            if (context.finishCount === context.totalCount) {
                                if (context.errorCount > 0) {
                                    ga.trackEventGA4("tab_dl_failure", {
                                        "domain": context.host,
                                        "count": context.errorCount
                                    });
                                }

                                if (context.finishCount > context.errorCount) {
                                    ga.trackEventGA4("tab_dl_success", {
                                        "domain": context.host,
                                        "count": context.finishCount - context.errorCount
                                    });
                                }
                            }
                            resolve();
                        }
                    );
                });
            });
        });
    }
}

/**
 * 1) First load url in a new tab. 
 * 2) Then inject the JS file named by `injectCS` as content script into the new tab if `injectCS` is given.
 * 3) Pass the result from `injectCS` to `resolve` function. If `injectCS` is null, `resolve` is called with undefined.
 * @param {*} tabId 
 * @param {*} url 
 * @param {*} injectCS 
 * @param {*} retries 
 * @param {*} resolve 
 */
function displayInNewTab(url, injectCS, retries, resolve) {
    logger.debug("Display in tab url=", url, "injectCS=", injectCS, "retries=", retries);
    chrome.tabs.create({
        url: url,
        active: false
    }, (newTab) => {
        logger.debug("Created newTab=", newTab);
        tabIdOnUpdatedFunctionMap[newTab.id] = function () {
            function closeTab(callback) {
                delete tabIdOnUpdatedFunctionMap[newTab.id];
                chrome.tabs.remove(newTab.id, callback);
            }

            if (injectCS) {
                logger.debug("Executing script",  injectCS, "on tabId", newTab.id);
                chrome.scripting.executeScript(
                    {
                        target: {"tabId": newTab.id},
                        files: [injectCS]
                    },
                    function (results) {
                        if (results && results.length > 0) {
                            logger.debug("Script results[0]=",  results[0]);
                            const result = results[0].result;
                            if (result.images && result.images.length > 0) {
                                closeTab(() => {
                                    resolve(result);
                                });
                            } else if (!result.supported && retries && retries.length > 0) {
                                const retryUrl = retries.shift().websiteUrl;
                                closeTab(() => {
                                    displayInNewTab(retryUrl, injectCS, retries, resolve)
                                });
                            }
                        } else {
                            closeTab(() => {
                                resolve();
                            });
                        }
                    });
            } else {
                closeTab(() => {
                    resolve();
                });
            }
        };
    });
}

/**
 * Entry function for background.js to download images.
 * Although popup.js calls this function directly if all downloads were cancelled by user error (bug in Chrome)
 */
function downloadJob(job, sendResponse) {
    logger.debug("Received " + job.images.length + " jobs");
    logger.debug("Clearing retryMap and errorMap");
    utils.clearObjectProperties(retryMap);
    utils.clearObjectProperties(errorMap);
    if (job.type === "msg") {
        downloadWithMsg(chrome, job.context, job.images, sendResponse);
    } else if (job.type === "msg_seq") {
        downloadWithMsgSeq(chrome, job).then(() => sendResponse());
    } else {
        let count = 0;
        let downloadIds = [];
        for (const image of job.images) {
            image.context = image.context || job.context;
            download(chrome, image, function (downloadId) {
                logger.debug("Started job #" + count);
                downloadIds.push(downloadId);
                if (++count === job.images.length) {
                    sendResponse({
                        "downloadIds": downloadIds
                    });
                }
            });
        }
    }
}

function queryUserCanceledCount() {
    let c = 0;
    for (let e of Object.entries(errorMap)) {
        if (e[1] === CHROME_ERROR_USER_CANCELED) {
            c++;
        }
    }

    return c;
}

/**
 * Helper function to send message to content script to get image url. (for download type "msg" and "msg_seq").
 * Once url is loaded from response of messaging, image.url is set and image.loaded is set to true to prevent loading again.
 * 
 * @param {*} image 
 * @param {*} context 
 * @param {*} callback 
 */
function getImageUrlFromContentScriptIfNotLoaded(image, context, callback) {
    if (image.loaded) {
        logger.debug("func=getImageUrlFromContentScriptIfNotLoaded image already loaded image=", image);
        callback?.(image);
        return;
    }

    image.loading = true;
    messaging.sendToCS(context.tabId, "getImageUrl", image, function (imageFromResp) {
        if (imageFromResp && imageFromResp.url) {
            image.loaded = true;
            image.loading = false;
            image.url = imageFromResp.url;
            logger.debug("func=getImageUrlFromContentScriptIfNotLoaded successfully loaded image=", image);
            callback?.(image);
        } else {
            logger.error("func=getImageUrlFromContentScriptIfNotLoaded error getting image url imageFromResp=", imageFromResp);
            // call callback with undefined to indicate failure
            callback?.();
        }
    });
}

let getImageUrlPromise = null;
/**
 * Same as `getImageUrlFromContentScriptIfNotLoaded()` but loads urls in sequence if there is another loading in progress.
 * @param {*} image 
 * @param {*} context 
 * @param {*} callback 
 * @param {number} delayMs defaults to 500
 */
function getImageUrlFromContentScriptInSeq(image, context, callback, delayMs = 500) {
    if (image.loaded) {
        logger.debug("func=getImageUrlFromContentScriptInSeq image already loaded image=", image);
        callback?.(image);
        return;
    }

    image.loading = true;

    if (getImageUrlPromise == null) {
        getImageUrlPromise = Promise.resolve();
    }

    // Capture the "tail" promise we are chaining onto
    const prev = getImageUrlPromise;
    // Create the next link in the chain
    const next = prev
        .then(() => (delayMs > 0 ? wait(delayMs) : null))
        .then(() => {
            // Wrap the callback-style API into a Promise so chaining works
            return new Promise((resolve) => {
                getImageUrlFromContentScriptIfNotLoaded(image, context, (imageFromResp) => {
                    callback?.(imageFromResp);
                    resolve();
                });
            });
        })
        .finally(() => {
            // Only clear if no one else has appended after us
            if (getImageUrlPromise === next) {
                getImageUrlPromise = null;
            }
        });

    // Update global tail
    getImageUrlPromise = next;

    // Return the promise so callers can await/then if they want
    return next;
}

module.exports = {
    listenForDownloadFailureAndRetry,
    downloadWithNewTab,
    downloadJob,
    queryUserCanceledCount,
    getFolderFilename,
    listenForOnDeterminingFilename,
    getImageUrlFromContentScriptIfNotLoaded,
    getImageUrlFromContentScriptInSeq,
    downloadInBackgroundOrPopup,
    CHROME_ERROR_USER_CANCELED
}
