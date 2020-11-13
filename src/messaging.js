
const isRuntime = window.chrome && window.chrome.extension != null;
const isPage = !isRuntime;
const isCS = isPage && window.chrome.runtime && window.chrome.runtime.getManifest != null;
const sender = (isRuntime ? "runtime" : (isCS ? "content_script" : "page") ) + Math.round(Math.random() * 1000000000); // random sender id
console.debug("Sender", sender);

/**
 * Page sends to content script, or content script sends to page.
 */
export function sendToPage(key, msg) {
    window.postMessage({
        what: key,
        sender: sender,
        msg: msg
    }, window.origin);
}

/**
 * Content script sends messages to extension runtime (popup or background).
 */
export function sendToRuntime(key, msg, onResponse) {
    chrome.runtime.sendMessage({
        what: key,
        sender: sender,
        msg: msg
    }, onResponse);
}

/**
 * Content script relays the message from page to extension runtime (popup or background).
 */
export function relayMsgToRuntime(key, transformerFunc) {
    listenOnPage(key, function (msg){
        if (transformerFunc) {
            let newMsg = transformerFunc(msg);
            if (newMsg != null) {
                msg = newMsg;
            }
        }
        sendToRuntime(key, msg); // won't send response to page
    });
}

export function relayMsgToPage(tabId, key, transformFunc) {
    listenOnRuntime(key, function (msg, sendResponse) {
        window.chrome.tabs.sendMessage(tabId, {what: key, msg: msg}, sendResponse);
        return true; // always enable async response
    });
}

/**
 * Listens for a message from page, or content script (to page)
 */
export function listenOnPage(key, callback) {
    window.addEventListener("message", function(event) {
        if (event.source !== window || event.origin !== window.origin) {
            return;
        }

        if (event.data.what && (event.data.what === key)) {
            callback(event.data.msg);
        }
    }, false);
}

export function listenOnRuntime(key, callback) {
    chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
        if (data && data.what && data.what === key) {
            // if callback returns true, async replying mode is enabled and calling sendResponse can reply
            callback(data.msg, sendResponse);
        }
    });
}

/**
 * unified send method.
 */
export function send(key, msg, onResponse) {
    if (isPage) {
        sendToPage(key, msg);
        if (isCS) {
            sendToRuntime(key, msg, onResponse);
        }
    } else {
        sendToRuntime(key, msg, onResponse);
    }
}

/**
 * unified listen method.
 */
export function listen(key, callback) {
    if (isPage) {
        listenOnPage(key, callback);
        if (isCS) {
            listenOnRuntime(key, callback);
        }
    } else {
        listenOnRuntime(key, callback);
    }
}

