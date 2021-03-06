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
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, ".l-container .l-maincontents--blog .p-blog-article .c-blog-article__text img", filterIcon));
        return o;
    },
    host: "www.hinatazaka46.com"
};
