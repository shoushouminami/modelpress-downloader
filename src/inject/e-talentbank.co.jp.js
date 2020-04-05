const utils = require("../utils.js");
const getLargeImg = (url) => {
    return utils.filterTrailingResolutionNumbers(utils.removeQuery(url));
};
const inject = function () {
    let o = require("./return-message.js").init();
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#wrapper_in div.contents article div.post div.post_head div.thumb img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#wrapper_in div.contents article div.post div.post_photos div.table p a img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#wrapper_in div.contents article div.post div.post_body div.image p a img", getLargeImg));
    return o;
};

module.exports = {
    inject: inject,
    host: "e-talentbank.co.jp"
};
