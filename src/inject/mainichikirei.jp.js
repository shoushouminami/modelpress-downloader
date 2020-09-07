const utils = require("../utils.js");
const getLargeImg = utils.getSizeGuessingFunc(10);

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
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
        return o;
    },
    host: "mainichikirei.jp",
};
