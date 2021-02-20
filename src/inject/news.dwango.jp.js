const utils = require("../utils.js");
const getOriginalImg = function(url) {
    url = utils.removeQuery(url);

    var slash = url.lastIndexOf("/");
    if (slash > -1) {
        let smallFile = url.substring(slash + 1);
        if (smallFile.startsWith("sm_") || smallFile.startsWith("lg_")) {
            url = url.substring(0, slash + 1) + smallFile.replace(/sm_|lg_/, "");
        }
    }

    if (url.indexOf("://news-img.dwango.jp/") > -1) {
        return {url: url.replace("://news-img.dwango.jp/", "://green-img-news-dwango-jp-prod.s3.amazonaws.com/"), retries: [url]};
    }

    return url;
};
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".page-sub_img img.img_photo", getOriginalImg));
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".photolist .sec-item img", getOriginalImg));
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "#main > div.tc > .page-sub_img > img", getOriginalImg));
        return o;
    },
    host: "news.dwango.jp"
};
