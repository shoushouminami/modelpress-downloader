const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const query of [
            "#photo-main-block .image-block img", // top image
            "#photo-main-block #photo-thumbnail img", // thumbnail images
            ".article-body .image-area .image-with-link a > img", // article main images
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    query,
                    function (url) {
                        let m = url.match(/^https:\/\/bunshun.ismcdn.jp\/mwimgs\/.+\/.+(\/\d+[a-z]+\/).+\.jpg$/)
                        if (m && m[1]) {
                            url = url.replace(m[1], "/-/")
                        }
                        return utils.removeDataUrl(utils.removeGIF(url));
                    }
                )
            );
        }

        o.permissions_request = {
            permissions: ["tabs"],
            origins: ["https://bunshun.ismcdn.jp/", "https://bunshun.jp/"]
        }

        let anchor = window.location.href.split("#")[1];
        if (anchor && anchor.startsWith("mid_")) {
            let imageUrl = atob(anchor.replace("mid_", ""));
            window.open(imageUrl, "_self");
        }
        o.images = o.images.map(
            url => ({
                imageUrl: url,
                websiteUrl: "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_" + btoa(url),
                websiteCS: "inject-cs.js",
                type: "tab",
                filename: utils.getFileName(url)
            })
        );

        return o;
    },
    host: "bunshun.jp"
};
