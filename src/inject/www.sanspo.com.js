const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            ".article-body figure.article__image img", // article top image
            ".gallery-image-wrapper .gallery-figure img", // gallery main image
            ".main-image-container img", // gallery main
            ".gallery-horizontal-scroll img", // gallery scroll
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    function (url) {
                        const re = /https:\/\/www\.sanspo\.com\/resizer\/.+(\/cloudfront-.*\.jpg)/;
                        const m = url.match(re);
                        if (m) {
                            return "https:/" + m[1];
                        }
                        return url;
                    })
            );
        }
        return o;
    },
    host: "www.sanspo.com"
};
