const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            ".main .content .top picture img", //top image
            ".main .content .subs .sub picture img", //top image
            ".main .content .header_image picture img", //blogs header image
            ".main .content .summary picture img", //blogs body image
            // new layout 2024.12
            "main article .article-header-image picture img", // top image
            "main article .article-body .article-block-image img", // article images
            "main article .article-body figure img", // article images
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(document, selector, function (src){
                    return utils.removeQuery(src);
                })
            );
        }
        return o;
    },
    host: "seventeen-web.jp"
};
