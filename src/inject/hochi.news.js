const utils = require("../utils.js");
function inject() {
    const o = require("./return-message.js").init();
    
    for (const selector of [
        "main .article__content .article-side_photo picture img", // top image
        "main .article__content .thumb__item picture img", // thumbnail image
        "main .gallery_order__item picture img", // thumbnail image
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(document, selector, function(url){
                return url.replace(/-[NT]\.(jpg|webp)$/, '-L.$1');
            })
        );
    }

    return o;
};

module.exports = {
    host: "hochi.news",
    inject: inject,
};
