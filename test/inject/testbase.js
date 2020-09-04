const puppeteer = require("puppeteer");
const windowWidth = 1080;
const windowHeight = 800;

const launchBrowser = async function () {
    return await puppeteer.launch({
        headless: false, // extension are allowed only in head-full mode
        args: [
            "--disable-extensions-except=" + resolvePath("../../build"),
            "--load-extension=" + resolvePath("../../build"),
            "--lang=zh-CN,zh",
            "--no-sandbox",
            "--window-size=" + windowWidth + "," + windowHeight
        ],
        // executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
        defaultViewport: {width: windowWidth, height: windowHeight}
    });
};

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

const dummyItems = function (count) {
    let ret = [];
    for (let i = 0 ; i < count; i++) {
        ret.push({});
    }

    return ret;
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
    // matches images array
    // 1. literals: ["url1", "url2", ...]
    // 2. regex: [{regex: /regex/, count: 1}, ...]
    // 3. object match: [{url: "url1", retries: ["retry_url1", "retry_url2", ...]}, ... ]
    for (const image of images) {
        if (image instanceof String || typeof image === "string") {
            expect(mid['o']['images']).toContain(image);
        } else if (typeof image === "object") {
            if (image.regex) {
                let count = image.count || 1;
                mid['o']['images'].forEach((image) =>{
                    if (typeof image == "string" && image.match(image.regex)) {
                        count--;
                    }
                })
                expect(count).toBe(0);
            } else if (image.url) {
                expect(mid['o']['images']).toContainEqual(image);
            }
            // empty object for dummy item
        }
    }

    expect(mid['o']['folder']).toBe(folder);

    await page.close();
    return mid;
};

exports.testDirectDownload = testDirectDownload;
exports.resolvePath = resolvePath;
exports.launchBrowser = launchBrowser;
exports.dummyItems = dummyItems;
