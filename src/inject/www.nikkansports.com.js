const utils = require("../utils.js");
const re = /^(https:\/\/www\.nikkansports\.com)?\/.*(-w\d+_)\d+\.(jpg|jpeg|png)$/i;
const getLargeImgFromDom = function (imgDom) {
    let url = utils.getDomBackgroundImage(imgDom);
    if (url) {
        return getLargeImg(url);
    }

    return url;
};

const getLargeImg = function (url) {
    if (url.endsWith("blank.gif")) {
        return null;
    }

    let m = url.match(re);
    if (m) {
        if (url.startsWith("/")) {
            url = window.location.origin + url;
        }
        return {url: url.replace(m[2], "-w1300_"), retries: [url]}
    }

    return url;
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();

        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(document,
                [
                    "#main .article-main .article-photo-area a img", // news article
                    "#main .article-photo .photo a img" // new images
                ]
                    .join(","),
                getLargeImgFromDom)
        );
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                [
                    "#main #bigPhoto .article-photo img" // single photo news
                ]
                    .join(","),
                getLargeImg)
        );

        for (const selector of [
            "#main #bigPhoto .article-photo img", // single photo news,
            "#main #news .live-photo_big img" // article photos
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg)
            );
        }

        return o;
    },
    host: "www.nikkansports.com",
    getLargeImgFromDom: getLargeImgFromDom
};
