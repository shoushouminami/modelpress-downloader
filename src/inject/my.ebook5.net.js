const utils = require("../utils.js");
const helper = require("../helper/helper-utils");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        let helperDiv = helper.getDataDiv();
        if (helper.dataDivHasImages()) {
            utils.pushArray(o.images, helper.loadImagesFromDataDiv());
        } else {
            // inject helper script and wait
            require("../utils/func-utils").injectScriptFileToDOM(chrome.runtime.getURL("helper/my.ebook5.net-helper.js"));
            o.retry = true;
        }

        return o;
    },
    host: "my.ebook5.net",
    hidden: true
};
