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
                    "article .c-mainVisual img",
                    "article .single-postContent :not(div.c-balloonItem__image) > img",
                ].join(","),
                getLargeImg)
        );

        return o;
    },
    host: "www.vivi.tv",
};
