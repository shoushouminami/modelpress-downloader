const window = require("./globals").getWindow();
const isRuntime = window.chrome && window.chrome.extension != null;
const isPage = !isRuntime;
const isCS = isPage && window.chrome && window.chrome.runtime && window.chrome.runtime.getManifest != null;
const thisSender = (isRuntime ? "runtime" : (isCS ? "content_script" : "page") ) + Math.round(Math.random() * 1000000000); // random sender id
let msgCount = 0; // id of message == (sender + msgCount)
const inDebug = false; // require("./is-dev");

const path = function (obj, ...path) {
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


const debug = function (funcName, key, msg, ...anyMsg) {
    if (inDebug) {
        console.debug("[%s] %s key=%s msg=%o otherArgs=%o", thisSender, funcName, key, msg, anyMsg);
    }
}

const nextMsgId = function(){
    return thisSender + "-" + (msgCount++);
}

/**
 * Returns true if the key is not listened before. Upon true is returned, the key is then assumed listened on.
 * Subsequent calls will return false.
 */
const tryAndListenOnKey = function (key) {
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
exports.sendToPage = function (key, msg, onResponse) {
    const replyKey = nextMsgId(); // get unique key for reply
    if (onResponse instanceof Function) {
        exports.listenOnPage(replyKey, onResponse); // setup async reply channel
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
exports.sendToRuntime = function (key, msg, onResponse) {
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
exports.sendToCS = function (tabId, key, msg, onResponse) {
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
exports.relayMsgToRuntime = function (key, transformerFunc) {
    exports.listenOnPage(key, function (msg){
        if (transformerFunc instanceof Function) {
            let newMsg = transformerFunc(msg);
            if (newMsg != null) {
                msg = newMsg;
            }
        }
        debug("relayMsgToRuntime", key, msg);
        exports.sendToRuntime(key, msg); // won't send response to page
    });
}

/**
 * Content script relays the message from extension runtime (popup or background) to page.
 */
exports.relayMsgToPage = function (key, transformerFunc) {
    exports.listenOnRuntime(key, function (msg, sendResponse) {
        if (transformerFunc instanceof Function) {
            let newMsg = transformerFunc(msg);
            if (newMsg != null) {
                msg = newMsg;
            }
        }
        debug("relayMsgToPage", key, msg);
        exports.sendToPage(key, msg, sendResponse);
        return true; // always enable async response
    });
}

exports.relayAllMsgsToRuntime = function (...keys) {
    keys.forEach(key => {
        exports.relayMsgToRuntime(key);
    })
}

/**
 * Listens for a message from page, or content script (to page)
 */
exports.listenOnPage = function (key, callback) {
    if (tryAndListenOnKey(key)) {
        debug("listeningOnPage", key);
        window.addEventListener("message", function(event) {
            if (event.source !== window || event.origin !== window.origin) {
                return;
            }

            if (event.data.what && (event.data.what === key) && event.data.sender !== thisSender) {
                debug("Received on page", key, event.data.msg, event.data);
                callback(event.data.msg, function (respMsg) {
                    exports.sendToPage(event.data.replyKey, respMsg);
                });
            }
        }, false);

        return true;
    } else {
        return false;
    }
}

exports.listenOnRuntime = function (key, callback) {
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
exports.send = function (key, msg, onResponse) {
    if (isPage) {
        exports.sendToPage(key, msg, onResponse);
        if (isCS) {
            exports.sendToRuntime(key, msg, onResponse);
        }
    } else {
        exports.sendToRuntime(key, msg, onResponse);
    }
}

/**
 * unified listen method.
 * @param key {string} Message key
 * @param callback {function(msg: any, sendResponse: function)}
 */
exports.listen = function (key, callback) {
    if (isPage) {
        exports.listenOnPage(key, callback);
        if (isCS) {
            exports.listenOnRuntime(key, callback);
        }
    } else {
        exports.listenOnRuntime(key, callback);
    }
}

