const utils = require("../utils.js");
const messaging = require("../messaging");
const logger = require("../logger2")(module.id);
const {getObjectId} = require("../utils/js-utils");

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

        // find images on page
        for (const query of [
            // ".post-entry img",
            ".l-post img",
            // ".l-news__details img",
            ".l-content__block .column-contents img",
            ".details-img img"
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    query,
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
