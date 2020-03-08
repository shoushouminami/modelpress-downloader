const utils = require("../utils.js");

// const
const getLargeImg = function (pDom) {
    // if (pDom.style) {
    //     background-image:url(https://images.entamenext.com/articles_photos/3000/3908/231x410/8873ee858bbbb110f73e67ec63c44ddd.jpg);
    // }
    //
    // return null;
};

const inject = function() {
    let o = require("./return-message.js").init();
    utils.pushArray(o.images, utils.findDomsWithCssSelector(document, "section div.articleGalleryList ul li p.img"), getLargeImg);

    return o;
};

module.exports = {
    inject: inject,
    host: "entamenext.com"
};
