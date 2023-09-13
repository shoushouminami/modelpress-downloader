const utils = require("../utils.js");
const getLargeImg = function (url) {
    if (url == null || url.length === 0) {
        return null;
    }

    if (url.indexOf("/w300_") > -1) {
        return {
            url: url.replace("/w300_", "/"),
            retries: [url]
        };
    }

    if (url.indexOf("/w150_") > -1) {
        return {
            url: url.replace("/w150_", "/"),
            retries: [url]
        };
    }

    return {
        url: url
    };
};
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();

        for (const scriptNode of window.document.head.querySelectorAll("script[type='application/ld+json']")) {
            for (const line of scriptNode.text.split("\n")) {
                if (line.length > 0 && !line.startsWith("//")) {
                    try {
                        const obj = JSON.parse(line);
                        if (obj["image"]) {
                            utils.pushArray(o.images, obj.image.map(i => window.location.origin + i).map(getLargeImg));
                        }
                    } catch (e) {
                        const logger = require("../logger2")(module.id);
                        logger.error("failed to parse line from ld+json", line);
                    }
                }
            }
        }

        if (o.images.length === 0) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    [   // article images
                        ".fp_content #news figure img",
                        // article image gallery
                        ".fp_content .pc_only .photo_div img",
                        // fashion collections images
                        ".fp_content .fp_img_list .looks img",
                        // snaps photo active
                        ".fp_content .snap .swiper-wrapper .swiper-slide-active img",
                        // snaps photo thubnails
                        ".fp_content .snap .thumbnail_container img"
                    ].join(","),
                    getLargeImg
                )
            );
        }

        return o;
    },
    host: "www.fashion-press.net"
};
