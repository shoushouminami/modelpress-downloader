/**
 * Cache content by page url (excluding queries)
 */
const window = require("./globals").getWindow();
const logger = require("./logger2")(module.id);
const PREFIX = "_mid_cache_";

function key() {
    try {
        return new URL(window.location.href).pathname;
    } catch (e) {
        return "null";
    }
}

function get() {
   if (typeof window[PREFIX] === "object") {
       let k = key();
       let v = window[PREFIX][k];
       logger.debug("[pagecache] get key=", k, "v=", v);
       return v;
   }

   return null;
}

function getOrSet(o) {
    if (get() == null) {
        set(o)
    }

    return get();
}

function set(o) {
    if (window[PREFIX] == null) {
        window[PREFIX] = {};
    }

    let k = key();
    logger.debug("[pagecache] set key=", k, "v=", o);
    window[PREFIX][k] = o;
    return o;
}

exports.get = get;
exports.set = set;
exports.getOrSet = getOrSet;

