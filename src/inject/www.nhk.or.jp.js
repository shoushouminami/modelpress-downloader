const utils = require("../utils.js");
const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "#main #center .entry:nth-child(2) img",
        // "#main #center div div > img",
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                function (url) {
                    if (!(url.endsWith(".jpg") || url.endsWith(".JPG")
                        || url.endsWith(".jpeg") || url.endsWith(".JPEG"))) {
                        return null;
                    }
                    return url;
                }
            )
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "www.nhk.or.jp"
};
