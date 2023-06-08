const utils = require("../utils.js");

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // special top image
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                [
                    "#main-auto .article_head img",
                    "#main-auto .article_inner p img",
                ].join(","),
                function (url) {
                    if (url === window.location.href) {
                        return null;
                    }

                    return utils.removeTrailingResolutionNumbers(url);
                }

            )
        );

        return o;
    },
    host: "domani.shogakukan.co.jp",
};
