const utils = require("../utils.js");
const getLargeImgFromDom = function (img){
    if (img.srcset) {
        return getLargeImg(img.srcset.split(",")[0].split(" ")[0]);
    }
};

const getLargeImg = function (url) {
    if (url) {
        return utils.removeTrailingResolutionNumbers(url);
    }
};

const inject = function () {
    let o = require("./return-message.js").init();
    // gallery page image list
    utils.pushArray(o.images, utils.findDomsWithCssSelector(document, "main article#post div.thumb_list ul img", getLargeImgFromDom));
    for (let selector of [
        "main article#post div.current_photo img", // gallery page top image
        "main article#post div.top_photo img", // article image
        "main article#post div.post_cont .pic_media.scale_full img", // article
        "#post .post_cont .wp-block-image img",
        "#post .post_cont #item_slide .slider img",
        "#post .post_cont figure.image img",
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                getLargeImg
            )
        );
    }
    return o;
};

module.exports = {
    inject: inject,
    host: "ray-web.jp"
};
