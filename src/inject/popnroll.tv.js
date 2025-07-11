const utils = require("../utils.js");
const re = /^https:\/\/.*\/(thumb_|medium_|large_).*\.(jpg|png|jpeg)$/i;
function getLargeImg(url) {
    if (url != null) {
        if (url.endsWith(".svg")) {
            return null;
        }

        let m = url.match(re);
        if (m) {
            return url.replace(m[1], "");
        }
    }

    return url;
}


const inject = function () {
    let o = require("./return-message.js").init();

    // check article first
    if (utils.findDomsWithCssSelector(document, "#app article a[href^='/'] > div:empty").length > 0) {
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(document, "#app article a[href^='/'] > div:empty", function (dom) {
                let backgroundImage = getComputedStyle(dom)["background-image"];
                if (backgroundImage) {
                    return getLargeImg(utils.getBackgroundImageFromString(backgroundImage));
                }
            })
        );
    } else {
        // then check for thumbnails
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(document, "#app a[href^='/'] > div:empty", function (dom) {
                let backgroundImage = getComputedStyle(dom)["background-image"];
                if (backgroundImage) {
                    return getLargeImg(utils.getBackgroundImageFromString(backgroundImage));
                }
            })
        );

        // image slide show page
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(document, "#app div figure img", function (dom) {
                let url = dom.dataset["src"] || dom.src;
                if (url) {
                    return getLargeImg(url);
                }
            })
        );
    }


    return o;
};

module.exports = {
    inject: inject,
    host: "popnroll.tv",
    getLargeImg: getLargeImg
};
