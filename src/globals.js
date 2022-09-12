function getWindow() {
    if (typeof window !== "undefined") {
        return window;
    }
    // hack for node
    if (typeof self !== "undefined") {
        return self;
    }
    return global;
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
        require("./logger").error(e);
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

exports.getWindow = getWindow;
exports.getChrome = getChrome;
exports.getDocument = getDocument;
exports.getSearchParamValue = getSearchParamValue;
exports.getExtensionVersion = getExtensionVersion;
exports.isChromeExtension = isChromeExtension;
exports.getChromeVersion = getChromeVersion;
