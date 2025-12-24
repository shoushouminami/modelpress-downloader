const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "main .p-entry .p-entry__thumbnail img", // article header image
            "main .p-entry__body img", // article image
            "main .p-entry__body .gallery-item img", // thumbnail images
        ]) {
            utils.pushArray(
                o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    utils.removeTrailingResolutionNumbers
                )
            );
        }

        return o;
    },
    host: "trendnewscaster.jp",
};
