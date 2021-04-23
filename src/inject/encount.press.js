const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    "article .main .paragraph figure img",
                    "article .main .paragraph .photo-wrap img",
                    "article .main .paragraph .flexslider img"
                ].join(","),
                utils.removeTrailingResolutionNumbers
            )
        );
        return o;
    },
    host: "encount.press",
};
