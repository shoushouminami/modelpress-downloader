/**
 * 
+------------------------+
|       runtime          |
|   +----------------+   |
|   | service worker |   |
|   +----------------+   |
|                        |
+------------------------+
+------------------------+
|         page           |
|   +----------------+   |
|   | content script |   |
|   +----------------+   |
|                        |
+------------------------+
 */


const _isServiceWorker = typeof window === "undefined";
const _isRuntime = _isServiceWorker || (window.chrome && window.chrome.tabs != null);
const _isPage = !_isRuntime;
const _isCS = _isPage && window.chrome && window.chrome.runtime && window.chrome.runtime.getManifest != null;


/**
 * @returns True if the current runtime is service worker (V3)
 */
exports.isServiceWorker = () => _isServiceWorker;
/**
 * @returns True if the current runtime is Chrome Extension runtime (popup or service worker in V3, or background in V2).
 */
exports.isRuntime = () => _isRuntime;
/**
 * @returns True if the current runtime is website page. Note that content script is also website page.
 */
exports.isPage = () => _isPage;
/**
 * @returns True if current runtime is content script.
 */
exports.isCS = () => _isCS;

/**
 * Added 2025-12-16:
 * newer APIs for better distinction 
 */
// From here on, we have window/document
const hasChromeRuntime = typeof chrome !== "undefined" && chrome?.runtime?.id != undefined;
const hasChromeTabs = typeof chrome !== "undefined" && typeof chrome?.tabs !== "undefined";
const isExtensionOrigin = require("./globals").getWindow()?.location?.protocol === "chrome-extension:";
const _isWebPage = !hasChromeRuntime; // is plain web page
const _isOffscreen = hasChromeRuntime && isExtensionOrigin && !hasChromeTabs;
const _isExtPage = hasChromeRuntime && isExtensionOrigin && !_isOffscreen && !_isServiceWorker; // popup.html or other ext pages
const _isContentScript = hasChromeRuntime && !isExtensionOrigin;

exports.isWebPage = () => _isWebPage;
exports.isOffscreen = () => _isOffscreen;
exports.isExtPage = () => _isExtPage
exports.isContentScript = () => _isContentScript
exports.getExtensionID = () => typeof chrome !== "undefined" ? chrome?.runtime?.id : undefined;
//console.log("_isExtPage=", _isExtPage, "_isWebPage=", _isWebPage, "_isOffscreen=", _isOffscreen, "_isContentScript=", _isContentScript, "_isServiceWorker=", _isServiceWorker)
