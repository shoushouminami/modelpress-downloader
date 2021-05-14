const utils = require("../utils.js");
function getLargeImg(url) {
    if (url == null) {
        return null;
    }
    url = utils.removeTrailingResolutionNumbers(utils.removeQuery(url));
    if (url.startsWith("https://img-mdpr.freetls.fastly.net/")) {
        url += "?quality=100";
    }
    return utils.removeDataUrl(url);
}

function inject() {
    let o = require("./return-message.js").init();

    // old UI
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

    // new UI 2021-05-13
    for (const selector of [
        "main .c-image img", // single image on article preview, top image on image details
        "main .pg-articleDetail__body figure img", // in article images
        "main #js-webImageList .c-webImageList__item img", // article end thumbnail images
        "main .pg-photo__body .pg-photo__webImageListItem img",
    ]) {
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document, selector, getLargeImg)
        );
    }

    // mobile images new UI
    let mobileImages2 = utils.findImagesWithCssSelector(document, ".p-readAppImages  .p-readAppImages__list img", getLargeImg);
    if (mobileImages2.length > 0) {
        utils.pushArray(o.images, mobileImages2);
        let articleIdDoms = utils.findDomsWithCssSelector(document, ".p-readAppImages  button[data-article-id]")
        if (articleIdDoms.length > 0) {
            o.remoteImages["mdpr.jp"] = articleIdDoms[0].dataset["articleId"];
        }
    }

    return o;
}

module.exports = {
    inject: inject,
    host: "mdpr.jp",
    url: "https://mdpr.jp",
    getLargeImg: getLargeImg
};
