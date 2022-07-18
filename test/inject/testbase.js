const puppeteer = require("puppeteer");
const WINDOW_WIDTH = 1080;
const WINDOW_HEIGHT = 800;
const pageutils = require("../pageutils");
const retries = require("../utils/retries");

/**
 * Returns a function which will return a browser instance for unit tests.
 * @returns {Function}
 */
function getBrowserFactory(beforeAll, afterAll) {
    let browser;

    beforeAll(async () => {
        browser = await launchBrowser();
    });

    afterAll(async () => {
        if (browser) {
            await browser.close();
        }
    });

    return function (){
        return browser;
    };
}

async function launchBrowser() {
    return await puppeteer.launch({
        headless: false, // extension are allowed only in head-full mode
        args: [
            "--disable-extensions-except=" + resolvePath("../../build"),
            "--load-extension=" + resolvePath("../../build"),
            "--lang=zh-CN,zh",
            "--no-sandbox",
            "--window-size=" + WINDOW_WIDTH + "," + WINDOW_HEIGHT,
            "--disable-dev-shm-usage"
        ],
        defaultViewport: {width: WINDOW_WIDTH, height: WINDOW_HEIGHT}
    });
}

/**
 * Run the function {@code func} if it is of type function, with the given arguments
 */
async function runFuncIfDefined(func, args) {
    if (func && func instanceof Function && func['call'] && func['call'] instanceof Function) {
        if (func.constructor.name === "AsyncFunction") {
            await func.apply(undefined, args);
        } else {
            func.apply(undefined, args);
        }
    }
}

/**
 *
 * @param relativePath relative path to this folder (test/inject)
 * @returns {string}
 */
function resolvePath(relativePath) {
    return __dirname + "/./" + relativePath;
}

function dummyItems(count) {
    let ret = [];
    for (let i = 0 ; i < count; i++) {
        ret.push({});
    }

    return ret;
}

async function injectScript(page, scriptPath) {
    return await page.addScriptTag({path: scriptPath});
    // return await page.evaluate(require("fs").readFileSync(scriptPath, 'utf8'));
}


/**
 * Emulates popup.js and injects "inject-cs.js" with retry
 * @param page
 * @returns {Promise<{o}|*>}
 */
async function emulateInjectWithRetry(page, ops) {
    await injectScript(page, resolvePath("../mock/mock-chrome-api.js"));
    await injectScript(page, resolvePath("../../build/test-inject.js"));
    const executionContext = await page.mainFrame().executionContext();
    // check for helper script and inject using puppeteer API
    let filepaths = await executionContext.evaluate(() => {
        let filepaths = [];
        document.querySelectorAll("span._mid-helper_").forEach((node) => {
            filepaths.push(node.dataset["src"]);
        })
        return filepaths;
    });
    for (const filepath of filepaths) {
        console.log("injecting helper script", filepath);
        await injectScript(page, resolvePath(filepath));
    }

    let mid = await executionContext.evaluate("window._mid");

    // callback hook to customize action after loading the page, such as scrolling
    await runFuncIfDefined(ops && ops['preretry'], [page]);

    // emulate retry logic in popup.js
    if (mid && mid.o && (mid.o.retry || mid.o.loading)) {
        await pageutils.wait(1000);
        await injectScript(page, resolvePath("../../build/test-inject.js"));
        await pageutils.wait(1000);
        mid = await executionContext.evaluate("window._mid");
    }

    return mid;
}

/**
 *
 * @param browser
 * @param url
 * @param folder
 * @param expectedImages
 * @param ops {{prenavigate?: Function, preinject?: Function, sizeMatch?: Function<a, b>}}
 *              An object with callbacks for customized browser action before assertion or customized assertion
 * @returns {Promise<Object>}
 */
async function testDirectDownload(browser, url, folder, expectedImages, ops= {}) {
    const page = await browser.newPage();
    await page.setBypassCSP(true);

    // callback hook to customize action before going to the url. (Such as disable CSP enforcements)
    await runFuncIfDefined(ops && ops['prenavigate'], [page]);

    try {
        await page.goto(url, {timeout: 15000, waitUtil: ["load", "domcontentloaded", "networkidle0"]});
    } catch (e) {}

    // callback hook to customize action after loading the page, such as scrolling
    await runFuncIfDefined(ops && ops['preinject'], [page]);
    // emulate popup.js and inject "inject-cs.js" with retry
    const mid = await emulateInjectWithRetry(page, ops);

    // callback hook to customize action after loading the page, such as scrolling
    await runFuncIfDefined(ops && ops['postinject'], [page]);

    expect(mid).toBeDefined();
    expect(mid['o']).toBeDefined();
    expect(mid['o']['supported']).toBeTruthy();

    // check window._mid.sendMessages for updateResult messages
    // overwrite _mid.o if found
    // this behavior emulates popup.js#updateMessage()
    if (mid.sendMessages && mid.sendMessages.length > 0) {
        mid.sendMessages
            .filter(payload => payload.what === "updateResult")
            .forEach(payload => mid.o = payload.msg)
    }

    const actualImages = mid['o']['images'];

    if (ops && ops.sizeMatch && typeof ops.sizeMatch === "function") {
        console.log(expect.getState().currentTestName,
            "expectedSize=", expectedImages.length,
            "actualSize=", actualImages.length);
        ops.sizeMatch(expectedImages.length, actualImages.length);
    } else {
        expect(actualImages).toHaveLength(expectedImages.length);
    }
    // matches images array
    // 1. literals: ["url1", "url2", ...]
    // 2. regex: [{regex: /regex/, count: 1}, ...]
    // 3. object match: [{url: "url1", retries: ["retry_url1", "retry_url2", ...]}, ...]
    // 4. prefix match:  [{prefix: "prefix-string", count: 1}, ...]
    for (const image of expectedImages) {
        if (image instanceof String || typeof image === "string") {
            expect(actualImages).toContain(image);
        } else if (typeof image === "object") {
            if (image.regex) {
                let count = image.count || 1;
                actualImages.forEach((m) => {
                    if (typeof m === "string" && m.match(image.regex)) {
                        count--;
                    }
                });
                expect(count).toBe(0);
            } else if (image.url) {
                expect(actualImages).toContainEqual(image);
            } else if (image.prefix) {
                let count = 1;
                actualImages.forEach((m) => {
                    if (typeof m === "string" && m.startsWith(image.prefix)) {
                        count--;
                    }
                });
                expect(count).toBe(0);
            }
            // empty object for dummy item
        }
    }

    if (folder instanceof String) {
        expect(mid['o']['folder']).toBe(folder);
    } else if (folder instanceof Function) {
        expect(folder(mid['o']['folder']));
    }

    await page.close();
    return mid;
}

async function testDirectDownloadWithRetry(browser, url, folder, images, ops= {}) {
    return await retries("TEST_RETRIES" in process.env ? parseInt(process.env.TEST_RETRIES) : 0, async () => {
        return await testDirectDownload(browser, url, folder, images, ops);
    });
}

exports.testDirectDownload = testDirectDownloadWithRetry;
exports.resolvePath = resolvePath;
exports.launchBrowser = launchBrowser;
exports.dummyItems = dummyItems;
exports.getBrowserFactory = getBrowserFactory;
