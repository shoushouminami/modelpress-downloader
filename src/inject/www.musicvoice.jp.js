const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "#post-entry .post-content img", // news article top and thumbnail images
            ".content-all-wrap .content-interview-entame-wrap img", // interview article top image
            "#post-entry section article #post-relation-media dd > a > img" // interview thumbnail images
        ]) {
            utils.pushArray(o.images,
                utils.findImagesWithCssSelector(
                    document,
                    selector,
                    utils.removeTrailingResolutionNumbers
                )
            );
        }

        return o;
    },
    host: "www.musicvoice.jp"
};
