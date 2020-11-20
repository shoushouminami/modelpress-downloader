
const messaging = require("./messaging");
const inject = require("./inject");

exports.navigateToConfirmPage = function (window) {
    window.location = "scan-confirm.html";
}

/**
 * Runs in content script. Injects the scan script
 */
exports.scanContentScript = function () {
    const site = inject.getSiteModule();
    if (site != null && site.scan) {
        inject.setupMessageRelay();
        let o = site.scan();
        o.scan = true;
        o.scanState = "started";
        return o;
    }
}

const ALWAYS_SCAN = "alwaysScan";

exports.hasStoredAlwaysScan = () => {
    return localStorage.getItem(ALWAYS_SCAN) === "true";
}

exports.storeAlwaysScan = () => {
    window.localStorage.setItem(ALWAYS_SCAN, "true");
}

/**
 * Called in runtime to inject scan-cs.js as content script.
 */
exports.injectScanScript = function (chrome, tabId, injectCallback, stopScanCallback) {
    chrome.tabs.executeScript(
        tabId,
        // calls scanContentScript() above in content script
        {file: "scan-cs.js", matchAboutBlank: true},
        (results) => injectCallback(results, tabId));

    if (stopScanCallback instanceof Function) {
        messaging.listen("stopScan", function () {
            console.debug("Receiving stopScan");
            stopScanCallback();
        });
    }
}

exports.hasScanInQuery = function (window) {
    let doScan = false;
    if (window.location.search) {
        let params = (new URL(window.location)).searchParams;
        if (params.get("scan") === "true") {
            doScan = true;
        }

        if (params.get("always") === "true") {
            exports.storeAlwaysScan();
        }
    }
    return doScan;
}
