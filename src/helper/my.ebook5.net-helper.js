(function(){
    "use strict";
    let helper = require("./helper-utils");
    let utils = require("../utils");
    helper.getOrCreateDataDiv();
    let images = window.pageImgPathList_large;
    if (images) {
        for (const image of images) {
            helper.saveImageInDataDiv(utils.removeQuery(image));
        }
    }
})();
