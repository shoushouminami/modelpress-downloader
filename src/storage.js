const PREFIX = "MID_CONF."

function get(key) {
    return require("./globals").getWindow().localStorage.getItem(PREFIX + key);
}

function set(key, value) {
    return require("./globals").getWindow().localStorage.setItem(PREFIX + key, value);
}

function sessionGet(key) {
    return require("./globals").getWindow().sessionStorage.getItem(PREFIX + key);
}

function sessionSet(key, value) {
    return require("./globals").getWindow().sessionStorage.setItem(PREFIX + key, value);
}

exports.get = get;
exports.set = set;
exports.sessionGet = sessionGet;
exports.sessionSet = sessionSet;
