const utils = require("../utils.js");
function getLargeImg(url) {
    let m = url.match(/^https:\/\/.*\/(w_\d+%2cc_limit\/).*\.(jpg|jpeg|png)$/i);
    if (m) {
        return url.replace(m[1], "");
    }

    return url;
}
const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "#mainArea .article-content .single__body__media img", // news article
        "main .article-content .cs2__mainvisual img", // feature page top image
        "main .article-content .single__body__media img", // feature page article images
        "section[data-test-id=\"ArticleBodyContent\"] div[data-test-id=\"PictureWrapper\"] img",
        "main article figure picture img"
    ]) {
        utils.pushArray(
            o.images,
            utils.findImagesWithCssSelector(
                document,
                selector,
            getLargeImg)
    );
    }


    return o;
};

module.exports = {
    inject: inject,
    host: "www.vogue.co.jp",
    getLargeImg: getLargeImg
};
