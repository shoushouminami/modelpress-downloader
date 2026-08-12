const utils = require("../utils.js");
const {toFull} = require("../utils/url-utils.js");
const { getFolderNameFromTitle } = require("../utils/filename-utils.js");

function inject() {
    let o = require("./return-message.js").init();
    for (const selector of [
        "main .main img", // top image
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                function (url) {
                    return url && toFull(url);
                })
        );
    }

    o.folder = getFolderNameFromTitle({ keepSpace : true});
    o.ext = "jpg";

    return o;
}

module.exports = {
    inject: inject,
    host: "luckyfes.com"
};
