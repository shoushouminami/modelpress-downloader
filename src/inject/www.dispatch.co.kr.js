const utils = require("../utils.js");
const re = /https?:\/\/exweb(.ismcdn)?.jp\/mwimgs\/.*\/(\d+w?m?)\/img_[a-z0-9]+\.jpg/i

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                [
                    ".content-wrapper section header img", // header image
                    ".content-wrapper section .dp-image-container img", // in article images
                    ".content-wrapper section article p img", // in article paragraph images
                ].join(","),
                function (url) {
                    const m = url.match(re);
                    if (m) {
                        return {url: url.replace(m[2], "-"), retries: [url]};
                    }

                    return url;
                }
            )
        );


        return o;
    },
    host: "www.dispatch.co.kr"
};
