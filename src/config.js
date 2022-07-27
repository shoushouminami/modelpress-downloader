const storage = require("./storage");
const logger = require("./logger2")(module.id);

const STORAGE_KEY = "config";
const VERSION = 1;

// V1 configs
const KEEP_RECENT_CLICKS = "keepRecentClicks"
const DOWNLOAD_PREPEND_JOBID = "downloadPrependJobId"

const defaultConfigV1 = {
    "v": VERSION
}

defaultConfigV1[KEEP_RECENT_CLICKS] = true
defaultConfigV1[DOWNLOAD_PREPEND_JOBID] = true

const config = {}

/**
 * Checks if the config is loaded from storage, if not then load it once.
 */
function checkInitLoad() {
    logger.debug("config check init load");
    if (!("v" in config)) {
        const serialized = storage.get(STORAGE_KEY);
        logger.debug("config loaded from storage", serialized);
        if (serialized) {
            let deserialized = JSON.parse(serialized);
            logger.debug("config deserialized from storage", deserialized);
            if (deserialized.v < VERSION) {
                // TODO migrate older version to latest version
            }
            Object.assign(config, deserialized);
        }

        // Copy over missing keys
        for (let key of Object.keys(defaultConfigV1)) {
            if (!(key in config)) {
                logger.debug("config copying default key", key);
                config[key] = defaultConfigV1[key];
            }
        }
    }
}

function getConf(key) {
    checkInitLoad();
    checkConstraints();
    if (!(key in config)) {
        logger.debug("Trying to read key not in config: ", key);
    }
    return config[key];
}

/**
 * Returns a copy of the config map
 * @return {unknown}
 */
function getConfigMap() {
    checkInitLoad();
    checkConstraints();
    return Object.assign({}, config);
}

function setConf(key, value) {
    checkInitLoad();
    if (!(key in config)) {
        logger.debug("Trying to set key not in config: ", key);
    } else {
        logger.debug("Set config ", key, "=", value);
        config[key] = value;
        checkConstraints();
        storage.set(STORAGE_KEY, JSON.stringify(config));
    }
}

function checkConstraints() {
    // noop
}

function keepRecentClicks() {
    return getConf(KEEP_RECENT_CLICKS);
}

function setKeepRecentClicks(keep) {
    setConf(KEEP_RECENT_CLICKS, keep === true);
}

exports.getConf = getConf;
exports.setConf = setConf;
exports.getConfigMap = getConfigMap;
exports.keepRecentClicks = keepRecentClicks;
exports.setKeepRecentClicks = setKeepRecentClicks;
exports.KEEP_RECENT_CLICKS = KEEP_RECENT_CLICKS;
exports.DOWNLOAD_PREPEND_JOBID = DOWNLOAD_PREPEND_JOBID;
