"use strict";

const puppeteer = require('puppeteer');

(async function main() {
    try {
        const browser = await puppeteer.launch({
            headless: false, // extension are allowed only in head-full mode
            args: [
                '--lang=zh-CN,zh',
                '--no-sandbox'
            ],
            // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
        });
        // const browser = await puppeteer.launch({ headless: false });
        const [page] = await browser.pages();

        await page.goto('https://twitter.com/nogizaka46/status/1149196527375511552', {waitUtil: ["load", "domcontentloaded", "networkidle0"]});
        browser.close();
    } catch (err) {
        console.error(err);
    }
})();