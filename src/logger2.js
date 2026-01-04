const dev = require("./is-dev");
const { getWindow, getClockFunction } = require("./globals");
const window = getWindow();
const now = getClockFunction();
const START_TS = now();
const instanceMap = {}; // module id => logger object. keep track of all loggers of different module ids
function noop() {}

function current_clock_offset() {
    return {
        toString() { return (Math.round((now() - START_TS) * 1000) / 1000) + "ms"; }
    };
}

function bind(func, module) {
    return func.bind(window.console, "[" + module + "]", "[" + current_clock_offset() +  "]")
}

module.exports = function (module) {
    if (instanceMap[module]) {
        return instanceMap[module];
    }
    
    const debug = bind(window.console.debug, module);
    const error = bind(window.console.error, module);
    const log = bind(window.console.log, module);
    const warn = bind(window.console.warn, module);

    const logger = {
        debug: dev ? debug : noop,
        error: dev ? error : noop,
        log: dev ? log : noop,
        warn: dev ? warn : noop,
        disableAll(moduleId) {
            if (!moduleId) {
                this.debug = noop;
                this.error = noop;
                this.log = noop;
                this.warn = noop;
            } else {
                // debug("disableAll on moduleId=", moduleId, instanceMap[moduleId]);
                instanceMap[moduleId]?.disableAll();
            }

        },

        disableDebug(moduleId) {
            if (!moduleId) {
                this.debug = noop;
            } else {
                // debug("disableDebug on moduleId=", moduleId, instanceMap[moduleId]);
                instanceMap[moduleId]?.disableDebug();
            }
        },

        enableAll(moduleId) {
            if (!moduleId) {
                this.debug = debug;
                this.error = error;
                this.log = log;
                this.warn = warn;
            } else {
                // debug("enableAll on moduleId=", moduleId, instanceMap[moduleId]);
                instanceMap[moduleId]?.enableAll();
            }
        }

    };

    return (instanceMap[module] = logger);
}
