const utils = require("../utils.js");
function inject() {
    const o = require("./return-message.js").init();
    
    for (const selector of [
        "body div[class^='style-module--articleImage'] picture img", // top image
        "body div[class^='style-module--contentAreaInner'] picture img", // article image
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(document, selector, utils.removeQuery)
        );
    }

    return o;
};

module.exports = {
    host: "fashiontechnews.zozo.com",
    inject: inject,
};
