const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();

        for (const selector of [
            "main .post-head .card-image img", // head image
            "main .post-body figure.wp-block-image img",//post image
            "main .post-body .snap-image img",//snap image
        ]) {
            utils.pushArray(o.images,
                utils.findImagesWithCssSelector(document, selector, utils.removeTrailingResolutionNumbers)
            );
        }

        return o;
    },
    host: "www.mensnonno.jp",
};
