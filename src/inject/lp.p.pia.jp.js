const utils = require("../utils.js");
const getLargeImg = function (url) {
    if (url.endsWith(".JPG")) {
        return url.replace(".JPG", ".jpg");
    }
    
    return url;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // special top image
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(
                document,
                [
                    // article top image
                    "#mainContents .md-mainVisual img",
                    // article images
                    "#mainContents .md-thumbnailList img"
                ].join(","),
                getLargeImg
            )
        );

        // gallery images
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(
                document,
                "#mainContents .md-gallery .md-gallery__thumbnail a",
                function (dom) {
                    if (dom && dom.style && dom.style.backgroundImage) {
                        let url = dom.style.backgroundImage.split("url(\"")[1];
                        if (url) {
                            url = url.split("\")")[0];
                            if (url.startsWith("/")) {
                                url = window.location.origin + url;   
                            }

                            if (url.endsWith("/thumbnail")) {
                                url = url.replace("/thumbnail", "/origin.jpg");
                            }

                            return url;
                        }
                        
                    }
                })
        );

        return o;
    },
    host: "lp.p.pia.jp",
};
