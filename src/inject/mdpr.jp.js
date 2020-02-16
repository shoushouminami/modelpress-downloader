const m = require("../utils.js");
const inject = function(o) {
    m.pushArray(o.images, m.findImagesOfClass("square"));
    m.pushArray(o.images, m.findImagesOfContainerClass("list-photo"));
    m.pushArray(o.images, m.findImagesOfClass("figure"));
    m.pushArray(o.images, m.findImagesOfContainerClass("figure-list"));
    m.pushArray(o.images, m.findImagesOfClass("headline-photo"));
    m.pushArray(o.images, m.findImagesOfContainerClass("no-moki"));
    m.pushArray(o.images, m.findImagesOfContainerClass("snap-content"));
    let mobileImages =  m.findImagesWithCssSelector(document, ".m-appImageList img", m.removeQuery);
    if (mobileImages.length > 0) {
        m.pushArray(o.images, mobileImages);
        let articleId = m.findMdprArticleId();
        if (articleId) {
            o.remoteImages["mdpr.jp"] = articleId;
        }
    }
};

require("./supported-sites").register("mdpr.jp", inject);
require("./supported-sites").registerHostFilter(function (host) {
    return host.endsWith(".mdpr.jp");
}, inject);


