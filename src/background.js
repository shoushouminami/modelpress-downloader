"use strict";

const downloadQueue = []; // Queue for regular downloads
const inProgressMap = {};
const CONCURRENT_LIMIT = 10;
let inProgress = 0;
let downloadCancelled = false;

const incrementInProgress = function () {
    inProgress++;
    updateBadge(getJobCount());
};

const decrementInProgress = function () {
    inProgress--;
    if (inProgress < 0) {
        inProgress = 0;
    }

    updateBadge(getJobCount());
};

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

/**
 * Continues downloading all the jobs from the queue.
 * @param chrome
 */
const continueDownload = function (chrome) {
    updateBadge(getJobCount());
    if (!downloadCancelled && inProgress < CONCURRENT_LIMIT && downloadQueue.length > 0) {
        incrementInProgress();
        let nextItem = downloadQueue.shift(); // get from the head of queue
        let image = nextItem.image;
        console.debug("event=download_begin inProgress=" + inProgress + " inProgresssMap.size=" + Object.keys(inProgressMap).length);
        chrome.downloads.download(
            {
                url: image.url,
                saveAs: false,
                method: "GET",
                filename: image.folder + getFileName(image.url, image.ext)
            }, function (downloadId) {
                if (downloadId) {
                    console.debug("event=download_begin_successful inProgress=" + inProgress + " inProgresssMap.size=" + Object.keys(inProgressMap).length + " downloadId=" + downloadId);
                    inProgressMap[downloadId] = nextItem;
                    if (downloadCancelled) {
                        cancel();
                    }
                } else {
                    console.debug("event=download_begin_failed inProgress=" + inProgress + " inProgresssMap.size=" + Object.keys(inProgressMap).length);
                    // Download failed.
                    decrementInProgress();
                    while (continueDownload(chrome)) {}
                }
            });
        updateBadge(getJobCount());
        return true;
    } else {
        return false;
    }
};

const cancel = function() {
    console.log("Resetting... ");
    downloadQueue.splice(0, downloadQueue.length);
    downloadCancelled = true;
    inProgress = 0;
    for(const downloadId of Object.keys(inProgressMap)) {
        console.log("event=cancel downloadId=" + downloadId);
        try {
            chrome.downloads.cancel(parseInt(downloadId), function () {
                console.log("event=canceled downloadId=" + downloadId);
            });
        } catch (e) {
            console.error("event=cancel_failed e=" + e);
        }

        delete inProgressMap[downloadId];
    }
    updateBadge(getJobCount());
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
            console.debug("event=download_end downloadId=" + inProgressMap[downloadDelta.id] + " state=" + downloadDelta.state.current + " error=" + (downloadDelta.error && downloadDelta.error.current) +  " inProgress=" + inProgress + " inProgresssMap.size=" + Object.keys(inProgressMap).length);
            decrementInProgress();
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

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    switch (message.what) {
        case "download" :
            downloadCancelled = false;
            console.debug("Received " + message.images.length + " jobs");
            let count = 0;
            for (const image of message.images) {
                downloadQueue.push({
                    image: image, resolve: function () {
                        console.debug("Finished " + count + " jobs");
                        count++;
                        if (count === message.images.length) {
                            sendResponse({what: "done", images: message.images});
                        }
                    }
                });
            }

            while (continueDownload(chrome)) {
            }
            return true;
            // break;
        case "stop":
            cancel();
            sendResponse();
            break;
    }
});