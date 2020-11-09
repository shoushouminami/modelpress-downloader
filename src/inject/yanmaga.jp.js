const utils = require("../utils.js");
const helper = require("../helper/helper-utils");
const getImg = function (dom) {
    return {url: dom.src, filename: dom.dataset.name};
}

const inject = function () {
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
    } else {
        o.scan = true;
    }

    return o;
};

const scan = function () {
    // setup update listener
    window.addEventListener("message", function(event) {
        // We only accept messages from ourselves
        if (event.source !== window) {
            return;
        }

        if (event.data.type && (event.data.type === "FROM_PAGE")) {
            // console.log("Content script received: " + JSON.stringify(event.data.image));
            chrome.runtime.sendMessage({what: "updateImage", image: event.data.image});
        }
    }, false);

    utils.injectScriptDOM(chrome.runtime.getURL("helper/yanmaga-cache.js"));
}

module.exports = {
    inject: inject,
    scan: scan,
    host: "yanmaga.jp",
    hidden: true,
    getImg: getImg
};
