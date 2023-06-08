const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // special top image
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                [
                    "#main .row .blog-content img.aligncenter", // article images
                ].join(","),
                utils.removeTrailingResolutionNumbers)
        );

        return o;
    },
    host: "korepo.com",
};

