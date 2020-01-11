"use strict";

var m = {
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
        return url.split("?")[0];
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
        if (list.indexOf(value) === -1) {
            list.push(value);
        }
    },
    /**
     * If the given link matches "*awalker.jp/v/*", replaces the 'v' with 'i' and returns the replaced url
     */
    getAwalkerImgUrl: function(link) {
        // http://dcimg.awalker.jp/v/rAI1PQ4Vqr0oyhGsyjQMEe4ylHLHwFRREUKDf5gUB67S5P4nMxJDt6tjNJEtjsIWbkH9ktHTZnX6b2u5WGbD6EMA8dVGBmdDbMMe5q9KSkRrA3ZVHNGIIkxSGMjOuGz4UQAbndAJW85FPLF9l7BsY3KI314EOP3VDtli6OyX4rPrf9XgYF2m7myaauc1kCWEdQi1bOh0
        if (link.match(/*awalker.jp/v/*/)) {
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
    }
};

var o = {
    host: window.location.host,
    supported: true,
    retry: false,
    images: [],
    remoteImages: {}, // for example {"mdpr.jp": "1234567"}
    ext: undefined,
    folder: window.location.host + window.location.pathname.replace(/\//g, "-") + "/",
};

if (window.location.host === "mdpr.jp" || window.location.host.endsWith(".mdpr.jp")) {
    m.pushArray(o.images, m.findImagesOfClass("square"));
    m.pushArray(o.images, m.findImagesOfContainerClass("list-photo"));
    m.pushArray(o.images, m.findImagesOfClass("figure"));
    m.pushArray(o.images, m.findImagesOfContainerClass("figure-list"));
    m.pushArray(o.images, m.findImagesOfClass("headline-photo"));
    m.pushArray(o.images, m.findImagesOfContainerClass("no-moki"));
    m.pushArray(o.images, m.findImagesOfContainerClass("snap-content"));
    let mobileImages =  m.findImagesWithCssSelector(document, ".m-appImageList img", m.removeQuery);
    if (mobileImages.length > 0) {
        m.pushArray(o.images, mobileImages);
        let articleId = m.findMdprArticleId();
        if (articleId) {
            o.remoteImages["mdpr.jp"] = articleId;
        }
    }
} else if (window.location.host === "blog.nogizaka46.com") {
    var sheet = document.getElementById("sheet");
    if (sheet) {
        var imgs = m.findAllImageDOMsFromRoot(sheet, {"ids": ["comments"]});
        for (const img of imgs) {
            if (img.parentElement instanceof HTMLAnchorElement &&
                img.parentElement.href && img.parentElement.href.indexOf("//blog.nogizaka46.com/" > -1) &&
                (img.parentElement.href.endsWith(".jpg") || img.parentElement.href.endsWith(".png"))) {
                o.images.push(img.parentElement.href);
            } else if (img.parentElement instanceof HTMLAnchorElement && img.parentElement.href &&
                m.getAwalkerImgUrl(img.parentElement.href)) {
                o.images.push({
                    imageUrl: m.getAwalkerImgUrl(img.parentElement.href),
                    websiteUrl: img.parentElement.href
                });
            } else if (!img.src.endsWith(".gif") && !img.src.endsWith(".php")) {
                o.images.push(img.src);
            }
        }
    }

    var iframe = null;
    chrome.runtime.onMessage.addListener(
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
} else if (window.location.host === "www.instagram.com") {
    let imgs = m.findImagesWithCssSelector(document, "article img[srcset]");
    if (imgs.length > 0) {
        let div = document.getElementById("_mid-images_");
        if (div) {
            // helper script injected
            if (div.dataset.images) {
                m.pushArray(o.images,
                    div.dataset.images.split(";")
                        .filter(s => s.length > 0)
                        .map(s => decodeURIComponent(s)));
                document.body.removeChild(div);
            } else {
                // give up and take the first image
                m.pushIfNew(o.images, imgs[0]);
            }
        } else {
            // inject helper script and wait
            m.injectScriptDOM(chrome.runtime.getURL("helper/instagram-react.js"));
            o.retry = true;
        }
    }
} else if (window.location.host === "www.bilibili.com" && window.location.pathname.startsWith("/read/")) {
    let imgs = document.querySelectorAll("figure.img-box img[data-src]");
    var src;
    let cleanSrc = function(src) {
        var at = src.lastIndexOf("@");
        if (at > -1) {
            src = src.substr(0, at);
        }
        if (src.startsWith("//")) {
            src = window.location.protocol + src;
        }

        return src;
    };

    for (const img of imgs) {
        src = img.getAttribute("data-src");
        if (src) {
            m.pushArray(o.images, [cleanSrc(src)]);
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
                    m.pushArray(o.images, [cleanSrc(src)]);
                }
            }
        }
    }
} else if (window.location.host === "twitter.com") {
    let getLargeImg = function (src) {
        if (src.indexOf(".twimg.com/") > -1) {
            if (src.endsWith(".jpg") || src.endsWith(".png")){
                return src + ":large";
            }

            try {
                let url = new URL(src);
                var search = url.search.split("&");
                search[0] = search[0].substring(1); // remove '?'
                for (var i = 0; i < search.length; i++) {
                    if (search[i].startsWith("format=")) {
                        search[i] = "format=jpg";
                    }

                    if (search[i].startsWith("name=")) {
                        search[i] = "name=large";
                    }
                }

                return url.protocol + "//" + url.host + url.pathname + "?" + search.join("&");
            } catch (e) {
            }
        }

        return src;
    };

    // Old UI
    let galleries = document.querySelectorAll(".Gallery-media img");
    if (galleries.length) {
        for (const img of galleries) {
            o.images.push(getLargeImg(img.src));
        }
    } else {
        let modals = document.querySelectorAll(".PermalinkOverlay-modal .permalink-tweet-container");
        if (modals.length) {
            m.pushArray(o.images, m.findImagesWithCssSelector(modals[0], ".AdaptiveMedia-container img", getLargeImg));
        } else {
            m.pushArray(o.images, m.findImagesWithCssSelector(document, ".content .AdaptiveMedia-container img", getLargeImg));
        }
    }

    // New UI with react.js
    let isTimelineConversation = function () {
        return document.querySelectorAll("div[aria-label='Timeline: Conversation']").length > 0;
    };

    let modals = document.querySelectorAll("div[aria-labelledby=modal-header] img");
    if (modals.length) {
        for (const img of modals) {
            o.images.push(getLargeImg(img.src));
        }
        o.ext = "jpg";
    } else {
        let articles = document.querySelectorAll("article");
        if (articles.length) {
            o.ext = "jpg";
            if (isTimelineConversation()) {
                m.pushArray(o.images, m.findImagesWithCssSelector(articles[0], "div[aria-label=Image] img", getLargeImg));
            } else {
                //Timeline: Conversation
                m.pushArray(o.images, m.findImagesWithCssSelector(document, "div[aria-label=Image] img", getLargeImg));
            }
        }
    }

} else if (window.location.host === "tokyopopline.com") {
    let re = /http.*-[0-9]+x[0-9]+\.jpg$/;
    let getLargeImg = function (src) {
        if (src.match(re)) {
            var l = src.split("-");
            l.pop();
            return l.join("-") + ".jpg";
        }

        return src;
    };

    m.pushArray(o.images, m.findImagesWithCssSelector(document, ".p-entry__thumbnail img", getLargeImg));
    m.pushArray(o.images, m.findImagesWithCssSelector(document, ".gallery-item img", getLargeImg));
} else if (window.location.host === "news.dwango.jp") {
    let getOriginalImg = function(url) {
        var slash = url.lastIndexOf("/");
        if (slash > -1) {
            let smallFile = url.substring(slash + 1);
            if (smallFile.startsWith("sm_") || smallFile.startsWith("lg_")) {
                return url.substring(0, slash + 1) + smallFile.replace(/sm_|lg_/, "");
            }
        }

        return url;
    };

    m.pushArray(o.images, m.findImagesWithCssSelector(document, ".page-sub_img img.img_photo", getOriginalImg));
    // NodeList(2) [img.img_photo, img.ico_15]
    m.pushArray(o.images, m.findImagesWithCssSelector(document, ".photolist .sec-item img", getOriginalImg));
} else if (window.location.host === "www.facebook.com") {
    let spotlights = document.querySelectorAll(":not(.hidden_elem) > .spotlight");
    if (spotlights && spotlights.length) {
        for (const spotlight of spotlights) {
            if (spotlight.nodeName === "IMG" && spotlight.src) {
                o.images.push(spotlight.src);
            }
        }
    } else {

        let divs = document.querySelectorAll(".uiScaledImageContainer");
        if (divs && divs.length) {
            for (const div of divs) {
                if (div.parentElement.nodeName === "A" && div.parentElement.getAttribute("data-ploi")) {
                    o.images.push(div.parentElement.getAttribute("data-ploi"));
                }
            }
        }
    }
} else if (window.location.host === "popwave.jp") {
    let re = /http.*-[0-9]+x[0-9]+\.jpg$/;
    let getLargeImg = function (src) {
        if (src.match(re)) {
            var l = src.split("-");
            l.pop();
            return l.join("-") + ".jpg";
        }

        return src;
    };

    m.pushArray(o.images, m.findImagesWithCssSelector(document, ".entry img", getLargeImg));
} else if (window.location.host === "mikan-incomplete.com") {
    let re = /http.*-[0-9]+x[0-9]+\.jpg$/;
    let getLargeImg = function (src) {
        if (src.match(re)) {
            var l = src.split("-");
            l.pop();
            return l.join("-") + ".jpg";
        }

        return src;
    };
    m.pushArray(o.images, m.findImagesWithCssSelector(document, "article#entry img", getLargeImg));
} else if (window.location.host === "www.asahi.com" && window.location.pathname.startsWith("/and_M/")) {
    let getLargeImg = function (src) {
        if (src.indexOf("/resize/") > -1) {
            return src.replace("/resize/", "/original/")
        }

        let re = /.*www.asahicom.jp\/and_M\/wp-content\/uploads\/[0-9]+\/[0-9]+\/.*-[0-9]\.jpg$/;
        if (src.match(re)) {
            var l = src.split("-");
            l.pop();
            return l.join("-") + ".jpg";
        }

        return src;
    };
    m.pushArray(o.images, m.findImagesWithCssSelector(document, ".l-article__content img", getLargeImg));
} else if (window.location.host === "cancam.jp") {
    let re = /^http.*cancam\.jp\/wp-content\/uploads\/.*-[0-9]+x[0-9]+\.jpg$/;
    let getLargeImg = function (src) {
        if (src.match(re)) {
            var l = src.split("-");
            l.pop();
            return l.join("-") + ".jpg";
        }

        return src;
    };

    if (window.location.pathname.match(/\/archives\/category\/(model|itgirl)\/.+/)) {
        m.pushArray(o.images, m.findImagesWithCssSelector(document, ".profile-header img", getLargeImg));
        m.pushArray(o.images, m.findImagesWithCssSelector(document, ".profile-content img", getLargeImg));
        m.pushArray(o.images, m.findImagesWithCssSelector(document, ".profile-images img", getLargeImg));
    } else if (window.location.pathname.match(/\/archives\/[0-9]+$/)
        || window.location.pathname.match(/\/medias\/.+$/)
        || window.location.pathname.match(/^\/[a-z0-9]+$/)) {
        m.pushArray(o.images, m.findImagesWithCssSelector(document, "#main img", getLargeImg));
    }

} else if (window.location.host === "bltweb.jp") {
    m.pushArray(o.images, m.findImagesWithCssSelector(document, "article .entry-content img", m.filterTrailingResolutionNumbers));
} else if (window.location.host === "mantan-web.jp") {
    let getLargeImg = function(url) {
        let ext = null;
        if (url.endsWith("_thumb.jpg")) {
            ext = ".jpg";
        } else if (url.endsWith("_thumb.jpeg")) {
            ext = ".jpeg";
        } else if (url.endsWith("_thumb.png")) {
            ext = ".png";
        }

        if (ext !== null) {
            let ret = {url: url.replace("_thumb" + ext, "_size10" + ext), retries: []};
            for (let i = 9; i >= 6; i--) {
                ret.retries.push(url.replace("_thumb" + ext, "_size" + i + ext));
            }

            return ret;
        }

        return url;
    };
    m.pushArray(o.images, m.findImagesWithCssSelector(document, "article .newsbody__thumblist li img", getLargeImg));
} else {
    o.supported = false;
}
window._mid = {o: o};
o;
