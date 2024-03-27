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

const DOMAINS = {
    yanmaga: "api-yanmaga.comici.jp",
    yanmaga2: "api2-yanmaga.comici.jp",
    "api-yanmaga.comici.jp": "api-yanmaga.comici.jp",
    "api2-yanmaga.comici.jp": "api2-yanmaga.comici.jp",
    "younganimal.com": "younganimal.com",
    "youngchampion.jp": "youngchampion.jp"
};

const COORD_PATH = {
    "api-yanmaga.comici.jp": "/book/coordinateInfo",
    "api2-yanmaga.comici.jp": "/book/coordinateInfo",
    "younganimal.com": "/book/episodeInfo",
    "youngchampion.jp": "/book/episodeInfo"
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
    return div != null ? div.getAttribute("comici-viewer-id") : null;
}

function getCoordInfoUrl() {
    const div = document.getElementById("comici-viewer");
    const viewerId = getComiciViewerId();
    if (viewerId == null) return null;

    let apiDomain = div.dataset["apiDomain"] || div.getAttribute("api-domain");
    return "https://" +
        (DOMAINS[apiDomain] || DOMAINS["yanmaga2"]) +
        `${COORD_PATH[apiDomain]}?comici-viewer-id=${viewerId}`
}

function getContentInfoUrl(len) {
    const div = document.getElementById("comici-viewer");
    const viewerId = getComiciViewerId();
    if (div == null || viewerId == null) {
        return null;
    }

    const apiDomain = div.dataset["apiDomain"] || div.getAttribute("api-domain");
    const jwt =  div.dataset["memberJwt"]
    return `https://${(DOMAINS[apiDomain] || DOMAINS["yanmaga2"])}` +
        `/book/contentsInfo?comici-viewer-id=${viewerId}` +
        `&user-id=${jwt}&page-from=0&page-to=${len}`;
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
    listenOnce();

    let o = require("./return-message.js").init();
    o.folder = getFolderName();

    if (images.length > 0) {
        pushToMessage(o, images);
    } else {
        let coordUrl = getCoordInfoUrl();
        logger.debug("coordUrl=", coordUrl)
        if (coordUrl) {
            utils.fetchUrl(coordUrl)
                .then(respText => {
                        try {
                            const coord = JSON.parse(respText);
                            logger.debug("coord=", coord);
                            if (coord && coord.result && coord.result.length > 0) {
                                let len = coord.result.length;
                                if (window.location.host === "younganimal.com") {
                                    // quick hack for younganimal.com
                                    const viewId = getComiciViewerId();
                                    if (viewId != null) {
                                        try {
                                            len = coord.result.filter(c => c["id"] === viewId)["0"]["page_count"]
                                        } catch (e) {
                                            len = coord.result["0"]["page_count"];
                                        }
                                    }
                                }
                                if (window.location.host === "youngchampion.jp") {
                                    const comiciViewerId = document.getElementById("comici-viewer").getAttribute("comici-viewer-id")
                                    len = coord.result.filter(r => r.id == comiciViewerId)[0]["page_count"];
                                }
                                let contentUrl = getContentInfoUrl(len);
                                logger.debug("contentUrl=", contentUrl, "len=", len);
                                utils.fetchUrl(contentUrl).then(function (respText) {
                                    const content = JSON.parse(respText);
                                    logger.debug("content=", content);
                                    if (content && content.result && content.result.length > 0) {
                                        for (const image of content.result) {
                                            let dom = document.createElement("img");
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
    host: "yanmaga.jp.old",
    getImg: getImg
};
