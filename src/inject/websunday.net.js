const utils = require("../utils.js");

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // special top image
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                [
                    "#newsbody img",
                ].join(","),
                function (url) {
                    return utils.removeTrailingResolutionNumbers(url);
                }

            )
        );

        return o;
    },
    host: "websunday.net",
};
