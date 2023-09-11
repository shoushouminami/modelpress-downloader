const utils = require("../utils.js");
const getLargeImg = function (url) {
    if (url.endsWith(".gif")) {
        return null;
    }

    if (url.endsWith(".png") && url.split("/").slice(-1)[0].startsWith("wowkorea")) {
        return null;
    }

    if (!url.startsWith("http")) {
        url = window.location.origin + url;
    }

    // 128786_640.webp
    if (url.endsWith(".webp") && url.split("/").slice(-1)[0].indexOf("_") > -1) {
        url = url.substring(0, url.lastIndexOf("_")) + "_1280W.webp"
    }

    return url;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "#content_main .news_text img",
            ".pic img",
            "#content .container .post-content .image-wrapper img", // main image
            "#content .container .swiper-wrapper img", // slide show
            "#content .container .block-area .widget .image-wrapper img", // article page slide show
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg)
            );
        }

        return o;
    },
    host: "www.wowkorea.jp",
};
