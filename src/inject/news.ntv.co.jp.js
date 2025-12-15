const utils = require("../utils.js");

function getLargeImg(url) {
    if (url.indexOf(".svg") > -1) {
        return null;
    }

    return utils.removeQuery(url);
}

function inject () {
    const o = require("./return-message.js").init();
    for (const selector of [
            ".articleDetail .articleDetail-content .artwork img" , // article top image
            ".articleDetail .articleDetail-content .thumbnail-list-image img", // thumbnail images
            ".articleDetail .articleDetail-contentImages-screen img", // main image on photo page
        ".articleDetail .articleDetail-contentImages-imglist img", // main image on photo page
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg)
            );
        }
    return o;
};

module.exports = {
    inject: inject,
    host: "news.ntv.co.jp",
};
