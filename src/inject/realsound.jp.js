const utils = require("../utils.js");
const globals = require("../globals");
const getLargeImg = function (url) {
    if (url != null) {
        if (url.startsWith("/")) {
            url = globals.getWindow().location.origin + url;
        }

        if (url.endsWith(".svg")) {
            return null;
        }

        url = utils.removeDataUrl(url);

        if (url) {
            return {url: utils.removeTrailingResolutionNumbers(url), retries: [url]};
        }
    }

    return url;
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // images in article
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                ".page .container main .entry-single picture img", getLargeImg)
        );

        // images in article div bg
        utils.pushArray(o.images,
            utils.findDOMsWithCssSelector(document,
                ".page .container main .entry-body .n2-ss-slide-background-image", function (dom) {
                    return getLargeImg(utils.getBackgroundImageFromDOM(dom));
                })
        );
        return o;
    },
    host: "realsound.jp",
};
