const utils = require("../utils.js");
const pattern = /^https:\/\/www.crank-in.net\/.*(_\d{3}).(jpg|jpeg|png)$/;
const getLargeImg = function (url) {
    let m = url.match(pattern);
    if (m && m[1]) {
        return {
            url: url.replace(m[1], "_1200"),
            retries: [url.replace(m[1], "_650"), url]
        }
    }
    return url;
};

const guessImages = function (current, total, urls) {
    //console.log(current, total, urls);
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // headline image in article
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                "#content main article .headline_part img", getLargeImg)
        );
        // image in article
        // images at the end of the article
        // image in slide show
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                [
                    "#content main article figure img",
                    "#content main article .top_news_all img"
                ].join(","), getLargeImg)
        );

        // guess images on gallery page
        if (document.querySelectorAll(".photo-link-num").length > 0) {
            let numbers = document.querySelectorAll(".photo-link-num")[0].innerText.trim().split("/");
            try {
                let current = Number.parseInt(numbers[0]);
                let total = Number.parseInt(numbers[1]);
                guessImages(current, total,
                    utils.findImagesWithCssSelector(
                    document,
                    "#content main article figure img")
                )
            } catch (ignored) {
            }
        }
        return o;
    },
    host: "www.crank-in.net",
};
