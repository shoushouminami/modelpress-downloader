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

module.exports = {
    addDownloadCompleteListener: addDownloadCompleteListener,
    init: init
};



