const utils = require("../utils.js");
const getLargeImg = function (url) {
    return {
        url: utils.removeTrailingResolutionNumbers(url),
        retries: [url]
    };
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                "main article .the_content figure > img", getLargeImg)
        );
        return o;
    },
    host: "ananweb.jp",
};
