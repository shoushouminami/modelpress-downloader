const utils = require("../utils.js");
const urlUtils = require("../utils/url-utils");
function getLargeImg(url) {
    return urlUtils.toFull(urlUtils.removeMwimgsSize(url));
}

const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "article .article-header .c-img img", // header image (old template)
        "article .article-photo .c-img img", // slider image (old template)
        "article .article-body img.main-image", // article image (old template)
        ".article-viewer-wrap .slick-slider .slick-list .slick-slide img", // slider (old template)
        "article figure.wp-block-image img", // article body images (2026 Astro redesign, still WordPress-authored content)
        "article section[class*='border-brand-cyan'] ul li img", // photo thumbnail strip (2026 redesign) — can include the article's hero/gallery photos not shown inline in the body
        "article section ul li button img", // dedicated "/gallery" viewer template (2026 redesign) — swiper thumbnail nav, distinct from the plain article page
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
