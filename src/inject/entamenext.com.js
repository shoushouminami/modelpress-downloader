const utils = require("../utils.js");

const getLargeImg = function (dom) {
    return getLargeImgFromUrl(utils.getDomBackgroundImage(dom));
};

const pattern = /^https?:\/\/images\.entamenext\.com\/articles_photos\/\d+\/\d+\/(\d+x\d+)\/.*\.jpg$/i;
const getLargeImgFromUrl = function (url) {
    if (url && url.match(pattern)) {
        return url.replace(url.match(pattern)[1], "ORG");
    }
    return url;
};

const inject = function () {
    let o = require("./return-message.js").init();
    utils.pushArray(o.images, utils.findDomsWithCssSelector(document, "section div.articleGalleryList ul li p.img", getLargeImg));
    return o;
};

module.exports = {
    inject: inject,
    host: "entamenext.com",
    test: {
        getLargeImg: getLargeImg,
        getLargeImgFromUrl: getLargeImgFromUrl,
        pattern: pattern
    }
};
