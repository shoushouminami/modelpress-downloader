const utils = require("../utils");
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

exports.getDataDiv = function () {
    return document.getElementById(id);
}

exports.saveImagesInDataDiv = function (images) {
    for (const url of images) {
        exports.saveImageInDataDiv(url);
    }
}

exports.saveImageInDataDiv = function (url) {
    let div = exports.getOrCreateDataDiv();
    let s = div.dataset["images"] || "";
    console.log("s=", s);
    s += encodeURIComponent(url) + ";";
    div.dataset["images"] = s;
}

exports.dataDivHasImages = function () {
    let div = exports.getDataDiv();
    return div && div.dataset["images"] && div.dataset["images"].length > 0;
}

exports.loadImagesFromDataDiv = function () {
    if (exports.dataDivHasImages()) {
        let ret = exports.getDataDiv().dataset["images"].split(";")
        .filter(s => s.length > 0)
        .map(s => decodeURIComponent(s))
        return ret;
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
