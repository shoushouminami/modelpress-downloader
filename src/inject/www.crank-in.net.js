const utils = require("../utils.js");
const pattern = /^https:\/\/www.crank-in.net\/.*(_\d{3,}).(jpg|jpeg|png)$/;
const logger = require("../logger2")(module.id);
const messaging = require("../messaging");

function getLargeImg (url) {
    if (url.startsWith("//")) {
        url = "https:" + url;
    }
    let m = url.match(pattern);
    if (m && m[1]) {
        return {
            url: url.replace(m[1], "_1200"),
            retries: [url.replace(m[1], "_650")]
        }
    }
    return url;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const query of [
            "#content main article .headline-img img", // headline image in article
            "#content main article .headline_part img", // headline image in article
            "#content main article > article > figure img", // headline image in article
            "#content main article figure .photo-link-main img",  // top image in slide show
            "#content main article figure ul img",  // image in slide show
            "#content main article .top_news_all img"
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    query,
                    getLargeImg
                )
            );
        }
        // try all page links
        let pageNum = utils.findDOMsWithCssSelector(document, ".photo-link .photo-link-num", function (dom) {
            if (dom.innerText) {
                try {
                    return Number.parseInt(dom.innerText.split("/")[1]);
                } catch (e) {
                    logger.error("Failed to parse page number " + dom.innerText);
                    return null;
                }
            }
        })[0];

        if (pageNum != null) {
            const urlArray = document.location.href.split("/");
            const baseUrl = urlArray.slice(0, Math.min(urlArray.length, 6)).join("/");
            const promises = [];
            for (let i = 1; i <= pageNum; i++) {
                promises.push(
                    utils.fetchUrl(baseUrl + "/" + i).then((html) => {
                        let template = document.createElement('template');
                        template.innerHTML = html;
                        utils.pushArray(o.images,
                            utils.findLazyImagesWithCssSelector(template.content,
                                ".photo-link-main .photo-link-img img",
                                getLargeImg)
                        );
                    })
                );
            }
            Promise.all(promises).then(
                () => messaging.sendToRuntime("updateResult", o),
                () => messaging.sendToRuntime("updateResult", o)
            );

            return require("./return-message.js").loading();
        }

        return o;
    },
    host: "www.crank-in.net",
};
