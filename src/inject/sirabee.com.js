const utils = require("../utils.js");
const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        ".article p img.size-large", // article top image
        ".gallery .galleryCarousel_imagee img", // article image thumbnails
        ".article .attachment img", // gallery top image
        ".article .gallery-item img", // gallery top image
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                utils.removeTrailingResolutionNumbers)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "sirabee.com"
};
