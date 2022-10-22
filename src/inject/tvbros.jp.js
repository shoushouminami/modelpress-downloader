const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(document,
                [
                    "main article .single-entry-header img", // header image
                    "main article .entry-content figure img", // article page images
                    "main article .entry-content > img", // article page images
                    "main article .entry-content span > img", // article page images
                ].join(","),
                utils.removeTrailingResolutionNumbers
            )
        );
        return o;
    },
    host: "tvbros.jp"
};
