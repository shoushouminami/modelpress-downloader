const utils = require("../utils.js");
const re = /https:\/\/.*(\/wp-content\/themes\/moment\/img\/thumbnail)\/.*\.(jpg|png|jpeg)/i;
const logger = require("../logger");
const globals = require("../globals");

function replaceFilename(url) {
    let filename = url.split("/")[url.split("/").length - 1];
    if (filename.startsWith("thumbnail-")) {
        let arr = filename.split("_");
        arr.splice(0, 2);
        return url.replace(filename, arr.join("_"));
    }

    return url;
}

function guessFolderPath() {
    let dom = document.querySelector("head > meta[property='og:image']");
    if (dom && dom.getAttribute("content")) {
        try {
            let p = new URL(dom.getAttribute("content"));
            let arr = p.pathname.split("/");
            arr.splice(arr.length - 1, 1);
            return arr.join("/");
        } catch (e) {
            logger.error(e);
        }
    }

    return null;
}

function getLargeImg(url) {
    let m = url.match(re);
    if (m && m[1]) {
        let folder = guessFolderPath();
        if (folder != null) {
            return {
                url: replaceFilename(url.replace(m[1], folder)),
                retries: [url]
            }
        }
    }

    return {
        url: url
    };
}

function inject() {
    let o = require("./return-message").init();
    let post = globals.getSearchParamValue("post");
    if (post != null) {
        o.folder = o.folder.replace("/", "") + "-post-"+ post + "/";
    }

    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(
            document,
            "main .container .list_thumbnail img", // thumbnail page
            getLargeImg
        )
    );

    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(
            document,
            "main .container .bloc_blog .popup-img img", // article page
            getLargeImg
        )
    );

    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(
            document,
            "main .container .bloc_gallery .img img", // gallery image slider
            getLargeImg
        )
    );

    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(
            document,
            "main .container .bloc_gallery .slick-dots img", // gallery image thumbnail
            getLargeImg
        )
    );

    utils.pushArray(o.images,
        utils.findDomsWithCssSelector(
            document,
            "main .main_img", // top image
            utils.getDomBackgroundImage
        )
    );
    return o;
}

module.exports = {
    host: "moment.nikkan-gendai.com",
    inject: inject,
};
