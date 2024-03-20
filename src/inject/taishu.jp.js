const utils = require("../utils.js");
const urlUtils = require("../utils/url-utils");
const re = /https?:\/\/.*\/mwimgs\/.*\/(\d+w?m?)\/img_[a-z0-9]+\.jpg/i
function getLargeImg(url) {
    if (url.indexOf("/common/images/icons/") > -1) {
        return null;
    }

    let newUrl = urlUtils.removeMwimgsSize(url);
    if (newUrl !== url) {
        return {url: newUrl, retries: [url]};
    }

    return newUrl;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    "main article.article-body figure img", // main image
                    "main article.article-body .thumbs img", // thumbnails in article
                ].join(","),
                getLargeImg
            )
        );
        return o;
    },
    host: "taishu.jp",
    re: re,
};
