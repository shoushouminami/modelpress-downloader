const utils = require("../utils.js");
const helper = require("../helper/helper-utils");
const messaging = require("../messaging");

const getImg = function (dom) {
    return {
        url: dom.dataset.name,
        filename: dom.dataset.name,
        type: "msg" // download through messaging exchange
    }
}

const getFolderName = function () {
    return window.location.host
        + "-"
        + window.location.pathname
            .split("/")
            .slice(1, 4)
            .join("-")
        + "/";
}
const inject = function () {
    let o = require("./return-message.js").init();
    o.folder = getFolderName();

    // article images
    utils.pushArray(o.images,
        utils.findImagesWithCssSelector(document,
            "main .container .article-body figure img")
    );

    if (o.images.length === 0) {
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
    }

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
