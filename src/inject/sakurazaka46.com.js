const utils = require("../utils");
const globals = require("../globals");
function filterIcon(url) {
    if (url.indexOf("twemoji.maxcdn.com") > -1) {
        return null;
    }
    return url;
}

const re = /.*(\/\d{3}_\d{3}_\d{6})\.(jpg|jpeg)$/i ;
function getLargeImg(url) {
    if (url.match(re)) {
        url = url.replace(url.match(re)[1], "");
    }
    return url;
}

module.exports = {
    inject: function () {
        // Member blog
        let o = require("./return-message.js").init();
        utils.pushArray(
            o.images,
            utils.findImagesWithCssSelector(
                document,
                "main .col-l-wrap .post .box-article img",
                filterIcon
            )
        );
        // FC history images
        utils.pushArray(
            o.images,
            utils.findDOMsWithCssSelector(
                document,
                "main .sakura-history-detail-list .c-item .c-thumb-img img",
                function (dom) {
                    let url = utils.getBackgroundImageFromDOM(dom);
                    if (url == null) {
                        return null;
                    }
                    if (url.startsWith("/")) {
                        url = window.origin + url;
                    }
                    return getLargeImg(url);
                }
            )
        );
        // FC manager diary
        utils.pushArray(
            o.images,
            utils.findImagesWithCssSelector(
                document,
                "main .manager-list dl dd div li img",
                function (url) {
                    return getLargeImg(url);
                }
            )
        );
        let ct= globals.getSearchParamValue("ct");
        if (ct) {
            o.folder = o.folder.substring(0, o.folder.length - 1) + "-" + ct + "/";
        }
        return o;
    },
    host: "sakurazaka46.com",
    re: re
};
