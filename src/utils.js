/**
 * First get a list of DOMs belonging to the given CSS class.
 * Then for each of the DOM element, find 1 image recursively.
 * @param clazz
 * @returns {*|a}
 */
function findImagesOfClass(clazz) {
    let logger = require("./logger2")(module.id);
    let dom = document.getElementsByClassName(clazz);
    let list = findImageUrlsFromDOMList(dom && dom.length && dom);
    logger.debug("Found " + list.length + " images of class " + clazz);
    return list;
}

/**
 * First get a list of DOMs belonging to the given CSS class.
 * Then for each of the DOM element, find 1 image from each of its children DOM.
 * @param clazz
 * @returns {*}
 */
function findImagesOfContainerClass(clazz) {
    let logger = require("./logger2")(module.id);
    let list = [];
    let dom = document.getElementsByClassName(clazz);
    if (dom && dom.length) {
        for (var i = 0; i < dom.length; i++) {
            list = list.concat(findImagesFromContainerDOM(dom[i]));
        }
    }
    logger.debug("Found " + list.length + " images of container class " + clazz);
    return list;
}

/**
 * For the given DOM element, find 1 image from each of its children DOM.
 * @param dom
 * @returns {Array}
 */
function findImagesFromContainerDOM (dom) {
    if (dom.children) {
        return findImageUrlsFromDOMList(dom.children);
    }
    return [];
}

/**
 * Given an array of DOM elements, find 1 img from each of the elements.
 * @returns a list of image urls
 */
function findImageUrlsFromDOMList(domArray) {
    var list = [];
    if (domArray && domArray.length) {
        for (var i = 0; i < domArray.length; i++) {
            var img = findImageDOMFromRoot(domArray[i]);
            if (img) {
                list.push(removeQuery(img.src));
            }
        }
    }
    return list;
}

/**
 * Tries to find 1 img element recursively from the given DOM object and its children,
 * and return the 'src' property of the img.
 * @returns null if no img element was found
 */
function findImageDOMFromRoot(dom) {
    var list = findAllImageDOMsFromRoot(dom);
    if (list && list.length) {
        return list[0];
    }

    return null;
}

/**
 * Recursively find all img DOMs from the root dom.
 */
function findAllImageDOMsFromRoot(dom, excludes, depth) {
    var list = [];

    if (excludes) {
        if (
            (excludes.ids && dom.id && excludes.ids.indexOf(dom.id) > -1) ||
            (excludes.classes && dom.className && excludes.classes.indexOf(dom.className) > -1) ||
            (excludes.tags && dom.tagName && excludes.tags.indexOf(dom.tagName.toLowerCase()) > -1)
        ) {
            return list;
        }
    }

    if (!depth) {
        depth = 0;
    }

    if (depth > 20) {
        return null;
    }

    if (dom instanceof HTMLImageElement) {
        if (dom.src && dom.src.startsWith("http")) {
            return [dom];
        } else {
            return null;
        }
    }

    if (dom && dom.children) {
        for (var i = 0; i < dom.children.length; i++) {
            var subList = findAllImageDOMsFromRoot(dom.children[i], excludes, depth + 1);
            if (subList) {
                list = list.concat(subList);
            }
        }
    }

    return list;
}


/**
 * Removes the query part of the given url
 */
function removeQuery(url) {
    return url == null ? url : url.split("\?")[0];
}

/**
 * Helper method to push all elements from newList into list.
 */
function pushArray(list, newList) {
    if (newList && newList.length) {
        for (const value of newList.values()) {
            pushIfNew(list, value);
        }
    }
}

/**
 * Helper method to push value into list if it is not yet in the list.
 * null/undefined is not permitted.
 */
function pushIfNew(list, value) {
    if (value !== null && value !== undefined) {
        if (typeof value === "object" && value.url) {
            if (list.findIndex(function (elem) {
                return elem.url && (elem.url === value.url);
            }) === -1) {
                list.push(value);
            }
        } else if (list.indexOf(value) === -1) {
            list.push(value);
        }
    }
}

function loadUrlInHiddenIframe(url) {
    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.height = 1;
    iframe.width = 1;
    iframe.style.cssText = 'visibility: hidden;';
    document.body.appendChild(iframe);
    return iframe;
}

/**
 * If the given link matches "*awalker.jp/v/*", replaces the 'v' with 'i' and returns the replaced url
 */
function getAwalkerImgUrl(link) {
    // http://dcimg.awalker.jp/v/rAI1PQ4Vqr0oyhGsyjQMEe4ylHLHwFRREUKDf5gUB67S5P4nMxJDt6tjNJEtjsIWbkH9ktHTZnX6b2u5WGbD6EMA8dVGBmdDbMMe5q9KSkRrA3ZVHNGIIkxSGMjOuGz4UQAbndAJW85FPLF9l7BsY3KI314EOP3VDtli6OyX4rPrf9XgYF2m7myaauc1kCWEdQi1bOh0
    if (link.match(/.*awalker\.jp\/v\/.*/)) {
        return link.replace("awalker.jp/v/", "awalker.jp/i/") + ".jpg";
    }

    return null;
}

/**
 * Uses the css selector to find children IMG doms from the given root dom. Apply the filter function to IMG.src if given.
 * A list of objects is returned. The type of the object will be string (DOM.src) if filter function is not supplied.
 * If the filter function is supplied, the type of the object will be the return type of the filter function.
 * @param rootDom
 * @param cssSelector
 * @param filterFunc a function to transform the found src to another object. Input is the found IMG.src.
 * @returns {[]}
 */
function findImagesWithCssSelector(rootDom, cssSelector, filterFunc) {
    return findDOMsWithCssSelector(rootDom, cssSelector, function (dom) {
        if (typeof filterFunc === "function") {
            return filterFunc(dom.src, dom.width, dom.height);
        } else {
            return dom.src;
        }
    });
}


/**
 * Similar to {@link #findImagesWithCssSelector} but checks for dom.dataset["src"] first for lazy loaded images.
 * @param rootDom
 * @param cssSelector
 * @param filterFunc a function to transform the found src to another object. Input is the found IMG.src.
 * @returns {[]}
 */
function findLazyImagesWithCssSelector(rootDom, cssSelector, filterFunc = null) {
    return findDOMsWithCssSelector(rootDom, cssSelector, function (dom) {
        let src = getLazyImageFromDOM(dom);
        if (typeof filterFunc === "function") {
            return filterFunc(src, dom.width, dom.height);
        } else {
            return src;
        }
    });
}

function getLazyImageFromDOM(dom) {
    let src = dom.src;

    if (dom.dataset["lazySrc"]) {
        src = dom.dataset["lazySrc"];
    }

    if (dom.dataset["src"]) {
        src = dom.dataset["src"];
    }

    if (!src && dom.srcset) {
        src = dom.srcset.split(",").pop().trim().split(" ")[0];
    }

    if (typeof filterFunc === "function") {
        return filterFunc(src, dom.width, dom.height);
    } else {
        return src;
    }
}

/**
 * Uses the css selector to find children doms from the given root dom. Apply the filter function if given.
 * A list of objects is returned. The type of the object will be the dom if filter function is not supplied.
 * If the filter function is supplied, the type of the object will be the return type of the filter function.
 * @param rootDom
 * @param cssSelector
 * @param filterFunc a function to transform the found dom to another object. Input is the dom.
 * @returns {[]}
 */
function findDOMsWithCssSelector(rootDom, cssSelector, filterFunc = null) {
    let logger = require("./logger2")(module.id);
    let ret = [];
    let doms = rootDom.querySelectorAll(cssSelector);
    logger.debug("[utils.js]", "doms.length=", doms.length, "cssSelector=", cssSelector, "doms=", doms);
    if (doms && doms.length) {
        for (const dom of doms) {
            if (typeof filterFunc === "function") {
                pushIfNew(ret, filterFunc(dom));
            } else {
                pushIfNew(ret, dom);
            }
        }
    }

    return ret;
}

const  trailingResolutionPattern = /^https?:\/\/.*(-[0-9]+x[0-9]+(-[\d]+)?)(\.jpg|\.jpeg|\.png)$/;
function removeTrailingResolutionNumbers(src) {
    if (src == null) return src;
    let result = src.match(trailingResolutionPattern);
    if (result) {
        return src.replace(result[1], "");
    }

    return src;
}

/**
 * finds the article id from page
 */
function findMdprArticleId() {
    let l = document.querySelector("a[data-click=photo_back_article]");
    if (l && l.href) {
        let parts = l.href.split("/");
        if (parts.length) {
            if (parts[parts.length - 1].match(/^\d+$/)) {
                return parts[parts.length - 1];
            }
        }
    }

    l = document.querySelector("input[name=topic_id]");
    if (l && l.value && l.value.match(/^\d+$/)) {
        return l.value;
    }

    return null;
}

function removeDataUrl(url) {
    if (url && url.startsWith("data:")) {
        return null
    }

    return url;
}

function removeGIF(url) {
    if (url && url.endsWith(".gif")) {
        return null
    }

    return url;
}

/**
 * Returns the background image url from the DOM's style attribute.
 */
function getBackgroundImageFromDOM(dom) {
    if (dom && dom.style && dom.style.backgroundImage) {
        return getBackgroundImageFromString(dom.style.backgroundImage)
    }

    return null;
}

/**
 * Returns the background image url from the background-image string.
 */
function getBackgroundImageFromString(backgroundImageString) {
    const pattern = /url\(['"]?((https?:\/)?\/?[^'"]*(\.(jpg|jpeg|webp|png))?(\?[^'"]*)?)['"]?\);?$/i;
    if (backgroundImageString && backgroundImageString.match(pattern)) {
        return backgroundImageString.match(pattern)[1];
    }

    return null;
}

function printTestAssertion(message) {
    let name = message.href.split("/");
    name.splice(0, 3);
    let s = `describe("Test suite ${message.host}", () => {}); \n\n\ntest(\"${name.join("/")}\", async () => {\n`;
    s += "await testDirectDownload(\n";
    s += "getBrowser(),\n";
    try {
        s += JSON.stringify(message.href) + ",\n";
        s += JSON.stringify(message.folder) + ",\n";
        s += JSON.stringify(message.images, null, 1);
    } catch (e) {
    } // make sure dont fail
    s += ");\n";
    s += "});\n";
    return s;
}

/**
 * Returns a filter function that will try replacing "size6.jpg" with "size10.jpg"
 * The highest number to try is defined by largeNum.
 * @param largeNum
 * @returns {function(*): ({retries: [], url: *}|undefined)}
 */
function getSizeGuessingFunc(largeNum) {
    return function (url) {
        let m = url.match(/^.*(_thumb|_size(\d{1,2}))(.jpg|.jpeg|.png)$/i)
        if (m != null) {
            let smallNum;
            try {
                smallNum = parseInt(m[2])
                if (isNaN(smallNum)) {
                    smallNum = 6;
                }
            } catch (e) {
                let smallNum = 6;
            }

            let ext = m[3]
            if (ext) {
                let ret = {url: url.replace(m[1] + ext, "_size" + largeNum + ext), retries: []};
                for (let i = (largeNum - 1); i >= smallNum; i--) {
                    ret.retries.push(url.replace(m[1] + ext, "_size" + i + ext));
                }

                return ret;
            }
        }

        return url;
    }
}

function getChildElement(dom, pathArr) {
    for (const path of pathArr) {
        if (dom[path]) {
            dom = dom[path]
        } else {
            return null;
        }
    }

    return dom;
}

function dataURItoBlobUrl(dataURI) {
    let byteString = atob(dataURI.split(',')[1]);
    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return URL.createObjectURL(new Blob([ab], {type: mimeString}));
}

function getSearchParam(url) {
    return (new URL(url)).searchParams;
}

let _concurrency_count = 0;
/***
 * config: {
 *      'withCredentials': true|false
 *      
 * }
 */
function fetchUrl(url, retry = 1, concurrency_limit = 8, config = {}) {
    const logger = require("./logger2")(module.id);
    logger.debug("fetchUrl retry=", retry, "concurrency_limit=", concurrency_limit, "config=", config, "url=", url);
    const timeout = config['timeout'] || 2000; // ms
    const withCredentials = config['withCredentials'] === true || false;
    _concurrency_count = _concurrency_count || 0;
    return new Promise(function (resolve, reject) {
        function retryFunc(local_retry) {
            logger.error("Retrying ... local_retry=", local_retry);
            const {wait} = require("./utils/async-utils")
            return wait(500).then(() => {
                return fetchUrl(url, local_retry, concurrency_limit, config);
            }).then(resolve, reject);
        }

        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                _concurrency_count = Math.max(0, _concurrency_count - 1);
                if (xhr.status / 100 === 2) {
                    logger.debug("GET", url, "OK");
                    resolve(xhr.responseText);
                } else if (retry > 0) {
                    logger.error("GET", url, "failed with", xhr.status, xhr.statusText);
                    retryFunc(retry - 1);
                } else {
                    logger.error("GET", url, "failed after retries");
                    reject(xhr.status, xhr.statusText);
                }
            }
        };
        xhr.timeout = timeout;
        xhr.ontimeout = xhr.onabort = (e) => {
            logger.error("GET", url, `timed out after ${timeout}ms`, e);
            _concurrency_count = Math.max(0, _concurrency_count - 1);
            retryFunc(retry - 1);
        };
        if (withCredentials) {
            xhr.withCredentials = true;
        }
        if (_concurrency_count < concurrency_limit) {
            _concurrency_count += 1;
            logger.debug("fetchUrl GET", url, "_concurrent_count=", _concurrency_count,
                "concurrency=", concurrency_limit);
            xhr.send();
        } else {
            return retryFunc(retry);
        }
    });
}

function replaceSpecialChars(s, replacement) {
    return s.replace(/[~!@#$%^&*+?<>]/g, replacement || "-");
}

function getFileName(url, ext, preferredName) {
    let filename;
    if (preferredName != null) {
        filename = replaceSpecialChars(preferredName);
    } else {
        filename = url.split(/[#?]/)[0].split("/");
        filename = filename[filename.length - 1];
    }
    
    if (filename.indexOf(":") > -1) {
        filename = filename.split(":")[0];
    }

    if (ext && !filename.endsWith(ext)) {
        if (!filename.endsWith(".")) {
            filename += ".";
        }
        filename += ext;
    }

    return replaceSpecialChars(decodeURI(filename));
}

function getFileExt(filename) {
    filename = filename.split(/[#?]/)[0].toLowerCase();
    let dot = filename.lastIndexOf(".");
    if (dot > -1) {
        return filename.substring(dot + 1);
    } else {
        return null;
    }
}

function clearObjectProperties(obj) {
    for (let member in obj) delete obj[member];
    return obj;
}

module.exports = {
    findImagesOfClass: findImagesOfClass,
    findImagesOfContainerClass: findImagesOfContainerClass,
    findImagesFromContainerDOM: findImagesFromContainerDOM,
    findImageUrlsFromDOMList: findImageUrlsFromDOMList,
    findImageDOMFromRoot: findImageDOMFromRoot,
    findAllImageDOMsFromRoot: findAllImageDOMsFromRoot,
    removeQuery: removeQuery,
    pushArray: pushArray,
    pushIfNew: pushIfNew,
    loadUrlInHiddenIframe: loadUrlInHiddenIframe,
    getAwalkerImgUrl: getAwalkerImgUrl,
    findImagesWithCssSelector: findImagesWithCssSelector,
    findLazyImagesWithCssSelector: findLazyImagesWithCssSelector,
    getLazyImageFromDOM: getLazyImageFromDOM,
    findDOMsWithCssSelector: findDOMsWithCssSelector,
    trailingResolutionPattern: trailingResolutionPattern,
    removeTrailingResolutionNumbers: removeTrailingResolutionNumbers,
    findMdprArticleId: findMdprArticleId,
    removeDataUrl: removeDataUrl,
    removeGIF: removeGIF,
    getBackgroundImageFromDOM: getBackgroundImageFromDOM,
    getBackgroundImageFromString: getBackgroundImageFromString,
    printTestAssertion: printTestAssertion,
    getSizeGuessingFunc: getSizeGuessingFunc,
    getChildElement: getChildElement,
    dataURItoBlobUrl: dataURItoBlobUrl,
    getSearchParam: getSearchParam,
    fetchUrl: fetchUrl,
    replaceSpecialChars: replaceSpecialChars,
    getFileName: getFileName,
    getFileExt: getFileExt,
    clearObjectProperties: clearObjectProperties,
};
