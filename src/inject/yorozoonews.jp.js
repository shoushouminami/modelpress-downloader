const utils = require("../utils.js");
const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "#main .module-article-header-photo img", // article top image
        "#main .slick-slide img", // article slider images
        "#main .module-article-photo img", // gallery top image
        "#main .module-article-header-photo-thumbs__item img", // gallery slider images
    ]) {
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                selector,
                function (url) {
                    const re = /^.*(_\d+px)\.(jpg|jpeg|png)/i;
                    let m = url.match(re);
                    if (m) {
                        url = url.replace(m[1], "");
                    }

                    if (url.endsWith("thumbs_filler.jpg")) {
                        return null;
                    }

                    return url;
                })
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "yorozoonews.jp"
};
