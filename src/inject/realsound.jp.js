const utils = require("../utils.js");
const getLargeImg = function (url) {
    return utils.removeDataUrl(url);
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // images in article
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                ".page .container main .entry-single img", getLargeImg)
        );
        return o;
    },
    host: "realsound.jp",
};
