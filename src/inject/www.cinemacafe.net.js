const utils = require("../utils.js");
function getLargeImg(url) {
    if (url == null || url === "") {
        return null;
    }
    return "https://www.cinemacafe.net/imgs/p/ATDRThl-6oWF9fpps9341csCOg8ODQwLCgkI/" + utils.removeQuery(url).split("/").pop();
}
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        let iframe = utils.loadUrlInHiddenIframe("https://www.cinemacafe.net/article/img/2021/11/28/76016/542610.html");
        iframe.querySelectorAll("img");
        for (const query of [
            "main figure img", // top image
            "main .thumb-list img", // top image
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
    host: "www.cinemacafe.net"
};
