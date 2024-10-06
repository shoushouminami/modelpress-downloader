const utils = require("../utils.js");

function getLargeImg(url) {
    if (url.indexOf("/medium/") >= -1) {
       url = url.replace("/medium/", "/large/");
    }

    if (url.indexOf("/o/common/large/image/") >= -1) {
        url = url.replace("/o/common/large/image/", "/image/");
    }

    if (url.indexOf("/common/large/image/") >= -1) {
        url = url.replace("/common/large/image/", "/image/");
    }
    return url;
}

function inject() {
    let o = require("./return-message").init();
    // article images
    for (let selector of [
        "#main-area .article .article-block-image img",
        "#main-area .article .article-block-images img",
        "#main-area .article .article-block-slider img",
        "#main-area .magazine-page .magazine-slide img",
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                getLargeImg
            )
        );
    }
    return o;
}

module.exports = {
    host: "maquia.hpplus.jp",
    inject: inject,
};
