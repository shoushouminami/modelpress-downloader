const utils = require("../utils.js");
const filterIcon = function(url) {
    if (url.indexOf("twemoji.maxcdn.com") === -1) {
        return url;
    }

    return null;
};
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".l-content .box-main article .box-article img", filterIcon));
        return o;
    },
    host: "www.keyakizaka46.com"
};
