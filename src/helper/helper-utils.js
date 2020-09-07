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

