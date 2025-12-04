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
