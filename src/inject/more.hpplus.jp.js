const utils = require("../utils.js");
const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "main article .article-body .article-block-image img", // article images
        "main .magazine-slider-container .magazine-slider-item img", // magazine images
    ]) {
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                selector)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "more.hpplus.jp"
};
