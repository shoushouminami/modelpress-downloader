const rewiremock = require("./rewiremock");
const func_utils = require("../../src/utils/func-utils");

func_utils.injectScriptFileToDOM = function (filepath) {
    let span = document.createElement("span");
    // unit test looks at this value and injects the script using puppeteer API
    // since browser side won't have permission to get a local file
    span.classList.add("_mid-helper_");
    span.dataset["src"] = filepath;
    document.body.appendChild(span);
};

rewiremock(() => require("../../src/utils/func-utils")).with(func_utils);
rewiremock.enable();

let o = require("../../src/inject-cs");
window._mid = window._mid || {};
window._mid.o = o;
