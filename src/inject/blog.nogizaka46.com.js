const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        let sheet = document.getElementById("sheet");
        if (sheet) {
            let imgs = utils.findAllImageDOMsFromRoot(sheet, {"ids": ["comments"]});
            for (const img of imgs) {
                if (img.parentElement instanceof HTMLAnchorElement && img.parentElement.href
                    && (img.parentElement.href.indexOf("//blog.nogizaka46.com/") > -1 || img.parentElement.href.indexOf("//img.nogizaka46.com/"))
                    && (img.parentElement.href.toLowerCase().endsWith(".jpg") || img.parentElement.href.toLowerCase().endsWith(".png"))) {
                    o.images.push(img.parentElement.href);
                } else if (img.parentElement instanceof HTMLAnchorElement && img.parentElement.href &&
                    utils.getAwalkerImgUrl(img.parentElement.href)) {
                    o.images.push({
                        type: "tab",
                        imageUrl: utils.getAwalkerImgUrl(img.parentElement.href),
                        websiteUrl: img.parentElement.href
                    });
                } else if (!img.src.toLowerCase().endsWith(".gif") && !img.src.toLowerCase().endsWith(".php")) {
                    o.images.push(img.src);
                }
            }
        }
        return o;
    },
    host: "blog.nogizaka46.com"
};
