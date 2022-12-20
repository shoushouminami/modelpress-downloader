const utils = require("../utils.js");

function getLargeImg(url) {
    let original = url;
    url = url.replace(",dpr_2.0", ",dpr_2")
        .replace(",t_thumb_square", ",t_article_image")
        .replace(",w_110", ",w_664")
        .replace(",w_72", ",w_664");

    return {
        url: url,
        retries: [original]
    }
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const query of [
            "#main-contents article figure img", // article images
            "#main-contents article > div a > img", // article images
            "#main-contents article > div ul li a img", // article thumbnail images
            "main div[class^='detail_photo'] > img", //photo page top image
            "main ul[class^='detail_thumbnails'] li a img", //photo page thumbnail images
        ]) {
            utils.pushArray(o.images,
                utils.findDomsWithCssSelector(
                    document,
                    query,
                    function (dom) {
                        if (dom.dataset && dom.dataset["src"]) {
                            return getLargeImg(dom.dataset["src"]);
                        }
                        return getLargeImg(dom.src);
                    }
                )
            );
        }

        return o;
    },
    host: "friday.kodansha.co.jp"
};
