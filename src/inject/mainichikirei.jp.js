const utils = require("../utils.js");
const { filters } = require("../utils/url-utils.js");
function getLargeImg(url) {
    const func = utils.getSizeGuessingFunc(9);
    let ret = func(url);
    ret["type"] = "msg";
    return ret;
}

// Some articles render the photolist thumbnails with a broken placeholder src (literally
// "filename3") and only expose the real image via srcset, at a small 240x160/360x240 preview.
// Fall back to srcset's largest candidate when src isn't a real storage.mainichikirei.jp URL,
// and upsize it to w=1200,h=800 -- the resolution the site's own main photo display uses --
// instead of keeping the tiny thumbnail.
function extractImgUrl(dom) {
    const src = dom.src;
    if (src && src.indexOf("storage.mainichikirei.jp") > -1) {
        return src;
    }
    if (dom.srcset) {
        // srcset candidates are comma-separated, but this CDN's own URLs also contain commas
        // (w=240,h=160,...), so split only on commas immediately followed by another URL
        const candidates = dom.srcset.split(/,\s*(?=https?:\/\/)/);
        const candidate = candidates[candidates.length - 1].trim().split(/\s+/)[0];
        return candidate.replace(/w=\d+,h=\d+/, "w=1200,h=800");
    }
    return src;
}

module.exports = {
    inject: function () {
        let o = require("./return-message").init();
        // images in article
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                ".article__wrap .photo__photo img", getLargeImg)
        );
        // images list at the end of article
        utils.pushArray(o.images,
            utils.findDOMsWithCssSelector(document,
                ".article__wrap .article__photolist img", filters.chain(extractImgUrl, getLargeImg))
        );

        // image showing from slide show
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                ".photo__wrap .photo__photo img", getLargeImg)
        );
        // image list in slide show
        utils.pushArray(o.images,
            utils.findDOMsWithCssSelector(document,
                ".photo__wrap .photo__photolist img", filters.chain(extractImgUrl, getLargeImg))
        );

        return require("./return-message").tabDownload(
            o,
            {
                origins: ["https://storage.mainichikirei.jp/", "https://mainichikirei.jp/"]
            },
            "https://mainichikirei.jp/assets/favicons/browserconfig.xml");
    },
    host: "mainichikirei.jp",
};
