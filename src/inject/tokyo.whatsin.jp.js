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
        // article top image
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                ".l-content .content-main .media .media-thm-post-main img",
                utils.removeTrailingResolutionNumbers)
        );
        // image gallery active
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                ".l-content .content-main .media .media-thm-post-main img", getLargeImg)
        );
        // in image gallery
        return o;
    },
    host: "www.walkerplus.com",
    getLargeImg: getLargeImg
};
