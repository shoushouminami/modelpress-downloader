const utils = require("../utils.js");
const re = /^.*(\/(large|medium|small)\/).*$/;
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            "main .container .content-left .mv img", //top image
            "main .container .content-left .post-contents .pattern_1 img", //article image
            "main .container .content-left .post-contents .pattern_2 img", //article image
            "main .container .content-left .post-contents .slider-container .slide-img img", //article image
            "main .post-contents .mv img", //lifestyle top image
            "main .post-contents .post-contents .pattern_1 img", //lifestyle article image
            "main .post-contents .pattern_2 img", //lifestyle article image
            "main .post-contents .slider-container .slide-img img", // article slider iamge
            "main .photo_gallery .thumb_list .img-box img", // thumbnail page
            "main .article-header-contents figure img", // with-class lifestyle header
            "main .article-contents-body .article-item .swiper-slide > img", // with-class lifestyle swiper-slide
            "main .article-contents-body .post-contents .item_image img", // with-class lifestyle swiper-slide
            "main .article-contents-body .thumbnail-img img", // thumbnail page
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(document, selector, function (url){
                    url = utils.removeQuery(url);
                    let m = url.match(re);
                    if (m) {
                        return {
                            url: url.replace(m[1], "/original/"),
                            thumbnail: url
                        }
                    }
                    return url;
                })
            );
        }
        return o;
    },
    host: "withonline.jp"
};
