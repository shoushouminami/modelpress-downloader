const {getWindow} = require("./globals");
const runtime = require("./runtime");
const logger = require("./logger2")(module.id);

const GA_PROPERTY_ID = __GA_PROPERTY__; // defined in webpack.config.js
const NOT_CALLED = 0;
const BOOTSTRAPPED = 1;
const SERVICE_WORKER = 2;
const CID_HOLDER = ['1413ea7b-1ff1-4641-bfeb-fc896a0caef4'];

// 0 - not boostrapped; 1 - successful ; 2 - failed;
let bootstrapped = NOT_CALLED;
function isBootstrapped() {
    return bootstrapped;
}

function getGaq() {
    return getWindow()._gaq;
}

function setVar(slot, name, value) {
    return getGaq().push(["_setCustomVar", slot, name, value]);
}

function trackPageview(host, path) {
    switch (isBootstrapped()) {
        case BOOTSTRAPPED:
            return _trackPageview.apply(null, arguments);
        case SERVICE_WORKER:
            return _apiTrackPageview(host, path);
    }
}

function _trackPageview() {
    getGaq().push(["_trackPageview"]);
}

function trackButtonClick(buttonId) {
    trackEvent(buttonId, "clicked");
}

function _trackEvent(category, action, label, value) {
    getGaq().push(["_trackEvent", category, action, label, value]);
}

/**
 * @param category {string}
 * @param action {string}
 * @param label {string?}
 * @param value {number?}
 */
function trackEvent(category, action, label, value) {
    switch (isBootstrapped()) {
        case BOOTSTRAPPED:
            return _trackEvent.apply(null, arguments);
        case SERVICE_WORKER:
            return _apiTrackEvent(category, action, label, value);
    }
}

function trackDownload(site, count) {
    setVar(1, "site", site);
    setVar(2, "version", chrome.runtime.getManifest().version);
    trackEvent("download", "clicked", site, count);
}

function trackSupport(site, supported) {
    setVar(1, "site", site);
    setVar(2, "version", chrome.runtime.getManifest().version);
    trackEvent("website", supported ? "supported" : "not_supported", site);
}

// bootstrap GA script
function bootstrap(page) {
    let w = getWindow();
    let _gaq = w._gaq = w._gaq || [];
    _gaq.push(["_setAccount", GA_PROPERTY_ID]);
    _gaq.push(['_gat._forceSSL']);
    if (!runtime.isServiceWorker()) {
        let ga = w.document.createElement("script");
        ga.type = "text/javascript";
        ga.async = true;
        ga.src = "/ga.js";
        let s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(ga, s);
        logger.debug("GA bootstrapped with DOM.")
        bootstrapped = BOOTSTRAPPED;
    } else {
        logger.debug("In service worker. Not able to bootstrap GA.")
        bootstrapped = SERVICE_WORKER;
    }

    trackPageview("", page);
}

/**
 * Track the event by sending a HTTP POST request to GA API
 * @param category required
 * @param action required
 * @param label optional
 * @param value optional
 */
function _apiTrackEvent(category, action, label, value){
    return apiTrack("event", category, action, label, value)
}

function _apiTrackPageview(docHost, docPath){
    docPath = String(docPath); // just in case
    if (docPath.startsWith("./src")) {
        docPath = docPath.substring(5);
    }
    return apiTrack("pageview", null, null, null, null, docHost, docPath);
}

/**
 * Check GA doc https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#t
 */
function apiTrack(hitType, category, action, label, value, docHost, docPath){
    const data = {
        // API Version.
        v: '1',
        // Tracking ID / Property ID.
        tid: GA_PROPERTY_ID,
        cid: getCid(),
        // hit type.
        t: hitType,
        // Event category.
        ec: category,
        // Event action.
        ea: action,
        ul: getWindow().navigator.language
    };

    // label is optional
    if (label != null) {
        data.el = label;
        // value is optional
        if (value != null) {
            data.ev = value;
        }
    }

    if (docHost != null) {
        data.dh = docHost;
    }

    if (docPath != null) {
        data.dp = docPath;
    }

    logger.debug("apiTrack hit=", hitType, "event=send category=", category, "data=", data);
    fetch("https://www.google-analytics.com/collect", {
        method: "POST",
        body: Object.keys(data).map(k => k + "=" + data[k]).join("&")
    }).then(function (resp) {
        logger.debug("apiTrack hit=", hitType, "event=success status=", resp.status, "category=", category, "resp=", resp)
    }, function (error) {
        logger.debug("apiTrack hit=", hitType, "event=failure category=", category, "resp=", error);
    });
}

function setCid(cid) {
    CID_HOLDER[0] = cid;
}

function getCid() {
    return CID_HOLDER[0];
}

exports.trackPageview = trackPageview;
exports.trackButtonClick = trackButtonClick;
exports.trackEvent = trackEvent;
exports.trackDownload = trackDownload;
exports.trackSupport = trackSupport;
exports.bootstrap = bootstrap;
exports.setCid = setCid;
exports.getCid = getCid;
