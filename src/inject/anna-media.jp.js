const utils = require("../utils.js");
function getLargeImg(url) {
    return utils.removeTrailingResolutionNumbers(url);
}

const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        ".main .single-header .single-header-eyecatch img", // header image
        ".main .single .wp-caption img", // article body images
        ".main .single figure > img", // article body images
        ".main .single .wp-block-image img", // article body images
        ".main .single .wp-block-embed .wp-oembed-blog-card__figure img", // article end embedded article images
        ".main .single p > img", // article body images
    ]) {
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                selector,
                getLargeImg)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "anna-media.jp",
    getLargeImg: getLargeImg
};
