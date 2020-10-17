const utils = require("../utils.js");
const filterIcon = function(url) {
    if (url.indexOf("twemoji.maxcdn.com") > -1) {
        return null;
    }

    return url;
};
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(
            o.images,
            utils.findImagesWithCssSelector(
                document,
                "main .col-l-wrap .post .box-article img",
                filterIcon
            )
        );
        return o;
    },
    host: "sakurazaka46.com"
};
