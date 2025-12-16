const utils = require("../utils.js");
const { removeMwimgsSize } = require("../utils/url-utils.js");

function getLargeImg(url) {
    return {
        url: removeMwimgsSize(url),
        thumbnail: url
    };
}

function inject() {
    const o = require("./return-message.js").init();
    for (const selector of [
        "article .article-header .c-article-img img", // article top image
        "article .article-body .image-area img", // article gallery image
        "main .m-slider-article-main__img .c-article-img img", //gallery main image
        "main .m-slider-article-thumb__img .c-article-img img",// gallery thumbnail image
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
    host: "www.tokyo-sports.co.jp",
};
