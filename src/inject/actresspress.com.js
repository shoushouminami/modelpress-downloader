const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // in article images
        utils.pushArray(
            o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    "#post-entry section .post-frame img", // news article top and thumbnail images
                    ".content-all-wrap .content-interview-wrap img", // interview article top image
                    "#post-entry section article a img" // interview thumbnail images
                ].join(","),
                utils.filterTrailingResolutionNumbers
            )
        );
        return o;
    },
    host: "www.musicvoice.jp"
};
