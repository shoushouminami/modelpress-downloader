const utils = require("../utils.js");

const cdn = "https://cdn.deview.co.jp/imgs/";

function getImage(dom) {
    let src = dom.getAttribute("src");
    if (!src) return null;
    // The news photo page uses "http://cdn.deview.co.jp/..."
    src = new URL(src, window.location.href).href.replace(/^http:/, "https:");
    if (!src.startsWith(cdn)) return null; // site icons live under cdn.deview.co.jp/assets/

    // News photos: "news_image.img.php?am_file=<hash>.jpg&am_width=300&am_height=300" is a resized copy;
    // am_width=0&am_height=0 renders the stored original at full size. The static "news/0/f/5/<hash>.jpg"
    // file has the same dimensions but is recompressed by the CDN.
    const newsFile = src.match(/news_image\.img\.php\?.*am_file=([0-9a-f]{32}\.\w+)/)
        || src.match(/\/imgs\/news\/\w\/\w\/\w\/([0-9a-f]{32}\.\w+)$/);
    if (newsFile) {
        const hash = newsFile[1];
        const stored = cdn + "news/" + hash[0] + "/" + hash[1] + "/" + hash[2] + "/" + hash;
        return {
            url: cdn + "news_image.img.php?am_file=" + hash + "&am_width=0&am_height=0",
            retries: [stored],
            thumbnail: stored, // the popup can't tell the .php url is an image and would show "?"
            filename: hash, // otherwise every photo is saved as "news_image.img.php"
        };
    }
    // Interview photos: drop the "?1788321584" cache-buster
    return utils.removeQuery(src);
}

function inject() {
    const o = require("./return-message.js").init2();
    // News photo page title: "記事タイトル 3枚目 | ニュース画像 | Deview-デビュー"
    o.folder = o.folder.replace(/\s*\d+枚目\/$/, "/");
    o.originalFolder = o.folder;
    for (const selector of [
        ".interview-detail .article-box .photo img", // interview / feature (Article): photos and information box
        ".interview-detail .season_main img", // old interview template: main photo
        ".interview-detail .season_sub img", // old interview template: photos
        ".interview-detail .season_infomation_photo img", // old interview template: information box
        ".news-article .article-box .photo img", // news: main photo
        ".news-article .relation-photo-list img", // news: the article's other photos
        ".news-photo .article-box .photo > img", // news photo page (NewsImage): current photo
        ".news-photo .current_news_image img, .news-photo .other_news_image img", // news photo page: the article's photos
    ]) {
        utils.pushArray(o.images, utils.findDOMsWithCssSelector(document, selector, getImage));
    }

    // The news main/current photo also appears in its photo list
    const seen = new Set();
    o.images = o.images.filter(image => {
        const url = typeof image === "string" ? image : image.url;
        if (seen.has(url)) return false;
        seen.add(url);
        return true;
    });
    return o;
}

module.exports = { host: "deview.co.jp", inject: inject };
