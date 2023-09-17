const dev = require("./is-dev");
const window = require("./globals").getWindow();
const START_TS = new Date().getTime();
function noop() {}

function current_ts_offset() {
    return (new Date().getTime() - START_TS) + "ms";
}
module.exports = function (module) {
    return {
        debug: dev ? window.console.debug.bind(window.console, "[" + module + "]", "[" + current_ts_offset() + "]") : noop,
        error: dev ? window.console.error.bind(window.console, "[" + module + "]", "[" + current_ts_offset() + "]") : noop,
        log: dev ? window.console.log.bind(window.console, "[" + module + "]", "[" + current_ts_offset() + "]") : noop,
    }
}
