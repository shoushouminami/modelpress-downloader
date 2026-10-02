const utils = require("../utils.js");
function inject() {
    const o = require("./return-message.js").init2();
    
    for (const selector of [
        ".wpb_wrapper .tdb_single_featured_image img", // article image
        ".wpb_wrapper .tdb-block-inner img", // article image
    ]) {
        utils.pushArray(
            o.images,
            utils.findLazyImagesWithCssSelector(
                document, 
                selector, 
                function(url) {
                    if (url.toLowerCase().indexOf("atc-colorful") > -1) {
                        return null;
                    }
                    return utils.removeTrailingResolutionNumbers(url);
                }
                
            )
        );
    }

    return o;
};

module.exports = {
    host: "atc-twn.com",
    inject: inject,
};
