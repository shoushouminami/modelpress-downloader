const utils = require("../utils.js");
const messaging = require("../messaging");
const logger = require("../logger2")(module.id);

module.exports = {
    inject: function () {
        const o = require("./return-message.js").init();

        // Update result when we hear back from helper.
        messaging.listenOnPage("updateResultCS", function (msg) {
            logger.debug("Got updateResultCS", msg);
            if (msg.title) {
                o.folder = window.location.host + "-" + msg.title.replace(/\//g, "-") +  "/";
            }
            if (msg.images) {
                utils.pushArray(o.images, msg.images);
            }
            o.loading = false;
            // logger.debug("sendToRuntime getObjectId(o)=", getObjectId(o), "o=", o);
            messaging.sendToRuntime("updateResult", o);
        });

        messaging.relayMsgFromRuntimeToPage("getImageUrl");

        // handle special page header images
        if (utils.findDomsWithCssSelector(
            document,
            ".l-content__block .special-header-image #special-header-large-image").length > 0) {
            const imgDom = utils.findDomsWithCssSelector(document,
                ".l-content__block .special-header-image #special-header-large-image")[0];
            const count = imgDom.dataset.headerImageCount;
            const urlBase = imgDom.src.split("sample-header-large-")[0];
            for (let i = 1; i <= count; i++) {
                let img = ("00" + i + ".jpg").slice (-6);
                utils.pushIfNew(o.images, `${urlBase}sample-header-large-${img}`);
            }
        }

        // find images on page
        for (const query of [
            ".post-entry img",
            ".l-post img",
            ".l-news__details img",
            ".l-content__block .column-contents img",
            ".details-img img",
            ".l-content__block .special .top-sample img", // special
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    query,
                    function (url) {
                        url = utils.removeQuery(url);
                        if (url.endsWith("-thumb.jpg")) {
                            url = url.replace("-thumb.jpg", ".jpg");
                        }
                        return url;
                    }
                )
            );

            if (o.images.length > 0) {
                o.ext = "jpg";
            }
        }

        // logger.debug("Return from inject getObjectId(o)=", getObjectId(o), "o=", o);
        // inject helper script
        require("../utils/func-utils")
            .injectScriptFileToDOM(chrome.runtime.getURL("helper/www.grajapa.shueisha.co.jp-helper.js"));
        // show loading UI
        require("./return-message.js").loading(o);
        return o;
    },
    host: "www.grajapa.shueisha.co.jp"
};
