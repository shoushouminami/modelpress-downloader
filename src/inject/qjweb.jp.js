const utils = require("../utils.js");

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (let selector of [
            "article .article_head .image_box img", // article top image
            "article .editor figure img", // article image
            "article .article_image_box .article_image_list picture img", // article
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    utils.removeTrailingResolutionNumbers
                )
            );
        }
        return o;
    },
    host: "qjweb.jp"
};
