const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "main article .attachment img", //picture page top image
            "main article .picturecontainer .picturecontainer-item .picturecontainer-item-img img", //picture page thumbnails
            "main article .entry-content img.size-large", // news article top image
            "main article .entry-content img.size-full", // news article body images
            "main article .entry-content img.size-thumbnail", // news article thumbnail images
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(document, selector, utils.removeTrailingResolutionNumbers)
            );
        }
        return o;
    },
    host: "entameclip.com"
};
