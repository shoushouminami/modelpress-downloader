const utils = require("../utils.js");

function pushToOutput(imgDoms, o) {
    for (const imgDom of imgDoms) {
        if (imgDom.parentElement instanceof HTMLAnchorElement && imgDom.parentElement.href
            && (imgDom.parentElement.href.indexOf("//blog.nogizaka46.com/") > -1 || imgDom.parentElement.href.indexOf("//img.nogizaka46.com/"))
            && (imgDom.parentElement.href.toLowerCase().endsWith(".jpg") || imgDom.parentElement.href.toLowerCase().endsWith(".png"))) {
            o.images.push(imgDom.parentElement.href);
        } else if (imgDom.parentElement instanceof HTMLAnchorElement && imgDom.parentElement.href &&
            utils.getAwalkerImgUrl(imgDom.parentElement.href)) {
            o.images.push({
                type: "tab",
                imageUrl: utils.getAwalkerImgUrl(imgDom.parentElement.href),
                websiteUrl: imgDom.parentElement.href
            });
        } else if (!imgDom.src.toLowerCase().endsWith(".gif") && !imgDom.src.toLowerCase().endsWith(".php")) {
            o.images.push(imgDom.src);
        }
    }
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        let sheet = document.getElementById("sheet");
        if (sheet) {
            let imgs = utils.findAllImageDOMsFromRoot(sheet, {"ids": ["comments"]});
            pushToOutput(imgs, o);
        }
        // updated UI on 2022-02-16
        pushToOutput(
            utils.findDomsWithCssSelector(
                document,
                [
                    ".bd--edit img",
                ].join(",")
            ),
            o
        );
        return o;
    },
    host: "www.nogizaka46.com",
    url: "https://www.nogizaka46.com/s/n46/diary/MEMBER"
};
