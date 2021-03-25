const utils = require("../utils.js");
const getLargeImg = function (url) {
    return url;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // special top image
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    "#main .text img",
                    "#main .slick-track img",
                    "#main .pageTag img"
                ].join(","),
                getLargeImg)
        );

        return o;
    },
    host: "smart-flash.jp",
};
