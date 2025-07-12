const utils = require("../utils");
const { replaceIllegalChars, removeSpace } = require("../utils/str-utils.js");
const { getDocument, getSearchParamValue } = require("../globals.js");

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

function getFolderFromBlogTitle(original) {
    let nameP = document.querySelector('.com-hero-title > .inner');
    const yearSpan = document.querySelector(".ym-year");
    const monthSpan = document.querySelector(".ym-month");
    let titleP = document.querySelector(".title-wrap > .title");
    if (nameP && yearSpan && monthSpan && titleP) {
        return removeSpace(
            replaceIllegalChars(
                nameP.innerText
                + '-' + yearSpan.innerText.replace(' ', '_').replace(':', '.')
                + '-' + monthSpan.innerText.replace(' ', '_').replace(':', '.')
                + '-' + (titleP.innerText.length > 35 ? titleP.innerText.substring(0, 35) + '…' : titleP.innerText)
            ))
            + '/';
    }

    return removeSpace(replaceIllegalChars(getDocument().title));
}

module.exports = {
    inject: function () {
        // Member blog & news
        let o = require("./return-message.js").init();
        for (const selector of [
            "main .col-l-wrap .post .box-article img",
            "main .news-detailcont .article img",
            "main .member-profcont .ph img"
        ]) {
            utils.pushArray(
                o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    filterIcon
                )
            )
        }

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
        let ct = getSearchParamValue("ct");
        if (ct) {
            o.folder = o.folder.substring(0, o.folder.length - 1) + "-" + ct + "/";
        } else {
            o.folder = getFolderFromBlogTitle(o.folder);
        }
        return o;
    },
    host: "sakurazaka46.com",
    url: "https://sakurazaka46.com/s/s46/diary/blog/list",
    re: re
};
