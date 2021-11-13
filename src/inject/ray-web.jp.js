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
    // gallery page top image
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main article#post div.current_photo img", getLargeImg));
    // gallery page image list
    utils.pushArray(o.images, utils.findDomsWithCssSelector(document, "main article#post div.thumb_list ul img", getLargeImgFromDom));

    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main article#post div.top_photo img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main article#post div.post_cont .pic_media.scale_full img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "#post .post_cont .wp-block-image img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "#post .post_cont #item_slide .slider img", getLargeImg));
    return o;
};

module.exports = {
    inject: inject,
    host: "ray-web.jp"
};
