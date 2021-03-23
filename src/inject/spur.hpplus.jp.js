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
                "#mainContent .main-area .main-image-area img",
                getLargeImg)
        );

        // article images
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                "#mainContent .main-area .txt-related img",
                getLargeImg)
        );

        //special page images
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    "main section .style-inner__head img",
                    "main section .style-img img"
                ].join(","),
                getLargeImg)
        );

        //magazine page
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    "#mainContent #preview li img",
                ].join(","),
                getLargeImg)
        );

        return o;
    },
    host: "spur.hpplus.jp",
};
