const utils = require("../utils");
const messaging = require("../messaging");
const globals = require("../globals");
const logger = require("../logger");

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
    yanmaga2: "api2-yanmaga.comici.jp"
};

const DEFAULT_ORDER = [];
for (let k = 0, i = 0; i < 4; i++) for (let j = 0; j < 4; j++) DEFAULT_ORDER[k++] = [i, j];

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

    let canvas = document.createElement("canvas")
    canvas.width = width;
    canvas.height = height;

    let context = canvas.getContext("2d");
    context.imageSmoothingQuality = "high";
    context.imageSmoothingEnabled = true;

    let decodedArray = decodeScrambleArray(scrambleString);
    let tileWidth = Math.floor(width / 4);
    let tileHeight = Math.floor(height / 4);
    for (let k = 0, i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let x = decodedArray[k][0], y = decodedArray[k][1];
            context.drawImage(imageDom, tileWidth * x, tileHeight * y, tileWidth, tileHeight, tileWidth * i, tileHeight * j, tileWidth, tileHeight);
            k++;
        }
    }

    return canvas.toDataURL("image/jpeg", 1);
}

function getCoordInfoUrl() {
    let div = document.getElementById("comici-viewer");
    if (div == null ||
        div.getAttribute("comici-viewer-id") == null ||
        div.getAttribute("api-domain") == null
    ) {
        return null;
    }

    return "https://" +
        (DOMAINS[div.getAttribute("api-domain")] || DOMAINS["yanmaga2"]) +
        "/book/coordinateInfo?comici-viewer-id=" + div.getAttribute("comici-viewer-id")
}

// {  dom: dom, scramble: image.scramble, filename: image.title}
const images = window.yanmagaImages = window.yanmagaImages || [];

function pushToMessage(o, images) {
    for (const image of images) {
        utils.pushIfNew(o.images, {
            url: image.filename,
            filename: image.filename,
            type: "msg"
        });
    }
}

function listenOnce() {
    window.getImageUrlListener || messaging.listen("getImageUrl", function (msg, sendResponse) {
        if (msg.url && msg.filename) {
            images.forEach((image) => {
                if (image.filename === msg.filename) {
                    const callback = function (dom) {
                        let dataUrl = descramble(dom, image.scramble);
                        sendResponse({
                            url: dataUrl,
                            filename: msg.filename
                        });
                    }
                    if (image.dom.complete) {
                        callback(image.dom);
                    } else {
                        image.onload = function () {
                            callback(image.dom);
                        }
                    }
                    return true; // async response
                }
            });
        }
    });

    window.getImageUrlListener = true;
}


const inject = function () {
    listenOnce();

    let o = require("./return-message.js").init();
    o.folder = getFolderName();

    if (images.length > 0) {
        pushToMessage(o, images);
    } else {
        let coordUrl = getCoordInfoUrl();
        if (coordUrl) {
            utils.fetchUrl(coordUrl)
                .then(respText => {
                        try {
                            const coord = JSON.parse(respText);
                            if (coord && coord.result && coord.result.length > 0) {
                                let o = require("./return-message.js").init();
                                for (const image of coord.result) {
                                    let dom = document.createElement("img");
                                    dom.crossOrigin = "*";
                                    dom.src = window.location.protocol + image.imageUrl;
                                    images.push({
                                        dom: dom,
                                        scramble: image.scramble,
                                        filename: image.title
                                    });
                                }

                                pushToMessage(o, images);
                                messaging.sendToRuntime("updateResult", o);
                            }
                        } catch (e) {
                            logger.error("failed to parse JSON", e, respText);
                        }
                    },
                    () => {
                        messaging.sendToRuntime("updateResult", require("./return-message.js").init());
                    }
                );
            o = require("./return-message.js").loading();
        }
    }

    // article images
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "main .container .article-body figure img")
    );

    return o;
};

/**
 * Runs in content script
 */
const scan = function () {
    let o = inject();
    utils.injectScriptDOM(chrome.runtime.getURL("helper/yanmaga-cache.js"));
    return o;
}

module.exports = {
    inject: inject,
    scan: scan,
    host: "yanmaga.jp",
    hidden: true,
    getImg: getImg
};
