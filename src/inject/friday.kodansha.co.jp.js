const utils = require("../utils.js");

function getLargeImg(url) {
    let original = url;
    if (url.indexOf(",t_thumb_square") > -1) {
        url = url.replace(",t_thumb_square", ",t_article_image");
    }
    if (url.indexOf(",w_110") > -1) {
        url = url.replace(",w_110", "");
    }
    if (url.indexOf(",w_72") > -1) {
        url = url.replace(",w_72", "");
    }
    if (url.indexOf(",w_664") > -1) {
        url = url.replace(",w_664", "");
    }
    if (url.indexOf(",dpr_2.0") > -1) {
        url = url.replace(",dpr_2.0", ",dpr_2");
    }
    return {
        url: url,
        retries: [original]
    }

    return {url: url, retries: []};
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
