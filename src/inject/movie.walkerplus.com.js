const utils = require("../utils.js");
const getLargeImg = function (url) {
    if (url) {
        url = utils.removeQuery(url) + "?w=2048";
    }

    return url;
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // in article images
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                [

                    "main .p-newsDetail-article-block figure a img",
                ].join(","),
                getLargeImg)
        );

        // article end thumbnails
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(document,
                [

                    "main .p-newsDetail-images .p-newsDetail-images__item a",
                ].join(","),
                function (dom){
                    let a = getLargeImg(utils.getDomBackgroundImage(dom));
                    return a;
                })
        );

        // moive page images
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                [

                    "#main #photoLists a img",
                ].join(","),
                getLargeImg)
        );

        o.ext = "jpg";
        return o;
    },
    host: "movie.walkerplus.com",
    getLargeImg: getLargeImg
};
