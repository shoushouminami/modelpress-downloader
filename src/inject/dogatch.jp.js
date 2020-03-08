const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#container div#main div.inner img"));
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#container div#main div.slick-list img"));
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div#container div#main img.ptph"));
        return o;
    },
    host: "dogatch.jp"
};
