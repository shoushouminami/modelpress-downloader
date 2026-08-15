const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "article .post-thumbnail img", // article top image
            ".entry-content img", // article body images
            "#post-relation-media img", // related photo thumbnails
            ".photo-content img", // single-photo attachment page (e.g. /news/<id>/<photo-slug>/)
        ]) {
            utils.pushArray(o.images,
                utils.findImagesWithCssSelector(
                    document,
                    selector,
                    utils.removeTrailingResolutionNumbers
                )
            );
        }

        return o;
    },
    host: "voisjp.me"
};
