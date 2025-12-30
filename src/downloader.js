const messaging = require("./messaging");
const { wait, every, continueIfTimeout } = require("./utils/async-utils");
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

function downloadRegJob(job) {
    let count = 0;
    const downloadIds = [];
    return new Promise((resolve) => {
        for (const image of job.images) {
            image.context ??= job.context;
            download(chrome, image, function (downloadId) {
                logger.debug("Started job #" + count);
                downloadIds.push(downloadId);
                if (++count === job.images.length) {
                    resolve({
                        downloadIds
                    });
                }
            });
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
function downloadWithMsg(context, images, done) {
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
function downloadWithMsgSeq(job) {
    const context = job.context;
    const images = job.images;
    return new Promise(function(resolve) {
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
                                resolve();
                            }
                        });
                    } else {
                        ga.trackEventGA4("msg_dl_null", {
                            "domain": context.host
                        });
                        if (completed) {
                            ga.trackEventGA4("msg_dl_comp", {
                                "domain": context.host,
                                "count": images.length,
                                "latency_s": Math.round((new Date().getTime() - startMs) / 1000.0)
                            });
                            resolve();
                        }
                    }
                }, 0);
            }
        } else {
            resolve();
        }
    });
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
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status !== "complete") return;

        const f = tabIdOnUpdatedFunctionMap[tabId];
        if (typeof f !== "function") return;

        logger.debug("Tab finished update tabId=", tabId, "url=", tab?.url);
        try {
            f();
        } catch (e) {
            logger.error("Tab onUpdated handler threw tabId=" + tabId, e);
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
 * This is for job type "msg", "msg_seq", "tab", and "reg"
 * @param chrome
 * @param job {{images: [{url: "", folder: "abc/", ext: "jpg"}], type : "msg"|"msg_seq"|"tab"|"reg", context: {}}}
 * @param resolve Invoked when all download jobs are started (not necessarily finished)
 */
function downloadInBackgroundFallbackInPopup(job, resolve) {
    // pass user id to background.js
    const userId = getGA4UID();
    if (userId) {
        job["userId"] = userId;
    }

    messaging.sendToRuntime("download", job, function (downloadResp) {
        logger.debug("Done: " + job.images.length + " images", "resp=", downloadResp);
        // Due to Chrome bug 1345528 https://bugs.chromium.org/p/chromium/issues/detail?id=1345528
        // check for USER_CANCELED error and retry download from popup
        if (downloadResp?.["downloadIds"]?.length > 0) {
            // if all download ids are null, retry with original folder path, in case the folder path is broken
            if (downloadResp["downloadIds"].every(val => val == null)) {
                job.context.folder = job.context.originalFolder;
                messaging.sendToRuntime("download", job); // not listening for the response
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

/**
 * Creates a new tab with the url if given. Otherwise "about:blank" page is used.
 * @returns {Promise} A Promise resolves to the tab id.
 */
function createTab(url) {
    return new Promise((resolve, reject) => {
        chrome.tabs.create({ url: url ?? "about:blank", active: false }, tab => {
            if (chrome.runtime.lastError) {
                logger.error("Failed to create new tab newTab=", newTab, "error=", chrome.runtime.lastError.message);
                return reject(new Error(chrome.runtime.lastError.message));
            }
            resolve(tab.id);
        });
    });
}

function downloadJobWithTab(job) {
    ga.trackEventGA4("tab_dl_start", {
        "domain": job.context.host,
        "count": job.images.length
    });

    const context = job.context;
    let tabId = null;

    return createTab()
        .then((id) => {
            tabId = id;
            // download image one by one
            return job.images.reduce(
                (p, img) => p.then(() => downloadWithNewTab(id, img, context)),
                Promise.resolve()
            );
        })
        .finally(() => {
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

            if (tabId) {
                delete tabIdOnUpdatedFunctionMap[tabId];
                // close tab
                return new Promise((resolve) => {
                    chrome.tabs.remove(tabId, () => resolve());
                });
            }
        });
}

function downloadWithNewTab(tabId, image, context) {
    return new Promise((resolve) => {
        const { websiteCS, websiteUrl, retries } = image;

        // if there is no websiteUrl to load, log and move on
        if (!websiteUrl) {
            logger.error("Missing websiteUrl in image=", image);
            return resolve();
        }

        function cleanup() {
            // cleanup
            if (tabIdOnUpdatedFunctionMap[tabId] === callback) {
                tabIdOnUpdatedFunctionMap[tabId] = null;
            }
        }

        let done = false;
        function finish(value) {
            if (done) return;
            done = true;
            cleanup();
            resolve(value);
        }

        function callback() {
            if (!websiteCS) {
                logger.debug("No script on tab", tabId, "moving on");
                return finish();
            }

            logger.debug("Executing script", websiteCS, "on tab", tabId);
            chrome.scripting.executeScript({ target: { tabId }, files: [websiteCS] }, results => {
                if (results?.[0]?.result?.href === websiteUrl) {
                    // this is the result of the redirectPage and is ignored
                    logger.debug("Scripting results from redirect page results=", results);
                    return;
                }

                const result = results?.[0]?.result;
                logger.debug("Scripting results=", results);

                if (result?.images?.length) {
                    return finish({ o: result, image });
                } else if (retries?.length) {
                    // try again if retries is defined
                    const next = retries.shift();
                    return chrome.tabs.update(tabId, { url: next.websiteUrl });
                }

                return finish();
            });
        };
        tabIdOnUpdatedFunctionMap[tabId] = callback;
        // load website url
        chrome.tabs.update(tabId, { url: websiteUrl });
        // just in case if page does not load with in 10s
        // cleanup and move on
        wait(10 * 1000).then(() => {
            finish();
        });
    }).then(({ o, image } = {}) => {
        if (!o?.images?.[0]?.url) return;
        return new Promise((resolve) => {
            download(chrome, {
                url: o.images[0].url,
                folder: image.context.folder,
                jobId: image.jobId,
                context: image.context,
                filename: image.filename
            }, (downloadId) => {
                if (!downloadId) {
                    context.errorCount++;
                }
                context.finishCount++;
                resolve(downloadId);
            });
        });
    });
}

/**
 * Entry function for background.js to download images.
 * Although popup.js calls this function directly if all downloads were cancelled by user error (bug in Chrome)
 */
function downloadJob(job, sendResponse) {
    logger.debug("Received " + job.images.length + " images job=", job);
    logger.debug("Clearing retryMap and errorMap");
    utils.clearObjectProperties(retryMap);
    utils.clearObjectProperties(errorMap);

    // reset image.loading flag if present
    job.images.forEach(image => {
        if (image.loading === true) {
            image.loading = false;
        }
    });

    switch(job.type) {
        case "msg":
            return downloadWithMsg(job.context, job.images, sendResponse);
        case "msg_seq":
            return downloadWithMsgSeq(job).then(() => sendResponse());
        case "tab":
            return downloadJobWithTab(job).then(() => sendResponse());
        default:
            return downloadRegJob(job).then((resp) => sendResponse(resp));
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
            return continueIfTimeout(
                // Wrap the callback-style API into a Promise so chaining works
                new Promise((resolve) => {
                getImageUrlFromContentScriptIfNotLoaded(image, context, (imageFromResp) => {
                    callback?.(imageFromResp);
                    resolve();
                });
            }), 500); // TODO retry upon timeout
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
    downloadJob,
    queryUserCanceledCount,
    getFolderFilename,
    listenForOnDeterminingFilename,
    getImageUrlFromContentScriptIfNotLoaded,
    getImageUrlFromContentScriptInSeq,
    downloadInBackgroundFallbackInPopup,
    CHROME_ERROR_USER_CANCELED
}
