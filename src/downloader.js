const messaging = require("./messaging");
/**
 * Adds listener functions for a downloadId during download completion
 * @param downloadId
 * @param successCallback
 * @param failureCallback
 */
const callbackMap = {}; // downloadId => {successCallback: function, failureCallback: function}

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
 * @param message {any}
 * @param images {any[]}
 * @param done {function():void} is called when all downloads are initiated in Chrome.
 */
const downloadWithMsg = function (chrome, message, images, done) {
    if (images.length > 0) {
        let count = 0;
        for (const image of images) {
            messaging.sendToCS(tabId, "getImageUrl", image, function (imageWithUrl) {
                if (imageWithUrl) {
                    imageWithUrl.folder = message.folder;
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


module.exports = {
    addDownloadCompleteListener: addDownloadCompleteListener,
    init: init,
    download: download,
    downloadWithMsg: downloadWithMsg
};



