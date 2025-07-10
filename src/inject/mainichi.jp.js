const utils = require("../utils.js");
function getLargeImg(url) {
    if (url == null || url.endsWith(".svg")) {
        return null;
    }

    return utils.removeQuery(url);
}
function inject() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "article #articledetail-body figure img ", // article images
        "article #photo-body .thumbphotolist-main-list .swiper-slide img ", // slider images
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                getLargeImg
            )
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "mainichi.jp",
};
