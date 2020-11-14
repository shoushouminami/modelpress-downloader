
const isRuntime = window.chrome && window.chrome.extension != null;
const isPage = !isRuntime;
const isCS = isPage && window.chrome.runtime && window.chrome.runtime.getManifest != null;
const sender = (isRuntime ? "runtime" : (isCS ? "content_script" : "page") ) + Math.round(Math.random() * 1000000000); // random sender id
// console.debug("Sender", sender);

/**
 * Page sends to content script, or content script sends to page.
 */
exports.sendToPage = function (key, msg) {
    window.postMessage({
        what: key,
        sender: sender,
        msg: msg
    }, window.origin);
}

/**
 * Content script sends messages to extension runtime (popup or background).
 */
exports.sendToRuntime = function (key, msg, onResponse) {
    chrome.runtime.sendMessage({
        what: key,
        sender: sender,
        msg: msg
    }, onResponse);
}

/**
 * Content script relays the message from page to extension runtime (popup or background).
 */
exports.relayMsgToRuntime = function (key, transformerFunc) {
    this.listenOnPage(key, function (msg){
        if (transformerFunc instanceof Function) {
            let newMsg = transformerFunc(msg);
            if (newMsg != null) {
                msg = newMsg;
            }
        }
        exports.sendToRuntime(key, msg); // won't send response to page
    });
}

exports.relayAllMsgsToRuntime = function (...keys) {
    keys.forEach(key => {
        this.relayMsgToRuntime(key);
    })
}

exports.relayMsgToPage = function (tabId, key, transformFunc) {
    this.listenOnRuntime(key, function (msg, sendResponse) {
        console.debug("Relaying", key);
        window.chrome.tabs.sendMessage(tabId, {what: key, msg: msg}, sendResponse);
        return true; // always enable async response
    });
}

/**
 * Listens for a message from page, or content script (to page)
 */
exports.listenOnPage = function (key, callback) {
    window.addEventListener("message", function(event) {
        if (event.source !== window || event.origin !== window.origin) {
            return;
        }

        if (event.data.what && (event.data.what === key)) {
            callback(event.data.msg);
        }
    }, false);
}

exports.listenOnRuntime = function (key, callback) {
    chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
        if (data && data.what && data.what === key) {
            console.debug("Receiving", key);
            // if callback returns true, async replying mode is enabled and calling sendResponse can reply
            callback(data.msg, sendResponse);
        }
    });
}

/**
 * unified send method.
 */
exports.send = function (key, msg, onResponse) {
    console.debug("Sending", key);
    if (isPage) {
        this.sendToPage(key, msg);
        if (isCS) {
            this.sendToRuntime(key, msg, onResponse);
        }
    } else {
        this.sendToRuntime(key, msg, onResponse);
    }
}

/**
 * unified listen method.
 */
exports.listen = function (key, callback) {
    if (isPage) {
        this.listenOnPage(key, callback);
        if (isCS) {
            this.listenOnRuntime(key, callback);
        }
    } else {
        this.listenOnRuntime(key, callback);
    }
}

