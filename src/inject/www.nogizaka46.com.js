const { replaceIllegalChars, removeSpace } = require("../utils/str-utils.js");
const { getDocument } = require("../globals.js");
const utils = require("../utils.js");
const { filters, toFull } = require("../utils/url-utils.js");

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
        return o;
    },
    host: "www.nogizaka46.com",
    url: "https://www.nogizaka46.com/s/n46/diary/MEMBER",
    replaceIllegalChars: replaceIllegalChars
};
