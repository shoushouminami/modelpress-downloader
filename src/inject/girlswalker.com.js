const utils = require("../utils.js");
const getLargeImg = function (url){
    if (url == null) {
        return null;
    }

    if (url.endsWith("/1x1.trans.gif")) {
        return null;
    }

    url = utils.removeTrailingResolutionNumbers(url);
    if (url.indexOf("://img.girlswalker.com/") > -1) {
        url = url.replace("://img.girlswalker.com/", "://girlswalker.com/");
    }

    return url;
};

const inject = function () {
    let o = require("./return-message").init();
    // in article images
    utils.pushArray(o.images,
        utils.findLazyImagesWithCssSelector(document,
            "article section .gw-content__entry-article p img",
            getLargeImg)
    );

    utils.pushArray(o.images,
        utils.findLazyImagesWithCssSelector(document,
            "article section .gw-content__entry-article span img",
            getLargeImg)
    );

    // thumbnail list at the end of article
    utils.pushArray(o.images,
        utils.findDomsWithCssSelector(document,
            "article.gw-content-wrap ul.gw-content__entry-thumbnail-list a div.gw-content__entry-thumbnail-list__item-image",
            function (dom){
                return getLargeImg(utils.getBackgroundImageFromDOM(dom));
            })
    );
    return o;
};

module.exports = {
    host: "girlswalker.com",
    inject: inject,
};

