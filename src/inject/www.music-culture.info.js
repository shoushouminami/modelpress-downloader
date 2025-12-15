const utils = require("../utils.js");

function getLargeImg(url) {
    const m = url.match( /.*\/transf\/(dimension=\d+x\d+:).*/);
    if (m) {
        return {
            url: url.replace(m[1], ""),
            thumbnail: url
        };
    }
    return url;
}

function inject () {
    const o = require("./return-message.js").init();
    for (const selector of [
            ".post > div[id^='cc-matrix-'] .cc-imagewrapper img" , // article image
        ".post > div[id^='cc-matrix-'] .cc-m-gallery-container img", // gallery image
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg)
            );
        }
    return o;
};

module.exports = {
    inject: inject,
    host: "www.music-culture.info",
};
