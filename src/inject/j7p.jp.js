const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message").init();
    // article images
    for (let selector of [
        "main article .wp-caption img",
        "main article p img"
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector
            )
        );
    }
    return o;
};

module.exports = {
    host: "j7p.jp",
    inject: inject,
};
