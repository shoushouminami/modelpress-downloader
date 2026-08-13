const utils = require("../utils.js");
const getLargeImg = function (url) {
    const re = /https:\/\/www\.sanspo\.com\/resizer\/.+(\/cloudfront-.*\.jpg)/;
    const m = url.match(re);
    if (m) {
        return "https:/" + m[1];
    }

    const re2 = /https:\/\/www\.sanspo\.com\/resizer\/v2(\/.*\.jpg)\?.*/;
    const m2 = url.match(re2);
    if (m2) {
        return "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei" + m2[1];
    }

    return url;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            ".article-body figure.article__image img", // article top image
            ".gallery-image-wrapper .gallery-figure img", // gallery main image (older template)
            ".gallery-image-wrapper .embla__slide__number img", // gallery main image (embla carousel template).
            // Scoped to .embla__slide__number (not .embla-thumbs__slide__number) to avoid
            // duplicate hits from the accompanying thumbnail-strip carousel, which mirrors
            // the same images under .embla-thumbs within the same .gallery-image-wrapper.
            ".main-image-container img", // gallery main
            ".gallery-horizontal-scroll img", // gallery scroll
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg
                )
            );
        }
        return o;
    },
    host: "www.sanspo.com"
};
