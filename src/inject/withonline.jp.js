const utils = require("../utils.js");
const re = /^.*(\/(large|medium|small)\/).*$/;
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "#contents .container .content-left .mv img", //top image
            "#contents .container .content-left .post-contents .pattern_1 img", //article image
            "#contents .container .content-left .post-contents .pattern_2 img", //article image
            "#contents .container .content-left .post-contents .slider-container .slide-img img", //article image
            "#contents .contents-btm .mv img", //lifestyle top image
            "#contents .contents-btm .post-contents .pattern_1 img", //lifestyle article image
            "#contents .contents-btm .post-contents .pattern_2 img", //lifestyle article image
            "#contents .contents-btm .post-contents .slider-container .slide-img img",
            "#post .photo_gallery .thumb_list .img-box img", // thumbnail page
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(document, selector, function (url){
                    url = utils.removeQuery(url);
                    let m = url.match(re);
                    if (m) {
                        return url.replace(m[1], "/original/");
                    }
                    return url;
                })
            );
        }
        return o;
    },
    host: "withonline.jp"
};
