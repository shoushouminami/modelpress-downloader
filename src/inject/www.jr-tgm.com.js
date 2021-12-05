const utils = require("../utils.js");
const globals = require("../globals");
const messaging = require("../messaging");
const logger = require("../logger2")(module.id);
const canvasUtils = require("../utils/canvas-utils");

const images = window.jrTgmImages = window.jrTgmImages || [];

function fixWidthStr(i) {
    return String("000" + i).slice(-4);
}

function assembleImages(doms) {
    let handle = null;
    for (let i = 0; i < doms.length; i++) {
        if (i === 0) {
            handle = canvasUtils.createCanvasAndDrawImage(doms[i]);
        } else {
            if (i % 4 === 0) {
                handle = canvasUtils.drawBelow(handle, doms[i]);
            } else {
                handle = canvasUtils.drawRight(handle, doms[i]);
            }
        }
    }
    return canvasUtils.toDataUrl(handle);
}

function listenOnce() {
    messaging.listenOnRuntime("getImageUrl", function (msg, sendResponse) {
        logger.debug("received getImageUrl message filename=", msg.filename);
        if (msg.filename) {
            for (const image of images) {
                if (image.filename === msg.filename) {
                    logger.debug("found image filename=", msg.filename);
                    Promise.all(image.promises).then(function (doms) {
                        logger.debug("loaded all images filename=", image.filename);
                        image.dataUrl = assembleImages(doms);
                        logger.debug("sending getImageUrl response image.filename=", image.filename,
                            "msg.filename=", msg.filename,
                            "image.dataUrl.length=", image.dataUrl && image.dataUrl.length);
                        sendResponse({
                            url: image.dataUrl,
                            filename: msg.filename
                        });
                    });
                    return true; // async response
                }
            }
            logger.error("image not found filename=", msg.filename);
        }
    });
}

module.exports = {
    inject: function () {
        listenOnce();
        let o = require("./return-message.js").init();
        const window = globals.getWindow();
        if (window.location.pathname.startsWith("/digital_catalog/quns/")) {
            const prefix = window.location.origin + window.location.pathname;
            utils.fetchUrl(`${prefix}data/page.txt`)
                .then(function (pagetxt) {
                    try {
                        let pageJson = JSON.parse(pagetxt);
                        for (const page of pageJson) {
                            let image = {
                                doms: [],
                                promises: [],
                                filename: page.id + ".jpg",
                                dataUrl: null
                            }
                            for (let i = 1; i <= 24; i++) {
                                let dom = window.document.createElement("IMG");
                                let p = new Promise(function (resolve) {
                                    dom.onload = function (){
                                        resolve(dom);
                                    };
                                    dom.src = `${prefix}jpg_4/${fixWidthStr(page.id)}/${fixWidthStr(i)}.jpg`;
                                });
                                image.doms.push(dom);
                                image.promises.push(p);
                            }
                            utils.pushIfNew(o.images,
                                {
                                    type: "msg",
                                    url: page.id + ".jpg",
                                    filename: page.id + ".jpg"
                                }
                            );
                            utils.pushIfNew(images, image);
                        }
                        messaging.sendToRuntime("updateResult", o);
                    } catch (e) {
                        logger.error(e);
                    }
                }, function (e) {
                    logger.error(e);
                });
        }
        return o;
    },
    host: "www.jr-tgm.com"
};
