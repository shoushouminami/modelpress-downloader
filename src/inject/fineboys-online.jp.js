const utils = require("../utils.js");
const inject = function () {
    let o = require("./return-message").init();
    // in article images
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "article section .mainBox .post p img")
    );
    // in article slides
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "article section .mainBox .post .post_slider .slick-slide img",
            utils.removeQuery)
    );

    o.folder = window.location.host
        + window.location.pathname.replace(/\//g, "-")
        + window.location.search.replace(/[\\?=&]/g, "-")
        + "/";
    return o;
};

module.exports = {
    host: "fineboys-online.jp",
    inject: inject,
};
