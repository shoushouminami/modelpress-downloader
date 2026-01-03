const ga = require("./google-analytics");
const downloader = require("./downloader");
const messaging = require("./messaging");
const logger = require("./logger2")(module.id);
const globals = require("./globals");
const {setGA4UID} = require("./ga/ga4-uid");

// inits
ga.bootstrapGA4();

logger.debug("listening for download messages.")
// listen for download message from popup.js
messaging.listen("download", function (job, sendResponse) {
    if (job["userId"]) {
        setGA4UID(job["userId"]);
    }
    downloader.downloadJob(job, sendResponse);
    // async response
    return true;
});

logger.debug("listening for onInstalled event.")
// track installation
chrome.runtime.onInstalled.addListener(function(details) {
    logger.debug("onInstalled details=", details);
    if (details.reason === "install") {
        logger.debug("extension", "install", globals.getExtensionVersion(), typeof (globals.getExtensionVersion()));
        ga.trackEventGA4("ext_install", {
            "ext_ver": globals.getExtensionVersion()
        });
    }

    if (details.reason === "update") {
        logger.debug("extension", "update", globals.getExtensionVersion());
        ga.trackEventGA4("ext_update", {
            "ext_ver": globals.getExtensionVersion()
        });
    }
});
