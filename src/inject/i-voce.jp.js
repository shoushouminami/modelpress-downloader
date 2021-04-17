const utils = require("../utils.js");
const re = /^https:\/\/.*\/voce\/image\/fetch\/([^:\/]*):eco\/https:\/\/.*$/;
function getLargeImg(url) {
    const original = url;
    const m = url.match(re);
    if (m && m[1]) {
        const comps = m[1].split(",");
        for (const c of comps) {
            if (c.startsWith("w_")) {
                url = url.replace(c, "w_1500");
            } else if (c === "c_limit") {
                // handle ','
                if (url.indexOf(c + ",") > -1) {
                    url = url.replace(c + ",", "");
                } else if (url.indexOf("," + c) > -1) {
                    url = url.replace("," + c, "");
                } else {
                    url = url.replace(c, "");
                }
            }
        }

        return {url: utils.removeTrailingResolutionNumbers(url), retries: [original]}
    }

    try {
        url = utils.removeTrailingResolutionNumbers(url);
        if (new URL(url).host.endsWith("i-voce.jp")) {
            url = "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/" + url;
        }

        return {
            url: url,
            retries: [original]
        };
    } catch (ignored) {}

    return original;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // in article images
        utils.pushArray(
            o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    ".VcPageContent div[class^='main_'] img",
                ].join(","),
                getLargeImg
            )
        );
        return o;
    },
    host: "i-voce.jp",
    re: re,
    getLargeImg: getLargeImg
};
