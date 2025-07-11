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
            "main article img",
            "main .gallery_kv img",
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    filters.first(
                        function (url) {
                            if (!url.endsWith(".svg")) {
                                return url;
                            }
                        }
                    ).then(
                        toFull,
                        getYoutubeImgMaxRes,
                        utils.removeTrailingResolutionNumbers
                    )

                )
            );
        }

        for (const selector of [
            "main article .article_kv div > p",
            "main .gallerySlider a > div > p", // get background images of slider p
        ]) {
            utils.pushArray(o.images,
                utils.findDomsWithCssSelector(
                    document,
                    selector,
                    filters.first(
                        utils.getBackgroundImageFromDOM
                    ).then(
                        toFull,
                        getYoutubeImgMaxRes,
                        utils.removeTrailingResolutionNumbers
                    )
                )
            );
        }

        return o;
    },
    host: "bezzy.jp",
};
