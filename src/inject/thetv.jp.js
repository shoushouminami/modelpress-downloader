const utils = require("../utils.js");
const {getWindow} = require("../globals");
const logger = require("../logger2")(module.id);
function getLargeImg(url) {
    if (!url.startsWith("http") && url.startsWith("/")) {
        url = getWindow().origin + url;
    }

    return utils.removeQuery(url);
}
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images, utils.findDOMsWithCssSelector(document, "div.maincontents div.newsimage .thumblist .thumblist__item img", (dom) => {
            logger.log(dom, dom.dataset);
            let url = (dom.dataset && dom.dataset["original"]) || dom.src;
            if (url != null) {
                return getLargeImg(url);
            }
        }));

        for (let selector of [
            "div.maincontents .newsdetail .news_feed figure img",
            "div.maincontents .persondetail .photo__block .item-img img",
            "div.maincontents div.fullWidthImages img", // matome
            "div.maincontents .program_main__item img", // program
        ]) {
            utils.pushArray(o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    getLargeImg
                )
            );
        }

        return o;
    },
    host: "thetv.jp",
    altHosts: ["talent.thetv.jp"],
    url: "https://thetv.jp"
};
