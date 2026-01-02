/**
 * Returns the nested property from obj. For example
 *  {@linkcode getOrCreateProperties}(obj, "a", "b") returns obj.a.b
 *
 * If any of the property along the way does not exist, it will be created as an empty object ({}).
 *
 * This allows for not only reading but also quick assignment on a nested property:
 * <pre>
 *     getOrCreateProperties(obj, "a", "b").newProperty = "bla";
 * </pre>
 *
 * @param obj {object}
 * @param path {string}
 * @returns {*}
 */
function getOrCreateProperties(obj, ...path) {
    for (const p of path) {
        if (obj[p] == null) {
            obj[p] = {}
        }

        obj = obj[p];
    }

    return obj;
}

function getWindow() {
    if (typeof window !== "undefined") {
        return window;
    }
    // hack for node
    if (typeof self !== "undefined") {
        return self;
    }

    return globalThis;
}

function getChrome() {
    return getWindow().chrome || {};
}

function getDocument() {
    return getWindow().document;
}

function getSearchParamValue(key) {
    try {
        return require("./utils").getSearchParam(getWindow().location).get(key);
    } catch (e) {
        require("./logger2")(module.id).error(e);
        return null;
    }
}

let VER = null;
/**
 * @return {string}
 */
function getExtensionVersion() {
    VER = VER || getChrome().runtime.getManifest().version;
    return VER;
}

function isChromeExtension() {
    return getChrome() != null && getChrome().runtime != null;
}

function getChromeVersion() {
    let navigator = getWindow().navigator || {};
    let m = /Chrome\/([0-9.]+)/.exec(navigator.userAgent);
    return String(m && m[1]);
}

function getClockFunction() {
    const w = getWindow()
    if (typeof w?.performance?.now !== "undefined") {
        return w.performance.now.bind(w.performance);
    }

    return Date.now;
}

/**
 * Returns the nested property from window/globalThis. If the intermediate property is missing, `{}` is created and attached.
 * 
 * Often used in content script for caching purpose.
 * 
 * For example, to get `window._mid_.messaging`, use `getGlobalObjectProperty("_mid", "messaging");
 * 
 * @param  {...any} path 
 */
function getGlobalObjectProperty(... path) {
    return getOrCreateProperties(getWindow(), path);
}

/**
 * Helper function to return `window._mid_._cache_.module.<moduleId>` as cache object
 * @param {*} moduleId 
 * @returns 
 */
function getGlobalObjectCache(moduleId) {
    return getGlobalObjectProperty("_mid_", "_cache_", "module", moduleId);
}

module.exports = {
    getOrCreateProperties,
    getWindow,
    getChrome,
    getDocument,
    getSearchParamValue,
    getExtensionVersion,
    isChromeExtension,
    getChromeVersion,
    getClockFunction,
    getGlobalObjectProperty,
    getGlobalObjectCache
}
