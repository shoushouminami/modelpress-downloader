const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // image gallery slide show image
        utils.pushArray(
            o.images,
            utils.findImagesWithCssSelector(
                document,
                "#container #contents #wrapper main article .slide img"
            )
        );
        // image gallery image list
        utils.pushArray(
            o.images,
            utils.findImagesWithCssSelector(
                document,
                "#container #contents #wrapper main article .slidethumb ul li img",
                utils.removeTrailingResolutionNumbers
            )
        );
        // article top image
        utils.pushArray(
            o.images,
            utils.findImagesWithCssSelector(
                document,
                "#container #contents #wrapper main article .eyecatch img",
                utils.removeTrailingResolutionNumbers
            )
        );
        // in article images
        utils.pushArray(
            o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    "#container #contents #wrapper main article .entry-body p a img",
                    "#container #contents #wrapper main article .entry-body .wp-caption img",
                    "#container #contents #wrapper main article .entry-body > p > img"
                ].join(","),
                utils.removeTrailingResolutionNumbers
            )
        );
        return o;
    },
    host: "www.m-on-music.jp",
};
