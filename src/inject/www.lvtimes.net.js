const utils = require("../utils.js");
function getLargeImg(url) {
    return url;
}

const inject = function () {
    let o = require("./return-message.js").init();

    for (const selector of [
        "#main article .entry-content img", // single image on article preview, top image on image details
    ]) {
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document, selector, getLargeImg)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "www.lvtimes.net",
};
