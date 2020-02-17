const m = {
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

    findImagesWithCssSelector: function(dom, cssSelector, filterFunc) {
        var ret = [];
        let imgs = dom.querySelectorAll(cssSelector);
        if (imgs && imgs.length) {
            for (const img of imgs) {
                if (typeof filterFunc === "function") {
                    m.pushIfNew(ret, filterFunc(img.src));
                } else {
                    m.pushIfNew(ret, img.src);
                }
            }
        }

        return ret;
    },

    trailingResolutionPattern: /http.*-[0-9]+x[0-9]+(\.jpg|\.jpeg|\.png)$/,
    filterTrailingResolutionNumbers: function (src) {
        let result = src.match(m.trailingResolutionPattern);
        if (result) {
            let l = src.split("-");
            l.pop();
            return l.join("-") + result[1];
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
    nullIfDataUrl: function (url) {
        if (url.startsWith("data:")) {
            return null
        }

        return url;
    }
};

module.exports = m;