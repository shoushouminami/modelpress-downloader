const utils = require("../utils.js");
const getLargeImg = function (src) {
    if (src.indexOf(".twimg.com/") > -1) {
        if (src.endsWith(".jpg") || src.endsWith(".png")) {
            return src + ":large";
        }

        try {
            let url = new URL(src);
            var search = url.search.split("&");
            search[0] = search[0].substring(1); // remove '?'
            for (var i = 0; i < search.length; i++) {
                if (search[i].startsWith("format=")) {
                    search[i] = "format=jpg";
                }

                if (search[i].startsWith("name=")) {
                    search[i] = "name=large";
                }
            }

            return url.protocol + "//" + url.host + url.pathname + "?" + search.join("&");
        } catch (e) {
        }
    }

    return src;
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // Old UI
        let galleries = document.querySelectorAll(".Gallery-media img");
        if (galleries.length) {
            for (const img of galleries) {
                o.images.push(getLargeImg(img.src));
            }
        } else {
            let modals = document.querySelectorAll(".PermalinkOverlay-modal .permalink-tweet-container");
            if (modals.length) {
                utils.pushArray(o.images, utils.findImagesWithCssSelector(modals[0], ".AdaptiveMedia-container img", getLargeImg));
            } else {
                utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".content .AdaptiveMedia-container img", getLargeImg));
            }
        }

        // New UI with react.js
        let isTimelineConversation = function () {
            return document.querySelectorAll("div[aria-label='Timeline: Conversation']").length > 0;
        };

        // slide show images
        let group = document.querySelectorAll("div[aria-labelledby=modal-header]");
        if (group.length > 0) {
            let helper = require("../helper/helper-utils");
            let div = helper.getDataDiv();
            if (div) {
                // helper script injected
                if (helper.dataDivHasImages()) {
                    utils.pushArray(o.images, helper.loadImagesFromDataDiv());
                }
                o.ext = "jpg";
            } else {
                // inject helper script and wait
                utils.injectScriptDOM(chrome.runtime.getURL("helper/twitter-react.js"));
                o.retry = true;
            }  
        } else {
            let articles = document.querySelectorAll("article");
            if (articles.length) {
                o.ext = "jpg";
                if (isTimelineConversation()) {
                    utils.pushArray(o.images, utils.findImagesWithCssSelector(articles[0], "div[aria-label=Image] img", getLargeImg));
                } else {
                    //Timeline: Conversation
                    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div[aria-label=Image] img", getLargeImg));
                }
            }
        }

        return o;
    },
    host: "twitter.com",
    getLargeImg: getLargeImg
};
