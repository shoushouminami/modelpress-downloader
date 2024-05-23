const messaging = require("./messaging");
const {wait, every} = require("./utils/async-utils");
const utils = require("./utils");
const retryMap = {}; // for keeping retry urls
const errorMap = {}; // for keeping USER_CANCELED errors; downloadId => error
const tabIdOnUpdatedFunctionMap = {}; // tabId => function
const ga = require("./google-analytics");
const chrome = require("./globals").getChrome();
const logger = require("./logger2")(module.id);
const CHROME_ERROR_USER_CANCELED = "USER_CANCELED";
const CHROME_ERROR_SERVER_BAD_CONTENT = "SERVER_BAD_CONTENT";
const CHROME_ERROR_SERVER_FORBIDDEN = "SERVER_FORBIDDEN";
/**
 * @param image {{context: {folder: "", ext: ""}, url: "", filename: "", folder: "abc/", ext: "jpg", jobId: 123}}
 */
function getFilename(image) {
    return decodeURI(image.context.folder)
        + (image.context.folder.endsWith("/") ? "" : "/")
        + (image.jobId != null ?  image.jobId + "-" : "")
        + utils.getFileName(image.url, image.context.ext, image.filename);
}

/**
 * Use Chrome API to download the given image
 * @param chrome
 * @param image {{url: "", folder: "abc/", ext: "jpg", jobId: 123}}
 * @param resolve
 */
function download(chrome, image, resolve) {
    chrome.downloads.download(
        {
            url: image.url,
            saveAs: false,
            method: "GET",
            filename: getFilename(image),
            headers: image.context && image.context.headers || []
        }, function (downloadId) {
            logger.debug("downloadId=" + downloadId);
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
        ga.trackEvent("msg_download", "start", context.host, images.length);
        ga.trackEventGA4("msg_dl_start", {
            "domain": context.host,
            "count": images.length
        });
        for (const image of images) {
            // logger.debug("sending getImageUrl message to cs filename=", image.filename);
            messaging.sendToCS(context.tabId, "getImageUrl", image, function (imageWithUrl) {
                // logger.debug("received getImageUrl message filename=", image.filename, " imageWithUrl=",
                //     imageWithUrl);
                let completed = ++count === images.length;
                let downloadIds = [];
                if (imageWithUrl && imageWithUrl.url) {
                    imageWithUrl.context = context;
                    imageWithUrl.jobId = image.jobId;
                    // logger.debug("downloading filename=", image.filename);
                    download(chrome, imageWithUrl, function (downloadId) {
                        downloadIds.push(downloadId);
                        if (completed) {
                            // logger.debug("downloadWithMsg done count=", count);
                            ga.trackEvent("msg_download",
                                "comp",
                                context.host,
                                images.length);
                            ga.trackEvent("msg_download",
                                "comp_latency_s",
                                context.host,
                                Math.round((new Date().getTime() - startMs) / 1000.0));
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
                    ga.trackEvent("msg_download", "null", context.host, 1);
                    ga.trackEventGA4("msg_dl_null", {
                        "domain": context.host
                    });
                }
            })
        }

        wait(15000)
            .then(() => {
                if (count < images.length) {
                    ga.trackEvent("msg_download", "incomp_15s", context.host, images.length);
                    ga.trackEventGA4("msg_dl_incomp", {
                        "count": images.length,
                        "latency_s": 15
                    })
                    every(2000)
                        .then(() => {
                            const sec = Math.round((new Date().getTime() - startMs) / 1000.0);
                            if (count === images.length) {
                                ga.trackEvent("msg_download",
                                    "comp_" + sec + "s",
                                    context.host,
                                    images.length);
                                ga.trackEventGA4("msg_dl_comp", {
                                    "domain": context.host,
                                    "count": images.length,
                                    "latency_s": sec
                                })
                                return true;
                            } else {
                                if (sec >= 40) {
                                    ga.trackEvent("msg_download",
                                        "incomp_40s",
                                        context.host,
                                        images.length);
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
 * Register chrome download change listener that retries on failed download with the first url from retries array.
 */
function listenForDownloadFailureAndRetry() {
    // listen for download failure and retry if possible
    chrome.downloads.onChanged.addListener(function (downloadDelta) {
        if (downloadDelta && downloadDelta.state) {
            logger.debug("e=onchange downloadId=",downloadDelta.id, "state=", downloadDelta.state, "error=", downloadDelta.error);
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

function downloadWithNewTab(chrome, image, context, tabId) {
    if (image.websiteUrl) {
        context.p = context.p.then(function () {
            return new Promise(function (resolve) {
                logger.debug("event=creating_new_tab totalCount=", context.totalCount,
                    "finishCount=",  context.finishCount);
                displayInNewTab(tabId, image.websiteUrl, image.websiteCS, image.retries,function (result) {
                    logger.debug("event=created_new_tab totalCount=", context.totalCount,
                        "finishCount=",  context.finishCount,
                        "websiteUrl=", image.websiteUrl);
                    logger.debug("new tab result=", result);
                    download(chrome, {
                        url: result && result.images[0] && result.images[0].url || image.imageUrl,
                        folder: context.folder,
                        jobId: image.jobId,
                        context: context,
                        filename: image.filename
                    } , () => {
                        context.finishCount++;
                        if (context.finishCount === context.totalCount) {
                            if (context.errorCount > 0) {
                                ga.trackEvent("tab_download", "failure", context.host, context.errorCount);
                                ga.trackEventGA4("tab_dl_failure", {
                                    "domain": context.host,
                                    "count": context.errorCount
                                });
                            }

                            if (context.finishCount > context.errorCount) {
                                ga.trackEvent("tab_download", "success", context.host, context.finishCount - context.errorCount);
                                ga.trackEventGA4("tab_dl_success", {
                                    "domain": context.host,
                                    "count": context.finishCount - context.errorCount
                                });
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
}

function displayInNewTab(tabId, url, injectCS, retries, resolve) {
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
                                url = retries.shift().websiteUrl;
                                closeTab(() => {
                                    displayInNewTab(tabId, url, injectCS, retries, resolve)
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
    if (job.type && job.type === "msg") {
        downloadWithMsg(chrome, job.context, job.images, sendResponse);
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

exports.listenForDownloadFailureAndRetry = listenForDownloadFailureAndRetry;
exports.downloadWithNewTab = downloadWithNewTab;
exports.downloadJob = downloadJob;
exports.queryUserCanceledCount = queryUserCanceledCount;
exports.CHROME_ERROR_USER_CANCELED = CHROME_ERROR_USER_CANCELED;
