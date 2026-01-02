const utils = require("../utils.js");
const { replaceIllegalChars, removeSpace } = require("../utils/str-utils.js");
const { getDocument, getWindow } = require("../globals.js");
const { basename, pathname, combineFilters, toFull, removeGIF } = require("../utils/url-utils.js");
const { loadPerisistedSiteOptionsAndOnChange, DOWNLOAD_PREPEND_JOBID } = require("../site-options");
const logger = require("../logger2.js")(module.id);

function getFolderFromBlogTitle() {
    let nameP = document.querySelector('.writer');
    let timeP = document.querySelector(".section--detail .date");
    let titleP = document.querySelector(".section--detail .tit");
    if (nameP && timeP && titleP) {
        return removeSpace(replaceIllegalChars(
            nameP.innerText.replaceAll(' ', '')
            + '-' + timeP.innerText.replace(' ', '_').replace(':', '.')
            + '-' + (titleP.innerText.length > 35 ? titleP.innerText.substring(0, 35) + '…' : titleP.innerText)
        )
            + '/');
    }

    return removeSpace(replaceIllegalChars(getDocument().title));
}

function isBlog() {
    return getWindow().location.href.indexOf("bokuao.com/blog/detail/") > -1;
}

function getPageHTML(o) {
    const remap = [
        {
            from: "href=\"/favicon.ico",
            to: "href=\"" + toFull("/favicon.ico")
        }
    ];

    // prepend domain to path for web page assets
    const toFullPath = [
        "/static/"
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
    }

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
            "main .ph > img",
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    removeGIF
                )
            );
        }

        for (const selector of [
            "main .ph > img",
        ]) {
            utils.pushArray(o.images,
                utils.findDOMsWithCssSelector(
                    document,
                    selector,
                    combineFilters(
                        utils.getBackgroundImageFromDOM,
                        removeGIF,
                    )
                )
            );
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

            loadPerisistedSiteOptionsAndOnChange(o.host, o.options, ({ options }) => {
                o.options = options;
                sendBlogToUpdateResult(o.options);
            });
        }

        o.folder = getFolderFromBlogTitle();
        return o;
    },
    host: "bokuao.com",
    url: "https://bokuao.com/blog/list/1/0/"
};
