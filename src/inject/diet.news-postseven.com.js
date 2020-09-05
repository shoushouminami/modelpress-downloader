const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message").init();
    // article images
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "#content #main article .entry-content .wp-caption img")
    );
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "#content #main article .entry-content p img")
    );
    return o;
};

module.exports = {
    host: "diet.news-postseven.com",
    inject: inject,
};
