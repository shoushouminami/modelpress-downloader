const utils = require("../utils.js");
const urlUtils = require("../utils/url-utils");
function getLargeImg(url) {
    //https://arweb.ismcdn.jp/mwimgs/a/5/650mw/img_a51243ea92baaa94cd74edae5642ac25191202.jpg
    let newUrl = urlUtils.removeMwimgsSize(utils.removeDataUrl(url));
    if (newUrl) {
        return {
            url: newUrl,
            retries: (newUrl === url ? [] : [url])
        }
    }
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                [
                    ".top-column .top-column__img", // top image on home page
                    ".l-main .--gallery img.article-gallery__img", // photo page showing
                    ".l-main .--gallery .article-thumb img", //  photo page  thumbnail
                    "article .article-header img.article-header__img", // article header
                    "article .article-body img.main-image", // article body main image
                    "article .article-body img.alignnone", // article body in article images
                    "article .article-thumb-layout img.article-thumb__img", // article bottom thumbnail images
                ].join(","),
                getLargeImg
            )
        );
        return o;
    },
    host: "ar-mag.jp"
};
