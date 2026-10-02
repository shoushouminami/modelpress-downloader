const utils = require("../utils.js");
const { replaceIllegalChars, removeSpace } = require("../utils/str-utils");

function getImage(dom) {
    let src = dom.dataset["src"] || dom.getAttribute("src");
    if (!src || src.startsWith("data:")) return null;
    // protocol-relative "//d35omnrtvqomev.cloudfront.net/..."
    if (src.startsWith("//")) src = "https:" + src;
    return utils.removeQuery(src);
}

// "記事タイトル(1/5)[東京カレンダー | 最新のグルメ、...]" -> "記事タイトル"
function getFolder() {
    const title = document.title
        .replace(/\[東京カレンダー[\s\S]*$/, "")
        .replace(/\(\d+\/\d+\)\s*$/, "");
    return window.location.host + "-" + replaceIllegalChars(removeSpace(title, " ").trim()) + "/";
}

function inject() {
    const o = require("./return-message.js").init();
    o.folder = getFolder();
    o.originalFolder = o.folder;
    for (const selector of [
        "#article-content .article-header-image-area img", // header image
        "#article-content .article-content-body a.article-pic img", // article images
    ]) {
        utils.pushArray(o.images, utils.findDOMsWithCssSelector(document, selector, getImage));
    }
    return o;
}

module.exports = { host: "tokyo-calendar.jp", inject: inject };
