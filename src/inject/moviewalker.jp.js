const utils = require("../utils.js");
const getLargeImg = function (url) {
    if (utils.removeQuery(url).endsWith("/temporaryImage.png")) {
        return null;
    }

    if (url) {
        url = utils.removeQuery(url) + "?w=2048";
    }

    return url;
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "main .ly_content_main_inner .un_newsDetail_head img", // article top image
            "main .ly_content_main_inner .un_newsDetail_content figure a img",  // in article images
            "main .un_newsDetail_pic .un_newsDetail_picListItem a img", // article end thumbnails
            "main .un_newsImages_tmb li a img", // image gallery page
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg)
            );
        }

        o.ext = "jpg";
        return o;
    },
    host: "moviewalker.jp",
    altHosts: ["press.moviewalker.jp"],
    getLargeImg: getLargeImg
};
