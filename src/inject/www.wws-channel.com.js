const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message").init();
    // // article image at top
    // utils.pushArray(o.images,
    //     utils.findImagesWithCssSelector(document,
    //         "#main .single_container .single_mainimage img")
    // );
    // // article images
    // utils.pushArray(o.images,
    //     utils.findImagesWithCssSelector(document,
    //         "#main .single_container .article p a img")
    // );
    for (const selector of [
        "#main .single_container .single_mainimage img",
        "#main .single_container .article p a img",
        "#main .single_container .article .slider li a img",
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector)
        );
    }
    return o;
};

module.exports = {
    host: "www.wws-channel.com",
    inject: inject,
    url: "http://www.wws-channel.com/"
};
