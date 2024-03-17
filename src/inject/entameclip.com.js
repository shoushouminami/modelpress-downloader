const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "main article .picturecontainer .picturecontainer-item .picturecontainer-item-img img", //picture page thumbnails
            "main article .entry-content .picturecontainer2 img", // news article top image
            "main article .entry-content .spotlight img", // news article top image
            ".entry-content p a img.size-large", // news article top image
            ".entry-content p a img.size-full", // news article top image
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(document, selector, function (url) {
                    if (url.endsWith("CDicon2.jpeg") || url.endsWith("CDicon.jpeg") || url.endsWith(".svg")) {
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
