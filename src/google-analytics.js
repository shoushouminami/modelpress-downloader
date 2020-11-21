const {getWindow} = require("./globals");

const getGaq = function () {
    return getWindow()._gaq;
}

const setVar = function (slot, name, value) {
    getGaq().push(["_setCustomVar", slot, name, value]);
}

const trackPageview = function () {
    getGaq().push(["_trackPageview"]);
}

const trackButtonClick = function (buttonId) {
    trackEvent(buttonId, "clicked");
};

/**
 * @param category {string}
 * @param action {string}
 * @param label {string?}
 * @param value {number?}
 */
const trackEvent = function (category, action, label, value) {
    getGaq().push(["_trackEvent", category, action, label, value]);
};

const trackDownload = function (site, count) {
    setVar(1, "site", site);
    setVar(2, "version", chrome.runtime.getManifest().version);
    trackEvent("download", "clicked", site, count);
};

const trackSupport = function (site, supported) {
    setVar(1, "site", site);
    setVar(2, "version", chrome.runtime.getManifest().version);
    trackEvent("website", supported ? "supported" : "not_supported", site);
};

// bootstrap ga script
const bootstrap = function () {
    let _gaq = getWindow()._gaq = getWindow()._gaq || [];
    _gaq.push(["_setAccount", __GA_PROPERTY__]); // defined in webpack.config.js
    _gaq.push(['_gat._forceSSL']);

    let ga = document.createElement("script");
    ga.type = "text/javascript";
    ga.async = true;
    ga.src = "https://ssl.google-analytics.com/ga.js";
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ga, s);

    trackPageview();
};

exports.trackPageview = trackPageview;
exports.trackButtonClick = trackButtonClick;
exports.trackEvent = trackEvent;
exports.trackDownload = trackDownload;
exports.trackSupport = trackSupport;
exports.bootstrap = bootstrap;
