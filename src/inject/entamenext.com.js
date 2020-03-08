const utils = require("../utils.js");

const getLargeImg = function (url) {

};

const inject = function() {
    let o = require("./return-message.js").init();
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "section div.articleGalleryList ul li p.img"), getLargeImg);

    return o;
};

module.exports = {
    inject: inject,
    host: "entamenext.com"
};
