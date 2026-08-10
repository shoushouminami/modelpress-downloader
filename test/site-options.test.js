// site-options.test.js

// --- Mocks for dependencies ---

jest.mock("../src/storage", () => ({
    get: jest.fn(),
    set: jest.fn()
}));

const mockedLogger = {
    debug: jest.fn(),
    error: jest.fn()
};

jest.mock("../src/logger2", () => {
    // logger2(moduleId) -> { debug: fn }
    return () => mockedLogger;
});

jest.mock("../src/i18n", () => {
    return {
        getText: jest.fn(),
        getMessageDescription: jest.fn(),
    };
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
    let isOptionValueChanged;
    let forEachOptionValueChanged;
    let logger;
    let i18n;
    let setOptionValueToMap;

    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();

        storage = require("../src/storage");
        mod = require("../src/site-options");
        i18n = require("../src/i18n");
        logger = require("../src/logger2")(); // same mock instance shape
        createSiteOptions = mod.createSiteOptions;
        removeNonPersistentKeys = mod.removeNonPersistentKeys;
        patchObjectProperties = mod.patchObjectProperties;
        PERSISTENT_FIELDS = mod.PERSISTENT_FIELDS;
        COMMON_OPTIONS = mod.COMMON_OPTIONS;
        DOWNLOAD_PREPEND_JOBID = mod.DOWNLOAD_PREPEND_JOBID;
        isOptionValueChanged = mod.isOptionValueChanged;
        forEachOptionValueChanged = mod.forEachOptionValueChanged;
        setOptionValueToMap = mod.setOptionValueToMap;
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
        expect(all[DOWNLOAD_PREPEND_JOBID]).toStrictEqual({
            i18nName: "configDownloadPrependJobId",
            index: 999,
            label: "Prepend sequence number to file name",
            type: "checkbox",
            checked: true,
            userInteracted: false
        });
        // And site-specific
        expect(all.siteOnly).toBeDefined();

        expect(all.siteOnly.label).toBe("Site only option");
    });

    test("getAllOptions returns union of COMMON_OPTIONS and site-specific options plus overwriting common option at key level", () => {
        const siteOpts = createSiteOptions({
            host: "host",
            options: {
                siteOnly: {
                    index: 5,
                    label: "Site only option",
                    type: "checkbox",
                    checked: false,
                    userInteracted: false
                },
                [DOWNLOAD_PREPEND_JOBID]: {
                    checked: false,
                    hidden: true
                }
            }
        });

        const all = siteOpts.getAllOptions();

        // Should include common option
        expect(all[DOWNLOAD_PREPEND_JOBID]).toBeDefined();
        expect(all[DOWNLOAD_PREPEND_JOBID]).toStrictEqual({
            i18nName: "configDownloadPrependJobId",
            index: 999,
            label: "Prepend sequence number to file name",
            type: "checkbox",
            checked: false,
            hidden: true,
            userInteracted: false
        });
        // And site-specific
        expect(all.siteOnly).toBeDefined();

        expect(all.siteOnly.label).toBe("Site only option");
    });

    test("persistOption persists only whitelisted fields for site-specific option", () => {
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
        siteOpts.persistOption("opt1", {
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

    test("persistOption persists only whitelisted fields for COMMON_OPTION", () => {
        const siteOpts = createSiteOptions({
            host: "host",
            options: {
                // no override for DOWNLOAD_PREPEND_JOBID
            }
        });

        siteOpts.persistOption(DOWNLOAD_PREPEND_JOBID, {
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

    test("persistOption throws when updating unknown option", () => {
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
            siteOpts.persistOption("unknownOpt", { checked: true })
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

    describe("isOptionValueChanged", () => {
        test("returns false when option missing on both sides", () => {
            const prev = {};
            const curr = {};
            expect(isOptionValueChanged(prev, curr, "downloadVideo")).toBe(false);
        });

        test("returns true when option exists only on current side", () => {
            const prev = {};
            const curr = {
                downloadVideo: { type: "checkbox", checked: true }
            };
            // default field is based on prev (missing) => uses ["value"]
            // undefined !== undefined would be false, BUT since curr has no "value", still false.
            // If you want "missing on one side = changed" for ALL types/fields, pass fields explicitly.
            expect(isOptionValueChanged(prev, curr, "downloadVideo", ["checked"])).toBe(true);
        });

        test("returns true when option exists only on prev side", () => {
            const prev = {
                downloadVideo: { type: "checkbox", checked: true }
            };
            const curr = {};
            expect(isOptionValueChanged(prev, curr, "downloadVideo")).toBe(true); // checkbox => checks "checked"
        });

        test("checkbox defaults to checking 'checked' and detects change", () => {
            const prev = { opt: { type: "checkbox", checked: true } };
            const curr = { opt: { type: "checkbox", checked: false } };
            expect(isOptionValueChanged(prev, curr, "opt")).toBe(true);
        });

        test("checkbox defaults to checking 'checked' and returns false if same", () => {
            const prev = { opt: { type: "checkbox", checked: true } };
            const curr = { opt: { type: "checkbox", checked: true } };
            expect(isOptionValueChanged(prev, curr, "opt")).toBe(false);
        });

        test("non-checkbox defaults to checking 'value' and detects change", () => {
            const prev = { opt: { type: "text", value: "a" } };
            const curr = { opt: { type: "text", value: "b" } };
            expect(isOptionValueChanged(prev, curr, "opt")).toBe(true);
        });

        test("explicit fields override defaults (compare multiple fields)", () => {
            const prev = { opt: { type: "text", value: "a", userInteracted: false } };
            const curr = { opt: { type: "text", value: "a", userInteracted: true } };
            expect(isOptionValueChanged(prev, curr, "opt", ["value", "userInteracted"])).toBe(true);
        });

        test("explicit fields: returns false if all specified fields match", () => {
            const prev = { opt: { type: "text", value: "a", userInteracted: false } };
            const curr = { opt: { type: "text", value: "a", userInteracted: false } };
            expect(isOptionValueChanged(prev, curr, "opt", ["value", "userInteracted"])).toBe(false);
        });
    });

    describe("Test forEachOptionValueChanged", () => {

        test("logs error and returns if callback is not a function", () => {
            forEachOptionValueChanged({}, {}, null);
            expect(logger.error).toHaveBeenCalledTimes(1);
        });

        test("handles null/undefined options (prevOptions/currentOptions) without throwing", () => {
            const cb = jest.fn();

            expect(() => forEachOptionValueChanged(null, undefined, cb)).not.toThrow();

            // With both nullish => union-of-keys empty => no calls
            expect(cb).not.toHaveBeenCalled();
        });

        test("iterates the union of option names from both objects", () => {
            const prevOptions = { a: { checked: true }, b: { checked: false } };
            const currentOptions = { b: { checked: false }, c: { checked: true } };

            const cb = jest.fn();

            forEachOptionValueChanged(prevOptions, currentOptions, cb);

            // Expect callback fired for c.checked only
            expect(cb).toHaveBeenCalledTimes(2);
            expect(cb).toHaveBeenCalledWith(
                "a",
                "checked",
                true, // prevOptions.c doesn't exist
                undefined       // currentOptions.c.checked
            );
            expect(cb).toHaveBeenCalledWith(
                "c",
                "checked",
                undefined, // prevOptions.c doesn't exist
                true       // currentOptions.c.checked
            );
        });

        test("calls callback for each field that changed (per VALUE_FIELDS)", () => {
            const prevOptions = {
                x: { checked: false, value: "a" },
            };
            const currentOptions = {
                x: { checked: true, value: "b" },
            };

            const cb = jest.fn();

            forEachOptionValueChanged(prevOptions, currentOptions, cb);

            // It should call twice: one for checked, one for value
            expect(cb).toHaveBeenCalledTimes(2);

            // Assert each call payload (order depends on VALUE_FIELDS order)
            expect(cb).toHaveBeenCalledWith("x", "checked", false, true);
            expect(cb).toHaveBeenCalledWith("x", "value", "a", "b");
        });

        test("does not call callback when nothing changed", () => {
            const prevOptions = { x: { checked: true, value: "a" } };
            const currentOptions = { x: { checked: true, value: "a" } };
            const cb = jest.fn();

            forEachOptionValueChanged(prevOptions, currentOptions, cb);

            expect(cb).not.toHaveBeenCalled();
        });
    });
    
    describe("updateOptionValue", () => {
        let options;
        beforeEach(() => {
            options = createSiteOptions({
                host: "host",
                options: {
                    parent: { type: "checkbox" },
                    "parent:childA": { type: "checkbox" },
                    "parent:childB": { type: "checkbox" },
                    textParent: { type: "text" },
                    textChild: { type: "checkbox" },
                }
            });
        });

        test("throws if optName is unknown", () => {
            expect(() => options.updateOptionValue("nope", true)).toThrow(/Updating unknown option/);
        });

        test("sets userInteracted=true for target option and persists it", () => {
            const updated = options.updateOptionValue("parent", true);

            expect(updated.parent.checked).toBe(true);
            expect(updated.parent.userInteracted).toBe(true);

            const opt = options.getOption("parent");
            expect(opt.checked).toBe(true);
            expect(opt.userInteracted).toBe(true);
        });

        test("when top-level checkbox is turned off, nested options are set to false", () => {
            expect(options.getOption("parent:childA").checked).toBe(undefined);
            expect(options.getOption("parent:childB").checked).toBe(undefined);

            const updated = options.updateOptionValue("parent", false);
            
            // Nested were forced off in memory
            expect(updated["parent:childA"].checked).toBe(false);
            expect(updated["parent:childA"].hidden).toBe(true);
            expect(updated["parent:childA"].userInteracted).toBe(undefined);
            expect(updated["parent:childB"].checked).toBe(false);
            expect(updated["parent:childB"].hidden).toBe(true);
            expect(updated["parent:childB"].userInteracted).toBe(undefined);

            // read again and they are NOT persisted (no userInteracted)
            expect(options.getPersistedOptions()["parent:childA"]).toBe(undefined);
            expect(options.getPersistedOptions()["parent:childB"]).toBe(undefined);
        });

        test("persists nested option only if nested was previously userInteracted", () => {
            options = createSiteOptions({
                host: "host",
                options: {
                    parent: { type: "checkbox" },
                    "parent:childA": { type: "checkbox" },
                    "parent:childB": { type: "checkbox", userInteracted: true},
                    textParent: { type: "text" }
                }
            });

            const updated = options.updateOptionValue("parent", false);

            expect(updated.parent.checked).toBe(false);
            expect(updated.parent.userInteracted).toBe(true);
            // parent persisted always
            let opt = options.getOption("parent");
            expect(opt.checked).toBe(false);
            expect(opt.userInteracted).toBe(true);

            // childA userInteracted=false -> should NOT persist
            // childB userInteracted=true -> SHOULD persist
            // parent persisted always
            const persisted = options.getPersistedOptions();
            expect(persisted["parent:childA"]).toBe(undefined);

            expect(persisted["parent:childB"].checked).toBe(false);
            expect(persisted["parent:childB"].userInteracted).toBe(true);
        });

        test("does not apply nested-off logic when optName is already nested", () => {
            const updated = options.updateOptionValue("parent:childA", false);

            // turned off and set userInteracted
            expect(updated["parent:childA"].checked).toBe(false);
            expect(updated["parent:childA"].userInteracted).toBe(true);

            // should NOT touch sibling nested keys
            expect(updated["parent:childB"]).toStrictEqual({
                 type: "checkbox",
                 hidden: false
            });
        });

        test("does not apply nested-off logic for non-checkbox parent even if newValue is falsy", () => {
            const updated = options.updateOptionValue("textParent", "");

            // no nested turn-off, only the target option updated
            expect(updated["textParent"].value).toBe("");
            // should not attempt nested for textParent
            expect(updated["textChild"]).toStrictEqual({
                type: "checkbox" 
            });

            const textParent = options.getOption("textParent");
            expect(textParent.value).toBe("");
            expect(textParent.userInteracted).toBe(true);

            const textChild = options.getOption("textChild");
            expect(textChild).toStrictEqual({
                type: "checkbox"
            });
        });
    });

    describe("tabLocal options", () => {
        function makeSiteOptions() {
            return createSiteOptions({
                host: "host",
                options: {
                    collectMode: {
                        index: 1,
                        label: "Collect Mode",
                        type: "checkbox",
                        checked: false,
                        tabLocal: true
                    },
                    downloadVideo: {
                        index: 2,
                        label: "Download Video",
                        type: "checkbox",
                        checked: false
                    }
                }
            });
        }

        test("persistOption is a no-op for tabLocal options", () => {
            const siteOpts = makeSiteOptions();

            siteOpts.persistOption("collectMode", { checked: true, userInteracted: true });

            expect(siteOpts.getPersistedOptions().collectMode).toBeUndefined();
        });

        test("persistOption still writes through for non-tabLocal options (control case)", () => {
            const siteOpts = makeSiteOptions();

            siteOpts.persistOption("downloadVideo", { checked: true, userInteracted: true });

            expect(siteOpts.getPersistedOptions().downloadVideo).toEqual({
                checked: true,
                userInteracted: true
            });
        });

        test("updateOptionValue updates a tabLocal option in-memory but never persists it", () => {
            const siteOpts = makeSiteOptions();

            const updated = siteOpts.updateOptionValue("collectMode", true);

            expect(updated.collectMode.checked).toBe(true);
            expect(siteOpts.getOption("collectMode").checked).toBe(true);
            expect(siteOpts.getPersistedOptions().collectMode).toBeUndefined();
        });

        test("getAllOptions ignores any persisted value for a tabLocal option", () => {
            const siteOpts = makeSiteOptions();

            // control: a normal option's persisted value is honored
            siteOpts.persistOption("downloadVideo", { checked: true });
            // attempted (no-op) persist of the tabLocal option
            siteOpts.persistOption("collectMode", { checked: true });

            const all = siteOpts.getAllOptions();
            expect(all.downloadVideo.checked).toBe(true);
            expect(all.collectMode.checked).toBe(false);
        });
    });

    describe("tab-local option cache (applyTabLocalOptions / saveTabLocalOptions)", () => {
        beforeEach(() => {
            // tests run under plain Node (no `window`), so getGlobalObjectCache falls back to
            // globalThis - reset it between tests the same way a fresh tab would start with
            // nothing cached
            delete globalThis._mid_;
        });

        test("getTabLocalOptionsCache returns the same object on repeated calls (persists for the tab)", () => {
            const first = mod.getTabLocalOptionsCache();
            first.collectMode = { checked: true };

            expect(mod.getTabLocalOptionsCache()).toBe(first);
            expect(mod.getTabLocalOptionsCache().collectMode).toEqual({ checked: true });
        });

        test("applyTabLocalOptions leaves options untouched when nothing has been cached yet", () => {
            const options = {
                collectMode: { checked: false, type: "checkbox", tabLocal: true }
            };

            mod.applyTabLocalOptions(options);

            expect(options.collectMode.checked).toBe(false);
        });

        test("saveTabLocalOptions followed by applyTabLocalOptions round-trips the value", () => {
            mod.saveTabLocalOptions({
                collectMode: { checked: true, type: "checkbox", tabLocal: true }
            });

            // simulate a fresh set of coded defaults, as built by a content script's inject()
            const freshDefaults = {
                collectMode: { checked: false, type: "checkbox", tabLocal: true }
            };
            mod.applyTabLocalOptions(freshDefaults);

            expect(freshDefaults.collectMode.checked).toBe(true);
        });

        test("saveTabLocalOptions ignores options not marked tabLocal", () => {
            mod.saveTabLocalOptions({
                downloadVideo: { checked: true, type: "checkbox" }
            });

            expect(mod.getTabLocalOptionsCache().downloadVideo).toBeUndefined();
        });

        test("applyTabLocalOptions ignores options not marked tabLocal, even if a same-named cache entry exists", () => {
            // force an entry into the cache directly, bypassing the tabLocal guard in saveTabLocalOptions
            mod.getTabLocalOptionsCache().downloadVideo = { checked: true };

            const options = {
                downloadVideo: { checked: false, type: "checkbox" } // not tabLocal
            };
            mod.applyTabLocalOptions(options);

            expect(options.downloadVideo.checked).toBe(false);
        });

        test("saveTabLocalOptions only stores whitelisted PERSISTENT_FIELDS, not label/type/etc", () => {
            mod.saveTabLocalOptions({
                collectMode: {
                    index: 1,
                    label: "Collect Mode",
                    type: "checkbox",
                    checked: true,
                    tabLocal: true
                }
            });

            expect(mod.getTabLocalOptionsCache().collectMode).toEqual({ checked: true });
        });

        test("applyTabLocalOptions and saveTabLocalOptions handle null/undefined options without throwing", () => {
            expect(() => mod.applyTabLocalOptions(null)).not.toThrow();
            expect(() => mod.applyTabLocalOptions(undefined)).not.toThrow();
            expect(() => mod.saveTabLocalOptions(null)).not.toThrow();
            expect(() => mod.saveTabLocalOptions(undefined)).not.toThrow();
        });
    });
});
