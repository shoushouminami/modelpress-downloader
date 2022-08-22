const utils = require("../utils.js");
const path8xx = "p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG";
const zoomPath = "zoom";
const pattern = /^https:\/\/www\.rbbtoday\.com\/imgs\/((p\/)?[^\/]+)\/([^\/]+\.jpg)$/i

const getLargeImg = function (url, width, height) {
    let m = url.match(pattern);
    if (m && m[1] && m[3]) {
        if (width && height && height > width) { // in the case height is greater than width, zoom path has the larger image
            return {
                url: url.replace(m[1], zoomPath),
                retries: [url.replace(m[1], path8xx), url]
            }
        }
        // normally this has the larger image
        return {
            url: url.replace(m[1], path8xx),
            retries: [url.replace(m[1], zoomPath), url]
        }
    }

    return url;
}

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        let attachedImages = utils.findImagesWithCssSelector(require("../helper/helper-utils").getOrCreateDataDiv(), "img");
        if (attachedImages.length > 0) {
            utils.pushArray(o.images,
                utils.findImagesWithCssSelector(
                    require("../helper/helper-utils").getOrCreateDataDiv(),
                    "img",
                    getLargeImg)
            );
        } else {
            // inject helper script and wait
            require("../utils/func-utils")
                .injectScriptFileToDOM(chrome.runtime.getURL("helper/rbbtoday-check-size.js"));
            o.retry = true;
        }

        return o;
    },
    host: "www.rbbtoday.com",
    pattern: pattern,
    getLargeImg: getLargeImg
};
