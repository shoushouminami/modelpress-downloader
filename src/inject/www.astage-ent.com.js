const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message.js").init();

    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(
            document,
            [
                ".entry img"
            ].join(","),
            function(url){
                if (url.endsWith(".svg")) {
                    return null;
                }

                return utils.removeTrailingResolutionNumbers(url);
            }

        )
    );

    return o;
};

module.exports = {
    inject: inject,
    host: "www.astage-ent.com",
    url: "http://www.astage-ent.com/"
};
