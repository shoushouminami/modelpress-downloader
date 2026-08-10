/**
 * Persisted site options. Options are persisted in the extension's (popup.js) local storage, keyed by the site's domain hence
 * each site has its own namespace.
 * To add site level option, or overwrite the common options defined in this file, each site module only need to add such options 
 * to o.options (the return-message)
 * 
 * If the site module needs to read the persisted options before running its inject script, a helper function {@link loadPerisistedSiteOptions()}
 * is provided for such task. It is done through messaging therefore async. IE, the content script needs to update result through
 * messaging `{messaging.sendToRuntime("updateResult", o)}`.
 * 
 * 
 */
const storage = require("./storage");
const logger = require("./logger2")(module.id);
const { createConfigManager } = require("./config-manager");
const runtime = require("./runtime");
const i18n = require("./i18n");
const { getGlobalObjectCache } = require("./globals");

const STORAGE_KEY = "options";
const USER_INTERACTED = "userInteracted";
const VALUE = "value";
const CHECKED = "checked";
const HIDDEN = "hidden";
// options marked tabLocal:true are remembered per browser tab (via the tab's window, see
// getTabLocalOptionsCache() below) instead of the shared per-host storage, so they don't leak
// across tabs of the same site but still survive the popup being closed and reopened.
const TAB_LOCAL = "tabLocal";

/** 
 * Fields that are persistent into `storage`
*/
const PERSISTENT_FIELDS = new Set([
    CHECKED,
    VALUE,
    USER_INTERACTED
]);

/**
 * Fields that contains value.
 */
const VALUE_FIELDS = new Set([
    CHECKED,
    VALUE
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
    i18nName: "configDownloadPrependJobId",
    index: 999,
    label: "Prepend sequence number to file name",
    type: "checkbox",
    checked: true,
    userInteracted: false // whether this config is clicked by user on UI
}

// COMMON_OPTIONS[DOWNLOAD_FOLDER_PATTERN] = {
//     index: 997,
//     label: "Folder pattern",
//     type: "text",
//     value: "{host}-{pathname}",
//     possiblePatternList: ["{host}", "{pathname}"],
//     userInteracted: false // whether this config is clicked by user on UI
// }

// COMMON_OPTIONS[DOWNLOAD_FILENAME_PATTERN] = {
//     index: 998,
//     label: "Filename pattern",
//     type: "text",
//     value: "{filename}",
//     possiblePatternList: ["{host}", "{pathname}", "{filename}"],
//     userInteracted: false // whether this config is clicked by user on UI
// }


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
 * Cache of tabLocal option values, keyed by option name. Backed by {@link getGlobalObjectCache},
 * ie stored on the tab's own `window`, so it naturally survives the popup being closed/reopened
 * (which re-creates the popup's JS realm every time) but does NOT survive tab navigation/reload,
 * and is never shared with other tabs.
 *
 * Not keyed by host: a given `window` only ever belongs to a single host at a time - navigating
 * to a different host always re-creates it (and wipes this cache with it) - so there is no risk
 * of values leaking between hosts here.
 *
 * Only meaningful when called from content script code - {@link loadPerisistedSiteOptions} and
 * {@link onOptionsChanged} already guard against being called from the popup.
 */
function getTabLocalOptionsCache() {
    const cache = getGlobalObjectCache(module.id);
    cache.tabLocalOptions ??= {};
    return cache.tabLocalOptions;
}

/**
 * Overwrites the value fields of tabLocal options in `options` with whatever was last cached for
 * this tab, if any. Mutates `options` in place.
 * @param {*} options
 */
function applyTabLocalOptions(options) {
    if (!options) {
        return options;
    }

    const cache = getTabLocalOptionsCache();

    for (const optName of Object.keys(options)) {
        if (options[optName]?.[TAB_LOCAL] && cache[optName]) {
            Object.assign(options[optName], cache[optName]);
        }
    }

    return options;
}

/**
 * Remembers the current value fields of tabLocal options in `options` for this tab.
 * @param {*} options
 */
function saveTabLocalOptions(options) {
    if (!options) {
        return;
    }

    const cache = getTabLocalOptionsCache();

    for (const optName of Object.keys(options)) {
        const opt = options[optName];
        if (!opt?.[TAB_LOCAL]) {
            continue;
        }

        const cachedOpt = cache[optName] ??= {};
        PERSISTENT_FIELDS.forEach(f => {
            if (f in opt) {
                cachedOpt[f] = opt[f];
            }
        });
    }
}

/**
 * Helper method for site module code (ie content scripts) to load persisted site options through messaging.
 * 1) Because loading site options is async, whether this loads before or after the inject function returns is undeterministic.
 * Therefore the defaultOptions needs to be passed the same as the `o.options` to ensure both init site options with the same defaults.
 *
 * 2) The content script needs to update result through messaging `{messaging.sendToRuntime("updateResult", o)}`.
 *
 * `tabLocal` options in `defaultOptions` are patched in-place with their last known value for this
 * tab (see {@link getTabLocalOptionsCache}) before being sent to the popup. This way the popup's own
 * {@link createSiteOptions} instance - which has no access to the tab's window and so cannot read
 * the tab-local cache itself - is seeded with, and echoes back, the correct value.
 * @param {*} host The domain of site
 * @param {*} defaultOptions The default options in `o.options`
 * @returns {Promise} the function can either take a callback function or return a Promise
 */
function loadPerisistedSiteOptions(host, defaultOptions, callback) {
    if (runtime.isRuntime() && !runtime.isServiceWorker()) {
        throw new Error(`Calling ${loadPerisistedSiteOptions.name} in popup.`);
    }

    applyTabLocalOptions(defaultOptions);

    const messaging = require("./messaging");

    const handler = (resolve) => {
        messaging.sendToRuntime("getSiteOptions", {
            host: host,
            options: defaultOptions
        }, function (resp) {
            logger.debug("Initialized with for host=", resp?.host, "options=", resp?.options);
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
        saveTabLocalOptions(msg.options);
        callback(msg);
    });
}

/**
 * Combines `loadPerisistedSiteOptionsAndOnChange()` and `onOptionsChanged()`. Run the `callback` function when 
 * options is initially load as well as when they are changed.
 * 
 * Used by content scripts.
 * 
 * @param {*} host 
 * @param {*} defaultOptions 
 * @param {*} callback 
 */
function loadPerisistedSiteOptionsAndOnChange(host, defaultOptions, callback) {
    if (typeof callback !== "function") {
        throw new Error("Only supports callback function, not Promise");
    }

    loadPerisistedSiteOptions(host, defaultOptions, callback);
    onOptionsChanged(callback);
}

/**
 * Helper function to test if the named option is changed between a prevous options map and a current options map.
 * If fields is given, the fields are checked. Otherwise, depending on the option type, a proper field is checked. ("checked" or "value") 
 * @param {*} prevOptions Previous options map
 * @param {*} currentOptions Current options map
 * @param {*} optionName The option name to check
 * @param {*} fields Optional fields to check
 */
function isOptionValueChanged(prevOptions, currentOptions, optionName, fields = []) {
    if (fields.length === 0) {
        fields = (prevOptions[optionName] || {}).type === "checkbox" ? ["checked"] : ["value"];
    }
    return fields.some(f => (prevOptions[optionName] || {})[f] !== (currentOptions[optionName] || {})[f]);
}

/**
 * Compare the two options map, and for each option that its value is changed, call the callback function with 
 * `(optionName, field, prevValue, currentValue)`.
 * 
 * Only value fields are checked. IE. either "value" and "checked".
 * @param {*} prevOptions 
 * @param {*} currentOptions 
 * @param {function(string, string, *, *)} callback 
 * @returns 
 */
function forEachOptionValueChanged(prevOptions, currentOptions, callback) {
    if (typeof callback !== "function") {
        logger.error("func=forEachOptionValueChanged callback is not a function type=", typeof callback);
        return;
    }

    prevOptions ??= {};
    currentOptions ??= {};

    // go through the union of all option names
    new Set([...Object.keys(prevOptions), ...Object.keys(currentOptions)]).forEach(optionName => {
        // loop through value fields
        VALUE_FIELDS.forEach(f => {
            if (isOptionValueChanged(prevOptions, currentOptions, optionName, [f])) {
                callback(optionName, f, prevOptions[optionName]?.[f], currentOptions[optionName]?.[f]);
            }
        })
    })
}


function getOptionValueFromMap(optMap, optName) {
    const opt = optMap[optName];
    if (!opt) {
        return;
    }

    if (opt.type === "checkbox") {
        return opt.checked;
    }

    return opt.value;
}

function setOptionValueToMap(optMap, optName, newValue) {
    const opt = optMap[optName];
    if (!optMap[optName]) {
        return;
    }

    switch (opt.type) {
        case "checkbox":
            opt.checked = newValue;
            return;
        case "range":
            // allow setting false to set to 0
            opt.value = newValue === false ? 0 : newValue;
            return;
        case "text":
            // allow setting false to set to ""
            opt.value = newValue === false ? "" : newValue;
            return;
        default:
            throw new Error(`Updating unknown option type=${opt.type} optName=${optName} newValue=${newValue}`)
    }
}


/**
 * Calls cb(nestedName, nestedOpt, parentName) for each nested option.
 *
 * @param {Object<string, Object>} optionsMap
 * @param {(nestedName: string, nestedOpt: any, parentName: string) => void} cb
 */
function forEachNestOptions(optionsMap, cb) {
    if (!optionsMap || typeof optionsMap !== "object") return;
    if (typeof cb !== "function") return;

    for (const [name, opt] of Object.entries(optionsMap)) {
        const idx = name.indexOf(":");
        if (idx === -1) continue;
        cb(name, opt, name.slice(0, idx));
    }
}

/**
 * Add hidden = true to nested options if the top level option is falsy.
 *
 * Nested option names are like: "download:video", top-level is "download".
 *
 * @param {Object<string, Object>} optionsMapCopy - map of optionName -> option object (will be mutated)
 * @returns {Object<string, Object>} the same map for convenience
 */
function hideNestedOptions(optionsMapCopy) {
    forEachNestOptions(optionsMapCopy, (nestedName, nestedOpt, parentName) => {
        const parentOpt = optionsMapCopy[parentName];
        nestedOpt[HIDDEN] = parentOpt.type === "checkbox" && parentOpt.checked === false;
    });

    return optionsMapCopy;
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
    // Allow default option to overwrite COMMON_OPTIONS at each key level
    const updatedCommonOptions = Object.assign({}, COMMON_OPTIONS);
    Object.keys(updatedCommonOptions).forEach(commonOptionName => {
        // for each option, allow default to present key level overwrite
        Object.assign(updatedCommonOptions[commonOptionName], options[commonOptionName]);
    });
    
    // Merge common option and default into all
    // Contains all common options, overrides and site specific options, but only intial values defined in code. 
    // ie WITHOUT perisited values from storage.
    const allOptions = Object.assign({}, options, updatedCommonOptions);

    // i18n - replace label if there is an i18n version
    Object.keys(allOptions).forEach(optName => {
        // supports nested option names delimited by ':'
        const messageName = allOptions[optName].i18nName ?? optName.split(":").pop();
        const label = i18n.getText(messageName) ?? allOptions[optName].label;
        if (label) {
            allOptions[optName].label = label; 
        }
        const description = i18n.getMessageDescription(messageName);
        if (description) {
            allOptions[optName].description = i18n.getMessageDescription(messageName);
        }
    });

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
        if (!(optName in allOptions)) {
            return;
        }

        return getAllOptions()[optName];
    }

    /**
     * for testing
     */
    function getPersistedOptions() {
        const config = manager.getConfigMap();
        return config.persistedOptions || {};
    }

    /**
   * Get all options as a map { [optName]: mergedOption }.
   */
    function getAllOptions() {
        const persistedOptions = getPersistedOptions();
        const result = {};

        for (const optName of Object.keys(allOptions)) {
            const defaultOpt = allOptions[optName];
            // tabLocal options are never read back from the shared per-host storage (which would
            // otherwise leak across tabs of the same site) - see getTabLocalOptionsCache() for
            // where their value actually comes from instead.
            const persisted = defaultOpt[TAB_LOCAL] ? {} : (persistedOptions[optName] || {});
            result[optName] = Object.assign({}, defaultOpt, persisted);
        }

        // hide or show nested options
        hideNestedOptions(result);

        return result;
    }

    /**
     * Perisits the named option with the given patch. The patch can be a subset of field-value pairs in
     * this option. Only field(s) in the patch will be peristed.
     *
     * The option has to be from the known options. Otherwise an error is raised.
     *
     * The option will be persisted into local storage in addition to being updated in memory. ie write through.
     * Note that only a selected list of fields defined in {@link PERSISTENT_FIELDS} will be persisted to save
     * storage as well as allow later refactoring on the option.
     *
     * By this definition, there is almost no reason to update an option with "userInteracted" set to false.
     *
     * Options marked `tabLocal: true` are skipped entirely (no write to the shared per-host storage);
     * their value is instead remembered per-tab, see {@link saveTabLocalOptions}.
     * @param {String} optName
     * @param {*} patch
     */
    function persistOption(optName, patch) {
        // error if this isn't an option known to us
        if (allOptions[optName] == null) {
            throw new Error(`Updating unknown option optName=${optName} patch=${patch}`)
        };

        if (allOptions[optName][TAB_LOCAL]) {
            return;
        }

        const persistedOptions = manager.getConfigMap().persistedOptions || {};
        const partialToSave = removeNonPersistentKeys({
            [optName]: patch
        });

        const prev = persistedOptions[optName] || {};
        if (patchObjectProperties(prev, partialToSave[optName])) {
            persistedOptions[optName] = prev; // needed when prev was null
            manager.setConf("persistedOptions", persistedOptions);
        }
    }

    /**
     * Persist the named option with the given new value.
     * 
     * `userInteracted` flag will be set to true for this option.
     * 
     * The option has to be from the known options. Otherwise an error is raised.
     * @param {String} optName 
     * @param {String|Boolean|Number} newValue 
     * @returns {*} the updated options map containing all options
     */
    function updateOptionValue(optName, newValue) {
        // error if this isn't an option known to us
        if (!(optName in allOptions)) {
            throw new Error(`Updating unknown option optName=${optName} newValue=${newValue}`)
        };

        const optionsMapCopy = getAllOptions();
        setOptionValueToMap(optionsMapCopy, optName, newValue);
        // update userInteracted flag
        optionsMapCopy[optName][USER_INTERACTED] = true;
        // persist to storage
        persistOption(optName, optionsMapCopy[optName]);

        const isOff = optionsMapCopy[optName].type === "checkbox" && newValue === false;

        // if the main option is off
        // all nested options needs to be turned off as well
        if (isOff) {
            forEachNestOptions(optionsMapCopy, (nestedName, nestedOpt, parentName) => {
                if (parentName !== optName) {
                    return;
                }

                // set to falsy
                setOptionValueToMap(optionsMapCopy, nestedName, false);
                // persist to storage if userInteracted nested option before
                if (isUserInteracted(optionsMapCopy[nestedName])) {
                    persistOption(nestedName, optionsMapCopy[nestedName]);
                }
            });
        }

        // hide or show nested options
        hideNestedOptions(optionsMapCopy);

        // update in memory copy
        Object.assign(allOptions, optionsMapCopy); 

        return optionsMapCopy;
    }

    function isUserInteracted(opt) {
        return opt != null && (opt[USER_INTERACTED] === true);
    }

    return {
        getOption,
        getAllOptions,
        persistOption,
        updateOptionValue,
        isUserInteracted,
        // testing
        getPersistedOptions
    };
}

module.exports = {
    DOWNLOAD_PREPEND_JOBID,
    DOWNLOAD_FOLDER_PATTERN,
    DOWNLOAD_FILENAME_PATTERN,
    COMMON_OPTIONS,
    PERSISTENT_FIELDS,
    USER_INTERACTED,
    createSiteOptions,
    loadPerisistedSiteOptions,
    onOptionsChanged,
    loadPerisistedSiteOptionsAndOnChange,
    isOptionValueChanged,
    forEachOptionValueChanged,
    setOptionValueToMap,
    getOptionValueFromMap,
    // below are for tests
    removeNonPersistentKeys,
    patchObjectProperties,
    getTabLocalOptionsCache,
    applyTabLocalOptions,
    saveTabLocalOptions
}
