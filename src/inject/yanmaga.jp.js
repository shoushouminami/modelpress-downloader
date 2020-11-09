const utils = require("../utils.js");
const helper = require("../helper/helper-utils");
const getImg = function (dom) {
    return {url: dom.src, filename: dom.dataset.name};
}

let refreshHandle = null;
const refresh = function () {
    chrome.runtime.sendMessage({what: "refreshInject", result: retryInject()});
    if (!helper.solvingMaze() && refreshHandle) {
        clearInterval(refreshHandle);
        refreshHandle = 0;
    }
}

const retryInject = function () {
    let o = require("./return-message.js").init();
    o.folder = window.location.host
        + window.location.pathname
            .split("/")
            .slice(1, 4)
            .join("-")
        + "/";

    if (helper.getDataDiv() != null) {
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(
                helper.getDataDiv(),
                "img",
                getImg
            )
        );
    }

    return o;
}

const inject = function () {
    let o = require("./return-message.js").init();
    if (helper.getDataDiv() == null) {
        utils.injectScriptDOM(chrome.runtime.getURL("helper/yanmaga-cache.js"));
        o.retry = true;
        // setup async refresh
        refreshHandle = setInterval(refresh, 550);
        return o;
    } else {
        return retryInject();
    }
};

module.exports = {
    inject: inject,
    host: "yanmaga.jp/",
    hidden: true
};
