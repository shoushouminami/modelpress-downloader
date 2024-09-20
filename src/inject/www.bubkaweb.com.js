const utils = require("../utils.js");

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (let selector of [
            "#main .post .wp-block-image img", // article top image
            "#main .post .post_attachment_mainimg figure img", // article top image
            "#main .post .post_attachment_thumbnail li img", // article top image
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    utils.removeTrailingResolutionNumbers
                )
            );
        }
        return o;
    },
    host: "www.bubkaweb.com",
    altHosts: ["www.idol-culture.jp"],
    hidden: true
};
