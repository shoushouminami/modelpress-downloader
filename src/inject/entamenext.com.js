const utils = require("../utils.js");

const getLargeImgFromDom = function (dom) {
    return getLargeImgFromUrl(utils.getBackgroundImageFromDOM(dom));
};

const pattern = /^https?:\/\/images\.entamenext\.com\/articles_photos\/\d+\/\d+\/(\d+x\d+)\/.*\.(jpg|png)$/i;
const getLargeImgFromUrl = function (url) {
    if (url && url.match(pattern)) {
        return url.replace(url.match(pattern)[1], "ORG");
    }
    return url;
};

const inject = function () {
    let o = require("./return-message.js").init();
    utils.pushArray(o.images, utils.findDomsWithCssSelector(document, "div.cont section div.articleGalleryImg div.img", getLargeImgFromDom));
    utils.pushArray(o.images, utils.findDomsWithCssSelector(document, "div.cont section div.articleGalleryList ul li p.img", getLargeImgFromDom));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.cont section div.articleDetailImg div.img img", getLargeImgFromUrl));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.cont section div.article_detail img", getLargeImgFromUrl));
    return o;
};

module.exports = {
    inject: inject,
    host: "entamenext.com",
    test: {
        getLargeImgFromDom: getLargeImgFromDom,
        getLargeImgFromUrl: getLargeImgFromUrl,
        pattern: pattern
    }
};
