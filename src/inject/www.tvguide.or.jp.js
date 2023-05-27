const utils = require("../utils.js");

const inject = function () {
    let o = require("./return-message.js").init();
    for (const selector of [
        "article .wp-block-image .size-full img", // article full-sized images
    ]) {
        utils.pushArray(
            o.images,
            utils.findLazyImagesWithCssSelector(document, selector)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "www.tvguide.or.jp",
    hidden: true
};
