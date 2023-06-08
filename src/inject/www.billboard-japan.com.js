const utils = require("../utils.js");
const re = /^\d+x\d*_(.*\.(jpg|jpeg|png))$/i;
const getLargeImg = function (url) {
    let arr = url.split("/");
    let name = arr.pop();
    let id2 = arr.pop();
    let id1 = arr.pop();
    let m = name.match(re);
    if (m) {
        return `https://www.billboard-japan.com/common/sys/img/news/${id1}/${id2}/${m[1]}`;
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
                    "#wrapper .news .newsArticle__intro img", // article main
                    "#wrapper .news .newsArticle__main img", // article images
                    "#wrapper .news .picUp__mainImg img", // slide show main
                    "#wrapper .news .picUp__otherImgBox img", // slide show main
                    "#wrapper article hgroup img", // special main
                    "#wrapper article #maintext img", // slide show main
                ].join(","),
                getLargeImg)
        );

        return o;
    },
    host: "www.billboard-japan.com",
    re: re,
    getLargeImg: getLargeImg
};
