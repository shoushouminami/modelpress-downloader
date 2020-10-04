const utils = require("../utils.js");
const re = /^http[s]?:\/\/contents\.7gogo\.jp\/stamp\/.*\.png$/i;
const filterStamps = function (url) {
    if (url && url.match(re)) {
        return null;
    }

    return url;
};
const inject = function () {
    let o = require("./return-message.js").init();
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "section main ul li article div div main div img", filterStamps));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "section main ul li article div div blockquote section div div img", filterStamps));
    return o;
};

module.exports = {
    inject: inject,
    host: "7gogo.jp",
    re: re,
    hidden: true
};
