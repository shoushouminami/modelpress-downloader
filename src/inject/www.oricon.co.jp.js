const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message.js").init();

    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(
            document,
            [
                "#main_photo img"
            ].join(",")

        )
    );

    return require("./return-message").notSupported();
};

module.exports = {
    inject: inject,
    host: "www.oricon.co.jp"
};
