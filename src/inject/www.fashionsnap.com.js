const utils = require("../utils.js");
function getLargeImg(url) {
    const re = /^https:\/\/.*\/asset\/(format=.*width=\d+)\/article\/images\/.*/i;
    const m = url.match(re);
    if (m) {
        url = url.replace(m[1], "-");
    }

    return url;
}
const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "main #mainGallery img", // gallery image,
        "main > div > div > div > img ", // article top image
        "main div img[data-image-gallery-include]", // article slide image
        "main figure img", // article image
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                getLargeImg
            )
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "www.fashionsnap.com"
};
