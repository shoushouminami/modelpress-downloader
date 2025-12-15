const utils = require("../utils.js");

function inject () {
    let o = require("./return-message.js").init();
    for (const selector of [
            "main header figure img", // top image
            "main article .content figure img", // article image
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
    host: "mizugazo.com",
    hidden: true
};
