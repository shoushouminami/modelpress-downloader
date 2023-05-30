const PREFIX = "MID_CONF."
const messaging = require("./messaging");

function getLocalStorage() {
    return require("./globals").getWindow().localStorage || {
        "getItem": () => undefined,
        "setItem": () => undefined
    };
}
/**
 * Get from local storage. note this is implemented with window.localStorage and won't work in service worker (background.js) in V3.
 * @param key
 * @return {string}
 */
function get(key) {
    return getLocalStorage().getItem(PREFIX + key);
}

/**
 * Set in local storage. note this is implemented with window.localStorage and won't work in service worker (background.js) in V3.
 * @param key
 * @param value
 */
function set(key, value) {
    getLocalStorage().setItem(PREFIX + key, value);
}

/**
 * Same as {@link #get} but uses session storage.
 */
function sessionGet(key) {
    return require("./globals").getWindow().sessionStorage.getItem(PREFIX + key);
}

/**
 * Same as {@link #set} but uses session storage.
 */
function sessionSet(key, value) {
    return require("./globals").getWindow().sessionStorage.setItem(PREFIX + key, value);
}

exports.get = get;
exports.set = set;
exports.sessionGet = sessionGet;
exports.sessionSet = sessionSet;
