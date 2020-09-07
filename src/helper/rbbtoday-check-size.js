(function(){
    "use strict";
    const utils = require("../utils.js");
    const {getLargeImg} = require("../inject/www.rbbtoday.com");
    let images = [];
    // main image from slide show
    utils.pushArray(images,
        utils.findImagesWithCssSelector(document,
            "main .figure-area figure img", getLargeImg)
    );

    // images list from slide show
    utils.pushArray(images,
        utils.findImagesWithCssSelector(document,
            "main .thumb-list li img", getLargeImg)
    );

    // images from article
    utils.pushArray(images,
        utils.findImagesWithCssSelector(document,
            "main article a img", getLargeImg)
    );

    const helperUtils = require("./helper-utils");
    let div = helperUtils.getOrCreateDataDiv();
    // attach images to div
    for (const image of images) {
        if (typeof image === "string") {
            helperUtils.attachInvisibleImage(div, image);
        } else {
            helperUtils.attachInvisibleImage(div, image.url);
        }
    }
})();
