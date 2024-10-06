const utils = require("../utils.js");

function getLargeImg(url) {
    if (url == null) {
        return null;
    }

    if (/\/\d+\.jpg/g.test(url)) {
        url = url.replace(/\/\d+\.jpg/g, ".jpg");
    }

    return utils.removeQuery(url);
}

const inject = function () {
    let o = require("./return-message.js").init();
    for (const selector of [
        ".content-main .article-image img", // article image
        ".content-main .slide-show .slick-slide img",
        ".main-column .article-wrap figure img", // article image
        ".article-wrap .gallery-wrap .swiper-slide img", // article slide
        ".article-wrap .article-image img", // photo page main
        ".article-wrap .article-image .thumbnail img", // photo page main
    ]) {
        utils.pushArray(
            o.images,
            utils.findLazyImagesWithCssSelector(document, selector, getLargeImg)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "eiga.com",
};
