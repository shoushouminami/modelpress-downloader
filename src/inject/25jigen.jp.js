const utils = require("../utils.js");
const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "#main article .news-thumb img", // top image
        "#main article .work-description img", // top image
        "#main #img-slider li img", // thumbnail images
    ]) {
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                selector,
                utils.removeTrailingResolutionNumbers)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "25jigen.jp"
};
