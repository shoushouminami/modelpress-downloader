const isDev = require("./is-dev");
exports.debug = isDev ? window.console.debug.bind(window.console) : () => {};
exports.error = isDev ? window.console.error.bind(window.console) : () => {};
