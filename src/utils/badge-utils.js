const { every } = require("./async-utils");
const logger = require("../logger2")(module.id);
const tabBadgeCache = {}; // tabid => badge instance

function clearText(tabId) {
    chrome.action.setBadgeText({
        tabId: tabId,
        text: ""
    });
}

/**
 * Starts animation on badge during auto download mode.
 * 
 * @param {*} tabId 
 * @returns a function to stop the animation and clear badge text. 
 * The function accepts an optinal parameter `text` to set badgetext after animation stops.
 */
function animate(tabId) {
    let stopBadge = false;
    let cleanup = null;
    const badges = ["●•···", "•●•··", "·•●•·", "··•●•", "···•●", "··•●•", "·•●•·", "•●•··"]
    // ["·↓·", "··↓", "·↓·", "↓··"]; //▶
    let i = 0;
    every(200).then(() => {
        i = (i + 1) % badges.length;
        chrome.action.setBadgeText({
            tabId: tabId,
            // text: "↓"
            text: badges[i]
        });
        chrome.action.setBadgeBackgroundColor({
            color: "#3a1e43"
        });

        if (stopBadge) {
            clearText(tabId);
            if (typeof cleanup === "function") {
                cleanup();
            } 
        }
        return stopBadge;
    });

    return (text) => {
        cleanup = text ? () => {
            setText(tabId, text);
        } : null;
        stopBadge = true;
    }
}

function setText(tabId, text) {
    // show badge count
    logger.debug("Updating badge text with text=", text);
    chrome.action.setBadgeText({
        tabId: tabId,
        text: text
    });

    chrome.action.setBadgeBackgroundColor({
        color: "#3a1e43"
    });
}

/**
 * @typedef {Object} TabBadge
 * @property {() => void} clearText
 * @property {(text: string) => void} setText
 * @property {() => void} animate
 * @property {(text?: string) => void} stopAnimate
 */

/**
 * @param {number} tabId
 * @returns {TabBadge}
 */
function createOrGetTabBadge(tabId) {
    if (tabBadgeCache[tabId]) {
        return tabBadgeCache[tabId];
    }

    let stopAnimateHandler = null;

    const badge = {
        clearText() {
            badge.stopAnimate();
            clearText(tabId);
        },
        setText(text) {
            badge.stopAnimate(text);
            setText(tabId, text);
        },
        /**
         * Starts animation on badge during auto download mode if it has not yet started before.
         * If already started, this is no-op.
         */
        animate() {
            if (!stopAnimateHandler) {
                stopAnimateHandler = animate(tabId);
            }
        },
        stopAnimate(text) {
            if (typeof stopAnimateHandler === "function") {
                stopAnimateHandler(text);
                stopAnimateHandler = null;
            }
        }
    };
    return (tabBadgeCache[tabId] = badge);
}
module.exports = {
    createOrGetTabBadge
};
