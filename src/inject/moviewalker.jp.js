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
        // article top image
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                [

                    "main .ly_content_main_inner .un_newsDetail_head img",
                ].join(","),
                getLargeImg)
        );

        // in article images
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                [

                    "main .ly_content_main_inner .un_newsDetail_content figure a img",
                ].join(","),
                getLargeImg)
        );

        // article end thumbnails
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                [

                    "main .un_newsDetail_pic .un_newsDetail_picListItem a img",
                ].join(","),
                getLargeImg)
        );

        // image gallery page
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                [

                    "main .un_newsImages_tmb li a img",
                ].join(","),
                getLargeImg)
        );

        o.ext = "jpg";
        return o;
    },
    host: "moviewalker.jp",
    getLargeImg: getLargeImg
};
