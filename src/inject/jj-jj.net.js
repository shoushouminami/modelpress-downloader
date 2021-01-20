const utils = require("../utils.js");
const re = /^https:\/\/.*\/[0-9A-Z-_]+(-e\d+)\.(jpg|png|jpeg)$/i;
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(document,
                [
                    "#content #main article .page-content > img", // article page images
                    "#content #main article .page-content .box img", // article page images
                    "#content #main article .page-content .slider-content .slides img", // slider images
                ].join(","),
                function (imgDom) {
                    let url;
                    if (imgDom && imgDom.srcset) {
                        url = imgDom.srcset.split(",")[0].split(" ")[0];
                    } else if (imgDom && imgDom.src) {
                        url = imgDom.src;
                    }

                    if (url) {
                        if (url.endsWith(".svg")) {
                            return null;
                        }

                        let retries = [url];
                        url = utils.removeTrailingResolutionNumbers(url);
                        const m = url.match(re);
                        if (m) {
                            utils.pushIfNew(retries, url);
                            url = url.replace(m[1], "");
                        }

                        return {url: url, retries: retries.reverse()};
                    }
                }
            )
        );

        return o;
    },
    host: "jj-jj.net"
};
