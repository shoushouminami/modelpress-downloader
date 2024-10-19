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

module.exports = {
    inject: function (){
        const site = getSiteModule(window.location);
        const ageSec = Date.now();
        if (site != null) {
            // if tearDown function is defined, run it before running inject
            if (typeof site.tearDown === "function") {
                require("./messaging").listenOnRuntime("tearDown", function (msg) {
                    // gating by timestamp
                    if (ageSec < msg.before) {
                        try{
                            logger.debug("Running site.tearDown()");
                            site.tearDown();
                        } catch (e) {
                            logger.error("Error running site.tearDown()", e);
                        }
                    } else {
                        logger.error("Received stale tear down message. ageSec=", ageSec, msg);
                    }
                    return false;
                })
            }
            return site.inject();
        } else {
            return require("./inject/return-message.js").notSupported();
        }
    },
    getSiteModule: getSiteModule
}
