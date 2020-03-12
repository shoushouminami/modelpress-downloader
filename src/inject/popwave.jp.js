const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".entry img", utils.filterTrailingResolutionNumbers));
        return o;
    },
    host: "popwave.jp"
};
