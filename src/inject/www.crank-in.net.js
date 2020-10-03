const utils = require("../utils.js");
const pattern = /^https:\/\/www.crank-in.net\/.*(_\d{3}).(jpg|jpeg|png)$/;
const getLargeImg = function (url) {
    let m = url.match(pattern);
    if (m && m[1]) {
        return {
            url: url.replace(m[1], "_1200"),
            retries: [url.replace(m[1], "_650"), url]
        }
    }
    return url;
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // headline image in article
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                "#content main article .headline_part img", getLargeImg)
        );
        // image in article
        // images at the end of the article
        // image in slide show
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                "#content main article figure img", getLargeImg)
        );
        return o;
    },
    host: "www.crank-in.net",
};
