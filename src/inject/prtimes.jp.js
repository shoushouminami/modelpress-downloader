const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "#press-release-body img", // article top image
            "#js-press-release-image-list img", // slide image
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    utils.removeQuery)
            );
        }
        return o;
    },
    host: "prtimes.jp"
};
