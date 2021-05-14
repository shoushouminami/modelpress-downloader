const utils = require("../utils.js");
const getLargeImg = function (url) {
    if (url.startsWith("http://")) {
        url = url.replace("http://", "https://");
    }

    return utils.removeTrailingResolutionNumbers(url);
};
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // in article images
        utils.pushArray(
            o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    "#container #content #main article figure img", // news article top image
                    "#container #content #main article section img", // news article top image
                ].join(","),
                getLargeImg
            )
        );
        return o;
    },
    host: "actresspress.com"
};
