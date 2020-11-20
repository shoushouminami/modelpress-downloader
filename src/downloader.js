const messaging = require("./messaging");
/**
 * Adds listener functions for a downloadId during download completion
 * @param downloadId
 * @param successCallback
 * @param failureCallback
 */
const callbackMap = {}; // downloadId => {successCallback: function, failureCallback: function}

const retryMap = {}; // for keeping retry urls

const addDownloadCompleteListener = function (downloadId, successCallback, failureCallback) {
    callbackMap[downloadId] = {
        success: successCallback,
        failure: failureCallback
    };
}

// let cancelDownloadIfNotImageCalled = false;
/**
 * Cancels the ongoing download if it is redirected to download a non-image item, such as HTML
 */
// const cancelDownloadIfNotImage = function () {
//     if (!cancelDownloadIfNotImageCalled) {
//         cancelDownloadIfNotImageCalled = true;
//         chrome.downloads.onChanged.addListener(downloadDelta => {
//             if (downloadDelta && downloadDelta.url) {
//                 let url = downloadDelta.url;
//                 if (url.previous !== url.current) {
//                     if (url.current.endsWith(".html")) {
//                         chrome.downloads.cancel(downloadDelta.id);
//                     }
//                 }
//             }
//         })
//     }
// }

const init = function () {
    // init listener
    chrome.downloads.onChanged.addListener(function (downloadDelta) {
        let downloadId = downloadDelta.id;
        if (callbackMap[downloadId] && downloadDelta && downloadDelta.state) {
            let state = downloadDelta.state;
            if (state.previous === "in_progress" && state.current === "complete") {
                if (typeof callbackMap[downloadId]["success"] === "function") {
                    callbackMap[downloadId]["success"]();
                    delete callbackMap[downloadId];
                }
            }

            if (state.previous === "in_progress" && state.current === "interrupted") {
                if (downloadDelta.error.current === "SERVER_BAD_CONTENT") {
                    if (typeof callbackMap[downloadId]["failure"] === "function") {
                        callbackMap[downloadId]["failure"]();
                        delete callbackMap[downloadId];
                    }
                }
            }
        }
    });
}

const getFileName = function(url, ext, preferedName) {
    if (preferedName != null) {
        return preferedName;
    }

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

/**
 * Use Chrome API to download the given image
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
            filename: decodeURI(image.folder) + getFileName(image.url, image.ext, image.filename)
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
 * First send a message to get the url of the image. Once we have the url, call {@link download} to download the image.
 * @param chrome
 * @param tabId {number}
 * @param folder {string}
 * @param images {any[]}
 * @param done {function():void} is called when all downloads are initiated in Chrome.
 */
const downloadWithMsg = function (chrome, tabId, folder, images, done) {
    if (images.length > 0) {
        let count = 0;
        for (const image of images) {
            messaging.sendToCS(tabId, "getImageUrl", image, function (imageWithUrl) {
                if (imageWithUrl) {
                    imageWithUrl.folder = folder;
                    download(chrome, imageWithUrl, function () {
                        if (++count === images.length && done instanceof Function) {
                            done();
                        }
                    });
                }
            })
        }
    }
}

const listenForDownloadFailureAndRetry = function () {
    // listen for download failure and retry if possible
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
}

const listenForDownloadJob = function(){
    // listen for download message from popup.js
    messaging.listen("download", function (msg, sendResponse){
        console.debug("Received " + message.images.length + " jobs");
        let count = 0;
        for (const image of message.images) {
            download(chrome, image, function () {
                console.debug("Started job #" + count);
                count++;
                if (count === message.images.length) {
                    sendResponse({what: "done", images: message.images});
                }
            });
        }
        return true;
    });
};


exports.addDownloadCompleteListener = addDownloadCompleteListener;
exports.init = init;
exports.download = download;
exports.downloadWithMsg = downloadWithMsg;
exports.listenForDownloadFailureAndRetry = listenForDownloadFailureAndRetry;



