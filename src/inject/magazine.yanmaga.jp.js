const utils = require("../utils.js");
const urlUtils = require("../utils/url-utils");
const inject = function() {
    let o = require("./return-message.js").init()

    utils.pushArray(o.images,
        utils.findDomsWithCssSelector(
            document,
            "#gs-mainImg",  // main image
            function (dom) {
                return urlUtils.toFull(utils.getBackgroundImageFromDOM(dom), window);
            })
    );

    utils.pushArray(o.images,
        utils.findDomsWithCssSelector(
            document,
            "#gs-spec a",
            function (dom) {
                return dom.href;
            })
    );

    return o;
};

module.exports = {
    inject: inject,
    host: "magazine.yanmaga.jp"
};
