const utils = require("../utils.js");
const getLargeImg = function (url) {
    if (url.endsWith("/")) {
        return url.substring(0, url.length - 1);
    }
    if (url.endsWith("/small")) {
        return url.substring(0, url.length - 6);
    }
    return url;
};

const inject =  function() {
    let o = require("./return-message").init();
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.article-page main div.img-wrapper img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.article-page main div#other-attachments ul li div.thumb img", getLargeImg));

    o.ext = "jpg";
    return o;
};

module.exports = {
    host: "spice.eplus.jp",
    inject: inject
};

