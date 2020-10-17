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

exports.attachInvisibleImage = function (dom, imageUrl) {
    let image = document.createElement('img');
    image.src = imageUrl;
    image.style = "display: none;"
    dom.appendChild(image);
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

