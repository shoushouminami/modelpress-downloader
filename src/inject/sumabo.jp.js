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
                    "#content .post a img",
                ].join(","),
                utils.removeTrailingResolutionNumbers
            )
        );
        return o;
    },
    host: "sumabo.jp",
};
