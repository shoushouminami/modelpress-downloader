const utils = require("../utils.js");
const re = /https?:\/\/exweb(.ismcdn)?.jp\/mwimgs\/.*\/(\d+w?m?)\/img_[a-z0-9]+\.jpg/i

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const query of [
            "main article #slider .swiper-wrapper img", // slide show images
            "main article .thumbs img", // article slide show images
            "main article .figure-left > figure > img", // article with single image on the left
            "main article .figure-center > figure img", // article with single image on the center
            "main article figure > img", // premium article image
        ]) {
            utils.pushArray(o.images,
                utils.findImagesWithCssSelector(document,
                    query,
                    function (url) {
                        const m = url.match(re);
                        if (m) {
                            return {url: url.replace(m[2], "-"), retries: [url]};
                        }

                        return url;
                    }
                )
            );
        }




        return o;
    },
    host: "exweb.jp"
};
