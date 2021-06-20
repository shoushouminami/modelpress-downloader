const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // article top image
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(
                document,
                "main article .entry-content img",
                function (dom) {
                    if (dom.dataset["lazySrc"]) {
                        return dom.dataset["lazySrc"];
                    }

                    return dom.src;
                }
            )
        );
        return o;
    },
    host: "mer-web.jp"
};
