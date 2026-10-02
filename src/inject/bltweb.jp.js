const utils = require("../utils.js");
function getLargeImg(url) {
    const parts = url.split("https:")
    if (parts.length === 3) {
        url = "https:" + parts[2];
    }

    if (url.endsWith("-scaled.jpg")) {
        url = url.replace("-scaled.jpg", ".jpg");
    }

    url = utils.removeTrailingResolutionNumbers(url);
    return utils.removeQuery(url);
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
