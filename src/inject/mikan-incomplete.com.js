const utils = require("../utils.js");
const re = /http.*-[0-9]+x[0-9]+\.jpg$/;
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
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "article#entry img", getLargeImg));
        return o;
    },
    host: "mikan-incomplete.com"
};
