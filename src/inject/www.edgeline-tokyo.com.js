const utils = require("../utils.js");
const getLargeImg = function (url) {
    return {url: utils.removeTrailingResolutionNumbers(url), retries: [url]};
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // images in article
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                "#main article #the-content .image img", getLargeImg)
        );
        return o;
    },
    host: "www.edgeline-tokyo.com",
    url: "http://www.edgeline-tokyo.com/"
};
