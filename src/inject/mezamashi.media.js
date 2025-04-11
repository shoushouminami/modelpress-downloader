const utils = require("../utils.js");
const { removeMwimgsSize } = require("../utils/url-utils.js");

function getLargeImg(url) {
    url = removeMwimgsSize(url);
    try {
        let u = new URL(url);
        u.searchParams.set("q", "100");
        return u.toString();
    } catch (e) {
        return url;
    }
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const query of [
            "#__next .chakra-stack img[fetchpriority='high']", // article images
            "#__next .chakra-stack div > a.chakra-link > div.css-weezue > img[srcset]", // thumbnail images
            "#__next main > div.chakra-container > div > a.chakra-link > div > img[srcset]", // article images
            "#__next main > div.chakra-container > p > div > a.chakra-link > div > img[srcset]", // article images
            "#__next main > div.chakra-container > div.chakra-stack > div > p > div > a.chakra-link > div > img[srcset]", // article images
            "#__next main > div.chakra-container > div.chakra-stack > div > div > a.chakra-link > div > img[srcset]", // article images
            // new UI layout 2025 April
            "main .article-header .article-header__image img", // header images
            "main .article-body .image-area img", // article images
            "main .article-gallery-item img", // article images
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    query,
                    getLargeImg
                )
            );
        }

        o.ext = "jpg";

        return o;
    },
    host: "mezamashi.media"
};
