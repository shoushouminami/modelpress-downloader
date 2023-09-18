const utils = require("../utils.js");
const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        ".l-container .l-contents__main .c-entry__body .c-eyecatch img", // article image
        ".l-container .l-contents__main .c-entry__body figure.wp-block-image img"
    ]) {
        utils.pushArray(o.images,
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
    host: "trepo.jp"
};
