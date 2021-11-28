const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message").init();
    // article images
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "article #contents #main main section .detailSec .wp-editor figure img")
    );
    // image gallery main image
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "#contents #main main section .detailSec .img4 .img img")
    );
    // image gallery
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "#contents #main main section .detailSec ul.img5 li a img")
    );

    // Updated UI 2021-11-28
    for (const selector of [
        "main article .c-PhotoImage img", //image page
        "main article .c-Figure img", //article images
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                utils.removeTrailingResolutionNumbers)
        );
    }

    return o;
};

module.exports = {
    host: "www.news-postseven.com",
    inject: inject,
};
