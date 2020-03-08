const utils = require("../utils.js");
const cleanSrc = function(src) {
    var at = src.lastIndexOf("@");
    if (at > -1) {
        src = src.substr(0, at);
    }
    if (src.startsWith("//")) {
        src = window.location.protocol + src;
    }

    return src;
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        let imgs = document.querySelectorAll("figure.img-box img[data-src]");
        let src;
        for (const img of imgs) {
            src = img.getAttribute("data-src");
            if (src) {
                utils.pushArray(o.images, [cleanSrc(src)]);
            }
        }

        // banner image
        let banners = document.querySelectorAll("div.banner-img-holder");
        for (const div of banners) {
            src = div.getAttribute("style");
            if (src && src.indexOf("url(") > -1 && src.indexOf(".jpg") > -1) {
                src = src.split("\"");
                if (src.length === 3) {
                    src = src[1];
                    if (src) {
                        utils.pushArray(o.images, [cleanSrc(src)]);
                    }
                }
            }
        }
        return o;
    },
    host: function (host, location) {
        return host === "www.bilibili.com" && location.pathname.startsWith("/read/");
    }
};
