const utils = require("../utils.js");
const getLargeImg = function (url) {
    if (url == null || url.length == 0) {
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
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
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
        return o;
    },
    host: "www.fashion-press.net"
};
