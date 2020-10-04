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
                    "#primary #main .entry-content img",
                ].join(","),
                utils.removeTrailingResolutionNumbers
            )
        );
        return o;
    },
    host: "www.tvlife.jp",
};
