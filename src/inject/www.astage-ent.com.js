const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message.js").init();

    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(
            document,
            [
                ".entry img"
            ].join(","),
            utils.removeTrailingResolutionNumbers
        )
    );

    return o;
};

module.exports = {
    inject: inject,
    host: "www.astage-ent.com",
    url: "http://www.astage-ent.com/"
};
