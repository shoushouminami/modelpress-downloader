const utils = require("../utils.js");

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // article top image
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    "#main-contents > div > div > div > div > div > img",
                ].join(","),
                function (url) {
                    if (url.indexOf(".jpg") === -1) {
                        return null;
                    }

                    return url;
                }
            )
        );

        // in article image with fancy box
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(
                document,
                [
                    "#main-contents .article-div-for-image img",
                ].join(","),
                function (img) {
                    if (img.src && img.src.match(/^.*\/img\/pc\/detail\/btn\d+\.png$/)) {
                        return null;
                    }

                    if (img.parentElement &&
                        img.parentElement.nodeName === "A" &&
                        img.parentElement.href &&
                        img.parentElement.href.indexOf(".jpg") > -1) {
                        return img.parentElement.href;
                    }

                    return img.src;
                }
            )
        );

        return o;
    },
    host: "style.nikkei.com",
};
