const utils = require("../utils.js");
const getLargeImg = function (url) {
    if (url.endsWith(".gif")) {
        return null;
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
                    "#content_main .news_text img",
                    ".pic img",
                ].join(","),
                getLargeImg)
        );

        return o;
    },
    host: "kt.wowkorea.jp",
};
