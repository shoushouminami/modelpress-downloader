const utils = require("../utils");
const logger = require("../logger2")(module.id);
const id = "_mid-images_";

exports.getOrCreateDataDiv = function () {
    let div = document.getElementById(id);
    if (!div) {
        div = document.createElement('div');
        div.id = id;
        document.body.appendChild(div);
        div = document.getElementById(id);
    }

    return div;
};

exports.attachInvisibleImage = function (dom, imageUrl, name) {
    let image = document.createElement('img');
    image.src = imageUrl;
    image.style = "display: none;"
    if (name) {
        image.dataset.name = name;
    }
    dom.appendChild(image);
    return image;
}

/**
 * Returns the attached image dom which has the given name.
 * @param dom {HTMLElement}
 * @param name {string}
 * @returns {Element}
 */
exports.getAttachedImageByName = function (dom, name) {
    if (dom && name) {
        for (const imgDom of dom.children) {
            if (imgDom.dataset.name === name) {
                return imgDom;
            }
        }
    }

    return null;
}

exports.getDataDiv = function () {
    return document.getElementById(id);
}

/**
 * Saves all the given image urls in data dom div.dataset["images"] attribute.
 * @param images {string[]}
 */
exports.saveImagesInDataDiv = function (images) {
    for (const url of images) {
        exports.saveImageInDataDiv(url);
    }
}

/**
 * Saves the given image url in data dom div.dataset["images"] attribute.
 */
exports.saveImageInDataDiv = function (url) {
    let div = exports.getOrCreateDataDiv();
    let s = div.dataset["images"] || "";
    logger.debug("s=", s);
    s += encodeURIComponent(url) + ";";
    div.dataset["images"] = s;
}

exports.dataDivHasImages = function () {
    let div = exports.getDataDiv();
    return div && div.dataset["images"] && div.dataset["images"].length > 0;
}

/**
 * Load image urls stored in data div.dataset["images"] attribute.
 * @returns {string[]|*[]}
 */
exports.loadImagesFromDataDiv = function () {
    if (exports.dataDivHasImages()) {
        return exports.getDataDiv().dataset["images"].split(";")
            .filter(s => s.length > 0)
            .map(s => decodeURIComponent(s));
    }

    return [];
}

/**
 * Returns true if div.dataset["cachedIds"] contains the given id
 * @param id
 */
exports.hasCachedId = function (id) {
    let div = exports.getOrCreateDataDiv();
    if (div.dataset.cachedIds != null) {
        try {
            let l = JSON.parse(div.dataset.cachedIds)
            return l.indexOf(id) > -1;
        } catch (e) {
            div.dataset.cachedIds = "";
            return false;
        }
    } else {
        return false;
    }
}

/**
 * Save id into div.dataset["cachedIds"]
 * @param id
 */
exports.cachedId = function (id) {
    let div = exports.getOrCreateDataDiv();
    let l = [];
    if (div.dataset.cachedIds != null) {
        try {
            l = JSON.parse(div.dataset.cachedIds)
        } catch (e) {
            div.dataset.cachedIds = "";
        }
    }

    utils.pushIfNew(l, id);
    div.dataset.cachedIds = JSON.stringify(l);
}

exports.mazeStatus = function (status) {
    let div = exports.getOrCreateDataDiv();
    let oldStatus = div.dataset.mazeStatus;
    if (status) {
        div.dataset.mazeStatus = status;
    }

    return oldStatus;
}

exports.solvingMaze = function () {
    return exports.mazeStatus() === "solving";
}

exports.startSolvingMaze = function () {
    return exports.mazeStatus("solving");
}

exports.doneSolvingMaze = function () {
    return exports.mazeStatus("done");
}
