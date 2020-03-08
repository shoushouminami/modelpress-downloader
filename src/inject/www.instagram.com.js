const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        let imgs = utils.findImagesWithCssSelector(document, "article img[srcset]");
        if (imgs.length > 0) {
            let div = document.getElementById("_mid-images_");
            if (div) {
                // helper script injected
                if (div.dataset.images) {
                    utils.pushArray(o.images,
                        div.dataset.images.split(";")
                            .filter(s => s.length > 0)
                            .map(s => decodeURIComponent(s)));
                    document.body.removeChild(div);
                } else {
                    // give up and take the first image
                    utils.pushIfNew(o.images, imgs[0]);
                }
            } else {
                // inject helper script and wait
                utils.injectScriptDOM(chrome.runtime.getURL("helper/instagram-react.js"));
                o.retry = true;
            }
        }
        return o;
    },
    host: "www.instagram.com",
    hidden: true
};
