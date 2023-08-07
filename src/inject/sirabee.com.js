const utils = require("../utils.js");
const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        ".main .gallery-item img", // gallery image
        ".main .post .attachment img", // article image
        ".main p img", // article image
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
