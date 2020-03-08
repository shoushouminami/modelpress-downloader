const utils = require("../utils.js");
module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        let spotlights = document.querySelectorAll(":not(.hidden_elem) > .spotlight");
        if (spotlights && spotlights.length) {
            for (const spotlight of spotlights) {
                if (spotlight.nodeName === "IMG" && spotlight.src) {
                    o.images.push(spotlight.src);
                }
            }
        } else {
            let divs = document.querySelectorAll(".uiScaledImageContainer");
            if (divs && divs.length) {
                for (const div of divs) {
                    if (div.parentElement.nodeName === "A" && div.parentElement.getAttribute("data-ploi")) {
                        o.images.push(div.parentElement.getAttribute("data-ploi"));
                    }
                }
            }
        }
        return o;
    },
    host: "www.facebook.com"
};
