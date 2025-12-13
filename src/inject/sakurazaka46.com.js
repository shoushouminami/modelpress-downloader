const utils = require("../utils");
const { replaceIllegalChars, removeSpace } = require("../utils/str-utils.js");
const { getDocument, getSearchParamValue, getWindow } = require("../globals.js");
const { toFull, basename, pathname } = require("../utils/url-utils.js");
const { loadPerisistedSiteOptions, onOptionsChanged, DOWNLOAD_PREPEND_JOBID } = require("../site-options");
const logger = require("../logger2.js")(module.id);

function filterIcon(url) {
    if (url.indexOf("twemoji.maxcdn.com") > -1) {
        return null;
    }
    return url;
}

const re = /.*(\/\d{3}_\d{3}_\d{6})\.(jpg|jpeg)$/i ;
function getLargeImg(url) {
    if (url.match(re)) {
        url = url.replace(url.match(re)[1], "");
    }
    return url;
}

function getFolderFromBlogTitle(original) {
    let nameP = document.querySelector('.com-hero-title > .inner');
    const yearSpan = document.querySelector(".ym-year");
    const monthSpan = document.querySelector(".ym-month");
    let titleP = document.querySelector(".title-wrap > .title");
    if (nameP && yearSpan && monthSpan && titleP) {
        return removeSpace(
            replaceIllegalChars(
                nameP.innerText
                + '-' + yearSpan.innerText.replace(' ', '_').replace(':', '.')
                + '-' + monthSpan.innerText.replace(' ', '_').replace(':', '.')
                + '-' + (titleP.innerText.length > 35 ? titleP.innerText.substring(0, 35) + '…' : titleP.innerText)
            ))
            + '/';
    }

    return removeSpace(replaceIllegalChars(getDocument().title));
}

function isBlog() {
    return getWindow().location.href.indexOf("sakurazaka46.com/s/s46/diary/detail/") > -1;
}

function getPageHTML(o) {
    const remap = [{
        from: "&quot;/files/14/s46/",
        to: "&quot;" + toFull("/files/14/s46/")
    }];

    // prepend domain to path for web page assets
    const toFullPath = [
        "/files/14/",
        "/images/"
    ];

    for (const p of toFullPath) {
        remap.push({
            from: `src="${p}`,
            to: `src="${toFull(p)}`
        });
        remap.push({
            from: `href="${p}`,
            to: `href="${toFull(p)}`
        });
        remap.push({
            from: `background-image: url(${p}`,
            to: `background-image: url(${toFull(p)}`
        });
    }

    // matches background image url( <- newline
    remap.push({
        from: new RegExp("^" + "/images/", "gm"),
        to: toFull("/images/")
    });

    // replace image url and point to local file path
    for (const url of o.images) {
        // replace <img src="https://.../full/path/filename"> to <img src="./filename">
        remap.push({
            from: "src=\"" + url + "\"",
            to: "src=\"./" + basename(url) + "\""
        });
        // replace <img src="/full/path/filename"> to <img src="./filename">
        remap.push({
            from: "src=\"" + pathname(url) + "\"",
            to: "src=\"./" + basename(url) + "\""
        });
    }

    let webpage = "<!DOCTYPE html>" + getDocument().documentElement.outerHTML;
    for (const m of remap) {
        webpage = webpage.replaceAll(m.from, m.to);
    }
    return webpage;
}


module.exports = {
    inject: function () {
        // Member blog & news
        let o = require("./return-message.js").init({
            options: {
                // in Blog HTML, image is loaded from current folder path ./
                // Ignore the job id so the filename is not consistent
                [DOWNLOAD_PREPEND_JOBID]: {
                    hidden: true,
                    checked: false
                },
            }
        });

        // Add downloadHTML option for blog
        if (isBlog()) {
            o.options["downloadHTML"] = {
                index: 1,
                label: "Download blog HTML",
                type: "checkbox",
                checked: false
            }
        }

        for (const selector of [
            "main .col-l-wrap .post .box-article img",
            "main .news-detailcont .article img",
            "main .member-profcont .ph img"
        ]) {
            utils.pushArray(
                o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    filterIcon
                )
            )
        }

        // FC history images
        utils.pushArray(
            o.images,
            utils.findDOMsWithCssSelector(
                document,
                "main .sakura-history-detail-list .c-item .c-thumb-img img",
                function (dom) {
                    let url = utils.getBackgroundImageFromDOM(dom);
                    if (url == null) {
                        return null;
                    }
                    if (url.startsWith("/")) {
                        url = window.origin + url;
                    }
                    return getLargeImg(url);
                }
            )
        );
        // FC manager diary
        utils.pushArray(
            o.images,
            utils.findImagesWithCssSelector(
                document,
                "main .manager-list dl dd div li img",
                function (url) {
                    return getLargeImg(url);
                }
            )
        );
        let ct = getSearchParamValue("ct");
        if (ct) {
            o.folder = o.folder.substring(0, o.folder.length - 1) + "-" + ct + "/";
        } else {
            o.folder = getFolderFromBlogTitle(o.folder);
        }

        const imagesWithoutBlog = o.images.slice();
        if (isBlog()) {
            const sendBlogToUpdateResult = (options) => {
                logger.debug("Updated options=", options, "imagesWithoutBlog=", imagesWithoutBlog);
                o.images = imagesWithoutBlog.slice(); // reset images for generating page HTML
                if (options["downloadHTML"].checked === true) {
                    let webpage = getPageHTML(o);
                    o.images.push({
                        url: "data:text/html;charset=utf-8," + encodeURIComponent(webpage),
                        filename: "index.html"
                    })
                }
                require("../messaging.js").sendToRuntime("updateResult", o);
            };

            loadPerisistedSiteOptions(o.host, o.options)
                .then(({ options }) => {
                    o.options = options;
                    sendBlogToUpdateResult(o.options);
                });

            onOptionsChanged(({ options }) => {
                o.options = options;
                sendBlogToUpdateResult(options);
            });
        }

        return o;
    },
    host: "sakurazaka46.com",
    url: "https://sakurazaka46.com/s/s46/diary/blog/list",
    re: re
};
