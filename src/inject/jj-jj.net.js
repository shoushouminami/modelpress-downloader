const utils = require("../utils.js");
const re = /^https:\/\/.*\/.*(-e\d{13})\.(jpg|png|jpeg)$/i;
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(document,
                [
                    "#content #main article .page-content img", // article page images
                    "#main #kv img", // weekly jjnet top image
                    "#main #postContent .c_image img", // weekly jjnet top image
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
