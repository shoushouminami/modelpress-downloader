const {testDirectDownload, launchBrowser, dummyItems} = require("./testbase");
const {re} = require("../../src/inject/7gogo.jp");

test("Test regex", () => {
    let m = "https://contents.7gogo.jp/stamp/0022/0022_012_01.png".match(re);
    expect(m).toBeTruthy();

    m = "https://contents.7gogo.jp/stamp/0017/0017_014_01.png".match(re);
    expect(m).toBeTruthy();

    m = "https://stat.7gogo.jp/appimg_images/20200419/23/df/ua/j/o19201440p.jpg".match(re);
    expect(m).toBeNull();
});

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});


test("Test 7gogo.jp hoshino-minami", async () => {
    await testDirectDownload(
        browser,
        "https://7gogo.jp/hoshino-minami",
        "7gogo.jp-hoshino-minami/",
        ["https://stat.7gogo.jp/appimg_images/20160611/11/9f/Oe/j/o10000751p.jpg",
            "https://stat.7gogo.jp/appimg_images/20160611/11/73/QT/j/o10000751p.jpg",
     "https://stat.7gogo.jp/appimg_images/20160611/11/90/4A/j/o10000751p.jpg"]);
});
