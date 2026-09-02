const utils = require("../utils.js");
const messaging = require("../messaging");
const logger = require("../logger2")(module.id);
const { wait } = require("../utils/async-utils");
const storage = require("../storage");

// delay between sequential real page fetches, to avoid hammering the server. Cache hits skip this
// entirely - see fetchImageUrl() below.
const FETCH_DELAY_MS = 5000;

const SESSION_STORAGE_KEY = "www.oricon.co.jp.pageUrlToImageUrl";

// survives inject() re-running (e.g. popup closed/reopened), unlike a plain module-scope variable -
// see getGlobalObjectCache() in globals.js. Maps pageUrl -> resolved image url, so pages already
// resolved in an earlier popup session aren't re-fetched.
const cache = require("../globals.js").getGlobalObjectCache(module.id);
if (cache.pageUrlToImageUrl == null) {
    // getGlobalObjectCache doesn't survive an actual page reload (window itself gets recreated), so
    // seed from sessionStorage too - it does survive a reload, cleared only when the tab closes.
    let seed = {};
    try {
        seed = JSON.parse(storage.sessionGet(SESSION_STORAGE_KEY)) || {};
    } catch (e) {
        logger.error("failed to parse cached pageUrlToImageUrl from sessionStorage", e);
    }
    cache.pageUrlToImageUrl = seed;
}

function cacheImageUrl(pageUrl, url) {
    cache.pageUrlToImageUrl[pageUrl] = url;
    try {
        storage.sessionSet(SESSION_STORAGE_KEY, JSON.stringify(cache.pageUrlToImageUrl));
    } catch (e) {
        logger.error("failed to persist pageUrlToImageUrl to sessionStorage", e);
    }
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

// serializes real fetches (cache misses) so they land FETCH_DELAY_MS apart, regardless of how many
// "getImageUrl" requests arrive concurrently from the popup. Cache hits bypass this chain entirely,
// so they resolve immediately with no delay.
let fetchQueue = Promise.resolve();
let hasFetchedOnce = false;

function fetchImageUrl(pageUrl) {
    const cachedUrl = cache.pageUrlToImageUrl[pageUrl];
    if (cachedUrl) {
        logger.debug("cache hit pageUrl=", pageUrl, "url=", cachedUrl);
        return Promise.resolve(cachedUrl);
    }

    const result = fetchQueue
        .then(() => (hasFetchedOnce ? wait(FETCH_DELAY_MS) : null))
        .then(() => {
            hasFetchedOnce = true;
            return utils.fetchUrl(pageUrl, 0);
        })
        .then(function (pageHtml) {
            let template = document.createElement("template");
            template.innerHTML = pageHtml;
            const url = getLargeImgFromPage(template.content);
            if (!url) {
                throw new Error("no image found on page pageUrl=" + pageUrl);
            }
            cacheImageUrl(pageUrl, url);
            return url;
        });

    // keep the queue moving even if this fetch fails, without letting its rejection propagate onward
    fetchQueue = result.catch(() => {});

    return result;
}

/**
 * Responds to "getImageUrl" requests (from getImageUrlFromContentScriptIfNotLoaded, driven by the
 * popup's thumbnail loading) by looking up the page url for the requested filename (the popup only
 * ever sees filenames, never page urls - see inject()) and resolving it via fetchImageUrl().
 */
function registerOrOverwriteListener(filenameToPageUrl) {
    messaging.listenOnRuntime("getImageUrl", function (msg, sendResponse) {
        logger.debug("received getImageUrl msg=", msg);
        const pageUrl = msg && filenameToPageUrl[msg.filename];
        if (!pageUrl) {
            logger.error("Bad getImageUrl msg=", msg);
            sendResponse({});
            return true;
        }

        fetchImageUrl(pageUrl).then(function (url) {
            sendResponse({
                url: url,
                filename: utils.getFileName(url)
            });
        }, function (error) {
            logger.error("fetchImageUrl failed pageUrl=", pageUrl, "error=", error);
            sendResponse({});
        });

        return true; // async response
    });
}

/**
 * Responds to "retryImage" requests (from the popup's click-to-retry on a failed thumbnail) by
 * reloading the whole page, rather than just re-requesting the same page url - the failure is more
 * likely a stale/expired page than a transient network blip.
 */
function registerRetryListener() {
    messaging.listenOnRuntime("retryImage", function (msg, sendResponse) {
        logger.debug("received retryImage msg=", msg, "reloading page");
        sendResponse({ retried: true });
        window.location.reload();
        return true;
    });
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

        // dummy placeholders, one per gallery page - the popup only ever sees {type, filename}, never
        // the page url itself. filenameToPageUrl (kept only in this content script) is what the
        // "getImageUrl" listener uses to resolve a request back to its page.
        const filenameToPageUrl = {};
        o.images = links.map(function (pageUrl, index) {
            const filename = (index + 1) + ".jpg";
            filenameToPageUrl[filename] = pageUrl;
            return {
                type: "msg",
                filename: filename
            };
        });

        registerOrOverwriteListener(filenameToPageUrl);
        registerRetryListener();

        return require("./return-message.js").loading(o);
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
    tearDown: function () {
        logger.debug("Tear down all event listeners")
        messaging.tearDownAllListeners();
    },
    host: "www.oricon.co.jp",
    altHosts: ["beauty.oricon.co.jp"]
};
