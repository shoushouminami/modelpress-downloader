const utils = require("../utils.js");

function getImage(dom) {
    const src = utils.getLazyImageFromDOM(dom);
    if (!src || src.startsWith("data:")) return null;
    // Hero (attachment-full) and size-full figures are already the original. Their file names may
    // still look like "xxx-724x1024-1.jpg", where stripping would 404.
    if (dom.classList.contains("size-full") || dom.closest(".size-full")) return src;
    const original = utils.removeTrailingResolutionNumbers(src);
    return original === src ? src : {url: original, retries: [src]};
}

function inject() {
    const o = require("./return-message.js").init2();
    for (const selector of [
        ".p-entry__thumbnail img", // hero image
        ".p-entry__body img", // article images
    ]) {
        utils.pushArray(o.images, utils.findDOMsWithCssSelector(document, selector, getImage));
    }
    return o;
}

module.exports = { host: "theatergirl.jp", inject: inject };
