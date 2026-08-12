const utils = require("../utils.js");
function inject() {
    const o = require("./return-message.js").init();
    
    for (const selector of [
        ".l-main .content_img figure img", // top image
        ".l-main .content_body p img", // top image
        ".l-main .content_body .gallery img", // gallery image
        ".l-main .content_other li img", // gallery image
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(document, selector, utils.removeQuery)
        );
    }

    return o;
};

module.exports = {
    host: "jmagazine.myjcom.jp",
    inject: inject,
};
