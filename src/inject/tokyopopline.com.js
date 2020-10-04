const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".p-entry__thumbnail img", utils.removeTrailingResolutionNumbers));
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".gallery-item img", utils.removeTrailingResolutionNumbers));
        return o;
    },
    host: "tokyopopline.com"
};
