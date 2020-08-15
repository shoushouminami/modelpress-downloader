const utils = require("../utils.js");
const getLargeImg = function(url) {
    let m = url.match(/^.*(_thumb|_size\d{1,2})(.jpg|.jpeg|.png)$/i)
    let ext = m[2]
    if (ext) {
        let ret = {url: url.replace(m[1] + ext, "_size10" + ext), retries: []};
        for (let i = 9; i >= 6; i--) {
            ret.retries.push(url.replace(m[1] + ext, "_size" + i + ext));
        }

        return ret;
    }

    return url;
};
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // image gallery and article with more than 1 image
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "article .newsbody__thumblist li img", getLargeImg));
        // article with 1 image
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "article .newsbody__img img", getLargeImg));
        return o;
    },
    host: "mantan-web.jp",
    getLargeImg: getLargeImg
};
