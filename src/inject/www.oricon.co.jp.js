const utils = require("../utils.js");
const messaging = require("../messaging");
const logger = require("../logger2")(module.id);
const { wait } = require("../utils/async-utils");

// delay between sequential page fetches, to avoid hammering the server
const FETCH_DELAY_MS = 5000;

/**
 * Fetch `pageUrls` one at a time (not in parallel), waiting `delayMs` between requests.
 * @returns {Promise<string[]>} resolves to the large image url found on each page, in the same order as `pageUrls`.
 */
function fetchPagesSequentially(pageUrls, delayMs) {
    let urls = [];
    return pageUrls.reduce(function (promise, pageUrl, index) {
        return promise
            .then(() => (index > 0 && delayMs > 0 ? wait(delayMs) : null))
            .then(() => utils.fetchUrl(pageUrl, 0))
            .then(function (pageHtml) {
                let template = document.createElement("template");
                template.innerHTML = pageHtml;
                urls.push(getLargeImgFromPage(template.content));
            }, function (error) {
                logger.error("utils.fetchUrl failed with", error && error.status, error && error.statusText);
            });
    }, Promise.resolve()).then(() => urls);
}

function getLargeImgFromPage(document) {
    let urls = utils.findDOMsWithCssSelector(document, "meta[property='og:image'", function (dom) {
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
    let links = utils.findDOMsWithCssSelector(
        document,
        ".photo_thumbs li a", // image gallery page
        function (dom) {
            return dom.href;
        }
    );
    if (links.length === 0) {
        links = utils.findDOMsWithCssSelector(
            document,
            ".block-photo-preview ul li a", // image gallery page
            function (dom) {
                return dom.href;
            }
        );
    }
    if (links.length > 0) {
        logger.debug("links=", links);

        fetchPagesSequentially(links, FETCH_DELAY_MS).then(function (urls) {
            logger.debug("All fetches resolved urls=", urls);
            utils.pushArray(o.images, urls);
            messaging.sendToRuntime("updateResult", o);
        }, function (error) {
            logger.error("fetchPagesSequentially() failed", error);
            messaging.sendToRuntime("updateResult", o);
        });

        return require("./return-message.js").loading();
    } else {
        for (const selector of [
            ".content-main .special-content .image-main img",
            ".content-main .special-content .image img",
            ".content-main  #slider ul li a img",
            "#mainwrap .contentsbox .imgleftbox img",
            "#mainwrap .contentsbox .imgcenterbox img",
            "#container .contentsbox img",
            ".main_photo_image a div img"
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
    host: "www.oricon.co.jp",
    altHosts: ["beauty.oricon.co.jp"]
};
