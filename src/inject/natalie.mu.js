const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message").init();
    let spans = document.querySelectorAll("#NA_main .NA_articleGallery .NA_imageList a span.NA_thumb");
    if (spans && spans.length) {
        for (const span of spans) {
            if (span.dataset["bg"] && span.dataset["bg"].match && span.dataset["bg"].match(/^(https?:\/\/.*\.(jpg|JPG))\??.*/)) {
                utils.pushIfNew(o.images, utils.removeQuery(span.dataset["bg"]) + "?imtype=")
            }
        }
    }
    for (const img of utils.findImagesWithCssSelector(document, "#NA_main figure .NA_figure img", utils.removeQuery)) {
        utils.pushIfNew(o.images, img + "?imtype=");
    }
    return o;
};



module.exports = {
    host: "natalie.mu",
    inject: inject,
};

