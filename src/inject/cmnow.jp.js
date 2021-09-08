const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "#content article img.wp-post-image", //article images
            "#content .entry-attachment .attachment__imageList img", //photo thumbnails
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(document, selector, function (url) {
                    let original = url;
                    url = utils.removeTrailingResolutionNumbers(url);
                    let dotPos = url.lastIndexOf(".");
                    let ext = "";
                    if (dotPos > -1) {
                        ext = url.substring(dotPos, url.length); // ".jpg"
                        url = url.substring(0, dotPos);
                    }

                    if (url.endsWith("-scaled")) {
                        url = url.replaceAll("-scaled", "");
                    }

                    return url + ext;
                })
            );
        }
        return o;
    },
    host: "cmnow.jp"
};
