const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            ".post-content__body img", // article images
            "#SITE_PAGES img", // magazine images
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(document, selector, function (url){
                    if (url.indexOf(".jpg/") > -1) {
                        return url.split(".jpg/")[0] + ".jpg";
                    }
                    if (url.indexOf(".png/") > -1) {
                        return url.split(".png/")[0] + ".png";
                    }
                    return url;
                })
            );
        }
        return o;
    },
    host: "www.loveteen.jp"
};
