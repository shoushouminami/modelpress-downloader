const logger = require("./logger2")(module.id);

/**
 * Returns the module of the current website.
 * @returns {null|{}}
 */
function getSiteModule(location) {
    try {
        const startMs = new Date().getTime();
        const m = require("./inject/sites").getByHost(require("./inject/hostMapping").check(location));
        if (m) {
            logger.debug("func=getSiteModule getByWindowLocationLatency=", new Date().getTime() - startMs, "ms");
            return m;
        }
        // not found
        logger.error("Site module not found", location.host);
    } catch (e) {
        // not found
        logger.error(e);
    }
}

/**
 * Injects "inject-cs.js" file.
 * @param chrome
 * @param tabId
 * @param callback {function(results, tabId)}
 */
function injectInjectScript(chrome, tabId, callback) {

    chrome.scripting.executeScript(
        {
            target: {tabId: tabId},
            files: ["inject-cs.js"],
            matchAboutBlank: true
        },
        results => callback(results, tabId)
    );
}

module.exports = {
    inject: function (){
        const site = getSiteModule(window.location);
        if (site != null) {
            return site.inject();
        } else {
            return require("./inject/return-message.js").notSupported();
        }
    },
    getSiteModule: getSiteModule
}
