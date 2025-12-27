(function () {
    "use strict";
    const messaging = require("../messaging");
    const logger = require("../logger2")(module.id);
    const { removeSpace} = require("../utils/str-utils.js");
    const { toFull } = require("../utils/url-utils");
    const helper = require("../helper/helper-utils");
    const { basename } = require("../utils/url-utils");

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
    const hrefToCallbackMap = {};
    const hrefQueue = [];
    const hrefToDataUrlMap = {} // href => image data url
    const rootUrl = r?.spine?.()?.package?.rootUrl;

    // collect images from reader.spine().items
    const images = r?.spine?.().items?.map((item, index) => {
        hrefToIndexMap[item.href] = index;
        const itemName = basename(item.href);
        return {
            url: item.href,
            filename: itemName.endsWith(".jpg") ? itemName : (itemName.split(".")[0] + ".jpg"),
            type: "msg_seq"
        };
    });

    // notify CS that we are done
    messaging.sendToPage("updateResultCS", {
        title: READIUM.packageDocument?.getMetadata?.().title,
        images: images
    });

    // prevents helper scripts to run again
    if (helper.getDataDiv() != null) {
        logger.error("Stop running helper for the 2nd time.");
        return;
    }
    helper.getOrCreateDataDiv();

    function nextJobInQueue() {
        if (hrefQueue.length === 0) {
            return;
        }

        const href = hrefQueue.shift();
        r.openPageIndex(hrefToIndexMap[href]);
    }

    messaging.listenOnPage("getImageUrl", function (msg, sendResponse) {
        logger.debug("Received getImageUrl msg", msg);
        if (!msg.url) {
            logger.error("Bad getImageUrl msg=", msg);
            return sendResponse({});
        }

        const href = msg.url;

        // already have the data url. Response right away
        if (hrefToDataUrlMap[href]) {
            return sendResponse({
                url: hrefToDataUrlMap[href],
                filename: msg.filename
            });
        }

        // just in case href in not mapped.
        if (![hrefToIndexMap[href]]) {
            logger.error("Unknown href=", href);
            return sendResponse({});
        }

        // add callback
        hrefToCallbackMap[href] = (dataUrl) => {
            sendResponse({
                url: dataUrl,
                filename: msg.filename
            });
        }

        // Add href to job queue
        hrefQueue.push(href);

        // trigger job if not yet running
        nextJobInQueue();
    });

    // The event might emit multiple times. Check the iframe is the wanted one.
    r.on("ContentDocumentLoaded", function ($iframe) {
        const ifr = $iframe?.[0];
        const src = ifr?.dataset?.src;
        logger.debug("ContentDocumentLoaded ifr=", ifr, "src=", src);

        if (src?.startsWith(rootUrl)) {
            const href = src?.replace(rootUrl, "").replace(/^\//, "");
            const dataUrl = getImageSrcFromIframe(ifr);
            // Add to data url map 
            if (dataUrl && (hrefToDataUrlMap[href] == null)) {
                logger.debug("Adding dataUrl href=", href, "dataUrl=", dataUrl);
                hrefToDataUrlMap[href] = dataUrl;
            }

            // Send response if there is a callback
            if (hrefToDataUrlMap[href] && hrefToCallbackMap[href]) {
                const callback = hrefToCallbackMap[href];
                delete hrefToCallbackMap[href];
                if (typeof callback === "function") {
                    logger.debug("Sending response href=", href, "dataUrl=", hrefToDataUrlMap[href]);
                    callback(hrefToDataUrlMap[href]);
                }
            }
        }

        // next job
        nextJobInQueue();
    });

    function getImageSrcFromIframe(ifr) {
        try {
            if (ifr?.contentDocument?.querySelector("image") != null) {
                return ifr.contentDocument.querySelector("image").getAttribute("xlink:href");
            } else {
                return ifr?.contentDocument?.querySelector?.("img")?.src;
            }
        } catch (e) {
            logger.error(e);
        }
    }
})();
