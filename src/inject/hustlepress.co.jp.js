const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                [
                    "#fancybox-wrap img#fancybox-img", // slide show images
                    ".post .post-content a.fancybox.image img.size-full",
                ].join(","),
            )
        );

        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(document,
                [
                    ".post .post-content a.fancybox.image",
                ].join(","),
                function (dom) {
                    if (dom && dom.href && dom.href.endsWith(".jpg")) {
                        return dom.href
                    }
                }
            )
        );

        return o;
    },
    host: "hustlepress.co.jp"
};
