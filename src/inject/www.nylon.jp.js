const utils = require("../utils.js");
const messaging = require("../messaging.js");
const { loadPerisistedSiteOptionsAndOnChange } = require("../site-options");

// small decorative icons (social-share/instagram badges etc.) embedded inline in the article body
// consistently render much narrower than any real content photo across the site's various
// sponsor-specific page templates, so use that as a generic exclusion signal.
function filterImage(src, width) {
    if (width != null && width > 0 && width < 50) {
        return null;
    }

    return utils.removeQuery(src);
}

function collectImages() {
    const images = [];
    const selectors = [
        "article.hentry .entry-content img", // portfolio/campaign style article image
        "#maincontent .contentbox img", // sponsored series style article image
        ".fotorama .fotorama__nav__frame img", // fotorama gallery widget (eg movie stills on cinema-category posts) - rendered outside <article> entirely, the thumb strip renders every photo upfront (the "stage" only lazily renders the active slide) and both point at the same full-size file, just CSS-scaled
        ".npage > img", // top hero image on some articles (eg culturestudio), placed directly in the page body with no wrapping content container at all
    ];

    // product/goods campaign style article image. Only used when #maincontent isn't present:
    // on #maincontent-style (eg cokorea) pages, the bare ".contentsBox" class is reused as a
    // much broader whole-page wrapper that also sweeps in an unrelated trailing writer
    // profile/social-icon card, which #maincontent .contentbox above already covers correctly
    // on its own. ".contentsTopBox.contentsBox" (2 classes) is used for unrelated related-article
    // list items, vs the real content container which is ".contentsBox" alone; ".hoverImg" marks
    // unrelated related-article thumbnails embedded within it; "table.magtble" is a generic "buy
    // the print magazine" front/back-cover promo widget unrelated to the article.
    if (!document.getElementById("maincontent")) {
        selectors.push(".contentsBox:not(.contentsTopBox) img:not(.hoverImg):not(table.magtble *)");
    }

    for (const selector of selectors) {
        utils.pushArray(images,
            utils.findLazyImagesWithCssSelector(document, selector, filterImage)
        );
    }

    return images;
}

function getVideoUrls() {
    const videos = document.querySelectorAll("article.hentry .entry-content video[src], #maincontent .contentbox video[src]");
    return Array.from(videos).map(v => v.src).filter(src => src);
}

function inject() {
    const o = require("./return-message.js").init();
    o.options = {
        "downloadVideo": {
            index: 1,
            label: "Download Video",
            type: "checkbox",
            checked: false
        }
    };
    o.images = collectImages();

    // react to the checkbox being toggled (or its persisted value loading in) by re-sending the
    // image list with/without the video. Kept separate from the synchronous collectImages() call
    // above so the base photo list is available immediately, without depending on this round trip.
    loadPerisistedSiteOptionsAndOnChange(o.host, o.options, ({ host, options }) => {
        if (host !== o.host) {
            return;
        }

        o.options = options;
        o.images = collectImages();

        if (options?.downloadVideo?.checked) {
            utils.pushArray(o.images, getVideoUrls());
        }

        o.loading = false;
        messaging.sendToRuntime("updateResult", o);
    });

    return o;
};

module.exports = {
    host: "www.nylon.jp",
    inject: inject,
};
