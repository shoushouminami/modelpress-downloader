const utils = require("../utils.js");
function getLargeImg(url) {
    url = utils.removeTrailingResolutionNumbers(url);
    const parts = url.split("/");
    if (parts[3].match(/q=\d+,f=.+/)) {
        parts.splice(3, 1);
    }

    return parts.join("/");
}
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();

        for (const selector of [
            ".article .image figure img", // article
            ".wrap-content-normal .wrap-img-view .wrap-img img", //magzine
            ".wrap-content-normal .wp-block-image img", //new layout article

        ]) {
            utils.pushArray(
                o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg
                )
            );
        }
        return o;
    },
    host: "nonno.hpplus.jp"
};
