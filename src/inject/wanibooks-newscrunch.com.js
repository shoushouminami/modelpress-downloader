const utils = require("../utils.js");
function getLargeImg(url) {
    let arr = url.split("/");
    let re = /^\d+m$/;
    if (arr[arr.length - 2].match(re)) {
        arr[arr.length - 2] = "-";
    }

    return arr.join("/");
}

const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "article .article-header .c-img img", // header image
        "article .article-photo .c-img img", // slider image
        "article .article-body img.main-image", // article image
        ".article-viewer-wrap .slick-slider .slick-list .slick-slide img", // slider
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                getLargeImg)
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "wanibooks-newscrunch.com",
    getLargeImg: getLargeImg
};
