const utils = require("../utils.js");

const inject = function () {
    let o = require("./return-message.js").init();
    for (const selector of [
        ".main .entry-body figure > img",
        "article .p-single__contents figure > img",
        ".main .main-bndetail-index-img img", // magazine images
        "article section figure.magazine-img img", // magazine images
        "article section .magazine-index__gallery-img-box img" // magazine images
    ]) {
        utils.pushArray(
            o.images,
            utils.findLazyImagesWithCssSelector(document, selector, utils.removeTrailingResolutionNumbers)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "classy-online.jp"
};
