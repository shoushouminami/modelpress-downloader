const utils = require("../utils.js");
const getLargeImg = function (url) {
    let originalUrl = url;
    url = utils.removeQuery(url);
    let ext = url.substring(url.lastIndexOf(".") + 1, url.length);
    url = url.substring(0, url.lastIndexOf("."));
    if (!url.endsWith("/original")) {
        return {
            url: url.substring(0, url.lastIndexOf("/")) + "/original" + "." + ext,
            retries: [originalUrl]
        }
    }

    return {url: originalUrl};
};

const inject = function () {
    let o = require("./return-message.js").init();
    o.ext = "jpg";
    for (const query of [
        "#page_frame .head-img_box img", // header image
        "#page_frame article .image_frame img", // article images
        "#page_frame article .image_list_frame .image_list img", // article images
    ]) {
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                query,
                getLargeImg
            )
        );
    }
    return o;
};

module.exports = {
    inject: inject,
    host: "okmusic.jp"
};
