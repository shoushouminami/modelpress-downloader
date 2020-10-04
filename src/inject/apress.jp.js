const utils = require("../utils.js");
const getLargeImg = (url) => {
    return utils.removeTrailingResolutionNumbers(utils.removeQuery(url));
};
const inject = function () {
    let o = require("./return-message.js").init();
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#main-content figure.gallery-item img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#main-content div.entry-content figure.entry-thumbnail img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#main-content div.entry-content p img[class*=wp-image]", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#main-content article div.entry-content div.img div.img__item img", getLargeImg));
    return o;
};

module.exports = {
    inject: inject,
    host: "apress.jp"
};
