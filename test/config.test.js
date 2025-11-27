// config.test.js
const path = require("path");

const CONFIG_PATH = "../src/config";
const STORAGE_PATH = "../src/storage";
const LOGGER_PATH = "../src/logger2";

function loadConfigWithStorage(serialized) {
    // reset Jest module registry so config/storage are re-evaluated
    jest.resetModules();

    // Create mocks for storage & logger
    const storageMock = {
        get: jest.fn().mockReturnValue(serialized),
        set: jest.fn()
    };

    const loggerInstanceMock = {
        debug: jest.fn()
    };

    // logger2 is required as: require("./logger2")(module.id)
    // so we mock it as a function that returns a logger instance
    const loggerFactoryMock = jest.fn(() => loggerInstanceMock);

    // Important: use the same module IDs that config.js uses (relative to *it*).
    jest.doMock(STORAGE_PATH, () => storageMock);
    jest.doMock(LOGGER_PATH, () => loggerFactoryMock);

    // Now require the module under test – it will see the mocked storage/logger
    const config = require(CONFIG_PATH);

    return { config, storageMock, loggerInstanceMock, loggerFactoryMock };
}

// convenience constants (must match your module)
const STORAGE_KEY = "config";
const KEEP_RECENT_CLICKS = "keepRecentClicks";
const DOWNLOAD_PREPEND_JOBID = "downloadPrependJobId";

describe("config module", () => {
    test("loads defaults when storage is empty", () => {
        const { config, storageMock } = loadConfigWithStorage(null); // storage.get returns null

        const map = config.getConfigMap();

        // version set
        expect(map.v).toBe(1);

        // defaults from defaultConfigV1
        expect(map[KEEP_RECENT_CLICKS]).toBe(true);
        expect(map[DOWNLOAD_PREPEND_JOBID]).toBe(true);

        // should not have written to storage just by reading
        expect(storageMock.set).not.toHaveBeenCalled();

        // v is not perisited
        expect(config.isPersisted("v")).toBe(false);
    });

    test("loads config from storage when present", () => {
        const serialized = JSON.stringify({
            v: 1,
            [KEEP_RECENT_CLICKS]: false,
            [DOWNLOAD_PREPEND_JOBID]: true
        });

        const { config, storageMock } = loadConfigWithStorage(serialized);

        expect(config.getConf(KEEP_RECENT_CLICKS)).toBe(false);
        expect(config.getConf(DOWNLOAD_PREPEND_JOBID)).toBe(true);

        const map = config.getConfigMap();
        expect(map.v).toBe(1);
        expect(map[KEEP_RECENT_CLICKS]).toBe(false);
        expect(map[DOWNLOAD_PREPEND_JOBID]).toBe(true);

        // still no writes just from reading
        expect(storageMock.set).not.toHaveBeenCalled();

        // KEEP_RECENT_CLICKS is perisited
        expect(config.isPersisted(KEEP_RECENT_CLICKS)).toBe(true);
        expect(config.isPersisted(DOWNLOAD_PREPEND_JOBID)).toBe(true);
    });

    test("fills in missing keys from defaults", () => {
        const serialized = JSON.stringify({
            v: 1,
            [KEEP_RECENT_CLICKS]: false
            // DOWNLOAD_PREPEND_JOBID missing
        });

        const { config } = loadConfigWithStorage(serialized);

        const map = config.getConfigMap();

        // keepRecentClicks from stored
        expect(map[KEEP_RECENT_CLICKS]).toBe(false);
        // downloadPrependJobId filled in from defaultConfigV1
        expect(map[DOWNLOAD_PREPEND_JOBID]).toBe(true);

        // KEEP_RECENT_CLICKS is perisited
        expect(config.isPersisted(KEEP_RECENT_CLICKS)).toBe(true);
        expect(config.isPersisted(DOWNLOAD_PREPEND_JOBID)).toBe(false);
    });

    test("setConf updates existing key and persists to storage", () => {
        const initial = JSON.stringify({
            v: 1,
            [KEEP_RECENT_CLICKS]: true,
            [DOWNLOAD_PREPEND_JOBID]: true
        });

        const { config, storageMock } = loadConfigWithStorage(initial);

        // mutate config
        config.setConf(KEEP_RECENT_CLICKS, false);

        // read back via API
        expect(config.getConf(KEEP_RECENT_CLICKS)).toBe(false);

        // storage.set should have been called once
        expect(storageMock.set).toHaveBeenCalledTimes(1);
        const [keyArg, valueArg] = storageMock.set.mock.calls[0];

        expect(keyArg).toBe(STORAGE_KEY);

        const persisted = JSON.parse(valueArg);
        expect(persisted.v).toBe(1);
        expect(persisted[KEEP_RECENT_CLICKS]).toBe(false);
        expect(persisted[DOWNLOAD_PREPEND_JOBID]).toBe(true);
    });

    test("setConf does nothing for unknown keys (no write)", () => {
        const initial = JSON.stringify({
            v: 1,
            [KEEP_RECENT_CLICKS]: true,
            [DOWNLOAD_PREPEND_JOBID]: true
        });

        const { config, storageMock } = loadConfigWithStorage(initial);

        config.setConf("unknownKey", 123);

        // no write for unknown keys
        expect(storageMock.set).not.toHaveBeenCalled();
    });

    test("keepRecentClicks() reads KEEP_RECENT_CLICKS", () => {
        const serialized = JSON.stringify({
            v: 1,
            [KEEP_RECENT_CLICKS]: false,
            [DOWNLOAD_PREPEND_JOBID]: true
        });

        const { config } = loadConfigWithStorage(serialized);

        expect(config.keepRecentClicks()).toBe(false);
    });

    test("setKeepRecentClicks normalizes to boolean and persists", () => {
        const serialized = JSON.stringify({
            v: 1,
            [KEEP_RECENT_CLICKS]: true,
            [DOWNLOAD_PREPEND_JOBID]: true
        });

        const { config, storageMock } = loadConfigWithStorage(serialized);

        config.setKeepRecentClicks("true");
        expect(config.keepRecentClicks()).toBe(true);

        config.setKeepRecentClicks(false);
        expect(config.keepRecentClicks()).toBe(false);

        expect(storageMock.set).toHaveBeenCalled();
    });

    test("getConf returns undefined (and logs) for unknown key without throwing", () => {
        const { config } = loadConfigWithStorage(null);

        const value = config.getConf("nonExistingKey");
        expect(value).toBeUndefined();
    });

    test("getConfigMap returns a shallow copy", () => {
        const { config } = loadConfigWithStorage(null);

        const map1 = config.getConfigMap();
        const map2 = config.getConfigMap();

        // different references
        expect(map1).not.toBe(map2);
        // same contents
        expect(map1).toEqual(map2);
    });
});
