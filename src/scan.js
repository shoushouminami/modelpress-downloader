export function navigateToConfirmPage(window) {
    window.location = "scan-confirm.html";
}

/**
 * Runs in content script. Injects the scan script
 */
export function scanInject() {
    try {
        const site = require("./inject/" + require("./inject/hostMapping").check(window.location));
        if (site.scan) {
            site.scan();
        }
    } catch (e) {
        // not found
        if (require("./is-dev")) {
            console.error(e);
        }
        o.supported = false;
    }
}

const ALWAYS_SCAN = "alwaysScan";

export function hasStoredAlwaysScan() {
    return localStorage.getItem(ALWAYS_SCAN) === "true";
}

export function storeAlwaysScan() {
    window.localStorage.setItem(ALWAYS_SCAN, "true");
}

export function injectScanScript(chrome, tabId, callback) {
    chrome.tabs.executeScript(
        tabId,
        // calls scanInject() above in content script
        {file: "scan-inject.js", matchAboutBlank: true},
        function () {
            // setTimeout(function () {
            //     window.location = "popup.html";
            // }, 1000);
        });
}

export function confirmScan(window) {
    let doScan = false;
    if (window.location.search) {
        let params = (new URL(window.location)).searchParams;
        if (params.get("scan") === "true") {
            doScan = true;
        }

        if (params.get("always") === "true") {
            storeAlwaysScan();
        }
    }
    return doScan;
}
