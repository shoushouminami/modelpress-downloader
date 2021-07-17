const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message").init();
    // article images
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "main article .wp-caption img")
    );
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "main article p img")
    );
    return o;
};

module.exports = {
    host: "8760.news-postseven.com",
    inject: inject,
};
