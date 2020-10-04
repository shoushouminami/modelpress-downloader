const utils = require("../utils.js");
const inject = function() {
    let o = require("./return-message.js").init();

    utils.pushArray(o.images, utils.findImagesOfClass("square").map(utils.removeTrailingResolutionNumbers));
    utils.pushArray(o.images, utils.findImagesOfContainerClass("list-photo").map(utils.removeTrailingResolutionNumbers));
    utils.pushArray(o.images, utils.findImagesOfClass("figure").map(utils.removeTrailingResolutionNumbers));
    utils.pushArray(o.images, utils.findImagesOfContainerClass("figure-list").map(utils.removeTrailingResolutionNumbers));
    utils.pushArray(o.images, utils.findImagesOfClass("headline-photo").map(utils.removeTrailingResolutionNumbers));
    utils.pushArray(o.images, utils.findImagesOfContainerClass("no-moki").map(utils.removeTrailingResolutionNumbers));
    utils.pushArray(o.images, utils.findImagesOfContainerClass("snap-content").map(utils.removeTrailingResolutionNumbers));

    let mobileImages =  utils.findImagesWithCssSelector(document, ".m-appImageList img", utils.removeQuery).map(utils.removeTrailingResolutionNumbers);
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
    url: "https://mdpr.jp"
};
