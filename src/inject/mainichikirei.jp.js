const utils = require("../utils.js");
function getLargeImg(url) {
    const func = utils.getSizeGuessingFunc(9);
    let ret = func(url);
    ret["type"] = "msg";
    return ret;
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
            utils.findImagesWithCssSelector(document,
                ".article__wrap .article__photolist img", getLargeImg)
        );

        // image showing from slide show
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                ".photo__wrap .photo__photo img", getLargeImg)
        );
        // image list in slide show
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                ".photo__wrap .photo__photolist img", getLargeImg)
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
