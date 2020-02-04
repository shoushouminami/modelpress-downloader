"use strict";

const retryMap = {}; // {downloadId: image}
const downloadQueue = []; // Queue for regular downloads
const inProgressMap = {};
const CONCURRENT_LIMIT = 5;
let inProgress = 0;
let downloadPaused = false;

const getFileName = function(url, ext) {
    let filename = url.split("?")[0].split("/");
    filename = filename[filename.length - 1];
    if (filename.indexOf(":") > -1) {
        filename = filename.split(":")[0];
    }

    if (ext) {
        return filename + "." + ext;
    }

    return decodeURI(filename);
};

const addToDownloadQueue = function (chrome, image, resolve) {
    downloadQueue.push({image: image, resolve: resolve});
    //while (continueDownload(chrome)) {}
};

/**
 * Continues downloading all the jobs from the queue.
 * @param chrome
 */
const continueDownload = function (chrome) {
    updateBadge(getJobCount());
    if (!downloadPaused && inProgress < CONCURRENT_LIMIT && downloadQueue.length > 0) {
        inProgress++;
        let nextItem = downloadQueue.shift(); // get from the head of queue
        let image = nextItem.image;
        chrome.downloads.download(
            {
                url: image.url,
                saveAs: false,
                method: "GET",
                filename: image.folder + getFileName(image.url, image.ext)
            }, function (downloadId) {
                if (downloadId) {
                    inProgressMap[downloadId] = nextItem;
                } else {
                    // Download failed.
                    inProgress--;
                    while (continueDownload(chrome)) {}
                }
            });
        updateBadge(getJobCount());
        return true;
    } else {
        return false;
    }
};

/**
 * @param chrome
 * @param image <code> {url: "", folder: "abc/", ext: "jpg"} </code>
 * @param resolve
 */
const download = function (chrome, image, resolve) {
    chrome.downloads.download(
        {
            url: image.url,
            saveAs: false,
            method: "GET",
            filename: image.folder + getFileName(image.url, image.ext)
        }, function (downloadId) {
            console.log("downloadId=" + downloadId);
            if (downloadId && image.retries && image.retries.length > 0) {
                retryMap[downloadId] = image;
            }

            if (resolve instanceof Function) {
                resolve();
            }
        });
};


/**
 * Number of download jobs that are pending (downloading or in the queue)
 */
const getJobCount = function () {
    return downloadQueue.length + inProgress;
};

const updateBadge = function (count){
    chrome.browserAction.setBadgeText({text: count === 0 ? "" : ("" + count)});
};

chrome.downloads.onChanged.addListener(function (downloadDelta) {
    if (downloadDelta && downloadDelta.state && retryMap[downloadDelta.id]) {
        if (downloadDelta.state.previous === "in_progress" && (downloadDelta.state.current === "complete" || downloadDelta.state.current === "interrupted")) {
            let image = retryMap[downloadDelta.id];
            delete retryMap[downloadDelta.id];
            if (downloadDelta.state.current === "interrupted" && downloadDelta.error.current === "SERVER_BAD_CONTENT") {
                console.log("event=retry downloadId=" + downloadDelta.id + " url=" + image.url + " retryUrl=" + image.retries[0]);
                image.url = image.retries.shift();
                download(chrome, image);
            }
        }
    }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.what === "download") {
        console.debug("Received " + message.images.length + " jobs");
        let count = 0;
        for (const image of message.images) {
            download(chrome, image, function () {
                console.debug("Started " + count + " jobs");
                count++;
                if (count === message.images.length) {
                    sendResponse({what: "done", images: message.images});
                }
            });
        }
        return true;
    }
});