const utils = require("../utils.js");

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const query of [
            "main article figure img", // article images
            "main article .the_content ul li .thumbnail img", // special page thumbnail images
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    query,
                    function (url) {
                        return utils.removeDataUrl(utils.removeTrailingResolutionNumbers(url));
                    }
                )
            );
        }

        return o;
    },
    host: "hanako.tokyo"
};
