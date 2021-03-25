const utils = require("../utils.js");

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // special top image
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                "#mainContent .main-area .main-image-area img")
        );

        // article images
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                "#mainContent .main-area .txt-related img")
        );

        //special page images
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    "main section .style-inner__head img",
                    "main section .style-img img"
                ].join(","))
        );

        //magazine page
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    "#mainContent #preview li img",
                ].join(","))
        );

        return o;
    },
    host: "spur.hpplus.jp",
};
