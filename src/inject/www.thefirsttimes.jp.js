const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const query of [
            "main .m-article .m-main-image img", // top main image
            "main .m-article .entry-body a img", // body images
            "main .m-image .entry-body figure img", // thumbnail page top image
            "main .m-image .entry-body ul li img", // thumbnail page top image
        ]) {
            utils.pushArray(o.images,
                utils.findImagesWithCssSelector(
                    document,
                    query,
                    utils.removeTrailingResolutionNumbers
                )
            );
        }

        return o;
    },
    host: "www.thefirsttimes.jp"
};
