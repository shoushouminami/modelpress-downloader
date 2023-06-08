const utils = require("../utils.js");
const getLargeImg = function (url) {
    return {
        url: utils.removeTrailingResolutionNumbers(url),
        retries: [url]
    };
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(document,
                "main article .the_content figure > img", function (dom) {
                //data-lazy-src="https://img.ananweb.jp/2020/08/01100737/4-578x600.jpg"
                    if (dom.dataset["lazySrc"]) {
                        return getLargeImg(dom.dataset["lazySrc"]);
                    } else {
                        return getLargeImg(dom.src);
                    }
                })
        );
        return o;
    },
    host: "ananweb.jp",
    altHosts: ["plus.ananweb.jp"]
};
