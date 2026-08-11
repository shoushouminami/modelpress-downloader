const utils = require("../utils.js");
const {toFull} = require("../utils/url-utils");
function inject() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "main article-hero div img", // top image
        "main article-body p img", // article image
        "main article figure img", // article image (old)
        "main article-gallery button img", // bottom gallery image
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                function (url) {
                    return url && toFull(url);
                })
        );
    }

    return o;
}

module.exports = {
    inject: inject,
    host: "www.entax.news"
};
