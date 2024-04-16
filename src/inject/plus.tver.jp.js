const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "main .content-main article .article-kv img",
            ".photo-gallery-main .pic  img", // slide show top images
            ".photo-gallery-main .slick-dots img", // top image
            ".article-body .innerpic img", // article body images
            ".article-body p img", // article body images
            ".photo-gallery .gallery-slider-item img", // article body images
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector)
            );
        }
        return o;
    },
    host: "plus.tver.jp"
};
