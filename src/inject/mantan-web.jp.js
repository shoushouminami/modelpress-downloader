const utils = require("../utils.js");
const getLargeImg = function(url) {
    let ext = null;
    if (url.endsWith("_thumb.jpg")) {
        ext = ".jpg";
    } else if (url.endsWith("_thumb.jpeg")) {
        ext = ".jpeg";
    } else if (url.endsWith("_thumb.png")) {
        ext = ".png";
    }

    if (ext !== null) {
        let ret = {url: url.replace("_thumb" + ext, "_size10" + ext), retries: []};
        for (let i = 9; i >= 6; i--) {
            ret.retries.push(url.replace("_thumb" + ext, "_size" + i + ext));
        }

        return ret;
    }

    return url;
};
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "article .newsbody__thumblist li img", getLargeImg));
        return o;
    },
    host: "mantan-web.jp"
};
