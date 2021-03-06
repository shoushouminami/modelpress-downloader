const ga = require("./google-analytics");
const downloader = require("./downloader");
const messaging = require("./messaging");
const logger = require("./logger");
const globals = require("./globals");

// inits
ga.bootstrap();
downloader.listenForDownloadFailureAndRetry();

// listen for download message from popup.js
messaging.listen("download", function (job, sendResponse) {
    downloader.downloadJob(job, sendResponse);
    // async response
    return true;
});

// track installation
chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === "install") {
        ga.trackEvent("extension", "install", globals.getExtensionVersion());
    }

    if (details.reason === "update") {
        ga.trackEvent("extension", "update", globals.getExtensionVersion());
    }
});
