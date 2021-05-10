const utils = require("../utils.js");

function getLargeImg(url) {
    if (url == null) {
        return null;
    }


    url = utils.removeTrailingResolutionNumbers(utils.removeQuery(url));
    if (url.startsWith("https://img-mdpr.freetls.fastly.net/")) {
        url += "?quality=100";
    }

    return url;
}
const inject = function() {
    let o = require("./return-message.js").init();

    utils.pushArray(o.images, utils.findImagesOfClass("square").map(getLargeImg));
    utils.pushArray(o.images, utils.findImagesOfContainerClass("list-photo").map(getLargeImg));
    utils.pushArray(o.images, utils.findImagesOfClass("figure").map(getLargeImg));
    utils.pushArray(o.images, utils.findImagesOfContainerClass("figure-list").map(getLargeImg));
    utils.pushArray(o.images, utils.findImagesOfClass("headline-photo").map(getLargeImg));
    utils.pushArray(o.images, utils.findImagesOfContainerClass("no-moki").map(getLargeImg));
    utils.pushArray(o.images, utils.findImagesOfContainerClass("snap-content").map(getLargeImg));

    let mobileImages =  utils.findImagesWithCssSelector(document, ".m-appImageList img", getLargeImg);
    if (mobileImages.length > 0) {
        utils.pushArray(o.images, mobileImages);
        let articleId = utils.findMdprArticleId();
        if (articleId) {
            o.remoteImages["mdpr.jp"] = articleId;
        }
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "mdpr.jp",
    url: "https://mdpr.jp",
    getLargeImg: getLargeImg
};
