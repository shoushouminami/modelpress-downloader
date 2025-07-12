const utils = require("../utils.js");
const {filters, removeYoutubeImg, toFull, getYoutubeImgMaxRes} = require("../utils/url-utils.js");

function getFilters() {
    return filters.first(
        utils.getBackgroundImageFromDOM
    ).then(
        toFull,
        getYoutubeImgMaxRes,
        utils.removeTrailingResolutionNumbers
    );
}
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "main .ph > img",
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    filters.chain(
                        utils.removeGIF
                    )
                )
            );
        }

        for (const selector of [
            "main .ph > img",
        ]) {
            utils.pushArray(o.images,
                utils.findDOMsWithCssSelector(
                    document,
                    selector,
                    filters.first(
                        utils.getBackgroundImageFromDOM
                    ).then(
                        utils.removeGIF,
                    )
                )
            );
        }

        return o;
    },
    host: "bokuao.com",
    url: "https://bokuao.com/blog/list/1/0/"
};
