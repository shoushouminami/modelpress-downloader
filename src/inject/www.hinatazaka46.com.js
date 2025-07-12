const utils = require("../utils.js");
const { replaceIllegalChars, removeSpace } = require("../utils/str-utils.js");
const { getDocument } = require("../globals.js");

function filterIcon(url) {
    if (url.indexOf("twemoji.maxcdn.com") === -1) {
        return url;
    }

    return null;
};

function getFolderFromBlogTitle(original) {
    let nameP = document.querySelector('.c-blog-page__subtitle');
    let timeP = document.querySelector(".c-blog-article__date");
    let titleP = document.querySelector(".c-blog-article__title");
    if (nameP && timeP && titleP) {
        return removeSpace(replaceIllegalChars(
            nameP.innerText.replaceAll(' ', '')
            + '-' + timeP.innerText.replace(' ', '_').replace(':', '.')
            + '-' + (titleP.innerText.length > 35 ? titleP.innerText.substring(0, 35) + '…' : titleP.innerText)
        )
            + '/');
    }

    return removeSpace(replaceIllegalChars(getDocument().title));
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        for (const selector of [
            ".l-container .l-maincontents--blog .p-blog-article .c-blog-article__text img", // blog
            ".l-container .l-maincontents--news-detail div > img", // news
            ".l-container .p-member__box .c-member__thumb img", // member profile
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    filterIcon
                )
            );
        }

        o.folder = getFolderFromBlogTitle(o.folder);
        return o;
    },
    host: "www.hinatazaka46.com",
    url: "https://www.hinatazaka46.com/s/official/diary/member"
};
