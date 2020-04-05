const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message.js").init();
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main article#post div.current_photo img", utils.removeQuery));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main article#post div.thumb_list ul img", utils.removeQuery));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main article#post div.top_photo img", utils.removeQuery));
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main article#post div.post_cont div.pic_media.scale_full img", utils.removeQuery));
    return o;
};

module.exports = {
    inject: inject,
    host: "ray-web.jp"
};
