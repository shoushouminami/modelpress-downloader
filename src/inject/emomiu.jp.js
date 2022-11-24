const utils = require("../utils.js");

const inject = function () {
    let o = require("./return-message.js").init();
    for (const selector of [
        "article .size-full", // article full-sized images
        "article .gallery-item img", // gallery images
    ]) {
        utils.pushArray(
            o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                utils.removeTrailingResolutionNumbers)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "emomiu.jp"
};
