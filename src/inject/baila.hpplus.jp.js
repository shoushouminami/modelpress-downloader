const utils = require("../utils.js");

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "article .o-article-block-image__img img", // article image
            "article .o-article-block-images__img img", // mutiple images on the same line
        ]) {
            utils.pushArray(o.images,
                utils.findImagesWithCssSelector(
                    document,
                    selector)
            );
        }
        return o;
    },
    host: "baila.hpplus.jp",
};
