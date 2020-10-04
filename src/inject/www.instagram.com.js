const utils = require("../utils.js");
const helper = require("../helper/helper-utils");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        let imgs = utils.findImagesWithCssSelector(document, "article img[srcset]");
        if (imgs.length > 0) {
            let div = helper.getDataDiv();
            if (div) {
                // helper script injected
                if (helper.dataDivHasImages()) {
                    utils.pushArray(o.images, helper.loadImagesFromDataDiv());
                } else {
                    // give up and take the first image
                    utils.pushIfNew(o.images, imgs[0]);
                }
            } else {
                // inject helper script and wait
                utils.injectScriptDOM(chrome.runtime.getURL("helper/instagram-react.js"));
                o.retry = true;
            }
        }
        return o;
    },
    host: "www.instagram.com",
    hidden: true
};
