(function () {
    "use strict";
    const messaging = require("../messaging");
    const logger = require("../logger2")(module.id);
    const { removeSpace} = require("../utils/str-utils.js");
    const { toFull } = require("../utils/url-utils");

    if (typeof READIUM === "undefined") {
        // Check <script> tag just in case
        // images from <script> tag
        const result = {};
        try {
            for (const scriptNode of window.document.head.querySelectorAll("script")) {
                if (removeSpace(scriptNode.text.split("\n")[1])?.startsWith("window.addEventListener")) {
                    const script = "return (function(window){" +
                        scriptNode.text +
                        "; return sample_contents;})({\"addEventListener\": () => {}});";
                    const f = new Function(script);
                    const sampleContents = f();
                    logger.debug("Adding images from js tag sampleContents=", sampleContents);
                    result.images = sampleContents?.map(toFull);
                }
            }
        } catch(e) {
            logger.error("Error parsing script nodes", e);
        }

        // notify CS that we are done
        messaging.sendToPage("updateResultCS", result);
        return;
    }

    const r = READIUM.reader;
    const hrefToIndexMap = {};
    const hrefAndCallback = [] // [href, callback] stored at 0

    // collect images from reader.spine().items
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

    // The event might emit multiple times. Check the iframe is the wanted one.
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
})();
