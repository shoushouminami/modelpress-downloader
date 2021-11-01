const utils = require("../utils.js");
const messaging = require("../messaging");
const logger = require("../logger2")(module.id);

// cache
const data = window.midData = window.midData || [];

function getImgFromDataset(dom) {
    return window.location.href +
        (window.location.href.endsWith("/") ?  "" : "/") +
        dom.dataset.ptimg.split("\.")[0] + ".jpg";
}

function getImgJSONFromDataset(dom) {
    return window.location.href + "/" + dom.dataset.ptimg;
}

function decode(resources, coords) {
    let m = coords.match(/^([^:]+):(\d+),(\d+)\+(\d+),(\d+)>(\d+),(\d+)$/);
    if (!m) {
        throw new Error("bad format");
    }

    let resid = m[1];
    if (!(resid in resources))  {
        throw new Error("resid " + resid + " not found.");
    }

    return {
        resid: resid,
        xsrc: parseInt(m[2], 10),
        ysrc: parseInt(m[3], 10),
        width: parseInt(m[4], 10),
        height: parseInt(m[5], 10),
        xdest: parseInt(m[6], 10),
        ydest: parseInt(m[7], 10)
    }
}

function addToDataIfNew(dom) {
    let url = getImgFromDataset(dom);
    let filename = url.split("/").reverse()[0];

    if (!data.find(i => i.filename === filename)) {
        let item = {
            url: url,
            dom: null,
            json: null,
            filename: filename,
            promise: new Promise(function (resolve) {
                utils.fetchUrl(getImgJSONFromDataset(dom))
                    .then(function (respText) {
                        try {
                            item.json = JSON.parse(respText);
                            item.dom = document.createElement("img");
                            item.dom.onload = function (){
                                resolve(item);
                            };
                            item.dom.src = url;
                        } catch (ignored) {}
                    });
            })
        };
        logger.debug(item);
        data.push(item);
    }

    return {
        url: url,
        filename: filename,
        type: "msg"
    };
}

function descramble(imgDom, meta) {
    let view = meta.views[0];
    let decodedCoords = [];
    for (const c of view.coords) {
        decodedCoords.push(decode(meta.resources, c));
    }

    let canvas = document.createElement("canvas");
    canvas.width = view.width;
    canvas.height = view.height;

    let context = canvas.getContext("2d");
    context.imageSmoothingQuality = "high";
    context.imageSmoothingEnabled = true;

    for (const c of decodedCoords) {
        context.drawImage(imgDom, c.xsrc, c.ysrc, c.width, c.height, c.xdest, c.ydest, c.width, c.height);
    }

    return canvas.toDataURL("image/jpeg", 1);
}

function registerEventListener() {
    messaging.listenOnRuntime("getImageUrl", function (msg, sendResponse) {
        if (msg.filename) {
            for (const image of data) {
                if (image.filename === msg.filename) {
                    image.promise.then(function (item) {
                        image.dataUrl = image.dataUrl || descramble(item.dom, image.json);
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
        }
    });
}

module.exports = {
    inject: function () {
        registerEventListener();

        let o = require("./return-message.js").init();
        // Images already loaded on current page
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(document,
                [
                    "#content div[data-ptimg]",
                ].join(","),
                addToDataIfNew
                )
        );
        // Load all images on current page
        utils.fetchUrl(window.location.href)
            .then(function (respText) {
                try {
                    let template = document.createElement('template');
                    template.innerHTML = respText;
                    utils.pushArray(o.images,
                        utils.findDomsWithCssSelector(
                            template.content,
                            [
                                "#content div[data-ptimg]",
                            ].join(","),
                            addToDataIfNew
                        )
                    );
                    messaging.sendToRuntime("updateResult", o);
                } catch (ignored) {}
            });

        return o;
    },
    host: "www.comic-valkyrie.com",
};
