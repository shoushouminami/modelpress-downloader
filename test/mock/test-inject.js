const rewiremock = require("./rewiremock");
const utils = require("../../src/utils");

utils.injectScriptDOM = function (filepath) {
    let span = document.createElement('span');
    // unit test looks at this value and injects the script using puppeteer API
    // since browser side won't have permission to get a local file
    span.classList.add("_mid-helper_");
    span.dataset["src"] = filepath;
    document.body.appendChild(span);
};

rewiremock(() => require("../../src/utils")).with(utils);
rewiremock.enable();

let o = require("../../src/inject");
window._mid = {o: o};
