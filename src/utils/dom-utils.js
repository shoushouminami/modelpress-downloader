const globals = require("../globals");
const document = globals.getDocument();

export function createImgDom(attributes) {
    let dom = document.createElement("img");
    dom.src = attributes['src'];
    dom.onload = attributes['onload'];

    return dom;
}

export function f1() {

}
