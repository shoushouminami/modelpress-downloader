const utils = require("../utils.js");
const getLargeImg = utils.getSizeGuessingFunc(10);

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (let selector of [
            ".article__wrap .article__photolist img", // article image gallery
            ".article__wrap .photo__photo img",  // article top image
            ".article__wrap .photo__photo--minh img",  // article top image
            ".photo__wrap .photo__photo img", // photo page top image
            ".photo__wrap .photo__photolist .thumb-item img", // photo page top image
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
        return o;
    },
    host: "mantan-web.jp",
    getLargeImg: getLargeImg
};
