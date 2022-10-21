const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const query of [
            "main .m-article-header img.m-article-header__img", // top main image
            "main .m-article-body .entry-body a img", // body images
            "main .m-gallery-list img.m-gallery-list__img", // thumbnail page top image
            "main .m-gallery-list__box img.m-gallery-list__img", // thumbnail page top image
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
