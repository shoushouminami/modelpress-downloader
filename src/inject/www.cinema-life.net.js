const utils = require("../utils.js");

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (let selector of [
            "#content .post-content img.aligncenter", // article
            "#content .entry-content img.aligncenter", // interview
            "#content .gallery-item img",
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    utils.removeTrailingResolutionNumbers
                )
            );
        }
        return o;
    },
    host: "www.cinema-life.net"
};
