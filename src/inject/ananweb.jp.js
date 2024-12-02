const utils = require("../utils.js");
const getLargeImg = function (url) {
    return {
        url: utils.removeTrailingResolutionNumbers(url),
        retries: [url]
    };
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "article figure > img", // old contents
            "body > div > div > div > div > img", // article top image
            "#postContents img", // article images
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg)
            );
        }

        return o;
    },
    host: "ananweb.jp",
    altHosts: ["plus.ananweb.jp"]
};
