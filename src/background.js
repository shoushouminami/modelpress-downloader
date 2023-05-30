const ga = require("./google-analytics");
const downloader = require("./downloader");
const messaging = require("./messaging");
const logger = require("./logger2")(module.id);
const globals = require("./globals");

// inits
ga.bootstrap("background.js");
ga.bootstrapGA4();

downloader.listenForDownloadFailureAndRetry();

logger.debug("listening for download message.")
// listen for download message from popup.js
messaging.listen("download", function (job, sendResponse) {
    downloader.downloadJob(job, sendResponse);
    // async response
    return true;
});

messaging.listen("queryUserCanceled", function (msg, sendResponse) {
    sendResponse({
        "userCanceledCount": downloader.queryUserCanceledCount()
    });
});

logger.debug("listening for onInstalled event.")
// track installation
chrome.runtime.onInstalled.addListener(function(details) {
    logger.debug("onInstalled details=", details);
    if (details.reason === "install") {
        logger.debug("extension", "install", globals.getExtensionVersion(), typeof (globals.getExtensionVersion()));
        ga.trackEvent("extension", "install", globals.getExtensionVersion());
        ga.builder().event("ext_install").param("ext_ver", globals.getExtensionVersion()).send();
    }

    if (details.reason === "update") {
        logger.debug("extension", "update", globals.getExtensionVersion());
        ga.trackEvent("extension", "update", globals.getExtensionVersion());
        ga.builder()
            .event("ext_update")
            .param("ext_ver", globals.getExtensionVersion())
            .send();
    }
});
