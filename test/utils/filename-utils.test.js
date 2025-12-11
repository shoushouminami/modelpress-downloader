// Now require the module under test (it will use the mocked logger)
const { applyPattern, resolvePattern } = require("../../src/utils/filename-utils");

const errorMock = jest.fn();
const loggerFactoryMock = jest.fn(() => ({
    error: errorMock,
}));

jest.mock("../../src/logger2", () => { return () => { return {error: () => {}}}});
describe("applyPattern", () => {
    // beforeEach(() => {
    //     errorMock.mockClear();
    // });

    test("replaces placeholders with corresponding values", () => {
        const pattern = "{filename}-{host}-{pathname}";
        const values = {
            filename: "image01",
            host: "example.com",
            pathname: "gallery",
        };

        const result = applyPattern(pattern, values);

        expect(result).toBe("image01-example.com-gallery");
    });

    test("replaces missing keys with empty string", () => {
        const pattern = "{filename}-{host}-{missing}";
        const values = {
            filename: "file",
            host: "example.com",
            // missing key is not present
        };

        const result = applyPattern(pattern, values);

        // {missing} → ""
        expect(result).toBe("file-example.com-");
    });

    test("only replaces keys of length >= 3", () => {
        const pattern = "{ab}-{abc}-{abcd}";
        const values = {
            ab: "SHOULD_NOT_REPLACE",
            abc: "X",
            abcd: "Y",
        };

        const result = applyPattern(pattern, values);

        // {ab} doesn't match regex (needs >=3 chars)
        expect(result).toBe("{ab}-X-Y");
    });

    test("leaves non-matching braces untouched", () => {
        const pattern = "{a}-{ab}-{abc}-{abcd}-{_x}";
        const values = {
            abc: "X",
            abcd: "Y",
            _x: "Z",
        };

        const result = applyPattern(pattern, values);

        // {a} & {ab} {_x} too short, not replaced
        // others replaced as usual
        expect(result).toBe("{a}-{ab}-X-Y-{_x}");
    });

    test("returns original string if there are no placeholders", () => {
        const pattern = "no-placeholders-here";
        const values = {
            something: "else",
        };

        const result = applyPattern(pattern, values);

        expect(result).toBe("no-placeholders-here");
    });
});

describe("resolvePattern", () => {
    beforeEach(() => {
        errorMock.mockClear();
        loggerFactoryMock.mockClear();
    });

    test("builds replacementMap from possiblePatternList and resolves pattern", () => {
        const pattern = "{filename}-{host}-{pathname}-{missing}";
        const possiblePatternList = [
            "{filename}",
            "{host}",
            "{pathname}",
            "{missing}",
        ];

        const downloadContext = {
            filename: "photo",
            host: "example.com",
            pathname: "folder/file",
            // missing: undefined on purpose
        };

        const result = resolvePattern(pattern, possiblePatternList, downloadContext);

        // missing is undefined → "" via applyPattern
        expect(result).toBe("photo-example.com-folder/file-");
    });

    test("logs error for bad patterns and ignores them", () => {
        const pattern = "{filename}-{host}-{pathname}";
        const possiblePatternList = [
            "{filename}",
            "host",          // missing braces → bad
            "{x}",           // too short to be valid placeholder string for resolvePattern? (length <= 3)
            123,             // non-string
            "{pathname}",
        ];

        const downloadContext = {
            filename: "f",
            host: "h",
            pathname: "p",
        };

        const result = resolvePattern(pattern, possiblePatternList, downloadContext);

        // Only "{filename}" and "{pathname}" are valid: string, length > 4, starts with "{" and ends with "}"
        expect(result).toBe("f-{host}-p");
    });

    test("returns empty string for unresolved placeholders when context lacks keys", () => {
        const pattern = "{filename}-{host}-{pathname}";
        const possiblePatternList = [
            "{filename}",
            "{host}",
            "{pathname}"
        ];

        const downloadContext = {
            filename: "f",
            // host and pathname are missing
        };

        const result = resolvePattern(pattern, possiblePatternList, downloadContext);

        // host and pathname become empty strings
        expect(result).toBe("f--");
    });

    test("ignores patterns that are too short or malformed", () => {
        const pattern = "{abc}-{abcd}-{abcde}";
        const possiblePatternList = [
            "{abc}",     // length 5, ok
            "{ab}",      // length 4, but p.length > 4? This is false → bad pattern
            "abcd",      // no braces → bad
            "{abcde}",   // ok
        ];
        const downloadContext = {
            abc: "ONE",
            abcde: "TWO",
        };

        const result = resolvePattern(pattern, possiblePatternList, downloadContext);

        expect(result).toBe("ONE-{abcd}-TWO");
    });
});
