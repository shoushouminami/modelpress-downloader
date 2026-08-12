const utils = require("../utils.js");
function inject() {
    const o = require("./return-message.js").init2();
    
    for (const selector of [
        "main .post .entrybody figure a[href^='https://www.dolce-gravure.jp/'] img", // article image
        "main .post .entrybody .post_attachment_mainimg figure img", // gallery top image
        "main .post .entrybody .post_attachment_thumbnail li img", // gallery image
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(document, selector, utils.removeTrailingResolutionNumbers)
        );
    }
    return o;
};

module.exports = {
    host: "www.talent-databank.co.jp",
    inject: inject,
};
