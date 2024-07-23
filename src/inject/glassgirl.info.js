const utils = require("../utils.js");
const helperUtils = require("../helper/helper-utils");
const logger = require("../logger2")(module.id);
function getLargeImg(url) {
    return utils.removeTrailingResolutionNumbers(url);
}
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        if (document.querySelector("body script[class=df-shortcode-script]")) {
            let attachedImages = utils.findImagesWithCssSelector(require("../helper/helper-utils").getOrCreateDataDiv(), "img");
            if (attachedImages.length > 0) {
                utils.pushArray(o.images,
                    utils.findImagesWithCssSelector(
                        require("../helper/helper-utils").getOrCreateDataDiv(),
                        "img",
                        getLargeImg)
                );
            } else {
                // inject helper script
                require("../utils/func-utils")
                    .injectScriptFileToDOM(chrome.runtime.getURL("helper/glassgirl-info-helper.js"));
                // show loading UI
                require("./return-message.js").loading(o);
                o.retry = true;
            }
        }

        for (const selector of [
            ".elementor-container .jet-listing-dynamic-image img", // article top
            ".elementor-element .wp-block-image img",
        ]) {
            utils.pushArray(
                o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg
                )
            );
        }

        for (const image of o.images) {
            helperUtils.attachInvisibleImage(helperUtils.getOrCreateDataDiv(), image);
        }

        return o;
    },
    host: "glassgirl.info"
};
