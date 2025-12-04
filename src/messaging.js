const window = require("./globals").getWindow();
const runtime = require("./runtime");
const isServiceWorker = runtime.isServiceWorker();
const isRuntime = runtime.isRuntime();
const isPage = runtime.isPage();
const isCS = runtime.isCS();
const thisSender = (isServiceWorker ? "sw" : (isRuntime ? "popup" : (isCS ? "content_script" : "page"))) + Math.round(Math.random() * 1000000000); // random sender id
const logger = require("./logger2")(module.id + " " + thisSender);

logger.debug("isServiceWorker", isServiceWorker, "isRuntime", isRuntime, "isPage", isPage, "isCS", isCS);

let msgCount = 0; // id of message == (sender + msgCount)

/**
 * Returns the nested property from obj. For example
 *  {@linkcode getOrCreateProperties}(obj, "a", "b") returns obj.a.b
 *
 * If any of the property along the way does not exist, it will be created as an empty object ({}).
 *
 * This allows for not only reading but also quick assignment on a nested property:
 * <pre>
 *     getOrCreateProperties(obj, "a", "b").newProperty = "bla";
 * </pre>
 *
 * @param obj {object}
 * @param path {string}
 * @returns {*}
 */
function getOrCreateProperties(obj, ...path) {
    for (const p of path) {
        if (obj[p] == null) {
            obj[p] = {}
        }

        obj = obj[p];
    }

    return obj;
}

// Make sure every key is only listened once
// bootstrap listenerMap by checking the property on window object
const _listenerMap = getOrCreateProperties(window, "_mid_", "messaging").listenerMap || {};
getOrCreateProperties(window, "_mid_", "messaging").listenerMap = _listenerMap;

function nextMsgId(){
    return thisSender + "-" + (msgCount++);
}

/**
 * Returns true if the key is not listened before. Upon true is returned, the key is then assumed listened on.
 * Subsequent calls will return false.
 */
function tryAndListenOnKey(key) {
    if (_listenerMap[key] === undefined) {
        return _listenerMap[key] = true;
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
    logger.debug("sendToPage", key, msg);
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
    logger.debug("sendToRuntime", key, msg);
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
    logger.debug("sendToCS", key, msg);
    chrome.tabs.sendMessage(tabId, {
        what: key,
        sender: thisSender,
        msg: msg
    }, onResponse);
}

/**
 * Content script relays the message from page to extension runtime (popup or background).
 */
function relayMsgFromPageToRuntime(key, transformerFunc) {
    listenOnPage(key, function (msg){
        if (transformerFunc instanceof Function) {
            let newMsg = transformerFunc(msg);
            if (newMsg != null) {
                msg = newMsg;
            }
        }
        logger.debug("relayMsgToRuntime", key, msg);
        sendToRuntime(key, msg); // won't send response to page
    });
}

/**
 * Content script relays the message from extension runtime (popup or background) to page.
 */
function relayMsgFromRuntimeToPage(key, transformerFunc) {
    listenOnRuntime(key, function (msg, sendResponse) {
        if (transformerFunc instanceof Function) {
            let newMsg = transformerFunc(msg);
            if (newMsg != null) {
                msg = newMsg;
            }
        }
        logger.debug("relayMsgToPage", key, msg);
        sendToPage(key, msg, sendResponse);
        return true; // always enable async response
    });
}

function relayAllMsgsToRuntime(...keys) {
    keys.forEach(key => {
        relayMsgFromPageToRuntime(key);
    })
}

/**
 * Listens for a message from page, or content script (sent vis window.send)
 * @param {string} key A unique key for selecting messages.
 * @param {function(Object, function)} callback
 */
function listenOnPage(key, callback) {
    if (tryAndListenOnKey(key)) {
        logger.debug("listeningOnPage", key);
        let listener = function(event) {
            if (event.source !== window || event.origin !== window.origin) {
                return;
            }

            if (event.data.what && (event.data.what === key) && event.data.sender !== thisSender) {
                logger.debug("Received on page", key, event.data.msg, event.data);
                callback(event.data.msg, function (respMsg) {
                    sendToPage(event.data.replyKey, respMsg);
                });
            }
        };
        window.addEventListener("message", listener, false);
        _listenerMap[key] = listener;
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
 * @param callback {function(Object, function)} callback being called when a message is received on this key.
 *                                                      Return true from the callback to enable async reply.
 * @return {boolean} Returns true if it was successful to listen on the key, otherwise false.
 */
function listenOnRuntime(key, callback) {
    if (tryAndListenOnKey(key)) {
        logger.debug("listeningOnRuntime", key);
        const listener = function(data, sender, sendResponse) {
            if (data && data.what && data.what === key && data.sender !== thisSender) {
                logger.debug("Received on runtime", data.what, data.msg, "chrome sender=", sender, "sender=", data.sender);
                // if callback returns true, async replying mode is enabled and calling sendResponse can reply
                return callback(data.msg, sendResponse);
            }
            return false;
        }
        chrome.runtime.onMessage.addListener(listener);
        _listenerMap[key] = listener;
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
 * Unified listen method. Each key can only register one callback (for each window).
 * If called multiple times with the same key, the last call wins and previous callbacks are removed.
 * @param key {string} Message key
 * @param callback {function(msg: any, sendResponse: function)}
 * @return {boolean} Returns true if it was successful to listen on the key, otherwise false.
 */
function listen(key, callback) {
    tearDownListenerByKey(key);
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

/**
 * Removes the previous registered listener on runtime of the given key. Since a key is unique across runtime, content script and page,
 * there is only one method to unregister a key.
 * @param key {string} Message key
 */
function tearDownListenerByKey(key) {
    if (typeof _listenerMap[key] === "function") {
        let listener = _listenerMap[key];
        if (isPage) {
            window.removeEventListener("message", listener);
        }
        if (!isPage || (isPage && isCS)) {
            chrome.runtime.onMessage.removeListener(listener);
        }
    }

    delete _listenerMap[key];
}

function tearDownAllListeners() {
    for (const k of Object.keys(_listenerMap)) {
        tearDownListenerByKey(k);
    }
}

module.exports = {
    listenOnRuntime,
    listen,
    send,
    listenOnPage,
    relayAllMsgsToRuntime,
    relayMsgFromRuntimeToPage,
    relayMsgFromPageToRuntime,
    sendToCS,
    sendToRuntime,
    sendToPage,
    tearDownListenerByKey,
    tearDownAllListeners
}
