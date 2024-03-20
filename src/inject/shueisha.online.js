const utils = require("../utils.js");
const urlUtils = require("../utils/url-utils");

module.exports = {
    inject: function () {
        let o = require("./return-message").init();
        for (const selector of [
            "main .article-body .article-photo figure img", // article image
            ".gallery-image-slide__img-wrap img", // slide main image
            ".gallery-image-thumbnail__item img", // thumbnail image
        ]) {
            utils.pushArray(
                o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    urlUtils.removeMwimgsSize
                )
            );
        }

        return o;
    },
    host: "shueisha.online",
};
