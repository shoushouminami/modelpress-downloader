const utils = require("../utils.js");
const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "#main article .image_body img", // article images
        "#main .magazine_slider_wrap .slide_content img", // magazine images
    ]) {
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                selector,
                utils.removeTrailingResolutionNumbers)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "more.hpplus.jp"
};
