const utils = require("../utils.js");
const re = /https?:\/\/exweb(.ismcdn)?.jp\/mwimgs\/.*\/(\d+w?m?)\/img_[a-z0-9]+\.jpg/i

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const query of [
            "#main .main_short .main_img img", // short article image
            "#main .main_body .article_img img", // article top image
            "#main .main_body .mainimg .mainimg_thumb img", // slide show thumbnail
            "#main .main_body .wp-block-image img", // article images
            "#main .main_body figure img", // article images
            "#main .feature_cont .main_ttl > img", // feature top image
            "#main .feature_cont .pct > img", // feature images
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(document,
                    query,
                    function (url) {
                        const m = url.match(re);
                        if (m) {
                            return {url: url.replace(m[2], "-"), retries: [url]};
                        }

                        return url;
                    },
                    utils.removeTrailingResolutionNumbers
                )
            );
        }




        return o;
    },
    host: "www.lmaga.jp"
};
