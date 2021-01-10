const isDev = require("./is-dev");

export function debug(msgStr, arg1, arg2, arg3, ...otherArgs) {
    if (isDev) {
        console.debug(msgStr, arg1, arg2, arg3, ...otherArgs);
    }
}

export function error(msgStr, arg1, arg2, arg3, ...otherArgs) {
    if (isDev) {
        console.error(msgStr, arg1, arg2, arg3, ...otherArgs);
    }
}
