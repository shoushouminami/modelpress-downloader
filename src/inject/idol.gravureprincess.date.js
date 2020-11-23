const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                ".blog-posts .entry-content .separator a img",
                null
            )
        );
        return o;
    },
    host: "idol.gravureprincess.date",
    hidden: true,
};
