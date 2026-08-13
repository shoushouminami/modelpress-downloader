const utils = require("../utils.js");

// mod_pagespeed rewrites some thumbnail urls by appending ".pagespeed.<filter>.<hash>.jpg"
// after the (already resized) filename, e.g.
// ".../SK00-150x150.jpg.pagespeed.ce.KA2eyolL6b.jpg" -> ".../SK00-150x150.jpg"
const pagespeedSuffixPattern = /\.pagespeed\.[a-z]{2}\.[^.\/]+\.(jpg|jpeg|png)$/i;

function filterImage(src) {
    if (src == null) return src;
    // slider thumbnails are served as WordPress resize variants (e.g. "-150x150.jpg"), sometimes
    // additionally rewritten by mod_pagespeed, of the same full-size images already picked up by
    // the mainimage/article selectors; strip both suffixes so pushArray's dedup collapses them
    // into the single full-size url.
    const result = src.match(pagespeedSuffixPattern);
    if (result) {
        src = src.replace(result[0], "." + result[1]);
    }
    return utils.removeTrailingResolutionNumbers(src);
}

const inject = function () {
    let o = require("./return-message").init();
    for (const selector of [
        "#main .single_container .single_mainimage img",
        "#main .single_container .article p a img",
        "#main .single_container .article .slider li a img",
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                filterImage)
        );
    }
    return o;
};

module.exports = {
    host: "www.wws-channel.com",
    inject: inject,
    url: "http://www.wws-channel.com/"
};
