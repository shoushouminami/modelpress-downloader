const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const query of [
            "#__next .chakra-stack img[fetchpriority='high']", // article images
            "#__next .chakra-stack div > a.chakra-link > img[srcset]", // thumbnail images
            "#__next main > div.chakra-container > div > a.chakra-link > div > img[srcset]", // article images
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    query,
                    function (url) {
                        try{
                            let u = new URL(url);
                            u.searchParams.set("q", "100");
                            return u.toString();
                        }catch (e) {
                            return url;
                        }
                    }
                )
            );
        }

        o.ext = "jpg";

        return o;
    },
    host: "mezamashi.media"
};
