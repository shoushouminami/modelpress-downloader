const utils = require("../utils.js");
const logger = require("../logger2")(module.id);
const globals = require("../globals");
const messaging = require("../messaging");
const { getFolderNameFromTitle } = require("../utils/filename-utils.js");

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

function getFilename(url, assertId) {
    const re = /^https:\/\/.*\/([^\/]+\.(jpg|jpeg|png|webp))\/.*\?.*$/;
    let m = url.match(re);
    if (m) {
        return m[1];
    }

    return assertId + ".jpg";
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        o.folder = getFolderNameFromTitle();

        const fullUrl = getArticleId();
        if (fullUrl) {
            logger.debug("fullUrl=", fullUrl);
            utils.fetchUrl(fullUrl)
                .then(function (respText) {
                    try {
                        let data = JSON.parse(respText);
                        if (data.assets != null) {
                            data.assets.filter(asset => asset.mediaType === "image")
                                .forEach(
                                    asset => utils.pushIfNew(o.images,
                                        {
                                            url: asset.url,
                                            filename: getFilename(asset.url, asset.id),
                                            thumbnail: asset.thumbnails?.[0]?.url
                                        }
                                    )
                                )
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
    host: "friday.gold",
    getFilename: getFilename
};
