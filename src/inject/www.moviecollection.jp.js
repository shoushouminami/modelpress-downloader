const { combineFilters, removeGIF, createFilterRemoveExt } = require("../utils/url-utils.js");
const utils = require("../utils.js");

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "#main-item .box-detail__img img", // article image
            "#main-item .box-detail__content .slick-track img", // article slider image
            "#main-item .box-detail__content .wp-post img", // article image
            "#main-item .box-detail__gallery .item img", //
        ]) {
            utils.pushArray(
                o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    combineFilters(
                        utils.removeTrailingResolutionNumbers,
                        createFilterRemoveExt(null, "noimage", "png")
                    )
                )
            );
        }

        return o;
    },
    host: "www.moviecollection.jp",
};
