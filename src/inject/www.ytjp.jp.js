const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message.js").init();
    utils.pushArray(o.images,
        utils.findLazyImagesWithCssSelector(
            document,
            "#content .entry-content img.size-full",
            null
        )
    );
    return o;
};

module.exports = {
    inject: inject,
    host: "www.ytjp.jp",
};
