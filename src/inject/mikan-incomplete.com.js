const utils = require("../utils.js");
const getLargeImg = function (url) {
    return {
        url: utils.removeTrailingResolutionNumbers(url),
        retries: [url]
    };
}
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // article top image
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                "#content main article .p-articleThumb img",
                getLargeImg
            )
        );
        // article images
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                "#content main article .wp-block-image img",
                getLargeImg
            )
        );
        // article images
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                "#content main article .post_content p a img",
                getLargeImg
            )
        );
        // gallery images
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                "#content main article .blocks-gallery-grid img",
                getLargeImg
            )
        );
        return o;
    },
    host: "mikan-incomplete.com"
};
