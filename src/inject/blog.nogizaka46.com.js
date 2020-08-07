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
                        imageUrl: utils.getAwalkerImgUrl(img.parentElement.href),
                        websiteUrl: img.parentElement.href
                    });
                } else if (!img.src.toLowerCase().endsWith(".gif") && !img.src.toLowerCase().endsWith(".php")) {
                    o.images.push(img.src);
                }
            }
        }

        let iframe = null;
        window.chrome && chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                if (request.what === "showIframe" && request.url) {
                    if (iframe == null) {
                        iframe = document.createElement('iframe');
                        iframe.width = "1px";
                        iframe.height = "1px";
                        iframe.style.width = "1px";
                        iframe.style.height = "1px";
                        iframe.src = request.url;
                        iframe.addEventListener("load", function () {
                            sendResponse({status: "ok"});
                        });

                        document.body.appendChild(iframe);
                    } else {
                        iframe.addEventListener("load", function () {
                            sendResponse({status: "ok"});
                        });
                        iframe.src = request.url;
                    }

                    return true;
                }
            });
        return o;
    },
    host: "blog.nogizaka46.com"
};
