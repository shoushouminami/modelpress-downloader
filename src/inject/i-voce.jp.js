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

// i-voce.jp's Nuxt frontend intermittently fails to hydrate the article body (NUXT_E1005),
// leaving no <img> elements in the DOM at all. As a fallback, read the images straight out of
// the page's own __NUXT_DATA__ hydration payload instead of the DOM. utils.pushArray dedupes
// by url, so calling this alongside the DOM-based selectors is safe even when both find results.
function extractFromNuxtPayload() {
    const results = [];
    try {
        const script = document.querySelector("#__NUXT_DATA__");
        if (!script) return results;
        const data = JSON.parse(script.textContent);
        const root = data[1];
        const dataWrapper = data[root.data]; // ["ShallowReactive", idx]
        const routeMap = data[dataWrapper[1]]; // {"/feed/12345/": idx, ...}
        const pageDataIdx = routeMap[window.location.pathname];
        if (pageDataIdx == null) return results;
        const pageData = data[pageDataIdx];
        if (pageData.post == null) return results;
        const post = data[pageData.post];

        if (post.mainImage != null) {
            const mainImageUrl = data[data[post.mainImage].url];
            if (typeof mainImageUrl === "string") {
                // use the original file directly rather than the w_750 cloudinary variant the
                // site renders in the DOM -- it's a better resolution source
                results.push(getLargeImg(mainImageUrl));
            }
        }

        const pagesArr = data[post.pages] || [];
        const imgSrcRe = /src="(https:\/\/[^"]+?\.(?:jpg|jpeg|png))"/g;
        for (const pageIdx of pagesArr) {
            const content = data[data[pageIdx].content];
            if (typeof content !== "string") continue;
            let m;
            while ((m = imgSrcRe.exec(content)) != null) {
                results.push(getLargeImg(m[1]));
            }
        }
    } catch (ignored) {}
    return results;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            ".VcPageContent div[class^='main_'] > div > div > img",
            ".VcPageContent div[class^='main_'] figure > img",
            "div[class^='main_'] .swiper-slide a[class^='CsmCard_'] > div > img"
        ]) {
            utils.pushArray(
                o.images,
                utils.findImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg
                )
            );
        }

        utils.pushArray(o.images, extractFromNuxtPayload());

        return o;
    },
    host: "i-voce.jp",
    re: re,
    getLargeImg: getLargeImg
};
