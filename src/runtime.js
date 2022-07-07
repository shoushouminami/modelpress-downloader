const _isServiceWorker = typeof window === "undefined";
const _isRuntime = _isServiceWorker || (window.chrome && window.chrome.tabs != null);
const _isPage = !_isRuntime;
const _isCS = _isPage && window.chrome && window.chrome.runtime && window.chrome.runtime.getManifest != null;

exports.isServiceWorker = () => _isServiceWorker;
exports.isRuntime = () => _isRuntime;
exports.isPage = () => _isPage;
exports.isCS = () => _isCS;
