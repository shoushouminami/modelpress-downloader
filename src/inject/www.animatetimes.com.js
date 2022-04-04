const utils = require("../utils.js");
const globals = require("../globals");
const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        ".l-content .c-image-kv img", // top image
        ".l-article img.article-image", // article image
        ".l-article p img", // article image
        ".l-article .img img", // article image
        ".l-article .c-image-a img", // image page top image
        ".l-article img.c-image-a", // image page all images
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector)
        );
    }

    o.folder = o.folder.split("/", 2)[0] + "-" + globals.getSearchParamValue("id") + "/";

    return o;
};

module.exports = {
    inject: inject,
    host: "www.animatetimes.com"
};
