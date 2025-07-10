const utils = require("../utils.js");
const getLargeImg = function (url) {
    if (url.indexOf("static%2Fmedia") > -1 && url.indexOf("static%.png")) {
        return null;
    }
    
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
            "body > div > div > div > div > div > img", // article top image
            "#postContents .image-block img", // article images
            "#postContents .row-image-col img",
            "#postContents .profile-image img", //profile-image
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
