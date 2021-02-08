const utils = require("./utils");

function getWindow() {
    if (typeof window === "undefined") {
        // hack for node
        return global;
    }

    return window;
}

function getChrome() {
    return chrome;
}

function getDocument() {
    return getWindow().document;
}

function getSearchParamValue(key) {
    try {
        return utils.getSearchParam(getWindow().location).get(key);
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

exports.getWindow = getWindow;
exports.getChrome = getChrome;
exports.getDocument = getDocument;
exports.getSearchParamValue = getSearchParamValue;
exports.getExtensionVersion = getExtensionVersion;
