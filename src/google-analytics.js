const {getWindow} = require("./globals");
const logger = require("./logger2")(module.id);

const GA_PROPERTY_ID = __GA_PROPERTY__; // defined in webpack.config.js
const NOT_CALLED = 0;
const BOOTSTRAPPED = 1;
const SERVICE_WORKER = 2;
const UNIQUE_CID = "cid-" + Math.round(Math.random() * 1000000000); // unique id. only used in service worker mode;

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

function trackPageview() {
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
            return apiTrackEvent(category, action, label, value);
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
function bootstrap() {
    let w = getWindow();
    let _gaq = w._gaq = w._gaq || [];
    _gaq.push(["_setAccount", GA_PROPERTY_ID]);
    _gaq.push(['_gat._forceSSL']);
    if (w.document != null) {
        let ga = w.document.createElement("script");
        ga.type = "text/javascript";
        ga.async = true;
        ga.src = "/ga.js";
        let s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(ga, s);
        trackPageview();
        logger.debug("GA bootstrapped with DOM.")
        bootstrapped = BOOTSTRAPPED;
    } else {
        logger.debug("Not able to bootstrap GA. Possibly in service worker.")
        bootstrapped = SERVICE_WORKER;
    }
}

function apiTrackEvent(category, action, label, value){
    const data = {
        // API Version.
        v: '1',
        // Tracking ID / Property ID.
        tid: GA_PROPERTY_ID,
        cid: UNIQUE_CID,
        // Event hit type.
        t: 'event',
        // Event category.
        ec: category,
        // Event action.
        ea: action,
        // Event label.
        el: label,
        // Event value.
        ev: value,
    };

    logger.debug("apiTrackEvent event=send category=", category, "data=", data);
    fetch("https://www.google-analytics.com/collect", {
        method: "POST",
        body: Object.keys(data).map(k => k + "=" + data[k]).join("&")
    }).then(function (resp) {
        logger.debug("apiTrackEvent event=success category=", category, "resp=", resp)
    }, function (error) {
        logger.debug("apiTrackEvent event=failure category=", category, "resp=", error);
    });
}


exports.trackPageview = trackPageview;
exports.trackButtonClick = trackButtonClick;
exports.trackEvent = trackEvent;
exports.trackDownload = trackDownload;
exports.trackSupport = trackSupport;
exports.bootstrap = bootstrap;
