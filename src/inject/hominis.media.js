const utils = require("../utils.js");
const getLargeImg = function (url) {
    if (url === "https://hominis.media/shared/images/spacer.gif") {
        return null;
    }

    return url;
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // images in article
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                "#mainContents main .articleDetail .contentBody > figure img", getLargeImg)
        );
        // images list at the end of article
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                "#mainContents article .picture.list figure img", getLargeImg)
        );
        return o;
    },
    host: "hominis.media",
};
