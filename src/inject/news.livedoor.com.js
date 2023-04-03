const utils = require("../utils.js");
function getLargeImg(url) {
    let urls = url.split("://");
    if (urls.length > 2) {
        url = "https://" + urls[urls.length - 1];
    }

    // replace "-m.jpg" or "-s.jpg" with ".jpg"
    if (url.endsWith("-m.jpg") || url.endsWith("-s.jpg")) {
        url = url.substring(0, url.length - 6) + ".jpg";
    }

    if (url.endsWith("-m.png") || url.endsWith("-s.png")) {
        url = url.substring(0, url.length - 6) + ".png";
    }

    return url;
}

const inject = function () {
    let o = require("./return-message.js").init();

    for (const selector of [
        "#main .mainBody .imageFigure img", // single image on article preview, top image on image details
        "#main .mainBody .imageList .imageListFigure img",
        "#main .articleBody img",
    ]) {
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document, selector, getLargeImg)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "news.livedoor.com",
};
