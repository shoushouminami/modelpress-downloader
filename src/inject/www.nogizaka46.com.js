const { replaceIllegalChars, removeSpace } = require("../utils/str-utils.js");
const { getDocument, getWindow } = require("../globals.js");
const utils = require("../utils.js");
const { filters, toFull, basename, pathname } = require("../utils/url-utils.js");

function pushToOutput(imgDoms, o) {
    for (const imgDom of imgDoms) {
        if (imgDom.parentElement instanceof HTMLAnchorElement && imgDom.parentElement.href
            && (imgDom.parentElement.href.indexOf("//blog.nogizaka46.com/") > -1 || imgDom.parentElement.href.indexOf("//img.nogizaka46.com/"))
            && (imgDom.parentElement.href.toLowerCase().endsWith(".jpg") || imgDom.parentElement.href.toLowerCase().endsWith(".png"))) {
            o.images.push(imgDom.parentElement.href);
        } else if (imgDom.parentElement instanceof HTMLAnchorElement && imgDom.parentElement.href &&
            utils.getAwalkerImgUrl(imgDom.parentElement.href)) {
            o.images.push({
                type: "tab",
                imageUrl: utils.getAwalkerImgUrl(imgDom.parentElement.href),
                websiteUrl: imgDom.parentElement.href
            });
        } else if (!imgDom.src.toLowerCase().endsWith(".gif") && !imgDom.src.toLowerCase().endsWith(".php")) {
            o.images.push(imgDom.src);
        }
    }
}

function isBlog() {
    return getWindow().location.href.indexOf("www.nogizaka46.com/s/n46/diary/detail") > -1;
}

function getBlogId() {
    return basename(getWindow().location.pathname)
}

function getFolderFromBlogTitle(original) {
    let nameP = document.querySelector('.bd--prof__name');
    let timeP = document.querySelector(".bd--hd__date");
    let titleP = document.querySelector(".bd--hd__ttl");
    const member = document.querySelector('.md--hd__ttl');
    if (nameP && timeP && titleP) {
        return removeSpace(replaceIllegalChars(
            nameP.innerText.replaceAll(' ', '')
            + '-' + timeP.innerText.replace(' ', '_').replace(':', '.')
            + '-' + (titleP.innerText.length > 35 ? titleP.innerText.substring(0, 35) + '…' : titleP.innerText)
        )
            + '/');
    } else if (member) {
        //md--hd__ttl
        const member = document.querySelector('.md--hd__ttl');
        return removeSpace(replaceIllegalChars(member.innerText + "-" + getDocument().title));
    }

    return removeSpace(replaceIllegalChars(getDocument().title));
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        let sheet = document.getElementById("sheet");
        if (sheet) {
            let imgs = utils.findAllImageDOMsFromRoot(sheet, { "ids": ["comments"] });
            pushToOutput(imgs, o);
        }
        // updated UI on 2022-02-16
        pushToOutput(
            utils.findDOMsWithCssSelector(
                document,
                [
                    ".bd--edit img",
                ].join(",")
            ),
            o
        );

        for (const selector of [
            "main section > img", // news article
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                )
            );
        }

        for (const selector of [
            "main .md--hd .md--hd__fig .m--bg", // member profile
        ]) {
            utils.pushArray(o.images,
                utils.findDOMsWithCssSelector(
                    document,
                    selector,
                    filters.chain(
                        utils.getBackgroundImageFromDOM,
                        toFull,
                        removeSpace
                    )
                )
            );
        }

        o.folder = getFolderFromBlogTitle(o.folder);
        if (isBlog()) {

            // download web page HTML if set
            // if (message.webPage) {
            //     downloadInBg.push({
            //         type: "html",
            //         content: message.webPage,
            //         context: context
            //     });
            // }
            // supports downloading web page
            // if (image.type == "html" && image.content) {
            //     // const blob = new Blob([image.content], { type: "text/html" });
            //     // image.url = URL.createObjectURL(blob);
            //     image.url = "data:text/html;charset=utf-8," + encodeURIComponent(image.content);
            //     image.filename = "index.html";
            // }
            const remap =  [
                {
                    from: "&quot;/files/46/assets/img/common/",
                    to: "&quot;" + toFull("/files/46/assets/img/common/")
                },
                {
                    from: "\"/files/46/assets/img/common/",
                    to: "\"" + toFull("/files/46/assets/img/common/")
                },
                {
                    from: "\"/files/46/assets/img/blog/",
                    to: "\"" + toFull("/files/46/assets/img/blog/")
                },
                {
                    from: "&quot;/files/46/assets/img/blog/",
                    to: "&quot;" + toFull("/files/46/assets/img/blog/")
                },
                {
                    from: "&quot;/files/46/assets/img/blog-detail/",
                    to: "&quot;" + toFull("/files/46/assets/img/blog-detail/")
                },
                {
                    from: "src=\"//www.google-analytics.com/",
                    to: "src=\"" + toFull("//www.google-analytics.com/")
                },
                // Fix data-api for these 2 DOMs. They were removed after page is loaded.
                {
                    from: " id=\"js-ns\"",
                    to: " id=\"js-ns\" data-api=\"https://www.nogizaka46.com/s/n46/api/list/member\""
                },
                {
                    from: "class=\"bd--cmt__in js-apicomment\"",
                    to: "class=\"bd--cmt__in js-apicomment\" data-api=\"https://www.nogizaka46.com/s/n46/api/list/comment?kiji=" + getBlogId() + "\""
                }
            ];
            // prepend domain to path for web page assets
            const toFullPath = [
                "/files/46/assets/js/",
                "/files/46/assets/js4/",
                "/files/46/assets/css/",
                "/files/46/assets/fonts/",
                "/files/46/assets/config/",
            ];
            
            for (const p of toFullPath) {
                remap.push({
                    from: p,
                    to: toFull(p)
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

            o.images.push({
                url: "data:text/html;charset=utf-8," + encodeURIComponent(webpage),
                filename: "index.html"
            })

            // remapping image file path to ./ folder
            // ignore the job id so the filename is not changed
            o.ignoreJobId = true;
        }
        
        return o;
    },
    host: "www.nogizaka46.com",
    url: "https://www.nogizaka46.com/s/n46/diary/MEMBER",
    replaceIllegalChars: replaceIllegalChars
};
