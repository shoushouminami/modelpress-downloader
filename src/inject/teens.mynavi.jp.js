const utils = require("../utils.js");
const four04list = ["https://teens.mynavi.jp/main/files/20190621/story06122.jpg", "https://teens.mynavi.jp/main/files/20190621/profile0621.jpg"];

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

    if (url.startsWith("/")) {
        return window.location.origin + url;
    }

    if (four04list.includes(url)) {
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
    // report article single image
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "#contents section.container .challenge .p1 img", getLargeImg));

    return o;
};

module.exports = {
    inject: inject,
    host: "teens.mynavi.jp"
};
