const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message").init();
    utils.pushArray(o.images, utils.findDomsWithCssSelector(document, "article.gw-content-wrap ul.gw-content__entry-thumbnail-list a div.gw-content__entry-thumbnail-list__item-image", utils.getDomBackgroundImage));
    return o;
};

module.exports = {
    host: "girlswalker.com",
    inject: inject,
};

