'use strict';

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

    return filename;
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
 * Number of download jobs that are pending (downloading or in the queue)
 */
const getJobCount = function () {
    return downloadQueue.length + inProgress;
};

const updateBadge = function (count){
    chrome.browserAction.setBadgeText({text: count === 0 ? "" : ("" + count)});
};

chrome.downloads.onChanged.addListener(function (downloadDelta) {
    if (downloadDelta && downloadDelta.state && inProgressMap[downloadDelta.id]) {
        let item = inProgressMap[downloadDelta.id];
        if (downloadDelta.state.previous === "in_progress" && (downloadDelta.state.current === "complete" || downloadDelta.state.current === "interrupted")) {
            inProgress--;
            delete inProgressMap[downloadDelta.id];
            // Call resolve if any
            if (item.resolve && item.resolve instanceof Function) {
                item.resolve.apply(undefined);
            }
            // Start another download if any
            while (continueDownload(chrome)) {}
        }
    }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.what === "download") {
        addToDownloadQueue(chrome, message.image, function(){
            sendResponse({what: "done", image: message.image});
        });
        return true;
    } else if (message.what === "start") {
        while (continueDownload(chrome)) {}
    }
});