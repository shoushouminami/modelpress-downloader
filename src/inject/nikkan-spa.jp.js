const utils = require("../utils.js");

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (let selector of [
            ".main-content .post-container .ws > a > img", // article image
            ".main-content .post-container .ws .wp-caption img",
            ".main-content .post-container .gallery .gallery-item img",
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    function (url) {
                        url = utils.removeTrailingResolutionNumbers(url);
                        return url;
                    }
                )
            );
        }
        return o;
    },
    host: "nikkan-spa.jp"
};
