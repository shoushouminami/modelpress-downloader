const utils = require("../utils.js");

function getLargeImg(url) {
    if (url == null) {
        return null;
    }

    keywords = ["uplcmn", "upload", "off_shot", "offshot", "artist_photo"];
    if (!keywords.some(v => url.includes(v))) {
        return null;
    }

    return url;
}

const inject = function () {
    let o = require("./return-message.js").init();
    for (const selector of [
        ".inner img", // content photos
    ]) {
        utils.pushArray(
            o.images,
            utils.findLazyImagesWithCssSelector(document, selector, getLargeImg)
        );
    }

    utils.pushArray(o.images,
        utils.findDomsWithCssSelector(document,
            [
                ".ldhOffShotList a", // offshot photo
                ".item__image a", // offshot photo legacy
            ].join(","),
            function (dom) {
                if (dom && dom.href) {
                    return dom.href
                }
            }
        )
    );

    return o;
};

module.exports = {
    inject: inject,
    host: "m.ex-m.jp",
    hidden: true
};
