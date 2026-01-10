const ga = require("./google-analytics");
const downloader = require("./downloader");
const messaging = require("./messaging");
const logger = require("./logger2")(module.id);
const globals = require("./globals");
const {setGA4UID} = require("./ga/ga4-uid");
const { createOrGetTabBadge } = require("./utils/badge-utils");

logger.debug("Bootstrap GA4");
ga.bootstrapGA4();

logger.debug("listening for download messages.")
// listen for download message from popup.js
messaging.listen("download", function (job, sendResponse) {
    return bgDownloadJob(job, sendResponse);
});

logger.debug("listening for updateWatchResult messages.")
messaging.listenOnRuntime("updateWatchResult", function (o, sendResponse) {
    logger.debug("updateWatchResult count=", o?.images?.length, "o=", o);
    if (!o._sender?.tab?.id) {
        logger.warn("updateWatchResult unknown tabId");
        return;
    }

    const tabId = o._sender.tab.id;
    const tabBadge = createOrGetTabBadge(tabId);

    // if not in auto collect mode, clear badge and return
    if (!o.options || o.options["autoCollect"]?.checked !== true) {
        logger.debug("Stopping badge text as autoCollect is off options=", o.options);
        tabBadge.clearText();
        return;
    }

    if (!o.images) {
        logger.debug("Stopping badge text as images is null o=", o);
        tabBadge.clearText();
        return ;
    } 

    // patch fromTabId on o
    o.fromTabId = tabId;
    
    // check auto download
    if (o.options["autoCollect:autoDownload"]?.checked) {
        // TODO add job["userId"] = userId;
        //TODO ga4 tracking
        const jobs = downloader.prepareDownloadJobs(o);
        jobs.forEach((job, index) => {
            bgDownloadJob(job, () => {
                if (index === jobs.length - 1) {
                    sendResponse();
                }
            });
        });

        // animate badge
        tabBadge.animate();
    } else {
        // show badge count
        logger.debug("Updating badge text with count=", o.images?.length);
        tabBadge.setText("" + (o.images.length || 0))
    }
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

function bgDownloadJob(job, sendResponse) {
    if (job["userId"]) {
        setGA4UID(job["userId"]);
    }
    downloader.downloadJob(job, sendResponse);

    // clear badge and watch result
    messaging.sendToCS(job.context.tabId, "downloadHistory", job.images);

    // async response
    return true;
}
