const utils = require("../utils.js");
const getLargeImgBySize = utils.getSizeGuessingFunc(10);
const { filters } = require("../utils/url-utils.js");

// storage.mantan-web.jp serves a CDN-resized rendition when the URL has a "w=X,h=Y,f=fmt/"
// prefix (used e.g. for gallery thumbnails). Stripping that prefix returns the original
// full-resolution file -- confirmed by byte size, not just guessed -- rather than whatever
// smaller size happened to be requested at that particular spot on the page. This also fixes
// duplicate entries for the same photo shown at two different sizes (e.g. hero vs thumbnail),
// since both now resolve to the same original URL and get deduped.
function stripSizeTransform(url) {
    return url.replace(/^(https:\/\/storage\.mantan-web\.jp)\/w=\d+,h=\d+,f=[^/]+\//, "$1/");
}

const getLargeImg = filters.chain(stripSizeTransform, getLargeImgBySize);

module.exports = {
    inject: function () {
        let o = require("./return-message").init();
        for (let selector of [
            ".article__wrap .article__photolist img", // article image gallery
            ".photo__wrap .photo__photolist img", // article image gallery
            ".article__wrap .photo__photo img",  // article top image
            ".article__wrap .photo__photo--minh img",  // article top image
            ".photo__wrap .photo__photo img", // photo page top image
            ".photo__wrap .photo__photolist .thumb-item img", // photo page top image
            ".photo__photolist-wrap .swiper-slide .photo__photolist-item img", // photo page top image
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    function (url) {
                        if (url.endsWith("/clear.gif")) {
                            return null;
                        }

                        return getLargeImg(url);
                    }
                )
            );
        }


        return require("./return-message").tabDownload(
            o,
            {
                origins: ["https://storage.mantan-web.jp/", "https://mantan-web.jp/"]
            },
            "https://mantan-web.jp/assets/ichimen/browserconfig.xml",
        );
    },
    host: "mantan-web.jp",
    altHosts: ["gravure.mantan-web.jp"],
    getLargeImg: getLargeImg
};
