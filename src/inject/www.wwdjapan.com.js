const utils = require("../utils.js");

// WordPress serves a downscaled "-scaled" variant for oversized originals; strip it to get the
// true original. Also exclude Google ad-network images interspersed in the article body.
function removeScaledSuffix(url) {
    return url == null ? url : url.replace(/-scaled(\.\w+)$/, "$1");
}

function filterImage(url) {
    // googlesyndication.com: interfed ad images.
    // /wp-content/plugins/: theme/plugin assets (eg the subscription paywall promo banner) -
    // real content photos always live under /wp-content/uploads/ instead.
    if (url && (url.indexOf("googlesyndication.com") > -1 || url.indexOf("/wp-content/plugins/") > -1)) {
        return null;
    }

    return utils.removeTrailingResolutionNumbers(removeScaledSuffix(utils.removeQuery(url)));
}

function inject() {
    const o = require("./return-message.js").init();

    utils.pushArray(o.images,
        utils.findLazyImagesWithCssSelector(document, "article.wwdj-post-single img:not(.avatar):not(.pp-user-avatar)", filterImage) // article image
    );

    // photo-swipe galleries embed some images as <a class="bg-image" href="full-res.jpg"
    // data-bg="preview.jpg?w=210"> with no <img> tag at all (a CSS background-image, not <img src>),
    // so the selector above misses them entirely.
    utils.pushArray(o.images,
        utils.findDOMsWithCssSelector(document, "article.wwdj-post-single .gallery-photo-swipe a.bg-image", dom => filterImage(dom.href)) // gallery image
    );

    return o;
};

module.exports = {
    host: "www.wwdjapan.com",
    inject: inject,
};
