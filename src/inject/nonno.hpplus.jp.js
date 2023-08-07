const utils = require("../utils.js");
function getLargeImg(url) {
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
            // top image
            "div.main div.section div.content_area div.article div.part .image figure div img",
            // images in content
            "div.main div.section div.content_area div.article div.part div.html center img",
            // magazine trial
            "div.main div.section div.module div.slider_magazine_wrap div img"

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
