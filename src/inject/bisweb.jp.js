const utils = require("../utils.js");
const getLargeImg = function (url) {
    if (url.startsWith("data:")) {
        return null;
    }

    let m = url.match(/.*(-scaled)\.(jpg|jpeg)$/i)
    if (m && m[1]) {
        return {url: url.replace(m[1], ""), retries: [url]};
    }

    return {url: utils.removeTrailingResolutionNumbers(url), retries: [url]};
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(document,
                "main .single_left p img", getLargeImg)
        );
        return o;
    },
    host: "bisweb.jp",
    getLargeImg
};
