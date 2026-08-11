const utils = require("../utils");
const messaging = require("../messaging");
const globals = require("../globals");
const logger = require("../logger2")(module.id);

const document = globals.getDocument();
const window = globals.getWindow();

function getImg(dom) {
    return {
        url: dom.dataset.name,
        filename: dom.dataset.name,
        type: "msg" // download through messaging exchange
    }
}

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

    let tileWidth = Math.floor(width / 4);
    let tileHeight = Math.floor(height / 4);

    let canvas = document.createElement("canvas")
    canvas.width = width;
    canvas.height = height;

    let context = canvas.getContext("2d");
    context.imageSmoothingQuality = "high";
    context.imageSmoothingEnabled = true;

    // when any dimension is not multiple of 4, the remaining pixels are also valid.
    context.drawImage(imageDom, 0, 0);

    let decodedArray = decodeScrambleArray(scrambleString);
    for (let k = 0, i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let x = decodedArray[k][0], y = decodedArray[k][1];
            context.drawImage(imageDom, tileWidth * x, tileHeight * y, tileWidth, tileHeight, tileWidth * i, tileHeight * j, tileWidth, tileHeight);
            k++;
        }
    }

    return canvas.toDataURL("image/jpeg", 1);
}

function getComiciViewerId() {
    const div = document.getElementById("comici-viewer");
    return div?.dataset?.comiciViewerId || div?.getAttribute("comici-viewer-id");
}

function getContentInfoUrl(len) {
    const div = document.getElementById("comici-viewer");
    const viewerId = getComiciViewerId();
    if (div == null || viewerId == null) {
        return null;
    }

    const domain = window.location.host;
    return `https://${domain}/api/book/contentsInfo?comici-viewer-id=${viewerId}` +
        `&user-id=&page-from=0&page-to=${len}`;
}

// array of { dom: dom, scramble: image.scramble, filename: image.title, promise: Promise, dataUrl: string }
const images = window.yanmagaImages = window.yanmagaImages || [];

function pushToMessage(o, images) {
    for (const image of images) {
        utils.pushIfNew(o.images, {
            filename: image.filename,
            type: "msg"
        });
    }
}

function listenOnce() {
    messaging.listenOnRuntime("getImageUrl", function (msg, sendResponse) {
        logger.debug("received getImageUrl message filename=", msg.filename);
        if (msg.filename) {
            for (const image of images) {
                if (image.filename === msg.filename) {
                    logger.debug("found image filename=", msg.filename);
                    image.promise.then(function (dom) {
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
    listenOnce();
    let o = require("./return-message.js").init();
    o.folder = getFolderName();
    
    // clear cache
    images.splice(0, images.length);

    const contentUrl1 = getContentInfoUrl(1);
    logger.debug("contentUrl1=", contentUrl1)
    if (contentUrl1) {
        utils.fetchUrl(contentUrl1)
            .then(respText => {
                    try {
                        const contentInfoResp1 = JSON.parse(respText);
                        logger.debug("contentInfoResp1=", contentInfoResp1);
                        if (contentInfoResp1 && contentInfoResp1.totalPages) {
                            const len = contentInfoResp1.totalPages;
                            const contentUrl2 = getContentInfoUrl(len);
                            logger.debug("contentUrl2=", contentUrl2, "len=", len);
                            utils.fetchUrl(contentUrl2).then(function (respText) {
                                const contentInfoResp2 = JSON.parse(respText);
                                logger.debug("contentInfoResp2=", contentInfoResp2);
                                if (contentInfoResp2 && contentInfoResp2.result && contentInfoResp2.result.length > 0) {
                                    for (const image of contentInfoResp2.result) {
                                        const dom = document.createElement("img");
                                        images.push({
                                            dom: dom,
                                            scramble: image.scramble,
                                            filename: utils.getFileName(image.imageUrl),
                                            promise: new Promise(function (resolve) {
                                                dom.crossOrigin = "";
                                                dom.onload = function () {
                                                    resolve(dom);
                                                };
                                                dom.src = image.imageUrl;
                                            })
                                        });
                                    }
                                    pushToMessage(o, images);
                                    messaging.sendToRuntime("updateResult", o);
                                }
                            });

                        }
                    } catch (e) {
                        logger.error("failed to parse JSON", e, respText);
                    }
                },
                () => {
                    messaging.sendToRuntime("updateResult", o);
                }
            );
        o = require("./return-message.js").loading();
        o.folder = getFolderName();
    }

    // article images
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "main .container .article-body figure img")
    );

    return o;
};

module.exports = {
    inject: inject,
    tearDown: function () {
        logger.debug("Tear down all event listeners")
        messaging.tearDownAllListeners();
    },
    host: "yanmaga.jp.old",
    getImg: getImg
};
