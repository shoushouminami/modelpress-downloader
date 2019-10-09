const puppeteer = require('puppeteer-core');

test('adds 1 + 2 to equal 3', async () => {
    let browser = await puppeteer.launch({
        headless: false, // extension are allowed only in head-full mode
        args: [
            '--disable-extensions-except=../build',
            '--load-extension=../build',
            '--lang=zh-CN,zh',
            '--no-sandbox'
        ],
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });

    const page = await browser.newPage();
    await page.goto("http://blog.nogizaka46.com/fourth/2019/06/051125.php");
    await page.addScriptTag({path: "./mock.js"});
    await page.addScriptTag({path: "../src/inject.js"});

    const executionContext = await page.mainFrame().executionContext();
    const mid = await executionContext.evaluate("window._mid");
    console.log(mid);
    expect(mid).toBeDefined();
    await browser.close();
});

