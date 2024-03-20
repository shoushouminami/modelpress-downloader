const utils = require("../utils.js");
const urlUtils = require("../utils/url-utils");
function getLargeImg(url) {
    return urlUtils.toFull(urlUtils.removeMwimgsSize(url));
}

const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "article .article-header .c-img img", // header image
        "article .article-photo .c-img img", // slider image
        "article .article-body img.main-image", // article image
        ".article-viewer-wrap .slick-slider .slick-list .slick-slide img", // slider
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
    host: "wanibooks-newscrunch.com",
    getLargeImg: getLargeImg
};
