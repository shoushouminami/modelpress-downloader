const utils = require("../utils.js");
const getLargeImg = (url) => {
    if (url.endsWith(".jpg")) {
        return url.replace(".jpg", "l.jpg");
    }
    return url;
};
const inject = function () {
    let o = require("./return-message.js").init();
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main.main article.article div.article-body ul.photo_table img.photo_table__img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main.main div.box ul li a img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main.main article.article div.article-body div.photo_right img.photo_right__img"));
    return o;
};

module.exports = {
    inject: inject,
    host: "news.mynavi.jp"
};
