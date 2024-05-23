const storage = require("../storage");
const STORAGE_KEY = "ga4_uid";
const logger = require("../logger2")(module.id);
let ga4_uid_loaded_from_storage = undefined;

/**
 * Returns UID for GA4. Only call in non-service worker env as it relies on local storage.
 * In service worker where there is no `window` nor `localStorage`, this call returns undefined.
 * @returns {string}
 */
function getGA4UID() {
    try {
        if (ga4_uid_loaded_from_storage === undefined) {
            const serialized = storage.get(STORAGE_KEY);
            if (serialized) {
                ga4_uid_loaded_from_storage = JSON.parse(serialized);
            } else {
                ga4_uid_loaded_from_storage = randomGA4UID();
                storage.set(STORAGE_KEY, JSON.stringify(ga4_uid_loaded_from_storage));
            }
        }
        return ga4_uid_loaded_from_storage;
    } catch (e) {
        logger.error("Failed getGA4UID() " + e)
        return undefined;
    }
}

/**
 * Allows to set GA4 UID. This is only for background.js to set it after receiving setUserID message.
 * @param uid
 */
function setGA4UID(uid) {
    ga4_uid_loaded_from_storage = uid;
}

function randomGA4UID() {
    return `uid-${crypto.randomUUID()}`;
}

exports.getGA4UID = getGA4UID;
exports.setGA4UID = setGA4UID;
