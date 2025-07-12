const utils = require("../utils.js");

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

function replaceIllegalChars(path) {
    //   < (less than)
    //   > (greater than)
    //   : (colon - sometimes works, but is actually NTFS Alternate Data Streams)
    //   " (double quote)
    //   / (forward slash)
    //   \ (backslash)
    //   | (vertical bar or pipe)
    //   ? (question mark)
    //   * (asterisk)
    return path.replace(/[<>:"'\/\\|?*]/g, '-');
}

function getFolder(original) {
    let nameP = document.querySelector('.bd--prof__name');
    let timeP = document.querySelector(".bd--hd__date");
    let titleP = document.querySelector(".bd--hd__ttl");
    if (nameP && timeP && titleP) {
        return replaceIllegalChars(
                nameP.innerText.replaceAll(' ', '')
                + '-' + timeP.innerText.replace(' ', '_').replace(':', '.')
                + '-' + (titleP.innerText.length > 35 ? titleP.innerText.substring(0, 35) + '…' : titleP.innerText)
            )
            + '/';
    }
    return original;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        let sheet = document.getElementById("sheet");
        if (sheet) {
            let imgs = utils.findAllImageDOMsFromRoot(sheet, {"ids": ["comments"]});
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

        o.folder = getFolder(o.folder);
        return o;
    },
    host: "www.nogizaka46.com",
    url: "https://www.nogizaka46.com/s/n46/diary/MEMBER",
    replaceIllegalChars: replaceIllegalChars
};
