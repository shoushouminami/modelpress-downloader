const utils = require("../utils.js");
const helperUtils = require("../helper/helper-utils");
const messaging = require("../messaging");
const logger = require("../logger2")(module.id);

// function checkImgDomsAndUpdateResult(imgDoms, o) {
//     if (imgDoms.length > 0) {
//         utils.pushArray(o.images,
//             imgDoms.map((imgDom) => {
//                 return {
//                     url: imgDom.dataset.name,
//                     filename: imgDom.dataset.name,
//                     type: "msg"
//                 }
//             })
//         );
//     }
// }

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
            messaging.sendToRuntime("updateResult", o);
        });

        messaging.relayMsgFromRuntimeToPage("getImageUrl");
        // messaging.listenOnRuntime("getImageUrl", function (msg, sendResponse) {
        //     if (msg.filename) {
        //         const imgDoms = utils.findDomsWithCssSelector(helperUtils.getOrCreateDataDiv(), "img");
        //         for (const imgDom of imgDoms) {
        //             if (imgDom.dataset.name === msg.filename) {
        //                 sendResponse({
        //                     url: imgDom.src,
        //                     filename: msg.filename
        //                 });
        //             }
        //         }
        //     }
        // });

        // if (helperUtils.getDataDiv() === null) {
            // inject helper script
            require("../utils/func-utils")
                .injectScriptFileToDOM(chrome.runtime.getURL("helper/www.grajapa.shueisha.co.jp-helper.js"));
            // show loading UI
            require("./return-message.js").loading(o);
            // o.retry = true;
        // }

        return o;
    },
    host: "www.grajapa.shueisha.co.jp"
};
