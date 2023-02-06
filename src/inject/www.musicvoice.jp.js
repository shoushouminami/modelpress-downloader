const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "#post-entry .post-content #post-iframe > div > img", // news article top images
            "#post-entry .post-content #post-iframe > div > a > img", // news article images
            "#post-entry .post-content #post-iframe dd > a > img", // new article thumbnail images
            ".content-all-wrap .content-interview-entame-wrap img", // interview article top image
            "#post-entry section article #post-relation-media dd > a > img", // interview thumbnail images
            "#post-entry article #photonews-main img", // main image
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
