(function(){
    "use strict";
    const helperUtils = require("./helper-utils");
    let photosArray = [];
    if (document.querySelector("body script[class=df-shortcode-script]")) {
        let scriptText = document.querySelector("body script[class=df-shortcode-script]").innerText;
        for (let line of scriptText.split("\n")) {
            line = line.trim();
            if (line.startsWith("window.df_option")) {
                let key = (line.split("=")[0].split(".")[1]).trim();
                photosArray = window[key]["source"];
            }
        }
    }

    const div = require("../helper/helper-utils").getOrCreateDataDiv();
    for (const image of photosArray) {
        helperUtils.attachInvisibleImage(div, image);
    }
})();
