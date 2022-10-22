const utils = require("../utils.js");

function getLargeImg(url) {
    if (url == null) {
        return null;
    }

    if (!url.includes("uplcmn")) {
        return null;
    }

    return url;
}

const inject = function () {
    let o = require("./return-message.js").init();
    for (const selector of [
        ".article .protectimg img", // article image
        ".blog-article .protectimg img" // blog article image
    ]) {
        utils.pushArray(
            o.images,
            utils.findLazyImagesWithCssSelector(document, selector, getLargeImg)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "m.ex-m.jp",
    hidden: true
};
