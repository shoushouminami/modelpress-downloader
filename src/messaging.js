/** 
 * Provides unified APIs to send and listen for messages across web page, content script, and runtime (popup and service worker).
 * 
 * Use `listenOnPage(key, callback)` to listen for messages sent by web page (ie window.postMessage) with topic specified by key. 
 * 
 * Use `listenOnRuntime(key, callback)` to listen for message sent by runtime (via chrome.runtime.sendMessage() or chrome.tabs.sendMessage())
 * with topic specified by key.
 * 
 * Both require a topic key and a callback function. The callback function will be called with `callback(message, sendResponse)`
 * The sendResponse allows the listener to reply to the sender in sync or async.
 * 
 * Use `sendToPage(key, msg, onResponse)` to send a message to the topic key. Any page registered a listener with `listenOnPage` 
 * and the same topic key will receive this message. `onResponse(resp)` is called when a response is received.
 * 
 * Similarly, use `sendToRuntime(key, msg, onResponse)` to send a message to the topic for runtime.
 * 
 * There is one singleton listener registered for page and one for runtime. Message topic key is inspected and routed to the right callback.
 * 
 * Use listenOnPage/sendToPage to communicate between web page and content script.
 * 
 * Use listenOnRuntime/sendToRuntime to communicate among content script, popup (extension page), and service worker.
 * 
 * Helper function `relayMsgFromPageToRuntime` setup listener and sender (in content script) to forward from page to runtime,
 * so that a listener at runtime (such as service worker) can receive message sent by page. 
 * 
 * Vice versa, `relayMsgFromRuntimeToPage` is for the other direction.
 * 
*/

const { getGlobalObjectProperty, getWindow } = require("./globals");
const window = getWindow();
const runtime = require("./runtime");
const isServiceWorker = runtime.isServiceWorker();
const isRuntime = runtime.isRuntime();
const isPage = runtime.isPage();
const isCS = runtime.isCS();
const EXTENSION_ID = runtime.getExtensionID();
const thisSender = (isServiceWorker ? "sw" : (isRuntime ? "popup" : (isCS ? "content_script" : "page"))) + Math.round(Math.random() * 1000000000); // random sender id
const logger = require("./logger2")(module.id + " " + thisSender);

logger.debug("isServiceWorker", isServiceWorker, "isRuntime", isRuntime, "isPage", isPage, "isCS", isCS);

let msgCount = 0; // id of message == (sender + msgCount)

// bootstrap pageListenerMap and runtimeListenerMap by checking the path on window object
const namespace = getGlobalObjectProperty("_mid_", "messaging");
const pageListenerMap = namespace.pageListenerMap = namespace.pageListenerMap || {}; // key => callback
const runtimeListenerMap = namespace.runtimeListenerMap = namespace.runtimeListenerMap || {};  // key => callback


function nextMsgId(){
    return thisSender + "-" + (msgCount++);
}

/**
 * Page sends to content script, or content script sends to page.
 * @param key
 * @param msg
 * @param onResponse
 */
function sendToPage(key, msg, onResponse) {
    return sendToPageWindow(window, key, msg, onResponse);
}

function sendToPageWindow(targetWindow, key, msg, onResponse) {
    const postMessage = {
        what: key,
        sender: thisSender,
        msg: msg,
    };

    if (typeof onResponse === "function") {
        const replyKey = nextMsgId(); // get unique key for reply
        // setup async reply channel by creating a temporary replyKey and callback
        listenOnPage(replyKey, (respMsg) => {
            onResponse(respMsg);
            // teardown the temporary callback after finishing replying
            logger.debug("Teardown temporary callback for replyKey=", replyKey, "key=", key);
            delete pageListenerMap[replyKey];
        }); 
        postMessage["replyKey"] = replyKey;
    }

    logger.debug("sendToPageWindow key=", key, "msg=", msg, "postMessage=", postMessage);
    targetWindow.postMessage(postMessage, targetWindow.origin);
}

/**
 * Content script sends messages to extension runtime (popup or background),
 * or extension runtime sends to extension runtime.
 * 
 * Accepts a callback or if not provided, returns a Promise.
 */
function sendToRuntime(key, msg, onResponse) {
    logger.debug("sendToRuntime", key, msg);
    const handleWith = (resolve) => {
        chrome.runtime.sendMessage({
            what: key,
            sender: thisSender,
            msg: msg
        }, resolve);
    }

    if (typeof onResponse === "function") {
        return handleWith(onResponse);
    } else {
        return new Promise((resolve, error) => {
            handleWith(resolve);
        });
    }
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
    return relayMsgFromRuntimeToPageWindow(key, window, transformerFunc);
}

function relayMsgFromRuntimeToPageWindow(key, targetWindow, transformerFunc) {
    listenOnRuntime(key, function (msg, sendResponse) {
        if (transformerFunc instanceof Function) {
            let newMsg = transformerFunc(msg);
            if (newMsg != null) {
                msg = newMsg;
            }
        }
        logger.debug("relayMsgToPage", key, msg);
        sendToPageWindow(targetWindow, key, msg, sendResponse);
        return true; // always enable async response
    });
}

function relayAllMsgsToRuntime(...keys) {
    keys.forEach(key => {
        relayMsgFromPageToRuntime(key);
    })
}

/**
 * Listens for a message from page, or content script (sent via window.send() or `messaging.sendToPage()`)
 * Each key can only register one callback (for each window).
 * If called multiple times with the same key, the last call wins and previous callbacks are removed.
 * @param {string} key A unique key for selecting messages.
 * @param {function(Object, function)} callback
 */
function listenOnPage(key, callback) {
    addOnceSingletonListenerOnPage();

    if (pageListenerMap[key]) {
        logger.warn("Overriding page listener on key=", key);
    }
    logger.debug("listenOnPage key=", key);
    pageListenerMap[key] = callback;
}

/**
 * Adds a singleton listener to `window.addEventListener()`. 
 * A flag at `window._mid_.messaging.singletonPageListener` is checked to prevent adding more than once
 */
function addOnceSingletonListenerOnPage() {
    if (typeof namespace.singletonPageListener !== "undefined") {
        return;
    }

    const listener = namespace.singletonPageListener = function (event) {
        if (event?.source !== window || event?.origin !== window.location.origin) {
            // logger.error("Ingoring message sent by other page origin event=", event)
            return;
        }

        if (event.data?.sender === thisSender) { // ignore message sent by self
            return;
        }

        // dispatch event to the right callback in pageListenerMap

        if (!event.data?.what) {
            // logger.error("Missing page message key event=", event)
            return;
        }

        const keyFromEvent = event.data.what;

        if (!pageListenerMap[keyFromEvent] || typeof pageListenerMap[keyFromEvent] !== "function") {
            logger.warn("Missing page listener callback key=", keyFromEvent, "event=", event)
            return;
        }

        const callbackForEvent = pageListenerMap[keyFromEvent];

        logger.debug("Received on page key=", keyFromEvent, "event.data.msg=", event.data.msg, "event.data=", event.data);

        const sendResponse = event.data.replyKey ? (respMsg) => {
            sendToPage(event.data.replyKey, respMsg);
        } : undefined;

        callbackForEvent(event.data.msg, sendResponse);
    };
    window.addEventListener("message", listener, false);
}

function tearDownAllListenersOnPage() {
    if (namespace.singletonPageListener) {
        window.removeEventListener("message", namespace.singletonPageListener);
        delete namespace.singletonPageListener;
    }

    Object.keys(pageListenerMap).forEach(k => delete pageListenerMap[k]);
}

/**
 * Listen messages on runtime (sent via chrome.runtime.sendMessage() or chrome.tabs.sendMessage()).
 * Each key can only be registered once for listening (for each window).
 * If called multiple times with the same key, the last call wins and previous callbacks are removed.
 * 
 * @param key {string} A unique key for selecting messages.
 * @param callback {function(Object, function)} callback being called when a message is received on this key.
 *                                                      Return true from the callback to enable async reply.
 * @return {boolean} Returns true if it was successful to listen on the key, otherwise false.
 */
function listenOnRuntime(key, callback) {
    addOnceSingletonListenerOnRuntime();
    if (runtimeListenerMap[key]) {
        logger.warn("Overriding runtime listener on key=", key);
    }
    logger.debug("listeningOnRuntime", key);
    runtimeListenerMap[key] = callback;
}

/**
 * Add a singleton listener to `chrome.runtime.onMessage.addListener`. 
 * A flag at `window._mid_.messaging.singletonRuntimeListener` is checked to prevent adding more than once.
 */
function addOnceSingletonListenerOnRuntime() {
    if (typeof namespace.singletonRuntimeListener !== "undefined") {
        return;
    }

    const listener = namespace.singletonRuntimeListener = function (data, sender, sendResponse) {
        if (sender.id !== EXTENSION_ID) {
            logger.error("Ignoring messages sent by other extensions. sender=", sender, "message=", data);
            return false;
        }

        if (!data?.what) {
            logger.error("Missing runtime message key data=", data)
            return false;
        }

        if (data.sender === thisSender) {
            // ignore message sent by self
            return false;
        }

        const key = data.what;

        if (!runtimeListenerMap[key] || typeof runtimeListenerMap[key] !== "function") {
            logger.warn("Missing runtime listener callback key=", key)
            return false;
        }

        const callback = runtimeListenerMap[key];

        logger.debug("Received on runtime key=", key, "data=", data, "extension sender=", sender);

        // if callback returns true, async replying mode is enabled and calling sendResponse can reply
        return callback(data.msg, sendResponse);
    }

    chrome.runtime.onMessage.addListener(listener);
}

function tearDownAllListenersOnRuntime() {
    if (namespace.singletonRuntimeListener) {
        chrome.runtime.onMessage.removeListener(namespace.singletonRuntimeListener);
        delete namespace.singletonRuntimeListener;
    }

    Object.keys(runtimeListenerMap).forEach(k => delete runtimeListenerMap[k]);
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
    if (isPage) {
        listenOnPage(key, callback);
        if (isCS) {
            listenOnRuntime(key, callback);
        }
    } else {
        listenOnRuntime(key, callback);
    }
}

/**
 * Remove all the previous registered listeners on both runtime and page.
 */
function tearDownAllListeners() {
    tearDownAllListenersOnPage();
    tearDownAllListenersOnRuntime();
}

module.exports = {
    listenOnRuntime,
    listen,
    send,
    listenOnPage,
    relayAllMsgsToRuntime,
    relayMsgFromRuntimeToPage,
    relayMsgFromRuntimeToPageWindow,
    relayMsgFromPageToRuntime,
    sendToCS,
    sendToRuntime,
    sendToPage,
    sendToPageWindow,
    tearDownAllListeners,
    tearDownAllListenersOnPage,
    tearDownAllListenersOnRuntime
}
