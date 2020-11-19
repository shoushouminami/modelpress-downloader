const utils = require("../utils.js");
const re = /^.*(\/w\d+\/)(h\d+\/)?.*$/;
const getLargeImg = function (src) {
    let m = src.match(re);
    if (m && m[1]) {
        let newSrc = src.replace(m[1], "/w1000/")
        if (m[2]) {
            newSrc = newSrc.replace(m[2], "");
        }

        return {url: newSrc, retries: [src]};
    }

    return src;
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    ".main_colum .entry .img_field_wrap a img"
                ].join(","),
                getLargeImg
            )
        );
        return o;
    },
    host: "girlsnews.tv",
    re: re
};
