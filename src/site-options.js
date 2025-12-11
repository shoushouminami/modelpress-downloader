/**
 * Persisted site options. Options are persisted in the extension's (popup.js) local storage, keyed by the site's domain hence
 * each site has its own namespace.
 */
const storage = require("./storage");
const logger = require("./logger2")(module.id);
const { createConfigManager } = require("./config-manager");
const runtime = require("./runtime");

const STORAGE_KEY = "options";
const USER_INTERACTED = "userInteracted";
const VALUE = "value";
const CHECKED = "checked";

const PERSISTENT_FIELDS = new Set([
    CHECKED,
    VALUE,
    USER_INTERACTED
]);

// V1 options
const DOWNLOAD_PREPEND_JOBID = "downloadPrependJobId";
const DOWNLOAD_FOLDER_PATTERN = "downloadFolderPattern";
const DOWNLOAD_FILENAME_PATTERN = "downloadFilenamePattern";

/**
 * Options shared cross sites.
 */
const COMMON_OPTIONS = {}

COMMON_OPTIONS[DOWNLOAD_PREPEND_JOBID] = {
    index: 999,
    label: "Prepend sequence number to file name",
    type: "checkbox",
    checked: true,
    userInteracted: false // whether this config is clicked by user on UI
}

COMMON_OPTIONS[DOWNLOAD_FOLDER_PATTERN] = {
    index: 997,
    label: "Folder pattern",
    type: "text",
    value: "{host}-{pathname}",
    possiblePatternList: ["{host}", "{pathname}"],
    userInteracted: false // whether this config is clicked by user on UI
}

COMMON_OPTIONS[DOWNLOAD_FILENAME_PATTERN] = {
    index: 998,
    label: "Filename pattern",
    type: "text",
    value: "{filename}",
    possiblePatternList: ["{host}", "{pathname}", "{filename}"],
    userInteracted: false // whether this config is clicked by user on UI
}


// Build default "persistedOptions" map from the provided definitions
function removeNonPersistentKeys(options) {
    // // merge common into options if not present
    // for (const optName of Object.keys(COMMON_OPTIONS)) {
    //     if (options[optName] == null) {
    //         options[optName] = COMMON_OPTIONS[optName];
    //     }
    // }

    const persistedOptions = {};
    for (const optName of Object.keys(options)) {
        const filteredFields = Object.keys(options[optName]).filter(f => PERSISTENT_FIELDS.has(f));
        // only need to store this option if there is any field that needs storage.
        if (filteredFields.length > 0) {
            persistedOptions[optName] = {};
            filteredFields.forEach(f => persistedOptions[optName][f] = options[optName][f]);
        }
    }
    return persistedOptions;
}
/**
 * Copy over properties from  src to target (same as Object.assign(target, src)).
 * 
 * Returns a boolean flag indicating if the target is changed at all (at shallow level).
 * @param {*} target 
 * @param {*} src 
 */
function patchObjectProperties(target, src) {
    const before = { ...target };  // shallow copy
    Object.assign(target, src);

    return Object.keys(target).some(
        key => target[key] !== before[key]
    );
}

/**
 * Helper method for site module code (ie content scripts) to load site options through messaging.
 * @param {*} host 
 * @param {*} defaultOptions 
 */
function loadSiteOptions(host, defaultOptions, callback) {
    if (runtime.isRuntime() && !runtime.isServiceWorker()) {
        throw new Error(`Calling ${loadSiteOptions.name} in popup.`);
    }

    const messaging = require("./messaging");

    const handler = (resolve) => {
        messaging.sendToRuntime("getSiteOptions", {
            host: host,
            options: defaultOptions
        }, function (resp) {
            logger.debug("Loaded options=", resp.options);
            resolve(resp);
        });
    }

    // return undefined for callback style;
    if (typeof callback === "function") {
        handler(callback);
        return;        
    }
    // return Promise
    return new Promise(handler);
}

/**
 * Helper method for site module code (ie content scripts) to register a messaging listenr for options changed.
 * @param {*} host 
 * @param {*} defaultOptions 
 */
function onOptionsChanged(callback) {
    if (runtime.isRuntime() && !runtime.isServiceWorker()) {
        throw new Error(`Calling ${onOptionsChanged.name} in popup.`);
    }

    const messaging = require("./messaging");
    // setup event listener to update options 
    messaging.listenOnRuntime("optionsChanged", function (msg) {
        logger.debug("Received event optionsChanged options=", msg.options);
        callback(msg);
    });
}

function createSiteOptions({
    host, 
    version = 1,
    options, // default options hard coded in code
    migrate,
    checkConstraints
}) {
    if (!host) {
        throw new Error("createSiteOptions: host is required");
    }
    if (!options || typeof options !== "object") {
        throw new Error("createSiteOptions: options must be an object keyed by option name");
    }

    // Merge COMMON_OPTIONS into site options.
    // Site-specific options override COMMON_OPTIONS on name clashes.
    const allOptions = Object.assign({}, COMMON_OPTIONS, options);

    // Create one manager instance for this config
    const manager = createConfigManager({
        storageKey: STORAGE_KEY + ":" + host,
        version: version,
        defaults: {
            v: version,
            persistedOptions: {}
        },
        storage,
        logger,
        checkConstraints,
        migrate
    });

    function getOption(optName) {
        const defaultOpt = allOptions[optName];
        if (defaultOpt == null) return undefined;

        const config = manager.getConfigMap();
        const persistedOptions = config.persistedOptions || {};

        return Object.assign({}, defaultOpt, persistedOptions[optName] || {});
    }

    /**
   * Get all options as a map { [optName]: mergedOption }.
   */
    function getAllOptions() {
        const config = manager.getConfigMap();
        const persistedOptions = config.persistedOptions || {};
        const result = {};

        for (const optName of Object.keys(allOptions)) {
            const defaultOpt = allOptions[optName];
            const persisted = persistedOptions[optName] || {};
            result[optName] = Object.assign({}, defaultOpt, persisted);
        }

        return result;
    }

    /**
     * Updates the named option with the given patch. The patch can be a subset of field-value pairs in 
     * this option. Only the presented field(s) will be updated.
     * 
     * The option has to be in the default options. Otherwise no update (create) will be performed.
     * 
     * The option will be persisted into local storage in addition to being updated in memory. ie write through.
     * Note that only a selected list of fields defined in {@link PERSISTENT_FIELDS} will be persisted to save
     * storage as well as allow later refactoring on the option.
     * 
     * By this definition, there is almost no reason to update an option with "userInteracted" set to false.
     * @param {String} optName 
     * @param {*} patch 
     */
    function updateOption(optName, patch) {
        // no-op if this isn't an option given in the default list
        if (allOptions[optName] == null) {
            throw new Error(`Updating unknown option optName=${optName} patch=${patch}`)
        };

        const persistedOptions = manager.getConfigMap().persistedOptions || {};
        const partialToSave = removeNonPersistentKeys({
            [optName]: patch
        });

        const prev = persistedOptions[optName] || {};
        if (patchObjectProperties(prev, partialToSave[optName])) {
            persistedOptions[optName] = prev; // needed when prev was null
            manager.setConf("persistedOptions", persistedOptions)
        }
    }

    function userInteracted(opt) {
        return opt != null && (opt[USER_INTERACTED] === true);
    }

    return {
        getOption,
        getAllOptions,
        updateOption,
        userInteracted
    };
}

module.exports = {
    DOWNLOAD_PREPEND_JOBID,
    DOWNLOAD_FOLDER_PATTERN,
    DOWNLOAD_FILENAME_PATTERN,
    COMMON_OPTIONS,
    PERSISTENT_FIELDS,
    createSiteOptions,
    loadSiteOptions,
    onOptionsChanged,
    // below are for tests
    removeNonPersistentKeys,
    patchObjectProperties
}
