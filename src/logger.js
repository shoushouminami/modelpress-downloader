const isDev = require("./is-dev");

function debug(msgStr, arg1, arg2, arg3, ...otherArgs) {
    if (isDev) {
        console.debug(msgStr, arg1, arg2, arg3, ...otherArgs);
    }
}

function error(msgStr, arg1, arg2, arg3, ...otherArgs) {
    if (isDev) {
        console.error(msgStr, arg1, arg2, arg3, ...otherArgs);
    }
}


exports.debug = debug;
exports.error = error;
