const utils = require("../utils.js");
const getLargeImg = function (url) {
    if (url) {
        url = url.split("\")")[0];
        if (url.startsWith("/")) {
            url = window.location.origin + url;
        }

        if (url.endsWith("/thumbnail")) {
            url = url.replace("/thumbnail", "/origin.jpg");
        }

        if (url.endsWith(".JPG")) {
            return url.replace(".JPG", ".jpg");
        }
    }

    return url;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            // article top image
            "#mainContents .md-mainVisual img", // special top image
            // article images
            "#mainContents .md-thumbnailList img",
            "#mainContents .photoGallaryArea img.photoGallaryArea__largeImage", // gallery top image
            "#mainContents .photoGallaryArea__list img",
            ".swiper-wrapper .swiper-slide .imageWrapper img", // slide show gallery
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg)
            );
        }

        // gallery images
        utils.pushArray(o.images,
            utils.findDOMsWithCssSelector(
                document,
                "#mainContents .md-gallery .md-gallery__thumbnail a",
                function (dom) {
                    if (dom && dom.style && dom.style.backgroundImage) {
                        return getLargeImg(dom.style.backgroundImage.split("url(\"")[1])
                    }
                })
        );

        return o;
    },
    host: "lp.p.pia.jp",
};
