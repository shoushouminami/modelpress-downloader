const utils = require("../utils.js");
const getLargeImg = function (url) {
    return url;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // special top image
        for (const selector of [
            "#main .text img",
            "#main .slick-track > .slick-slide > img",
            "#main .pageTag img"
        ]) {
            utils.pushArray(o.images,
                utils.findImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg)
            );
        }
        return o;
    },
    host: "smart-flash.jp",
};
