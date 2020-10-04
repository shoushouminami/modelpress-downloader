const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "article .entry-content img", utils.removeTrailingResolutionNumbers));
        return o;
    },
    host: "bltweb.jp"
};
