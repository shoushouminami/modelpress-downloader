const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "#main_content .post_content figure img",
            "#main_content figure.p-articleThumb img",
            "#main_content .post_content > p > a > img", // article top image
            "#main_content .post_content .picturecontainer2 img", // article images
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(document, selector, function (url) {
                    if (url.endsWith("CDicon2.jpeg") || url.endsWith("CDicon.jpeg") || url.endsWith(".svg") 
                        || url.indexOf("img.youtube.com") > -1) {
                        return null;
                    }
                    return utils.removeTrailingResolutionNumbers(url);
                })
            );
        }
        return o;
    },
    host: "entameclip.com"
};
