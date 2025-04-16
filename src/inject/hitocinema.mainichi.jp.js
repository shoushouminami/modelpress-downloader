const utils = require("../utils.js");
function getLargeImg(url) {
    return utils.removeQuery(url);
}
function inject() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "main .main-container .image-wrap picture img ", // article top image
        "main .main-container .content-body picture img", // article body
        "main .main-container .article-gallery img", // article gallery
        "main .main-container .photo-gallery picture img", // gallery page 
        
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
    host: "hitocinema.mainichi.jp"
};
