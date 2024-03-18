const logger = require("./logger2")(module.id);

/**
 * Returns the module of the current website.
 * @returns {null|{}}
 */
function getSiteModule(location) {
    try {
        const startMs = new Date().getTime();
        const checkedLocation = require("./inject/hostMapping").check(location);
        logger.debug("Looking up module location.host=", location.host, "checkedLocation=", checkedLocation);
        // Load module by hostname
        let m = require("./inject/sites").getByHost(checkedLocation);
        if (m) {
            logger.debug("func=getSiteModule getByHost=", new Date().getTime() - startMs, "ms");
            return m;
        }
        // not found
        logger.error("Site module not found", location.host);
        // try module by path (in case not registered by hostname)
        m = require("./inject/" + checkedLocation);
        logger.debug("Site module loaded module=", m);
        return m;
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
