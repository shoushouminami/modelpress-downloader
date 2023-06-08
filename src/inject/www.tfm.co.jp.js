const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                [
                    ".article .article__text .article__body img",
                ].join(",")
            )
        );
        return o;
    },
    host: "www.tfm.co.jp",
    altHosts: ["tfm.co.jp"]
};
