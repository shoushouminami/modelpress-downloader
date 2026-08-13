const utils = require("../utils.js");

// WordPress replaces emoji characters in the article text with <img class="emoji"
// src="https://s.w.org/images/core/emoji/....svg"> tags. Skip those (and any other decorative svg).
function filterImage(url) {
    if (url && url.endsWith(".svg")) {
        return null;
    }

    return utils.removeTrailingResolutionNumbers(url);
}

function inject() {
    const o = require("./return-message.js").init();

    for (const selector of [
        ".p-single .p-single-thumbnail", // top image
        ".p-single-cont img", // article image
        ".p-gallery figure img", // gallery page image
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(document, selector, filterImage)
        );
    }

    return o;
};

module.exports = {
    host: "lotus-magic.jp",
    inject: inject,
};
