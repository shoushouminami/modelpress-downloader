const utils = require("../utils.js");
const getLargeImg = function (src) {
    return src;
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    "article .entry-content .para-img img"
                ].join(","),
                getLargeImg
            )
        );
        return o;
    },
    host: "www.tokyoheadline.com"
};
