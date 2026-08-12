const utils = require("../utils.js");
function inject() {
    const o = require("./return-message.js").init();
    
    for (const selector of [
        ".content .articleBody img", // article image
        ".content .gallery img", // gallery image
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(document, selector, utils.removeTrailingResolutionNumbers)
        );
    }

    return o;
};

module.exports = {
    host: "www.talent-databank.co.jp",
    inject: inject,
};
