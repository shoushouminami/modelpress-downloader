const utils = require("../utils.js");
const getLargeImg = utils.getSizeGuessingFunc(10);

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // image gallery and article with more than 1 image
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "article .newsbody__thumblist li img", getLargeImg));
        // article with 1 image
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "article .newsbody__img img", getLargeImg));
        return o;
    },
    host: "mantan-web.jp",
    getLargeImg: getLargeImg
};
