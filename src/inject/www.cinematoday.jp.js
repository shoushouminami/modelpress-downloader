const utils = require("../utils.js");
const re = /^http.*img\.cinematoday\.jp\/.*\/(_size_[^\/]+\/).*\.(jpg|png)$/i;
const getLargeImg = function (src) {
    if (src.match(re)) {
        let g1 = src.match(re)[1];
        if (g1)
        return src.replace(g1, "");
    }

    return src;
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const query of [
            "div.col-main main article figure.img-box img",
            "div.col-main main div.photo-square .feed-item div div img",
            "div.col-main div.box div.item img",
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    query,
                    getLargeImg
                )
            );
        }
        return o;
    },
    host: "www.cinematoday.jp",
    re: re,
    getLargeImg: getLargeImg
};
