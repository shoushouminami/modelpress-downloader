const inject = function () {
    let o = require("./inject/return-message.js").init();
    const site = getSiteModule();
    if (site != null) {
        o = site.inject();
    } else {
        o.supported = false;
    }
    return o;
}

/**
 * Returns the module of the current website.
 * @returns {null|{}}
 */
const getSiteModule = function () {
    try {
        return require("./inject/" + require("./inject/hostMapping").check(window.location));
    } catch (e) {
        // not found
        if (require("./is-dev")) {
            console.error(e);
        }

        return null;
    }
};

/**
 * Injects "inject-cs.js" file.
 * @param chrome
 * @param tabId
 * @param callback {function(results, tabId)}
 */
const injectInjectScript = function (chrome, tabId, callback) {
    chrome.tabs.executeScript(
        tabId,
        {file: "inject-cs.js", matchAboutBlank: true},
        results => callback(results, tabId));
};

module.exports = {
    inject: inject,
    getSiteModule: getSiteModule,
    injectInjectScript: injectInjectScript
}
