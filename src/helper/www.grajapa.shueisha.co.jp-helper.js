(function () {
    "use strict";
    const helperUtils = require("./helper-utils");
    const messaging = require("../messaging");
    const logger = require("../logger2")(module.id);

    if (typeof READIUM === "undefined") {
        // notify CS that we are done
        messaging.sendToPage("updateResultCS", {});
        return;
    }

    const r = READIUM && READIUM.reader;
    const hrefToIndexMap = {};
    const hrefAndCallback = [] // [href, callback] stored at 0
    // const div = require("../helper/helper-utils").getOrCreateDataDiv();

    // Also save some metadata
    // div.dataset.title = READIUM.packageDocument.getMetadata().title;
    const images = [];

    let i = 0;
    for (let item of r.spine().items) {
        let name = item.href.split("/").pop();
        images.push({
            url: item.href,
            filename: name.endsWith(".jpg") ? name : (name.split(".")[0] + ".jpg"),
            type: "msg_seq"
        })
        hrefToIndexMap[item.href] = i++;
    }

    // notify CS that we are done
    messaging.sendToPage("updateResultCS", {
        title: READIUM.packageDocument.getMetadata().title,
        images: images
    });

    messaging.listenOnPage("getImageUrl", function (msg, sendResponse) {
        logger.debug("Got getImageUrl msg", msg);
        if (msg.url && (hrefToIndexMap[msg.url] != null)) {
            const pageId = hrefToIndexMap[msg.url];
            logger.debug("Found href in spine index ", pageId);
            // set up callback
            hrefAndCallback.push([msg.url, function (src) {
                sendResponse({
                    url: src,
                    filename: msg.filename
                });
            }])
            r.openPageIndex(pageId);
        } else {
            logger.debug("Not found href in spine index ", msg.url);
        }
    });

    // The event might be trigger multiple times.
    // Check the iframe is the wanted one.
    r.on("ContentDocumentLoaded", function ($iframe) {
        logger.debug("ContentDocumentLoaded", $iframe)
        const ifr = $iframe[0];
        if (hrefAndCallback.length > 0) {
            const href = hrefAndCallback[0][0];
            const callback = hrefAndCallback[0][1];
            if (ifr.dataset.loaduri.endsWith(href)) {
                logger.debug("matched href=", href)
                hrefAndCallback.shift(); // tear down callback
                callback(getImageSrcFromIframe($iframe));
            }
        }
    });

    function getImageSrcFromIframe($iframe) {
        try {
            const ifr = $iframe[0];
            if (ifr.contentDocument.querySelector("image") != null) {
                return ifr.contentDocument.querySelector("image").getAttribute("xlink:href");
            } else {
                return ifr.contentDocument.querySelector("img").src;
            }
        } catch (e) {
            logger.error(e);
        }
    }

    helperUtils.getOrCreateDataDiv();
})();
