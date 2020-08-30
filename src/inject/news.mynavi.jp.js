const utils = require("../utils.js");
const getLargeImg = (url) => {
    if (url.endsWith(".jpg") && !(url.endsWith("l.jpg"))) {
        return url.replace(".jpg", "l.jpg");
    }
    return url;
};
const inject = function () {
    let o = require("./return-message.js").init();
    // article images
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "article.article div.article-body ul.photo_table img.photo_table__img", getLargeImg));

    // single image on the right
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "article.article div.article-body div.photo_right img.photo_right__img", getLargeImg));

    // image gallery top
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".contents .magnify .magnifyBlock figure img", getLargeImg));
    // image gallery slide stack
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".slick-list .slick-track div a img", getLargeImg));
    return o;
};

module.exports = {
    inject: inject,
    host: "news.mynavi.jp"
};
