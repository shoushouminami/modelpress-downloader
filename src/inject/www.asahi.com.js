const utils = require("../utils.js");
const { replaceIllegalChars, removeSpace } = require("../utils/str-utils");

// "//www.asahicom.jp/imgopt/img/<hash>/<size>/AS20260902003656.jpg"
// <size> is hd640, comm_L, hw120 etc. "comm" is the original (up to 2000px), "hd1280" the next largest.
const imgoptPattern = /^(?:https?:)?(\/\/www\.asahicom\.jp\/imgopt\/img\/[0-9a-f]+\/)[A-Za-z0-9_]+(\/AS\d+\.jpg)$/;

function getImage(dom) {
    const src = utils.removeQuery(dom.getAttribute("srcset") || dom.getAttribute("src") || "");
    const m = src.match(imgoptPattern);
    if (!m) return null;
    const original = "https:" + m[1] + "comm" + m[2];
    const displayed = "https:" + src.replace(/^https?:/, "");
    return {url: original, retries: ["https:" + m[1] + "hd1280" + m[2], displayed]};
}

// "記事タイトル [宮崎県]：朝日新聞" -> "記事タイトル"
function getFolder() {
    const title = document.title
        .replace(/：朝日新聞.*$/, "")
        .replace(/\s*\[[^\]]*\]\s*$/, "");
    return window.location.host + "-" + replaceIllegalChars(removeSpace(title, " ").trim()) + "/";
}

function inject() {
    const o = require("./return-message.js").init();
    o.folder = getFolder();
    o.originalFolder = o.folder;

    const photoPage = window.location.pathname.match(/^\/articles\/photo\/(AS\d+)\.html/);
    const selectors = photoPage ? [
        `main#main img[srcset*="/${photoPage[1]}.jpg"], main#main img[src*="/${photoPage[1]}.jpg"]`, // photo page: current photo
        "main#main a[href*='iref=pc_photo_gallery'] img", // photo page: the article's other photos
    ] : [
        "main#main a[href*='photo/AS'] img", // article: hero, thumbnail strip and inline figures
    ];
    for (const selector of selectors) {
        utils.pushArray(o.images, utils.findDOMsWithCssSelector(document, selector, getImage));
    }

    // The current photo also appears in the photo page's thumbnail strip
    const seen = new Set();
    o.images = o.images.filter(image => {
        if (seen.has(image.url)) return false;
        seen.add(image.url);
        return true;
    });
    return o;
}

module.exports = { host: "www.asahi.com", inject: inject };
