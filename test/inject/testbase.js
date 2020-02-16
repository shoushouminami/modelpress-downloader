/**
 * Run the function {@code func} if it is of type function, with the given arguments
 */
const runFuncIfDefined = async function(func, args) {
    if (func && func instanceof Function && func['call'] && func['call'] instanceof Function) {
        if (func.constructor.name === "AsyncFunction") {
            await func.apply(undefined, args);
        } else {
            func.apply(undefined, args);
        }
    }
};

const resolvePath = function (relativePath) {
    return __dirname + "/./" + relativePath;
};
/**
 *
 * @param browser
 * @param url
 * @param folder
 * @param images
 * @param ops An object with callbacks for customized browser action before assertion or customized assertion
 * @returns {Promise<void>}
 */
const testDirectDownload = async function (browser, url, folder, images, ops) {
    const page = await browser.newPage();

    // callback hook to customize action before going to the url. (Such as disable CSP enforcements)
    await runFuncIfDefined(ops && ops['prenavigate'], [page]);

    try {
        await page.goto(url, {timeout: 10000, waitUtil: ["load", "domcontentloaded", "networkidle0"]});
    } catch (ignored) {}


    // callback hook to customize action after loading the page, such as scrolling
    await runFuncIfDefined(ops && ops['preinject'], [page]);

    await page.addScriptTag({path: resolvePath("mock.js")});
    await page.addScriptTag({path: resolvePath("../../build/inject.js")});

    const executionContext = await page.mainFrame().executionContext();
    const mid = await executionContext.evaluate("window._mid");
    expect(mid).toBeDefined();
    expect(mid['o']).toBeDefined();
    expect(mid['o']['supported']).toBeTruthy();
    expect(mid['o']['images']).toHaveLength(images.length);
    for (const image of images) {
        if (image instanceof String || typeof image === "string") {
            expect(mid['o']['images']).toContain(image);
        } else if (typeof image === "object" && image.url) {
            expect(mid['o']['images']).toContainEqual(image);
        }

    }

    expect(mid['o']['folder']).toBe(folder);

    page.close();
    return mid;
};

exports.testDirectDownload = testDirectDownload;
exports.resolvePath = resolvePath;