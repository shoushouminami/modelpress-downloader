const utils = require("../utils.js");
function getLargeImg(url) {
    let arr = url.split("/");
    if (!arr[arr.length - 1].startsWith("f_")) {
        if (arr[arr.length - 1].startsWith("b_")) {
            arr[arr.length - 1] = arr[arr.length - 1].replace("b_", "");
        }
        arr[arr.length - 1] = "f_" + arr[arr.length - 1];
        return {
            url: arr.join("/"),
            retries: [url]
        }
    }
    return {url: url, retries: []};
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const query of [
            "main .newsContent figure img", // article images
            "main .photoContent figure.photoItem img", // photo page top image
            "main .photoContent div.thumb img", // photo page thumbnail images
        ]) {
            utils.pushArray(o.images,
                utils.findImagesWithCssSelector(
                    document,
                    query,
                    getLargeImg
                )
            );
        }

        return o;
    },
    host: "www.daily.co.jp"
};
