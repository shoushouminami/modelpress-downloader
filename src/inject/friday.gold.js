const utils = require("../utils.js");
const logger = require("../logger2")(module.id);
const globals = require("../globals");
const messaging = require("../messaging");

function getArticleId() {
    let re = /(gravure)?\/article\/(\d+)/;
    let m = globals.getWindow().location.pathname.match(re);
    if (m) {
        logger.debug("m=", m);
        if (m[1]) {
            return "https://app.friday.gold/gravure/articles/" + m[2] + "/full";
        } else {
            return "https://app.friday.gold/standard/articles/" + m[2] + "/full";
        }
    }
}

function getFullUrl() {

}
function getLargeImg(url) {
    return url;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        let fullUrl = getArticleId();
        if (fullUrl) {
            logger.debug("fullUrl=", fullUrl);
            utils.fetchUrl(fullUrl)
                .then(function (respText) {
                    try {
                        let data = JSON.parse(respText);
                        if (data.assets != null) {
                            data.assets.filter(asset => asset.mediaType === "image")
                                .forEach(asset => utils.pushIfNew(o.images, asset.url))
                        }
                    } catch (e) {
                        logger.error("Failed to fetch assets", e);
                    }
                    messaging.sendToRuntime("updateResult", o);
                });
            require("./return-message.js").loading(o);
        }

        return o;
    },
    host: "friday.gold"
};
