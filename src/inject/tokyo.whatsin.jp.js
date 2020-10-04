const utils = require("../utils.js");
const re = /^https:\/\/.*\.walkerplus\.com\/.*(_\d+)\.(jpg|jpeg|png)$/i
const getLargeImg = function (url) {
    let m = url.match(re);
    if (m && m[1]) {
        return {url: url.replace(m[1], ""), retries: [url]};
    }

    return url;
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                [   // article top image
                    ".l-content .content-main .media .media-thm-post-main img",
                    // article images
                    ".l-content .content-main .media .media-content-detail > img",
                    // article images
                    ".l-content .content-main .media .media-content-detail .wp-caption > img",
                    // article vertical images
                    ".l-content .content-main .media .media-content-detail .vertical > img",
                    // image gallery
                    ".l-content .content-main .media .media-content-detail .gallery-item img",
                ].join(","),
                utils.removeTrailingResolutionNumbers)
        );
        return o;
    },
    host: "tokyo.whatsin.jp"
};
