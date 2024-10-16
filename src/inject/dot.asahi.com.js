const utils = require("../utils.js");
const {removeMwimgsSize} = require("../utils/url-utils");
function getLargeImg(url) {
    if (url.indexOf("common/images") > -1) {
        return null;
    }
    return removeMwimgsSize(utils.removeDataUrl(url));
}
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "main .splide-gallery-list .splide-gallery-list__item.is-active img", // gallery activate image
            "main .splide-thumbnails-list .splide-thumbnails-list__item img", // gallery image thumbnail
            "main .article-body .image-area img", // gallery image thumbnail
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
    host: "dot.asahi.com"
};
