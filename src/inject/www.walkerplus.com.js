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
        // in article
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                "main section .m-new_article-main figure a img", getLargeImg)
        );
        // image gallery active
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                "main section .m-imglist-main .m-imglist-main__img img", getLargeImg)
        );
        // in image gallery
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                "main section .m-imglist-list .m-imglist-list__img img", getLargeImg)
        );
        return o;
    },
    host: "www.walkerplus.com",
    getLargeImg: getLargeImg
};
