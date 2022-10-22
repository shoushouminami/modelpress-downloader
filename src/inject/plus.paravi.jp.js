const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(document,
                [
                    "article .article-head .img-box img",
                    "article .article-body img",
                ].join(","),
                function (url) {
                    if (!url.endsWith("ic_auth.png")) {
                        return url;
                    }
                }
            )
        );
        return o;
    },
    host: "plus.paravi.jp"
};
