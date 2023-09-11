const utils = require("../utils.js");
const logger = require("../logger2")(module.id);
const getLargeImg = (url) => {
    if (!url || url.endsWith("/index.jpg")) {
        return null;
    }
    if (url.endsWith(".jpg") && !url.endsWith("l.jpg")) {
        return url.replace(".jpg", "l.jpg");
    }
    return url;
};
const inject = function () {
    let o = require("./return-message.js").init();

    for (const scriptNode of window.document.head.querySelectorAll("script[type='application/ld+json']")) {
        for (const line of scriptNode.text.split("\n")) {
            if (line.length > 0 && !line.startsWith("//")) {
                try {
                    const obj = JSON.parse(line);
                    if (obj["image"]) {
                        utils.pushArray(o.images, obj.image.map(i => i.url).map(getLargeImg));
                    }
                } catch (e) {
                    logger.error("failed to parse line from ld+json", line);
                }
            }
        }
    }

    if (o.images.length === 0) {
        for (const selector of [
            "article.article div.article-body ul.photo_table img.photo_table__img", // article images
            "article.article div.article-body div.photo_right img.photo_right__img", // single image on the right
            ".contents .magnify .magnifyBlock figure img", // image gallery top
            ".slick-list .slick-track div a img", // image gallery slide stack
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg)
            );
        }
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "news.mynavi.jp"
};
