const utils = require("../utils.js");
const getLargeImg = (url) => {
    return utils.removeDataUrl(utils.removeTrailingResolutionNumbers(utils.removeQuery(url)));
};
const inject = function () {
    let o = require("./return-message.js").init();
    utils.pushArray(
        o.images,
        utils.findImagesWithCssSelector(
            document,
            [
                // main post image
                "main .etb-single--eyecatchThumb img",
                // main image and thumbnail
                "main .etb-single--eyecatch .etb-single--eyecatchThumbs img",
                // article end thumbnails
                // "main .etb-single--relationphoto a div img",
            ].join(","),
            getLargeImg
        )
    );

    if (document.querySelector(".etb-container--photo") == null) {
        // news page
        utils.pushArray(
            o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    "main .etb-single--relationphoto a div img",
                ].join(","),
                getLargeImg
            )
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "e-talentbank.co.jp"
};
