const utils = require("../utils.js");
const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "main .contents .post .postBody img", // top image
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                function (url) {
                    if (url == null || url.split("?")[0].endsWith(".gif")) {
                        return null;
                    }

                    url = utils.removeTrailingResolutionNumbers(url);

                    if (url.endsWith("-scaled.jpg")) {
                        url = url.replace("-scaled.jpg", ".jpg");
                    }

                    return url;
                })
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "sweetweb.jp"
};
