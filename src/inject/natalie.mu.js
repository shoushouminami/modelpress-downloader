const utils = require("../utils.js");
const getLargeImg = function (url) {
    return utils.removeQuery(url);
};

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

    utils.pushArray(o.images, utils.findLazyImagesWithCssSelector(document, "#NA_main figure .NA_figure img", getLargeImg));

    // new layout 2020-05-15
    for (const selector of [
        "main .NA_article_body .NA_article_img a .NA_article_img_thumb img",
        "main .NA_article_body .NA_article_gallery .NA_imglist li img",
        "main .PP_main .PP_embed-img img"
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(document, selector, getLargeImg)
        );
    }


    // missing pp special page
    utils.pushArray(o.images,
        utils.findLazyImagesWithCssSelector(
            document,
            [
                "main .PP_container .PP_main img",
                "main .PP_container .PP_header img"
            ].join(","),
            getLargeImg
        )
    );

    return o;
};



module.exports = {
    host: "natalie.mu",
    inject: inject,
};

