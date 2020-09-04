const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message").init();
    // article images
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "#contents #main main section .detailSec figure img")
    );
    // image gallery main image
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "#contents #main main section .detailSec .img4 img")
    );
    // image gallery
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "#contents #main main section .detailSec ul li img")
    );
    return o;
};

module.exports = {
    host: "www.news-postseven.com",
    inject: inject,
};
