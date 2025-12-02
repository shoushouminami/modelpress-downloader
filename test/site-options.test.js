// site-options.test.js

// --- Mocks for dependencies ---

jest.mock("../src/storage", () => ({
    get: jest.fn(),
    set: jest.fn()
}));

jest.mock("../src/logger2", () => {
    // logger2(moduleId) -> { debug: fn }
    return () => ({
        debug: jest.fn()
    });
});

let lastCreateConfigManagerArgs = null;

// Simple in-memory config manager: respects defaults, getConfigMap, setConf
jest.mock("../src/config-manager", () => ({
    createConfigManager: (args) => {
        lastCreateConfigManagerArgs = args;
        // Deep copy defaults so tests can't accidentally mutate them
        let config = JSON.parse(JSON.stringify(args.defaults || {}));

        return {
            getConfigMap: () => JSON.parse(JSON.stringify(config)),
            setConf: (key, value) => {
                config = Object.assign({}, config, { [key]: value });
            }
        };
    }
}));

describe("site-options", () => {
    let storage;
    let mod;
    let createSiteOptions;
    let removeNonPersistentKeys;
    let patchObjectProperties;
    let PERSISTENT_FIELDS;
    let COMMON_OPTIONS;
    let DOWNLOAD_PREPEND_JOBID;

    beforeEach(() => {
        jest.resetModules();

        storage = require("../src/storage");
        mod = require("../src/site-options");
        createSiteOptions = mod.createSiteOptions;
        removeNonPersistentKeys = mod.removeNonPersistentKeys;
        patchObjectProperties = mod.patchObjectProperties;
        PERSISTENT_FIELDS = mod.PERSISTENT_FIELDS;
        COMMON_OPTIONS = mod.COMMON_OPTIONS;
        DOWNLOAD_PREPEND_JOBID = mod.DOWNLOAD_PREPEND_JOBID;
    });

    test("PERSISTENT_FIELDS contains checked, value, userInteracted", () => {
        expect(PERSISTENT_FIELDS.has("checked")).toBe(true);
        expect(PERSISTENT_FIELDS.has("value")).toBe(true);
        expect(PERSISTENT_FIELDS.has("userInteracted")).toBe(true);
    });

    test("COMMON_OPTIONS contains DOWNLOAD_PREPEND_JOBID definition", () => {
        expect(COMMON_OPTIONS[DOWNLOAD_PREPEND_JOBID]).toBeDefined();
        expect(COMMON_OPTIONS[DOWNLOAD_PREPEND_JOBID].checked).toBe(true);
        expect(COMMON_OPTIONS[DOWNLOAD_PREPEND_JOBID].type).toBe("checkbox");
    });

    test("removeNonPersistentKeys filters only persistent fields", () => {
        const input = {
            opt1: {
                index: 1,
                label: "foo",
                checked: true,
                value: 42,
                userInteracted: true,
                extra: "ignore"
            },
            opt2: {
                // no persistent fields at all
                index: 2,
                label: "bar",
                type: "checkbox"
            }
        };

        const result = removeNonPersistentKeys(input);

        expect(result.opt1).toEqual({
            checked: true,
            value: 42,
            userInteracted: true
        });

        // opt2 should not appear at all
        expect(result.opt2).toBeUndefined();
    });

    test("patchObjectProperties detects changes and no-changes", () => {
        const target = { a: 1, b: 2 };
        const changed = patchObjectProperties(target, { b: 3, c: 4 });

        expect(changed).toBe(true);
        expect(target).toEqual({ a: 1, b: 3, c: 4 });

        const unchanged = patchObjectProperties(target, { b: 3 });
        expect(unchanged).toBe(false);
    });

    test("patchObjectProperties with undefined src returns false and leaves target unchanged", () => {
        const target = { a: 1 };
        const changed = patchObjectProperties(target, undefined);

        expect(changed).toBe(false);
        expect(target).toEqual({ a: 1 });
    });

    test("getOption returns COMMON_OPTIONS value even if not passed into createSiteOptions", () => {
        const siteOpts = createSiteOptions({
            host: "host",
            // site-specific options does NOT include DOWNLOAD_PREPEND_JOBID
            options: {
                anotherOpt: {
                    index: 1,
                    label: "Another option",
                    type: "checkbox",
                    checked: false,
                    userInteracted: false
                }
            }
        });

        const opt = siteOpts.getOption(DOWNLOAD_PREPEND_JOBID);
        expect(opt).toBeDefined();
        expect(opt.label).toBe(COMMON_OPTIONS[DOWNLOAD_PREPEND_JOBID].label);
        expect(opt.checked).toBe(true);
        expect(opt.type).toBe("checkbox");
    });

    test("getAllOptions returns union of COMMON_OPTIONS and site-specific options", () => {
        const siteOpts = createSiteOptions({
            host: "host",
            options: {
                siteOnly: {
                    index: 5,
                    label: "Site only option",
                    type: "checkbox",
                    checked: false,
                    userInteracted: false
                }
            }
        });

        const all = siteOpts.getAllOptions();

        // Should include common option
        expect(all[DOWNLOAD_PREPEND_JOBID]).toBeDefined();
        // And site-specific
        expect(all.siteOnly).toBeDefined();

        expect(all.siteOnly.label).toBe("Site only option");
    });

    test("updateOption persists only whitelisted fields for site-specific option", () => {
        const siteOpts = createSiteOptions({
            host: "host",
            options: {
                opt1: {
                    index: 10,
                    label: "Site option",
                    type: "checkbox",
                    checked: false,
                    userInteracted: false
                }
            }
        });

        // Apply patch that includes persistent + non-persistent fields
        siteOpts.updateOption("opt1", {
            checked: true,
            value: 123,
            userInteracted: true,
            label: "Changed label (should NOT be persisted)"
        });

        const opt = siteOpts.getOption("opt1");

        // persisted fields
        expect(opt.checked).toBe(true);
        expect(opt.value).toBe(123);
        expect(opt.userInteracted).toBe(true);

        // non-persistent field should keep default
        expect(opt.label).toBe("Site option");
    });

    test("updateOption persists only whitelisted fields for COMMON_OPTION", () => {
        const siteOpts = createSiteOptions({
            host: "host",
            options: {
                // no override for DOWNLOAD_PREPEND_JOBID
            }
        });

        siteOpts.updateOption(DOWNLOAD_PREPEND_JOBID, {
            checked: false,
            userInteracted: true,
            value: "foo",
            label: "CHANGED (should not persist)"
        });

        const opt = siteOpts.getOption(DOWNLOAD_PREPEND_JOBID);

        expect(opt.checked).toBe(false);
        expect(opt.userInteracted).toBe(true);
        expect(opt.value).toBe("foo");

        // label from COMMON_OPTIONS
        expect(opt.label).toBe(COMMON_OPTIONS[DOWNLOAD_PREPEND_JOBID].label);
    });

    test("updateOption throws when updating unknown option", () => {
        const siteOpts = createSiteOptions({
            host: "host",
            options: {
                opt1: {
                    index: 1,
                    label: "Known option",
                    type: "checkbox",
                    checked: false,
                    userInteracted: false
                }
            }
        });

        expect(() =>
            siteOpts.updateOption("unknownOpt", { checked: true })
        ).toThrow(/unknown option/i);
    });

    test("storageKey passed to createConfigManager includes host", () => {
        createSiteOptions({
            host: "host",
            options: {
                opt1: {
                    index: 1,
                    label: "Sample",
                    type: "checkbox",
                    checked: false,
                    userInteracted: false
                }
            }
        });

        expect(lastCreateConfigManagerArgs).not.toBeNull();
        expect(lastCreateConfigManagerArgs.storageKey).toBe("options:host");
    });
});
