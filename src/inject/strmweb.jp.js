const utils = require("../utils.js");
const messaging = require("../messaging");
const logger = require("../logger2")(module.id);

const articlePattern = /^(https:\/\/strmweb\.jp\/archives\/\d+)(?:\/(\d+))?\/?$/;

function getImage(dom) {
    // Fetched pages are parsed in an inert template, where <noscript> fallbacks become real <img>s
    if (dom.closest("noscript")) return null;
    // Inline SNS profile icons (pf_tw.png etc.) inside the article body
    const width = Number.parseInt(dom.getAttribute("width"));
    if (width > 0 && width < 50) return null;
    const src = utils.getLazyImageFromDOM(dom);
    if (!src || src.startsWith("data:")) return null;
    // EWWW rewrites lazy src to "xxx.jpg.webp" in the live page; the original "xxx.jpg" is larger
    return utils.removeQuery(src).replace(/(\.(jpe?g|png|gif))\.webp$/i, "$1");
}

function collectImages(root) {
    return utils.findDOMsWithCssSelector(root, ".entry-content img", getImage);
}

function getPageCount() {
    let max = 1;
    for (const a of document.querySelectorAll(".entry-content a.post-page-numbers")) {
        // Page JS appends "#index-1" to these links, so match without the hash
        const m = (a.origin + a.pathname).match(articlePattern);
        if (m && m[2]) max = Math.max(max, Number.parseInt(m[2]));
    }
    return max;
}

function inject() {
    const o = require("./return-message.js").init();
    const m = (window.location.origin + window.location.pathname).match(articlePattern);
    if (!m) {
        utils.pushArray(o.images, collectImages(document));
        return o;
    }

    const baseUrl = m[1];
    const currentPage = m[2] ? Number.parseInt(m[2]) : 1;
    // Use the same folder no matter which page of the article the user is on
    o.folder = (baseUrl.replace(/^https:\/\//, "") + "/").replace(/\//g, "-");
    o.originalFolder = o.folder;

    const pageCount = getPageCount();
    if (pageCount <= 1) {
        utils.pushArray(o.images, collectImages(document));
        return o;
    }

    const pageImages = [];
    const promises = [];
    for (let i = 1; i <= pageCount; i++) {
        if (i === currentPage) {
            pageImages[i] = collectImages(document);
            continue;
        }
        const url = i === 1 ? baseUrl + "/" : baseUrl + "/" + i + "/";
        promises.push(utils.fetchUrl(url, 2, {timeout: 10000}).then(html => {
            const template = document.createElement("template");
            template.innerHTML = html;
            pageImages[i] = collectImages(template.content);
        }, e => logger.error("Failed to fetch", url, e)));
    }
    Promise.all(promises).then(() => {
        for (const images of pageImages) {
            if (images) utils.pushArray(o.images, images);
        }
        messaging.sendToRuntime("updateResult", o);
    });

    return require("./return-message.js").loading();
}

module.exports = { host: "strmweb.jp", inject: inject };
