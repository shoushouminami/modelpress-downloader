const utils = require("../utils.js");
const re = /^https:\/\/.*(=[a-z]\d+)$/;
const getLargeImg = function (url) {
    let m = url.match(re);
    if (m) {
        return url.replace(m[1], "");
    }

    return url;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (let selector of [
            ".main article figure img",
            ".main .photos-Article .swiper-wrapper img",
            ".main .photos-Article .article-photo-Images img", //
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg
                )
            );
        }

        o.ext = "jpg";
        return o;
    },
    host: "trilltrill.jp",
};
