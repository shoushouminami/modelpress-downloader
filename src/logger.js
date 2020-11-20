const isDev = require("./is-dev");

const debug = function (msgStr, arg1, arg2, arg3, ...otherArgs) {
    if (isDev) {
        console.debug(msgStr, arg1, arg2, arg3, ...otherArgs);
    }
}

const error = function (msgStr, arg1, arg2, arg3, ...otherArgs) {
    if (isDev) {
        console.error(msgStr, arg1, arg2, arg3, ...otherArgs);
    }
}


exports.debug = debug;
exports.error = error;
