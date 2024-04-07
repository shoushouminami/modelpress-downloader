const utils = require("../utils.js");
const inject = function() {
    let o = require("./return-message.js").init();
    for (const selector of [
        ".blogposting-articles .article-text img",
        // "#main #center div div > img",
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector
            )
        );
    }
    const divDOMs = utils.findDomsWithCssSelector(document, "#main #center div.entry", function (divDOM) {
        const h2Divs = utils.findDomsWithCssSelector(divDOM, "h2", function (h2Div) {
            if (h2Div.innerText.indexOf("らじらー！サンデー") > -1) {
                return h2Div;
            }
        });

        if (h2Divs.length > 0) {
            return divDOM;
        }
    });

    if (divDOMs.length > 0) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                divDOMs[0],
                "img",
                function (url) {
                    if (!(url.endsWith(".jpg") || url.endsWith(".JPG")
                        || url.endsWith(".jpeg") || url.endsWith(".JPEG"))) {
                        return null;
                    }
                    return url;
                }
            )
        );
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "www.nhk.or.jp",
    altHosts: ["www.nhk.jp"],
    hidden: true
};
