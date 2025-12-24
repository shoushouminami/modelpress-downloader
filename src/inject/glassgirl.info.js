const utils = require("../utils.js");
const logger = require("../logger2")(module.id);
function getLargeImg(url) {
    return utils.removeTrailingResolutionNumbers(url);
}
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // single image
        if (utils.getFileName(window.location.href).endsWith(".jpg")) {
            const canvasUtils = require("../utils/canvas-utils");
            try {
                let wh = document.title.split("(")[1].split(")")[0];
                let w = wh.split("×")[0];
                let h = wh.split("×")[1];
                logger.debug("w=", w, "h=", h);
                utils.pushIfNew(
                    o.images,
                    {
                        url: canvasUtils.toDataUrl(
                            canvasUtils.createCanvasAndDrawImage(
                                document.querySelectorAll("img")[0],
                                w,
                                h
                            )
                        ),
                        filename: window.location.pathname.split("/").pop()
                    }
                );
                return o;
            } catch (e) {
                logger.error("Error finding any image", e);
                return require("./return-message").notSupported();
            }
        }
                
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

        // for (const image of o.images) {
        //     helperUtils.attachInvisibleImage(helperUtils.getOrCreateDataDiv(), image);
        // }

        return require("./return-message.js").tabDownload(o, 
            {
                origins: ["https://glassgirl.info/"]
            }, 
            "https://glassgirl.info/ggwp/wp-content/uploads/2022/03/cropped-favicon-32x32.png");
    },
    host: "glassgirl.info"
};
