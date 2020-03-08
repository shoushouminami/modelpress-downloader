"use strict";
const utils = require("./utils.js");
let o = require("./inject/return-message.js").init();
const sites = require("./inject/supported-sites.js");

const site = sites.get(window.location.host);
if (site) {
    o = site.inject();
}  else if (window.location.host === "blog.nogizaka46.com") {
    var sheet = document.getElementById("sheet");
    if (sheet) {
        var imgs = utils.findAllImageDOMsFromRoot(sheet, {"ids": ["comments"]});
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
    let imgs = utils.findImagesWithCssSelector(document, "article img[srcset]");
    if (imgs.length > 0) {
        let div = document.getElementById("_mid-images_");
        if (div) {
            // helper script injected
            if (div.dataset.images) {
                utils.pushArray(o.images,
                    div.dataset.images.split(";")
                        .filter(s => s.length > 0)
                        .map(s => decodeURIComponent(s)));
                document.body.removeChild(div);
            } else {
                // give up and take the first image
                utils.pushIfNew(o.images, imgs[0]);
            }
        } else {
            // inject helper script and wait
            utils.injectScriptDOM(chrome.runtime.getURL("helper/instagram-react.js"));
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
            utils.pushArray(o.images, [cleanSrc(src)]);
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
                    utils.pushArray(o.images, [cleanSrc(src)]);
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
            utils.pushArray(o.images, utils.findImagesWithCssSelector(modals[0], ".AdaptiveMedia-container img", getLargeImg));
        } else {
            utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".content .AdaptiveMedia-container img", getLargeImg));
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
                utils.pushArray(o.images, utils.findImagesWithCssSelector(articles[0], "div[aria-label=Image] img", getLargeImg));
            } else {
                //Timeline: Conversation
                utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div[aria-label=Image] img", getLargeImg));
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

    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".p-entry__thumbnail img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".gallery-item img", getLargeImg));
} else if (window.location.host === "news.dwango.jp") {
    let getOriginalImg = function(url) {
        var slash = url.lastIndexOf("/");
        if (slash > -1) {
            let smallFile = url.substring(slash + 1);
            if (smallFile.startsWith("sm_") || smallFile.startsWith("lg_")) {
                url = url.substring(0, slash + 1) + smallFile.replace(/sm_|lg_/, "");
            }
        }

        if (url.indexOf("://news-img.dwango.jp/") > -1) {
            return {url: url.replace("://news-img.dwango.jp/", "://green-img-news-dwango-jp-prod.s3.amazonaws.com/"), retries: [url]};
        }

        return url;
    };

    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".page-sub_img img.img_photo", getOriginalImg));
    // NodeList(2) [img.img_photo, img.ico_15]
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".photolist .sec-item img", getOriginalImg));
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

    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".entry img", getLargeImg));
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
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "article#entry img", getLargeImg));
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
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".l-article__content img", getLargeImg));
} else if (window.location.host === "cancam.jp") {
    let re = /^http.*cancam\.jp\/.*uploads\/.*-[0-9]+x[0-9]+\.jpg$/;
    let getLargeImg = function (src) {
        if (src.match(re)) {
            var l = src.split("-");
            l.pop();
            return l.join("-") + ".jpg";
        }

        return src;
    };

    if (window.location.pathname.match(/\/archives\/category\/(model|itgirl)\/.+/)) {
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".profile-header img", getLargeImg));
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".profile-content img", getLargeImg));
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".profile-images img", getLargeImg));
    } else if (window.location.pathname.match(/\/archives\/[0-9]+$/)
        || window.location.pathname.match(/\/medias\/.+$/)
        || window.location.pathname.match(/^\/[a-z0-9]+$/)) {
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "#main img", getLargeImg));
    }

} else if (window.location.host === "bltweb.jp") {
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "article .entry-content img", utils.filterTrailingResolutionNumbers));
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
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "article .newsbody__thumblist li img", getLargeImg));
} else if (window.location.host === "girlswalker.com") {
    let divs = document.querySelectorAll("article.gw-content-wrap ul.gw-content__entry-thumbnail-list a div.gw-content__entry-thumbnail-list__item-image");
    let pattern = /^url\("(https?:\/\/.*\.(jpg|png))"\)$/i;
    if (divs && divs.length) {
        for (const div of divs) {
            if (div.style && div.style.backgroundImage && div.style.backgroundImage.match(pattern)) {
                utils.pushIfNew(o.images, div.style.backgroundImage.match(pattern)[1]);
            }
        }
    }
} else if (window.location.host === "this.kiji.is") {
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.main__articleBody img", (url) => {
        let re = /https?:\/\/nordot-res.cloudinary.com\/(.*\/)ch\/images\/.*\.jpg/;
        let m = url.match(re);
        if (m && m[1]) {
            return url.replace(m[1], "");
        }

        return url;
    }));
} else if (window.location.host === "dogatch.jp") {
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#container div#main div.inner img", null));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#container div#main div.slick-list img", null));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#container div#main img.ptph", null));
} else if (window.location.host === "thetv.jp") {
    let pattern = /^url\("(https?:\/\/.*\.(jpg|png))\??.*"\)$/i;
    let links = document.querySelectorAll("div.mainContent div.galleryArea ul.list_thumbnail li.list_thumbnail__item a");
    if (links.length) {
        for (const link of links) {
            if (link.style.backgroundImage.match(pattern)) {
                utils.pushIfNew(o.images, link.style.backgroundImage.match(pattern)[1]);
            }
        }
    }
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.mainContent div.contentBody div.contentPhotoLerge figure img", utils.removeQuery));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.mainContent div.contentBody div.contentText div.alignCenterPhoto img", utils.removeQuery));
    // matome
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.mainContent div.fullWidthImages img", utils.removeQuery));
    // program
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.mainContent div.pp_prg_data img.pp_prg_img", utils.removeQuery));
} else if (window.location.host === "talent.thetv.jp") {
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.mainContent div.contentBody div.personData figure.personDataVisual img", utils.removeQuery));
} else if (window.location.host === "apress.jp") {
    let getLargeImg = (url) => {
        return utils.filterTrailingResolutionNumbers(utils.removeQuery(url));
    };
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#main-content figure.gallery-item img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#main-content div.entry-content figure.entry-thumbnail img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#main-content div.entry-content p img[class*=wp-image]", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#main-content article div.entry-content div.img div.img__item img", getLargeImg));
} else if (window.location.host === "news.mynavi.jp") {
    let getLargeImg = (url) => {
        if (url.endsWith(".jpg")) {
            return url.replace(".jpg", "l.jpg");
        }
    };
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main.main article.article div.article-body ul.photo_table img.photo_table__img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main.main div.box ul li a img", getLargeImg));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main.main article.article div.article-body div.photo_right img"));
} else {
    o.supported = false;
}

window._mid = {o: o};
module.exports = o;
