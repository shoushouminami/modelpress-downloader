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
                function (url) {
                    return utils.removeTrailingResolutionNumbers(utils.removeQuery(url));
                })
        );

        return o;
    },
    host: "korepo.com",
};

