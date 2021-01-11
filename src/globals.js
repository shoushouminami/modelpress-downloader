
const utils = require("./utils");
const logger = require("./logger");

const getWindow = function () {
    if (typeof window === "undefined") {
        // hack for node
        return global;
    }

    return window;
}

const getChrome = function () {
    return chrome;
}

const getDocument = function () {
    return getWindow().document;
}

const getSearchParamValue = function (key) {
    try {
        return utils.getSearchParam(getWindow().location).get(key);
    } catch (e) {
        logger.error(e);
        return null;
    }
};

exports.getWindow = getWindow;
exports.getChrome = getChrome;
exports.getDocument = getDocument;
exports.getSearchParamValue = getSearchParamValue;

