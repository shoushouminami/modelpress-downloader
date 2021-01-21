const window = require("./globals").getWindow();
const isRuntime = window.chrome && window.chrome.extension != null;
const isPage = !isRuntime;
const isCS = isPage && window.chrome && window.chrome.runtime && window.chrome.runtime.getManifest != null;
const thisSender = (isRuntime ? "runtime" : (isCS ? "content_script" : "page") ) + Math.round(Math.random() * 1000000000); // random sender id
const inDebug = true; // require("./is-dev");
const logger = require("./logger");

let msgCount = 0; // id of message == (sender + msgCount)

function path(obj, ...path) {
    for (const p of path) {
        if (!obj[p]) {
            obj[p] = {}
        }

        obj = obj[p];
    }

    return obj;
}

// Make sure every key is only listened once
// bootstrap listenerMap by checking the property on window object
const listenerMap = path(window, "_mid_", "messaging").listenerMap || {};
path(window, "_mid_", "messaging").listenerMap = listenerMap;

function debug(funcName, key, msg, ...anyMsg) {
    if (inDebug) {
        logger.debug("[%s] %s key=%s msg=%o otherArgs=%o", thisSender, funcName, key, msg, anyMsg);
    }
}

function nextMsgId(){
    return thisSender + "-" + (msgCount++);
}

/**
 * Returns true if the key is not listened before. Upon true is returned, the key is then assumed listened on.
 * Subsequent calls will return false.
 */
function tryAndListenOnKey(key) {
    if (listenerMap[key] === undefined) {
        return listenerMap[key] = true;
    }

    return false;
}

/**
 * Page sends to content script, or content script sends to page.
 * @param key
 * @param msg
 * @param onResponse
 */
function sendToPage(key, msg, onResponse) {
    const replyKey = nextMsgId(); // get unique key for reply
    if (onResponse instanceof Function) {
        listenOnPage(replyKey, onResponse); // setup async reply channel
    }
    debug("sendToPage", key, msg);
    window.postMessage({
        what: key,
        sender: thisSender,
        msg: msg,
        replyKey: replyKey
    }, window.origin);
}

/**
 * Content script sends messages to extension runtime (popup or background),
 * or extension runtime sends to extension runtime.
 */
function sendToRuntime(key, msg, onResponse) {
    debug("sendToRuntime", key, msg);
    chrome.runtime.sendMessage({
        what: key,
        sender: thisSender,
        msg: msg
    }, onResponse);
}

/**
 * Extension runtime (popup or background) sends messages to content script.
 */
function sendToCS(tabId, key, msg, onResponse) {
    debug("sendToCS", key, msg);
    chrome.tabs.sendMessage(tabId, {
        what: key,
        sender: thisSender,
        msg: msg
    }, onResponse);
}

/**
 * Content script relays the message from page to extension runtime (popup or background).
 */
function relayMsgToRuntime(key, transformerFunc) {
    listenOnPage(key, function (msg){
        if (transformerFunc instanceof Function) {
            let newMsg = transformerFunc(msg);
            if (newMsg != null) {
                msg = newMsg;
            }
        }
        debug("relayMsgToRuntime", key, msg);
        sendToRuntime(key, msg); // won't send response to page
    });
}

/**
 * Content script relays the message from extension runtime (popup or background) to page.
 */
function relayMsgToPage(key, transformerFunc) {
    listenOnRuntime(key, function (msg, sendResponse) {
        if (transformerFunc instanceof Function) {
            let newMsg = transformerFunc(msg);
            if (newMsg != null) {
                msg = newMsg;
            }
        }
        debug("relayMsgToPage", key, msg);
        sendToPage(key, msg, sendResponse);
        return true; // always enable async response
    });
}

function relayAllMsgsToRuntime(...keys) {
    keys.forEach(key => {
        relayMsgToRuntime(key);
    })
}

/**
 * Listens for a message from page, or content script (sent vis window.send)
 * @param {string} key A unique key for selecting messages.
 * @param {function(Object, function)} callback
 */
function listenOnPage(key, callback) {
    if (tryAndListenOnKey(key)) {
        debug("listeningOnPage", key);
        window.addEventListener("message", function(event) {
            if (event.source !== window || event.origin !== window.origin) {
                return;
            }

            if (event.data.what && (event.data.what === key) && event.data.sender !== thisSender) {
                debug("Received on page", key, event.data.msg, event.data);
                callback(event.data.msg, function (respMsg) {
                    sendToPage(event.data.replyKey, respMsg);
                });
            }
        }, false);

        return true;
    } else {
        return false;
    }
}

/**
 * Listen messages on runtime (sent via chrome.runtime.sendMessage() or chrome.tabs.sendMessage()).
 * Each key can only be registered once for listening (for each window).
 * Subsequent calls for the same key are no-op.
 * @param key {string} A unique key for selecting messages.
 * @param callback {function(Object, string, function)} callback being called when a message is received on this key.
 *                                                      Return true from the callback to enable async reply.
 * @return {boolean} Returns true if it was successful to listen on the key, otherwise false.
 */
function listenOnRuntime(key, callback) {
    if (tryAndListenOnKey(key)) {
        debug("listeningOnRuntime", key);
        chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
            if (data && data.what && data.what === key && data.sender !== thisSender) {
                debug("Received on runtime", data.what, data.msg, sendResponse);
                // if callback returns true, async replying mode is enabled and calling sendResponse can reply
                return callback(data.msg, sendResponse);
            }
        });
        return true;
    } else {
        return false;
    }
}

/**
 * unified send method.
 */
function send(key, msg, onResponse) {
    if (isPage) {
        sendToPage(key, msg, onResponse);
        if (isCS) {
            sendToRuntime(key, msg, onResponse);
        }
    } else {
        sendToRuntime(key, msg, onResponse);
    }
}

/**
 * Unified listen method. Each key can only be listened on once (for each window).
 * Subsequent calls for the same key are no-op.
 * @param key {string} Message key
 * @param callback {function(msg: any, sendResponse: function)}
 * @return {boolean} Returns true if it was successful to listen on the key, otherwise false.
 */
function listen(key, callback) {
    let ret;
    if (isPage) {
        ret = listenOnPage(key, callback);
        if (isCS) {
            ret = listenOnRuntime(key, callback);
        }

    } else {
        ret = listenOnRuntime(key, callback);
    }

    return ret;
}

exports.listenOnRuntime = listenOnRuntime;
exports.listen = listen;
exports.send = send;
exports.listenOnPage = listenOnPage;
exports.relayAllMsgsToRuntime = relayAllMsgsToRuntime;
exports.relayMsgToPage = relayMsgToPage;
exports.relayMsgToRuntime = relayMsgToRuntime;
exports.sendToCS = sendToCS;
exports.sendToRuntime = sendToRuntime;
exports.sendToPage = sendToPage;
