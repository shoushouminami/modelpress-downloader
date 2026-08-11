const utils = require("../utils.js");

module.exports = {
    inject: function () {
        const o = require("./return-message.js").init();

        // find images on page
        for (const query of [
            "article img",
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    query,
                    function (url) {
                        url = utils.removeQuery(url);
                        if (url.split("/").at(-1).startsWith("thumbnail")) {
                            let arr = url.split("/");
                            arr.splice(-1, 1, "large");
                            url = arr.join("/");
                        }
                        return url;
                    }
                )
            );

            if (o.images.length > 0) {
                o.ext = "jpg";
            }
        }

        return o;
    },
    host: "beeeem.com"
};
