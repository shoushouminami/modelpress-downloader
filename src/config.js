const storage = require("./storage");
const logger = require("./logger2")(module.id);
const { createConfigManager } = require("./config-manager");

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


function checkConstraints(config) {
    // noop
}

// optional migration function for older versions (you had a TODO)
// For now, just returns the old config unchanged.
function migrate(oldConfig) {
    // Example:
    // if (oldConfig.v === 0) { ... }
    return oldConfig;
}

// Create one manager instance for this config
const manager = createConfigManager({
    storageKey: STORAGE_KEY,
    version: VERSION,
    defaults: defaultConfigV1,
    storage,
    logger,
    checkConstraints,
    migrate
});

function getConf(key) {
    return manager.getConf(key);
}

/**
 * Returns a copy of the config map
 * @return {unknown}
 */
function getConfigMap() {
    return manager.getConfigMap();
}

function setConf(key, value) {
    return manager.setConf(key, value);
}


function keepRecentClicks() {
    return getConf(KEEP_RECENT_CLICKS);
}

function setKeepRecentClicks(keep) {
    setConf(KEEP_RECENT_CLICKS, Boolean(keep));
}

function isPersisted(key) {
    return manager.isPersisted(key);
}

exports.getConf = getConf;
exports.setConf = setConf;
exports.getConfigMap = getConfigMap;
exports.keepRecentClicks = keepRecentClicks;
exports.setKeepRecentClicks = setKeepRecentClicks;
exports.isPersisted = isPersisted;
exports.KEEP_RECENT_CLICKS = KEEP_RECENT_CLICKS;
exports.DOWNLOAD_PREPEND_JOBID = DOWNLOAD_PREPEND_JOBID;
