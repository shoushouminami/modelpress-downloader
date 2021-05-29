const utils = require("../utils.js");
function getLargeImg(url) {
    return url;
}

const inject = function () {
    let o = require("./return-message.js").init();

    for (const selector of [
        "main .l-column-left .c-single img", // single image on article preview, top image on image details
    ]) {
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document, selector, getLargeImg)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "news.merumo.ne.jp",
};
