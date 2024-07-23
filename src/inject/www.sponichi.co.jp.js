const utils = require("../utils.js");
function getLargeImg(url) {
    if (url.indexOf("_thum.") > -1) {
        url = url.replaceAll("_thum.", "_view.");
    }

    if (url.indexOf(".jpg/r.") > -1) {
        let comps = url.split("/");
        comps.pop();
        url = comps.join("/");
    }

    return url;
}
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();

        for (const selector of [
            "main article figure[data-component=photo-detail] img", // article
            "div[data-component=photo-carousel] .flickity-slider figure img",
            "div[data-block=article] div[data-component=article-body] figure a img",
            "div[data-block=article] div[data-component=article-body] > div > img"
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
    host: "www.sponichi.co.jp"
};
