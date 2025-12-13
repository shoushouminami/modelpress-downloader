const utils = require("../utils.js");
const { getDocument, getWindow } = require("../globals.js");
const { basename, pathname } = require("../utils/url-utils.js");
const { loadPerisistedSiteOptions, onOptionsChanged, DOWNLOAD_PREPEND_JOBID } = require("../site-options");
const logger = require("../logger2.js")(module.id);

const filterIcon = function(url) {
    if (url.indexOf("twemoji.maxcdn.com") === -1) {
        return url;
    }

    return null;
};

function isBlog() {
    return getWindow().location.href.indexOf("www.keyakizaka46.com/s/k46o/diary/detail/") > -1;
}

function getPageHTML(o) {
    const remap = [];

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

        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".l-content .box-main article .box-article img", filterIcon));

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
    host: "www.keyakizaka46.com"
};
