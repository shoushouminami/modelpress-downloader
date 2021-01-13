const utils = require("../utils.js");
const globals = require("../globals");
const getLargeImg = function (url) {
    if (url != null) {
        if (url.startsWith("/")) {
            url = globals.getWindow().location.origin + url;
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
                ".page .container main .entry-single img", getLargeImg)
        );

        // images in article div bg
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(document,
                ".page .container main .entry-body .n2-ss-slide-background-image", function (dom) {
                    return getLargeImg(utils.getDomBackgroundImage(dom));
                })
        );
        return o;
    },
    host: "realsound.jp",
};
