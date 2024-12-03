const utils = require("../utils.js");
const globals = require("../globals");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // special top image
        for (const selector of [
            "article div[class$='Body'] img", // article images
            "main div[class*='ArticleBody_body'] img",
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    function (url) {
                        let arr = url.split("/");
                        if (arr.pop().startsWith("r.")) {
                            return arr.join("/");
                        }
                        return url;
                    }
                )
            );
        }

        const articleNo = globals.getSearchParamValue("articleNo");
        if (articleNo){
            o.folder = o.folder.substring(0, o.folder.length -1) + "-articleNo-" + articleNo + "/"
        }

        return o;
    },
    host: "news.kstyle.com",
    altHosts: ["www.kstyle.com", "kstyle.com"]
};

