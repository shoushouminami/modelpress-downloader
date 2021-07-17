const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // article top image
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                ".card_list img"
            )
        );
        return o;
    },
    host: "nogikoi.love"
};
