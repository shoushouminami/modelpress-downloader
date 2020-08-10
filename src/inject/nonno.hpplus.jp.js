const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // top image
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.main div.section div.content_area div.article div.part .image figure div img"));
        // images in content
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.main div.section div.content_area div.article div.part div.html center img"));
        // magazine trial
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.main div.section div.module div.slider_magazine_wrap div img"));
        return o;
    },
    host: "nonno.hpplus.jp"
};
