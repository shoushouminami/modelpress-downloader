const puppeteer = require("puppeteer");

// Test blog.nogizaka46.com
test("Test http://blog.nogizaka46.com/fourth/2019/06/051125.php", async () => {
    const browser = await puppeteer.launch({
        headless: false, // extension are allowed only in head-full mode
        args: [
            '--lang=zh-CN,zh',
            '--no-sandbox',
            "--disable-extensions-except=../../build",
            "--load-extension=../../build"
        ],
        // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });
    const page = await browser.newPage();

    try {
        await page.goto("http://blog.nogizaka46.com/fourth/2019/06/051125.php", {timeout: 10000, waitUtil: ["load", "domcontentloaded", "networkidle0"]});
    } catch (ignored) {}

    await page.addScriptTag({path: "inject/mock.js"});
    await page.addScriptTag({path: "../src/inject.js"});

    const executionContext = await page.mainFrame().executionContext();
    const mid = await executionContext.evaluate("window._mid");
    expect(mid).toBeDefined();
    expect(mid['o']).toBeDefined();
    expect(mid['o']['supported']).toBeTruthy();
    expect(mid['o']['images']).toHaveLength(5);

    page.close();
    browser.close();
});
