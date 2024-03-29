const utils = require("../utils.js");
const getLargeImg = (url) => {
    return utils.removeTrailingResolutionNumbers(utils.removeQuery(url));
};
const inject = function () {
    let o = require("./return-message.js").init();
    for (const selector of [
        "#main-content .gallery-item img",
        "#main-content .entry-content .entry-thumbnail img",
        "#main-content .entry-content .blocks-gallery-item figure img",
        "#main-content .entry-content .wp-block-gallery figure img",
        "#main-content .entry-content p img[class*=wp-image]",
        "#main-content article .entry-content div.img div.img__item img"
    ]) {
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                selector,
                getLargeImg)
        );
    }
    return o;
};

module.exports = {
    inject: inject,
    host: "apress.jp"
};
