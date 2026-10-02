const utils = require("../utils.js");
const { replaceIllegalChars, removeSpace } = require("../utils/str-utils");

// The srcset lists every WordPress size including the original (largest "w")
function getLargestFromSrcset(dom) {
    let best = null, bestWidth = -1;
    for (const candidate of (dom.getAttribute("srcset") || "").split(",")) {
        const [url, descriptor] = candidate.trim().split(/\s+/);
        const width = Number.parseInt(descriptor);
        if (url && width > bestWidth) {
            best = url;
            bestWidth = width;
        }
    }
    return best;
}

function getImage(dom) {
    const largest = getLargestFromSrcset(dom);
    if (largest) return largest;
    // Thumbnails without srcset ("-150x150", "-300x200"): strip the size, keep the thumbnail as fallback
    const src = dom.getAttribute("src");
    if (!src || src.startsWith("data:")) return null;
    const original = utils.removeTrailingResolutionNumbers(src);
    return original === src ? src : {url: original, retries: [src]};
}

// "記事タイトル – emogram［エモグラム］" or "記事タイトルの写真（8） - emogram［エモグラム］" -> "記事タイトル"
function getFolder() {
    const title = document.title
        .replace(/\s*[-–]\s*emogram［エモグラム］\s*$/, "")
        .replace(/の写真（\d+）$/, "");
    return window.location.host + "-" + replaceIllegalChars(removeSpace(title, " ").trim()) + "/";
}

function inject() {
    const o = require("./return-message.js").init();
    o.folder = getFolder();
    o.originalFolder = o.folder;
    for (const selector of [
        "article.single-page .area_article-header figure.eyecatch img", // article: hero image
        "article.single-page .area_article-body figure img", // article: body images
        ".area_gallery .gallery-item img", // article: extra photos (追加写真)
        ".attachment-thumbs .attachment-thumbs_list img", // photo page: every photo of the article
        ".attachment_image img", // photo page: current photo (when there is no thumbnail list)
    ]) {
        utils.pushArray(o.images, utils.findDOMsWithCssSelector(document, selector, getImage));
    }
    // The same photo can come back both as a srcset url and as a {url, retries} thumbnail object
    const seen = new Set();
    o.images = o.images.filter(image => {
        const url = typeof image === "string" ? image : image.url;
        if (seen.has(url)) return false;
        seen.add(url);
        return true;
    });
    return o;
}

module.exports = { host: "emogram.sankei.com", inject: inject };
