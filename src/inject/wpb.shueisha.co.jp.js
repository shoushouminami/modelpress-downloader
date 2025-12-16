const utils = require("../utils.js");
const { toFull, filters } = require("../utils/url-utils");

function getLargeImg(url) {
    if (url.indexOf("4375d21660a17e6b0e50d5402d16cb885ab42bd1.jpg") > 1 || url.indexOf(".svg") > -1) {
        return null;
    }
    return toFull(url);
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "main .block-detail-a-a__body img", // article image
            "main .block-detail-a-d__body img", // article image
            "main .body-entry-a__document img", // article image
            "main .block-layout-c-a__container img", // comic article image
            "main .block-carousel-a-b__list__item img", // article gallery image
        ]) {
            utils.pushArray(o.images, utils.findLazyImagesWithCssSelector(document, selector, getLargeImg));
        }

        // lookup <source> DOM
        for (const selector of [
            "main .body-gravure-a__pict source", // article gallery image
            "main .carousel-gallery-b .carousel-gallery-b__list .carousel-gallery-b__list__item source", // article gallery image
            "main .body-comic-a__pict source", // comic article top image
        ]) {
            utils.pushArray(o.images,
                utils.findDOMsWithCssSelector(
                    document,
                    selector,
                    filters.chain(
                        utils.getLazyImageFromDOM, 
                        toFull
                    )
                )
            );
        }

        return o;
    }, host: "wpb.shueisha.co.jp"
};
