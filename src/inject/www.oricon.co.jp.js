const utils = require("../utils.js");
const messaging = require("../messaging");
const logger = require("../logger2")(module.id);
function getLargeImgFromPage(document) {
    let urls = utils.findDomsWithCssSelector(document, "meta[property='og:image'", function (dom) {
        let content = dom.getAttribute("content");
        let arr = content.split("/");
        if (arr[3] === "cdn-cgi" && arr[4] === "image") {
            arr.splice(3, 3);
        }

        logger.debug("url=", arr.join("/"));
        return arr.join("/");
    });
    return urls[0];
}
function inject() {
    let o = require("./return-message.js").init();
    let links = utils.findDomsWithCssSelector(
        document,
        ".photo_thumbs li a", // image gallery page
        function (dom) {
            return dom.href;
        }
    );
    if (links.length === 0) {
        links = utils.findDomsWithCssSelector(
            document,
            ".block-photo-preview ul li a", // image gallery page
            function (dom) {
                return dom.href;
            }
        );
    }
    if (links.length > 0) {
        Promise.all(
            links.map((pageUrl) => {
                return utils.fetchUrl(pageUrl).then(function (pageHtml) {
                    let template = document.createElement('template');
                    template.innerHTML = pageHtml;
                    return getLargeImgFromPage(template.content);
                })
            })
        ).then(function (urls) {
            logger.debug("All promises resolved urls=", urls);
            urls.sort();
            utils.pushArray(o.images, urls);
            messaging.sendToRuntime("updateResult", o);
        })

        return require("./return-message.js").loading();
    } else {
        // utils.pushArray(o.images, [
        //     getLargeImgFromPage(document)
        // ]);
        for (const selector of [
            ".content-main .special-content .image-main img",
            ".content-main .special-content .image img",
            ".content-main  #slider ul li a img"
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                   null)
            );
        }
        return o;
    }
}

module.exports = {
    inject: inject,
    host: "www.oricon.co.jp"
};
