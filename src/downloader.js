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

module.exports = {
    addDownloadCompleteListener: addDownloadCompleteListener
};

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

