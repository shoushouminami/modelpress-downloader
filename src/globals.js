function getWindow() {
    if (typeof window === "undefined") {
        // hack for node
        return global;
    }

    return window;
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

exports.getWindow = getWindow;
exports.getChrome = getChrome;
exports.getDocument = getDocument;
exports.getSearchParamValue = getSearchParamValue;
exports.getExtensionVersion = getExtensionVersion;
exports.isChromeExtension = isChromeExtension;
