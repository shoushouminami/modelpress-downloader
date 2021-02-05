const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                [
                    "#main-content .entry-content img", // article page images
                ].join(","),
                utils.removeTrailingResolutionNumbers
            )
        );

        return o;
    },
    host: "www.mina.ne.jp"
};
