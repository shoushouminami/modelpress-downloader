const dev = require("./is-dev");
const { getWindow, getClockFunction } = require("./globals");
const window = getWindow();
const now = getClockFunction();
const START_TS = now();
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
    return {
        debug: dev ? bind(window.console.debug, module) : noop,
        error: dev ? bind(window.console.error, module) : noop,
        log: dev ? bind(window.console.log, module) : noop,
        warn: dev ? bind(window.console.warn, module) : noop,
    }
}
