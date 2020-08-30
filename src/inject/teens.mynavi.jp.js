const utils = require("../utils.js");
// const downloader = require("../downloader")

const getLargeImg = (url) => {
    if (url.startsWith("https://teens.mynavi.jp/main/im.php?")) {
        try {
            let u = new URL(url);
            if (u.searchParams.has("src")) {
                url = u.searchParams.get("src");
            }
        } catch (e) {
        }
    }

    if (url.endsWith(".png")) {
        return null;
    }

    return url;
};

const inject = function () {
    // downloader.cancelDownloadIfNotImage()
    //disable
    let o = require("./return-message.js").init();
    // challenge article images
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "#contents section.container .detail :not(fieldset) p img", getLargeImg));
    // report article images
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "#contents section.container .challenge :not(fieldset) p img", getLargeImg));
    return o;
};

module.exports = {
    inject: inject,
    host: "teens.mynavi.jp"
};
