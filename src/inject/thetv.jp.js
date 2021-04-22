const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images, utils.findDomsWithCssSelector(document, "div.maincontents div.newsimage .thumblist .thumblist__item a", (dom) => {
            let url = utils.getDomBackgroundImage(dom);
            if (url == null) {
                return null;
            }
            return utils.removeQuery(url);
        }));

        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.maincontents .newsdetail .news_feed figure img", utils.removeQuery));
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.maincontents .persondetail .photo__block .item-img img", utils.removeQuery));

        // matome
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.maincontents div.fullWidthImages img", utils.removeQuery));
        // program
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.maincontents .program_main__item img", utils.removeQuery));
         return o;
    },
    host: "thetv.jp",
    url: "https://thetv.jp"
};
