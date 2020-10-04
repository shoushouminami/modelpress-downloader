const utils = {
    /**
     * First get a list of DOMs belonging to the given CSS class.
     * Then for each of the DOM element, find 1 image recursively.
     * @param clazz
     * @returns {*|a}
     */
    findImagesOfClass: function (clazz) {
        var dom = document.getElementsByClassName(clazz);
        var list = this.findImageUrlsFromDOMList(dom && dom.length && dom);
        console.debug("Found " + list.length + " images of class " + clazz);
        return list;
    },
    /**
     * First get a list of DOMs belonging to the given CSS class.
     * Then for each of the DOM element, find 1 image from each of its children DOM.
     * @param clazz
     * @returns {*}
     */
    findImagesOfContainerClass: function (clazz) {
        var list = [];
        var dom = document.getElementsByClassName(clazz);
        if (dom && dom.length) {
            for (var i = 0; i < dom.length; i++) {
                list = list.concat(this.findImagesFromContainerDOM(dom[i]));
            }
        }
        console.debug("Found " + list.length + " images of container class " + clazz);
        return list;
    },
    /**
     * For the given DOM element, find 1 image from each of its children DOM.
     * @param dom
     * @returns {Array}
     */
    findImagesFromContainerDOM: function(dom) {
        if (dom.children) {
            return this.findImageUrlsFromDOMList(dom.children);
        }
        return [];
    },
    /**
     * Given an array of DOM elements, find 1 img from each of the elements.
     * @returns a list of image urls
     */
    findImageUrlsFromDOMList: function (domArray) {
        var list = [];
        if (domArray && domArray.length) {
            for (var i = 0; i < domArray.length; i++) {
                var img = this.findImageDOMFromRoot(domArray[i]);
                if (img) {
                    list.push(this.removeQuery(img.src));
                }
            }
        }
        return list;
    },
    /**
     * Tries to find 1 img element recursively from the given DOM object and its children,
     * and return the 'src' property of the img.
     * @returns null if no img element was found
     */
    findImageDOMFromRoot: function (dom) {
        var list = this.findAllImageDOMsFromRoot(dom);
        if (list && list.length) {
            return list[0];
        }

        return null;
    },
    /**
     * Recursively find all img DOMs from the root dom.
     */
    findAllImageDOMsFromRoot: function(dom, excludes, depth) {
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
                var subList = this.findAllImageDOMsFromRoot(dom.children[i], excludes,depth + 1);
                if (subList) {
                    list = list.concat(subList);
                }
            }
        }

        return list;
    },
    /**
     * Removes the query part of the given url
     */
    removeQuery: function (url) {
        return url.split("\?")[0];
    },
    /**
     * Helper method to push all elements from newList into list.
     */
    pushArray: function (list, newList) {
        if (newList && newList.length) {
            for (const value of newList.values()) {
                this.pushIfNew(list, value);
            }
        }
    },
    /**
     * Helper method to push value into list if it is not yet in the list.
     */
    pushIfNew: function(list, value){
        if (value) {
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
    },
    /**
     * If the given link matches "*awalker.jp/v/*", replaces the 'v' with 'i' and returns the replaced url
     */
    getAwalkerImgUrl: function(link) {
        // http://dcimg.awalker.jp/v/rAI1PQ4Vqr0oyhGsyjQMEe4ylHLHwFRREUKDf5gUB67S5P4nMxJDt6tjNJEtjsIWbkH9ktHTZnX6b2u5WGbD6EMA8dVGBmdDbMMe5q9KSkRrA3ZVHNGIIkxSGMjOuGz4UQAbndAJW85FPLF9l7BsY3KI314EOP3VDtli6OyX4rPrf9XgYF2m7myaauc1kCWEdQi1bOh0
        if (link.match(/.*awalker\.jp\/v\/.*/)) {
            return link.replace("awalker.jp/v/", "awalker.jp/i/") + ".jpg";
        }

        return null;
    },
    loadUrlInHiddenIframe: function(url) {
        var iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.height = 1;
        iframe.width = 1;
        iframe.style.cssText = 'visibility: hidden;';
        document.body.appendChild(iframe);
    },

    /**
     * Uses the css selector to find children IMG doms from the given root dom. Apply the filter function to IMG.src if given.
     * A list of objects is returned. The type of the object will be string (DOM.src) if filter function is not supplied.
     * If the filter function is supplied, the type of the object will be the return type of the filter function.
     * @param rootDom
     * @param cssSelector
     * @param filterFunc a function to transform the found src to another object. Input is the found IMG.src.
     * @returns {[]}
     */
    findImagesWithCssSelector: function(rootDom, cssSelector, filterFunc) {
        return utils.findDomsWithCssSelector(rootDom, cssSelector, function (dom) {
            if (typeof filterFunc === "function") {
                return filterFunc(dom.src, dom.width, dom.height);
            } else {
                return dom.src;
            }
        });
    },

    /**
     * Uses the css selector to find children doms from the given root dom. Apply the filter function if given.
     * A list of objects is returned. The type of the object will be the dom if filter function is not supplied.
     * If the filter function is supplied, the type of the object will be the return type of the filter function.
     * @param rootDom
     * @param cssSelector
     * @param filterFunc a function to transform the found dom to another object. Input is the dom.
     * @returns {[]}
     */
    findDomsWithCssSelector: function(rootDom, cssSelector, filterFunc) {
        let ret = [];
        let doms = rootDom.querySelectorAll(cssSelector);
        if (doms && doms.length) {
            for (const dom of doms) {
                if (typeof filterFunc === "function") {
                    utils.pushIfNew(ret, filterFunc(dom));
                } else {
                    utils.pushIfNew(ret, dom);
                }
            }
        }

        return ret;
    },

    trailingResolutionPattern: /^https?:\/\/.*(-[0-9]+x[0-9]+(-[\d]+)?)(\.jpg|\.jpeg|\.png)$/,
    removeTrailingResolutionNumbers: function (src) {
        let result = src.match(utils.trailingResolutionPattern);
        if (result) {
            return src.replace(result[1], "");
        }

        return src;
    },
    injectScriptDOM: function (filepath) {
        let script = document.createElement('script');
        script.src = filepath;
        document.body.appendChild(script);
    },
    /**
     * finds the article id from page
     */
    findMdprArticleId: function () {
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
    },
    removeDataUrl: function (url) {
        if (url.startsWith("data:")) {
            return null
        }

        return url;
    },

    /**
     * Returns the background image url from the DOM's style attribute.
     */
    getDomBackgroundImage: function (dom) {
        const pattern = /url\(['"]?(https?:\/\/.*\.(jpg|jpeg|webp|png)(\?[^'"]*)?)['"]?\)/i;
        if (dom && dom.style && dom.style.backgroundImage && dom.style.backgroundImage.match(pattern)) {
            return dom.style.backgroundImage.match(pattern)[1];
        }

        return null;
    },
    printTestAssertion: function (message) {
        let s = "";
        try {
            s += JSON.stringify(message.href) + ",\n";
            s += JSON.stringify(message.folder) + ",\n";
            s += JSON.stringify(message.images, null, 1);
        } catch (e) {} // make sure dont fail
        return s;
    },
    /**
     * Returns a filter function that will try replacing "size6.jpg" with "size10.jpg"
     * The highest number to try is defined by largeNum.
     * @param largeNum
     * @returns {function(*): ({retries: [], url: *}|undefined)}
     */
    getSizeGuessingFunc: function (largeNum) {
        return function (url) {
            let m = url.match(/^.*(_thumb|_size(\d{1,2}))(.jpg|.jpeg|.png)$/i)
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

            return url;
        }
    },
    getChildElement: function (dom, pathArr) {
        for (const path of pathArr) {
            if (dom[path]) {
                dom = dom[path]
            } else {
                return null;
            }
        }

        return dom;
    }
};

module.exports = utils;
