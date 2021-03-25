const utils = require("../utils.js");
const re = /^https:\/\/.*(=[a-z]\d+)$/;
const getLargeImg = function (url) {
    let m = url.match(re);
    if (m) {
        return url.replace(m[1], "");
    }

    return url;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // special top image
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    ".main article figure img"
                ].join(","),
                getLargeImg)
        );

        o.ext = "jpg";
        return o;
    },
    host: "trilltrill.jp",
};
