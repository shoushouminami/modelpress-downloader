const utils = require("../utils.js");
function getLargeImg(url) {
    const parts = url.split("https:")
    if (parts.length === 3) {
        url = "https:" + parts[2];
    }

    return utils.removeTrailingResolutionNumbers(url);
}
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "article .post_content img",
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg)
            );
        }
        return o;
    },
    host: "bltweb.jp"
};
