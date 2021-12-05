const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "main .article-body .storyImg img", // article image
            "main .article-body figure img", // image page top image
            "main .article-body .article-imagepage-gallery img", // image page thumbnail image
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(document, selector, function (url){
                    if (url.indexOf("i=https%253A%252F%252F") > -1) {
                        try {
                            let arr = url.split("/").pop().split(",");
                            for (const i of arr) {
                                if (i.startsWith("i=")) {
                                    return decodeURIComponent(decodeURIComponent(i.split("=", 2)[1]));
                                }
                            }
                        }catch (ignored) {}
                    }
                    return url;
                })
            );
        }
        return o;
    },
    host: "www.excite.co.jp"
};
