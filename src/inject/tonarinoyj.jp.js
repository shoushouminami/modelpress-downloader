const utils = require("../utils");
const messaging = require("../messaging");
const globals = require("../globals");
const logger = require("../logger2")(module.id);

const document = globals.getDocument();
const window = globals.getWindow();

function getFolderName() {
    return window.location.host
        + "-"
        + window.location.pathname
            .split("/")
            .slice(1, 4)
            .join("-")
        + "/";
}

const DEFAULT_ORDER = [];
for (let k = 0, i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        DEFAULT_ORDER[k++] = [i, j];
    }
}

function decodeScrambleArray(scramble) {
    let decoded = [];
    let encoded = scramble.replace(/\s+/g, "").slice(1).slice(0, -1).split(",");
    for (let i = 0; i < DEFAULT_ORDER.length; i++) {
        decoded.push(DEFAULT_ORDER[encoded[i]]);
    }

    return decoded;
}

function descramble(imageDom, scrambleString) {
    let width = imageDom.width;
    let height = imageDom.height;

    let tileWidth = Math.floor(width / 32) * 8
    let tileHeight = Math.floor(height / 32) * 8;

    let canvas = document.createElement("canvas")
    canvas.width = width;
    canvas.height = height;

    let context = canvas.getContext("2d");
    context.imageSmoothingQuality = "high";
    context.imageSmoothingEnabled = true;

    // when any dimension is not multiple of 4, the remaining pixels are also valid.
    context.drawImage(imageDom, 0, 0);

    let decodedArray = decodeScrambleArray(scrambleString);
    for (let  k = 0, i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let x = decodedArray[k][0], y = decodedArray[k][1];
            context.drawImage(imageDom, tileWidth * x, tileHeight * y, tileWidth, tileHeight, tileWidth * i, tileHeight * j, tileWidth, tileHeight);
            k++;
        }
    }

    return canvas.toDataURL("image/jpeg", 1);
}

function getCoordInfoUrl() {
    let div = document.querySelector("section.js-viewer");
    if (div == null ||
        div.dataset == null ||
        div.dataset["jsonUrl"] == null
    ) {
        return null;
    }

    return div.dataset["jsonUrl"];
}

// array of { dom: dom, scramble: image.scramble, filename: image.title, promise: Promise, dataUrl: string }
const images = [];

function pushToMessage(o, images) {
    for (const image of images) {
        utils.pushIfNew(o.images, {
            filename: image.filename,
            type: "msg"
        });
    }
}

function registerOrOverwriteListener() {
    messaging.clear("getImageUrl");
    messaging.listenOnRuntime("getImageUrl", function (msg, sendResponse) {
        logger.debug("received getImageUrl message filename=", msg.filename);
        if (msg.filename) {
            for (const image of images) {
                if (image.filename === msg.filename) {
                    logger.debug("found image filename=", msg.filename);
                    image.promise.then(function (dom) {
                        // wait(6000)
                        //     .then(() => {})
                        logger.debug("loaded image filename=", image.filename);
                        image.dataUrl = image.dataUrl || descramble(dom, image.scramble);
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


const inject = function () {
    images.splice(0, images.length);
    registerOrOverwriteListener();

    let o = require("./return-message.js").init();
    o.folder = getFolderName();

    if (images.length > 0) {
        logger.debug("retrieved from pagecache images=", images);
        pushToMessage(o, images);
    } else {
        function fetchPages(episodeJson) {
            try {
                const coord = JSON.parse(episodeJson);
                logger.debug("coord=", coord)
                if (coord &&
                    coord.readableProduct &&
                    coord.readableProduct.pageStructure &&
                    coord.readableProduct.pageStructure.pages &&
                    coord.readableProduct.pageStructure.pages.length > 0) {
                    let id = 1;
                    for (let i = 0; i < coord.readableProduct.pageStructure.pages.length; i++) {
                        const image = coord.readableProduct.pageStructure.pages[i];
                        if (image.type === "main") {
                            let dom = document.createElement("img");
                            images.push({
                                dom: dom,
                                scramble: "[0, 4, 8, 12, 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15]",
                                filename: id++ + ".jpg",
                                promise: new Promise(function (resolve) {
                                    dom.crossOrigin = "*";
                                    dom.onload = function (){
                                        resolve(dom);
                                    };
                                    dom.src = image.src;
                                })
                            })

                        }
                    }
                    pushToMessage(o, images);
                }
            } catch (e) {
                logger.error("failed to parse JSON with error", e);
                logger.error("failed to parse JSON", episodeJson);
            }
            messaging.sendToRuntime("updateResult", o);
        }

        // Use episode JSON if already embedded in page. Otherwise try coord info url.
        const scriptDoms = utils.findDomsWithCssSelector(document,"script#episode-json");
        if (scriptDoms && scriptDoms.length > 0 && scriptDoms[0].dataset && scriptDoms[0].dataset.value) {
            // logger.debug("episode json in page", scriptDoms[0].dataset.value)
            fetchPages(scriptDoms[0].dataset.value);
            require("./return-message.js").loading(o);
        } else {
            const jsonUrl = getCoordInfoUrl();
            logger.debug("jsonUrl=", jsonUrl)
            if (jsonUrl) {
                utils.fetchUrl(jsonUrl)
                    .then(fetchPages,
                        () => {
                            messaging.sendToRuntime("updateResult", o);
                        }
                    );
                require("./return-message.js").loading(o);
            }
        }
    }

    return o;
};

module.exports = {
    inject: inject,
    host: "tonarinoyj.jp",
};
