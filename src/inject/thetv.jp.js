const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images, utils.findDomsWithCssSelector(document, "div.mainContent div.galleryArea ul.list_thumbnail li.list_thumbnail__item a", (dom) => {
            return utils.removeQuery(utils.getDomBackgroundImage(dom));
        }));
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.mainContent div.contentBody div.contentPhotoLerge figure img", utils.removeQuery));
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.mainContent div.contentBody div.contentText div.alignCenterPhoto img", utils.removeQuery));
        // matome
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.mainContent div.fullWidthImages img", utils.removeQuery));
        // program
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.mainContent div.pp_prg_data img.pp_prg_img", utils.removeQuery));
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.mainContent div.contentBody div.personData figure.personDataVisual img", utils.removeQuery));
        return o;
    },
    host: function(host) {
        return host === "thetv.jp" || host === "talent.thetv.jp";
    }
};
