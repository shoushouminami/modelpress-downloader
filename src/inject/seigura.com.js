const utils = require("../utils.js");
const getLargeImg = function (url) {
    url = utils.removeDataUrl(url);
    if (url){
        return {
            url: utils.removeTrailingResolutionNumbers(url),
            retries: [url]
        };
    }
}
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // article top image
        utils.pushArray(
            o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                "#primary .entry-header .single-thumbnail img",
                getLargeImg
            )
        );
        // gallery thumbnail images in article
        utils.pushArray(
            o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                "#primary .gallery-item a img",
                getLargeImg
            )
        );
        // images in article
        utils.pushArray(
            o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                "#primary .entry-content p img",
                getLargeImg
            )
        );
        return o;
    },
    host: "seigura.com",
};
