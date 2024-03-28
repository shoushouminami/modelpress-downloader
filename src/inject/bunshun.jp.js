const utils = require("../utils.js");

function getLargeImg(url) {
    let m = url.match(/^https:\/\/bunshun.ismcdn.jp\/mwimgs\/.+\/.+(\/\d+[a-z]+\/).+\.(jpg|png|jpeg)$/)
    if (m && m[1]) {
        url = url.replace(m[1], "/-/")
    }
    url = utils.removeDataUrl(utils.removeGIF(url));
    return url == null ? null : {
        url: url
    };
}

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
                    getLargeImg
                )
            );
        }

        return require("./return-message").tabDownload(
            o,
            {
                origins: ["https://bunshun.ismcdn.jp/", "https://bunshun.jp/"]
            },
            "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css"
        );
    },
    host: "bunshun.jp",
    getLargeImg: getLargeImg
};
