const utils = require("../utils.js");

// news.ameba.jp articles can embed images from partner CDNs (eg Kadokawa's), whose URLs encode a
// resize transform directly in the path: https://img.kadpos.kadokawa.jp/f=jpg,w=615,a=0,u=0/article/...
// Strip that prefix to ask for the un-transformed original instead of whatever width the article
// happened to embed.
function removeKadposResizePrefix(url) {
    return url == null ? url : url.replace(/^(https?:\/\/img\.kadpos\.kadokawa\.jp\/)f=[^/]+\//, "$1");
}

// exclude decorative UI/branding assets (svg icons, inlined data-uri logos, and news.ameba.jp's
// own static badges), and strip the ?caw=/?cat=/?cax=/?width= resize-hint query params to get the
// original image (the server ignores them and serves the same file either way).
function filterImage(url) {
    if (url && (url.endsWith(".svg") || url.startsWith("data:") || url.indexOf("stat100.ameba.jp/") > -1)) {
        return null;
    }

    return removeKadposResizePrefix(utils.removeQuery(url));
}

function inject() {
    const o = require("./return-message.js").init2();

    // ameblo.jp only: insert the blogger's username (the URL's 1st path segment) between the host
    // and the title-derived folder name, so photos from different bloggers don't collide in one
    // folder. No-op on news.ameba.jp since its folder name never starts with "ameblo.jp-".
    const blogger = window.location.pathname.split("/")[1];
    if (blogger) {
        o.folder = o.folder.replace(/^ameblo\.jp-/, "ameblo.jp-" + blogger + "-");
        o.originalFolder = o.folder;
    }

    if (window.location.host === "news.ameba.jp") {
        // its <title> uses " - Ameba News [アメーバニュース]" as a separator (not one of the "|"
        // variants getFolderNameFromTitle() splits on), so that branding suffix ends up in the
        // folder name otherwise.
        o.folder = o.folder.replace(/ - Ameba News \[アメーバニュース\]\/$/, "/");
        o.originalFolder = o.folder;

        // regular /entry/... articles embed images (eg image.ext-news.ameba.jp/<id>/<hash>) that
        // don't carry a file extension. /article/<slug>/ "special report" pages use a different
        // image host whose URLs already end in .png, so don't force an extension there.
        if (window.location.pathname.startsWith("/entry/")) {
            o.ext = "jpg";
        }
    }

    for (const selector of [
        "img.PhotoSwipeImage", // ameblo.jp: article image
        "li img[data-entry-id]", // ameblo.jp: photo thumbnail list on the image detail page (image-<entryId>-<imageId>.html)
        "[class*=\"EntryDetailModule__block\"] img", // news.ameba.jp /entry/...: hero + inline article images
        "img.MainVisual-image, img.ProfileList-personImage, img.Chat-personImage, img.Picture-image", // news.ameba.jp /article/<slug>/ special reports
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(document, selector, filterImage)
        );
    }

    return o;
};

module.exports = {
    host: "news.ameba.jp",
    altHosts: ["ameblo.jp"],
    inject: inject,
};
