const utils = require("../utils.js");
const re = /^http.*cancam\.jp\/.*uploads\/.*-[0-9]+x[0-9]+\.jpg$/;
const getLargeImg = function (src) {
    if (src.match(re)) {
        var l = src.split("-");
        l.pop();
        return l.join("-") + ".jpg";
    }

    return src;
};
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        if (window.location.pathname.match(/\/archives\/category\/(model|itgirl)\/.+/)) {
            utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".profile-header img", getLargeImg));
            utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".profile-content img", getLargeImg));
            utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".profile-images img", getLargeImg));
        } else if (window.location.pathname.match(/\/archives\/[0-9]+$/)
            || window.location.pathname.match(/\/medias\/.+$/)
            || window.location.pathname.match(/^\/[a-z0-9]+$/)) {
            utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "#main img", getLargeImg));
        }
        return o;
    },
    host: "cancam.jp"
};
