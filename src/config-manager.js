// config-manager.js
// Generic, reusable config manager

function createConfigManager(options) {
    const {
        storageKey,
        version,
        defaults,
        storage,
        logger,
        checkConstraints,   // function(config) or undefined
        migrate             // optional: function(oldConfig) → newConfig
    } = options;

    const config = {};
    const persistedKeys = new Set();

    function logDebug() {
        if (logger && typeof logger.debug === "function") {
            logger.debug.apply(logger, arguments);
        }
    }

    function ensureInitialized() {
        logDebug("config check init load for", storageKey);

        if (!("v" in config)) {
            const serialized = storage.get(storageKey);
            logDebug("config loaded from storage", serialized);

            if (serialized) {
                let deserialized = JSON.parse(serialized);
                logDebug("config deserialized from storage", deserialized);

                if (deserialized.v < version && typeof migrate === "function") {
                    deserialized = migrate(deserialized);
                    logDebug("config migrated", deserialized);
                }

                Object.assign(config, deserialized);
                Object.keys(deserialized).forEach(k => persistedKeys.add(k));
            }

            // fill missing keys from defaults
            Object.keys(defaults).forEach(function (key) {
                if (!(key in config)) {
                    logDebug("config copying default key", key);
                    config[key] = defaults[key];
                }
            });
        }
    }

    function runConstraints() {
        if (typeof checkConstraints === "function") {
            checkConstraints(config);
        }
    }

    function getConf(key) {
        ensureInitialized();
        runConstraints();

        if (!(key in config)) {
            logDebug("Trying to read key not in config:", key);
        }
        return config[key];
    }

    function getConfigMap() {
        ensureInitialized();
        runConstraints();
        return Object.assign({}, config);
    }

    function setConf(key, value) {
        ensureInitialized();

        if (!(key in config)) {
            logDebug("Trying to set key not in config:", key);
            return;
        }

        logDebug("Set config", key, "=", value);
        config[key] = value;
        runConstraints();
        storage.set(storageKey, JSON.stringify(config));
        persistedKeys.add(key);
    }

    function isPersisted(key) {
        return persistedKeys.has(key);
    }

    return {
        getConf,
        setConf,
        getConfigMap,
        isPersisted,
        // for advanced cases, you *could* expose config itself read-only, but
        // normal use should go through the functions above.
    };
}

module.exports = {
    createConfigManager
};
