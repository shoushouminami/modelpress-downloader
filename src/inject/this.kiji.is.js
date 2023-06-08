const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "div.main__articleBody img", (url) => {
            let re = /https?:\/\/nordot-res.cloudinary.com\/(.*\/)ch\/images\/.*\.jpg/;
            let m = url.match(re);
            if (m && m[1]) {
                return url.replace(m[1], "");
            }

            return url;
        }));
        return o;
    },
    host: "this.kiji.is",
    altHosts: ["nordot.app"]
};
