const utils = require("../utils.js");
const pattern = /^https?:\/\/.*(-scaled)\.(jpg|png)$/i;
const getLargeImg = function (url) {
    url = utils.removeQuery(url);
    let m = url.match(pattern);
    if (m) {
        return {
            url: url.replace(m[1], ""),
            retries: [url]
        };
    }

    return url;
}
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // article top image
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                "main header .c-thumb img",
                getLargeImg
            )
        );
        // article images
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                "main .c-post__body figure img",
                getLargeImg
            )
        );
        // gallery images
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                "main section ul .blocks-fujitv-gallery-item img",
                getLargeImg
            )
        );
        return o;
    },
    host: "www.fujitv-view.jp"
};
