const messaging = require("./messaging");
const {wait, every} = require("./utils/async-utils");
const utils = require("./utils");
/**
 * Adds listener functions for a downloadId during download completion
 * @param downloadId
 * @param successCallback
 * @param failureCallback
 */
const retryMap = {}; // for keeping retry urls
const ga = require("./google-analytics");
const chrome = require("./globals").getChrome();
const logger = require("./logger2")(module.id);

/**
 * @param image {{url: "", folder: "abc/", ext: "jpg", jobId: 123}}
 */
function getFilename(image) {
    return decodeURI(image.folder)
        + (image.folder.endsWith("/") ? "" : "/")
        + (image.jobId != null ?  image.jobId + "-" : "")
        + utils.getFileName(image.url, image.ext, image.filename)
}
/**
 * Use Chrome API to download the given image
 * @param chrome
 * @param image {{url: "", folder: "abc/", ext: "jpg", jobId: 123}}
 * @param resolve
 */
function download(chrome, image, resolve) {
    if (typeof image === "object" && image.type === "msg") {
        downloadWithMsg();
    } else {
        chrome.downloads.download(
            {
                url: image.url,
                saveAs: false,
                method: "GET",
                filename: getFilename(image)
            }, function (downloadId) {
                logger.debug("downloadId=" + downloadId);
                if (downloadId && image.retries && image.retries.length > 0) {
                    retryMap[downloadId] = image;
                }

                if (resolve instanceof Function) {
                    resolve();
                }
            });
    }
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
        for (const image of images) {
            // logger.debug("sending getImageUrl message to cs filename=", image.filename);
            messaging.sendToCS(context.tabId, "getImageUrl", image, function (imageWithUrl) {
                // logger.debug("received getImageUrl message filename=", image.filename, " imageWithUrl=",
                //     imageWithUrl);
                let completed = ++count === images.length;
                if (imageWithUrl && imageWithUrl.url) {
                    imageWithUrl.folder = context.folder;
                    imageWithUrl.jobId = image.jobId;
                    // logger.debug("downloading filename=", image.filename);
                    download(chrome, imageWithUrl, function () {
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
                            if (done instanceof Function) {
                                wait(1000).then(done);
                            }
                        }
                    });
                } else {
                    ga.trackEvent("msg_download", "null", context.host, 1);
                }
            })
        }

        wait(15000)
            .then(() => {
                if (count < images.length) {
                    ga.trackEvent("msg_download", "incomp_15s", context.host, images.length);
                    every(2000)
                        .then(() => {
                            const sec = Math.round((new Date().getTime() - startMs) / 1000.0);
                            if (count === images.length) {
                                ga.trackEvent("msg_download",
                                    "comp_" + sec + "s",
                                    context.host,
                                    images.length);
                                return true;
                            } else {
                                if (sec >= 40) {
                                    ga.trackEvent("msg_download",
                                        "incomp_40s",
                                        context.host,
                                        images.length);
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
        if (downloadDelta && downloadDelta.state && retryMap[downloadDelta.id]) {
            logger.debug("e=onchange downloadId=",downloadDelta.id, "state=", downloadDelta.state);
            if (downloadDelta.state.previous === "in_progress" && (downloadDelta.state.current === "complete" || downloadDelta.state.current === "interrupted")) {
                let image = retryMap[downloadDelta.id];
                delete retryMap[downloadDelta.id];
                if (downloadDelta.state.current === "interrupted" && downloadDelta.error.current === "SERVER_BAD_CONTENT") {
                    logger.debug("event=retry downloadId=" + downloadDelta.id + " url=" + image.url + " retryUrl=" + image.retries[0]);
                    image.url = image.retries.shift();
                    download(chrome, image);
                }
            }
        }
    });
}

function downloadWithNewTab(chrome, image, context, tabId) {
    if (image.websiteUrl) {
        context.p = context.p.then(function () {
            return new Promise(function (resolve) {
                logger.debug("event=creating_new_iframe totalCount=%d finishCount=%d ", context.totalCount, context.finishCount);
                displayInNewTab(tabId, image.websiteUrl, function () {
                    logger.debug("event=created_new_iframe totalCount=%d finishCount=%d ", context.totalCount, context.finishCount);
                    download(chrome, {url: image.imageUrl, folder: context.folder, jobId: image.jobId} , () => {
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
}

function displayInNewTab(tabId, url, resolve, error) {
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
}

function downloadJob(job, sendResponse) {
    logger.debug("Received " + job.images.length + " jobs");
    if (job.type && job.type === "msg") {
        downloadWithMsg(chrome, job.context, job.images, sendResponse);
    } else {
        let count = 0;
        for (const image of job.images) {
            download(chrome, image, function () {
                logger.debug("Started job #" + count);
                if (++count === job.images.length) {
                    sendResponse();
                }
            });
        }
    }
}

exports.download = download;
exports.listenForDownloadFailureAndRetry = listenForDownloadFailureAndRetry;
exports.downloadWithNewTab = downloadWithNewTab;
exports.displayInNewTab = displayInNewTab;
exports.downloadJob = downloadJob;
