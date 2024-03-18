const utils = require("../utils.js");
function getLargeImg(url) {
    let filename = utils.getFileName(url);
    if (filename.indexOf("size") > -1 && !filename.endsWith("_size9.jpg")) {
        url = url.replace(filename, filename.split("_")[0] + "_size9.jpg");
    }
    return {
        url: url,
        imageUrl: url,
        filename: filename,
        type: "msg"
    }
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
                permissions: ["tabs"],
                origins: ["https://storage.mainichikirei.jp/", "https://mainichikirei.jp/"]
            },
            "https://mainichikirei.jp/assets/favicons/browserconfig.xml");
    },
    host: "mainichikirei.jp",
};
