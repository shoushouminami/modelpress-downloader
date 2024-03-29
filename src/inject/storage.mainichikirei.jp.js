const utils = require("../utils.js");
const canvasUtils = require("../utils/canvas-utils");
const logger = require("../logger2")(module.id);

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // single image
        try {
            let wh = document.title.split("(")[1].split(")")[0];
            let w = wh.split("×")[0];
            let h = wh.split("×")[1];
            logger.debug("w=", w, "h=", h);
            utils.pushIfNew(
                o.images,
                {
                    url: canvasUtils.toDataUrl(
                        canvasUtils.createCanvasAndDrawImage(
                            document.querySelectorAll("img")[0],
                            w,
                            h
                        )
                    ),
                    filename: window.location.pathname.split("/").pop()
                }
            );
            return o;
        } catch (e) {
            logger.error("Error finding any image", e);
            return require("./return-message").notSupported();
        }
    },
    host: "storage.mainichikirei.jp",
    altHosts: ["bunshun.ismcdn.jp", "storage.mantan-web.jp"],
    hidden: true
};
