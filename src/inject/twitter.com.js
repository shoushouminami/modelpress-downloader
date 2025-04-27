const utils = require("../utils.js");
const logger = require("../logger2.js")(module.id);
function getLargeImg(src) {
    if (src && src.indexOf(".twimg.com/") > -1) {
        if (src.endsWith(".jpg") || src.endsWith(".png")) {
            return src + ":large";
        }

        try {
            let url = new URL(src);
            if (url.searchParams.has("format")) {
                url.searchParams.set("format", "jpg");
            }
            url.searchParams.set("name", "4096x4096");

            return url.toString();
        } catch (e) { 
            logger.error(e);
        }
    }

    return src;
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();

        if (document.querySelector("article[tabindex='-1']")) {
            // single post page
            utils.pushArray(
                o.images,
                utils.findImagesWithCssSelector(
                    document,
                    "article[tabindex='-1'] div[data-testid='tweetPhoto'] > img",
                    getLargeImg
                )
            );
        } else {
            // timeline page
            utils.pushArray(
                o.images,
                utils.findImagesWithCssSelector(
                    document,
                    "article[data-testid='tweet'] div[data-testid='tweetPhoto'] > img",
                    getLargeImg
                )
            );
        }

        o.ext = "jpg";
        return o;
    },
    host: "twitter.com",
    altHosts: ["x.com"],
    getLargeImg: getLargeImg,
    hidden: true
};
