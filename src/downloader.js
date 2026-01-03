const messaging = require("./messaging");
const { wait, every, continueIfTimeout } = require("./utils/async-utils");
const utils = require("./utils");
const { getGA4UID } = require("./ga/ga4-uid");
const ga = require("./google-analytics");
const chrome = require("./globals").getChrome();
const logger = require("./logger2")(module.id);

const CHROME_ERROR_SERVER_BAD_CONTENT = "SERVER_BAD_CONTENT";
const CHROME_ERROR_SERVER_FORBIDDEN = "SERVER_FORBIDDEN";
const EXTENSION_ID = require("./runtime").getExtensionID();

const retryMap = {}; // for keeping retry urls
const onDownloadCompleteOrFailureMap = {}; // downloadId => [onComplete callback, onFailure callback] when download is completed
const tabIdOnUpdatedFunctionMap = {}; // tabId => function
const downloadIdToFolderFilenameMap = {}; // downloadId => original folderFilename. used to fix download filename
const ongoingDownloads = new Set();

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
 * @param callbackFuncOrFuncMap
 */
function download(chrome, image, callbackFuncOrFuncMap) {
    const folderFilename = image.folderFilename ?? getFolderFilename(image);
    const headers = image.context?.headers ?? [];
    const callbacks = typeof callbackFuncOrFuncMap === "function" ? {
        onDownloadId: callbackFuncOrFuncMap // old style callback only collects download id
    } : {
        // allow different callback at different stages
        // supports map {} or []
        onDownloadId: callbackFuncOrFuncMap?.onDownloadId,
        onComplete: callbackFuncOrFuncMap?.onComplete,
        onFailure: callbackFuncOrFuncMap?.onFailure
    };

    // Add unique id
    ongoingDownloads.add(image.url);

    // register download lifecycle listeners
    listenOnceForDownloadLifeCycles();

    const tearDownListenersIfDone = (url) => {
        if (ongoingDownloads.has(url)) {
            ongoingDownloads.delete(url);
        }

        // tear down when there is no more onging download
        if (ongoingDownloads.size === 0) {
            tearDownListenersForDownloadLifeCycles();
            // clean up maps
            utils.clearObjectProperties(retryMap);
            utils.clearObjectProperties(onDownloadCompleteOrFailureMap);
            utils.clearObjectProperties(downloadIdToFolderFilenameMap);
        }
    }

    logger.debug("func=download image=", image, "folderFilename=", folderFilename, "headers=", headers, "callbacks=", callbacks);

    try {
        chrome.downloads.download(
            {
                url: image.url,
                saveAs: false,
                method: "GET",
                filename: folderFilename,
                headers: headers
            }, function (downloadId) {
                logger.debug("[onDownloadId] downloadId=", downloadId, "folderFilename=", folderFilename);

                if (downloadId && image.retries && image.retries.length > 0) {
                    retryMap[downloadId] = image;
                }

                // setup callbacks if downloadId exists
                if (downloadId) {
                    // onDeterminingFilename
                    downloadIdToFolderFilenameMap[downloadId] = folderFilename;

                    // for onComplete, onFailure
                    onDownloadCompleteOrFailureMap[downloadId] = [(downloadDelta) => {
                        logger.debug("[onComplete] downloadId=", downloadId, "downloadDelta=", downloadDelta);
                        if (typeof callbacks.onComplete === "function") {
                            callbacks.onComplete(downloadId, downloadDelta);
                        }

                        // done if there is no other download
                        tearDownListenersIfDone(image.url);

                    }, (downloadDelta) => {
                        logger.error("[onFailure] downloadId=", downloadId, "error=", downloadDelta?.error, "downloadDelta=", downloadDelta);
                        if (typeof callbacks.onFailure === "function") {
                            callbacks.onFailure(downloadId, downloadDelta);
                        }

                        tearDownListenersIfDone(image.url);
                    }];

                    // handle extremely rare case where the download finishes before the onComplete/onFailure callback are attached to map
                    chrome.downloads.search({ id: downloadId }, (items) => {
                        const item = items && items[0];
                        if (!item) return;
                        if (item.state === "complete" || item.state === "interrupted") {
                            // running the callbacks removes from map
                            // if the callbacks are still attached, we do it here
                            const callbackArray = onDownloadCompleteOrFailureMap[downloadId];
                            if (!callbackArray) return;


                            delete onDownloadCompleteOrFailureMap[downloadId];
                            const syntheticDelta = {
                                id: downloadId,
                                state: { current: item.state },
                                error: item.state === "interrupted" ? { current: item.error } : undefined
                            };
                            if (item.state === "complete" && typeof callbackArray[0] === "function") {
                                logger.warn("[onComplete in search] downloadId=", downloadId);
                                callbackArray[0](syntheticDelta);
                            }
                            if (item.state === "interrupted" && typeof callbackArray[1] === "function") {
                                logger.warn("[onFailure in search] downloadId=", downloadId);
                                callbackArray[1](syntheticDelta);
                            }
                        }
                    });
                } else {
                    logger.error("Download failed to start error=", chrome.runtime.lastError?.message);
                    // download Id was not created
                    if (typeof callbacks.onFailure === "function") {
                        callbacks.onFailure();
                    }
                    // done if there is no other download
                    tearDownListenersIfDone(image.url);
                }

                if (typeof callbacks.onDownloadId === "function") {
                    callbacks.onDownloadId(downloadId); // downloadId can be undefined, which means failed to create a download id
                }
            });
    } catch (e) {
        // something went wrong with calling the API
        logger.error("[onFailure] Error calling chrome.downloads.download() error=", e);
        if (typeof callbacks.onFailure === "function") {
            callbacks.onFailure();
        }
        tearDownListenersIfDone(image.url);
    }

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
            getImageUrlFromContentScriptIfNotLoaded(image, context, function (imageFromResp) {
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
                                wait(300).then(function () {
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
    const downloadIds = [];
    return new Promise(function (resolve) {
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
                        download(chrome, imageFromResp, (downloadId) => {
                            downloadIds.push(download);
                            if (completed) {
                                ga.trackEventGA4("msg_dl_comp", {
                                    "domain": context.host,
                                    "count": images.length,
                                    "latency_s": Math.round((new Date().getTime() - startMs) / 1000.0)
                                });
                                resolve({ downloadIds });
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
                            resolve({ downloadIds });
                        }
                    }
                }, 0);
            }
        } else {
            resolve({ downloadIds });
        }
    });
}

/**
 * Listener for chrome.downloads.onChanged.
 * Re-attempt download with the first url from retries array.
 * @param {*} downloadDelta 
 */
const onChangedListener = (downloadDelta) => {
    const downloadId = downloadDelta?.id;
    if (downloadId && downloadDelta.state && (retryMap[downloadId] || onDownloadCompleteOrFailureMap[downloadId])) {
        logger.debug("[downloads.onChanged] downloadId=", downloadDelta.id, "state=", downloadDelta.state.current, "downloadDelta=", downloadDelta);
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
            }

            // run complete/failture callback if any
            const callbackArray = onDownloadCompleteOrFailureMap[downloadDelta.id];
            delete onDownloadCompleteOrFailureMap[downloadDelta.id];
            if (downloadDelta.state.current === "complete" && typeof callbackArray?.[0] === "function") {
                callbackArray[0](downloadDelta);
            } else if (downloadDelta.state.current === "interrupted" && typeof callbackArray?.[1] === "function") {
                callbackArray[1](downloadDelta);
            }
        }
    }
};

/**
 * Listener for chrome.tabs.onUpdated
 * @param {*} tabId 
 * @param {*} changeInfo 
 * @param {*} tab 
 * @returns 
 */
const onUpdatedListener = (tabId, changeInfo, tab) => {
    if (changeInfo.status !== "complete") return;

    const f = tabIdOnUpdatedFunctionMap[tabId]; // don't delete the callback yet. might need for retry
    if (typeof f !== "function") return;

    logger.debug("[tabs.onUpdated] Tab finished update tabId=", tabId, "url=", tab?.url);
    try {
        f();
    } catch (e) {
        logger.error("[tabs.onUpdated] Tab onUpdated handler threw tabId=" + tabId, e);
    }
};

/**
 * Listener for chrome.downloads.onDeterminingFilename.
 * @param {*} downloadItem 
 * @param {*} suggest 
 * @returns 
 */
const onDeterminingFilenameListener = (downloadItem, suggest) => {
    if (downloadItem.byExtensionId !== EXTENSION_ID) {
        return; // be a good citizen don't change the names of downloads initiated by other Exts.
        // however, this is still impacting other extensions because of Chromium bug.
    }

    if (downloadIdToFolderFilenameMap[downloadItem.id]) {
        const folderFilename = downloadIdToFolderFilenameMap[downloadItem.id];
        delete downloadIdToFolderFilenameMap[downloadItem.id]; // cleanup
        logger.debug("[onDeterminingFilename] downloadItem.id=", downloadItem.id,
            "downloadItem.mime=", downloadItem.mime, "suggest = ", folderFilename,
            "folderFilename=", folderFilename, "downloadItem.filename=", downloadItem.filename
        );

        // fix folder path
        suggest({ filename: folderFilename });
    }
}

/**
 * Register listeners for chrome.downloads.{onDeterminingFilename, and onChanged}, and 
 * 
 * onDeterminingFilename:
 * Register listener to fix download filename.
 * Also to mitigate Chromium bug https://issues.chromium.org/issues/40146766. 
 * In this bug ANY extension which registered an `onDeterminingFilename` event listener 
 * will impact downloads initiated by ALL other extenstions. For MID this causes the custom subfolder to be ignored.
 * 
 */
function listenOnceForDownloadLifeCycles() {
    if (!chrome.downloads.onDeterminingFilename.hasListener(onDeterminingFilenameListener)) {
        logger.debug("Adding listener on chrome.downloads.onDeterminingFilename");
        chrome.downloads.onDeterminingFilename.addListener(onDeterminingFilenameListener);
    }

    if (!chrome.downloads.onChanged.hasListener(onChangedListener)) {
        logger.debug("Adding listener on chrome.downloads.onChanged");
        chrome.downloads.onChanged.addListener(onChangedListener);
    }
}

function tearDownListenersForDownloadLifeCycles() {
    if (chrome.downloads.onDeterminingFilename.hasListener(onDeterminingFilenameListener)) {
        logger.debug("Removing listener on chrome.downloads.onDeterminingFilename");
        chrome.downloads.onDeterminingFilename.removeListener(onDeterminingFilenameListener);
    }

    if (chrome.downloads.onChanged.hasListener(onChangedListener)) {
        logger.debug("Removing listener on chrome.downloads.onChanged");
        chrome.downloads.onChanged.removeListener(onChangedListener);
    }
}

/**
 *  Register listener chrome.tabs.onUpdated.
 */
function listenOnceForTabsOnUpdated() {
    if (!chrome.tabs.onUpdated.hasListener(onUpdatedListener)) {
        logger.debug("Adding listener on chrome.tabs.onUpdated");
        chrome.tabs.onUpdated.addListener(onUpdatedListener);
    }
}

function tearDownListenerForTabsOnUpdated() {
    if (chrome.tabs.onUpdated.hasListener(onUpdatedListener)) {
        logger.debug("Removing listener on chrome.tabs.onUpdated");
        chrome.tabs.onUpdated.removeListener(onUpdatedListener);
    }
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
        logger.debug("Done: " + (downloadResp?.length ?? 0) + "/" + job.images.length + " images", "resp=", downloadResp);
        // TODO remove. bug is now fixed
        // Due to Chrome bug 1345528 https://bugs.chromium.org/p/chromium/issues/detail?id=1345528
        // check for USER_CANCELED error and retry download from popup
        if (typeof resolve === "function") {
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

    // register listener for tabs.
    listenOnceForTabsOnUpdated();

    return createTab()
        .then((id) => {
            tabId = id;
            // download image one by one
            return job.images.reduce(
                (p, img) => p.then(() => downloadWithNewTab(id, img, context)),
                Promise.resolve()
            );
        }).finally(() => {
            tearDownListenerForTabsOnUpdated();
            utils.clearObjectProperties(tabIdOnUpdatedFunctionMap);

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
        const { websiteCS, retries } = image;
        let websiteUrl = image.websiteUrl; // can change for retry

        // if there is no websiteUrl to load, log and move on
        if (!websiteUrl) {
            logger.error("Missing websiteUrl in image=", image);
            return resolve();
        }

        function cleanup() {
            // cleanup
            if (tabIdOnUpdatedFunctionMap[tabId] === callback) {
                delete tabIdOnUpdatedFunctionMap[tabId];
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

            logger.debug("Executing script", websiteCS, "on tabId=", tabId);
            chrome.scripting.executeScript({ target: { tabId }, files: [websiteCS] }, results => {
                if (results?.[0]?.result?.href === websiteUrl) {
                    // this is the result of the redirectPage and is ignored
                    logger.debug("Scripting results from redirect page result=", results?.[0]?.result);
                    return;
                }

                const result = results?.[0]?.result;
                logger.debug("Scripting image=", result?.images?.[0], "result=", result);

                if (result?.images?.length) {
                    return finish({ o: result, image });
                } else if (retries?.length) {
                    // try again if retries is defined
                    const next = retries.shift();
                    websiteUrl = next.websiteUrl;
                    return chrome.tabs.update(tabId, { url: websiteUrl });
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

    // reset image.loading flag if present
    job.images.forEach(image => {
        if (image.loading === true) {
            image.loading = false;
        }
    });

    switch (job.type) {
        case "msg":
            return downloadWithMsg(job.context, job.images, sendResponse);
        case "msg_seq":
            return downloadWithMsgSeq(job).then(sendResponse);
        case "tab":
            return downloadJobWithTab(job).then(sendResponse);
        default:
            return downloadRegJob(job).then(sendResponse);
    }
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
            // image.url = imageFromResp.url;
            Object.assign(image, imageFromResp);
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
    downloadJob,
    getFolderFilename,
    getImageUrlFromContentScriptIfNotLoaded,
    getImageUrlFromContentScriptInSeq,
    downloadInBackgroundFallbackInPopup
}
