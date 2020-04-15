const {testDirectDownload, launchBrowser} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test thetv.jp image page", async () => {
    await testDirectDownload(
        browser,
        "https://thetv.jp/news/detail/204813/1245284/",
        "thetv.jp-news-detail-204813-1245284-/",
        ["https://thetv.jp/i/nw/204813/1245283.jpg",
            "https://thetv.jp/i/nw/204813/1245284.jpg",
            "https://thetv.jp/i/nw/204813/1245285.jpg",
            "https://thetv.jp/i/nw/204813/1245286.jpg",
            "https://thetv.jp/i/nw/204813/1245287.jpg"]);
});

test("Test thetv.jp article page", async () => {
    await testDirectDownload(
        browser,
        "https://thetv.jp/news/detail/204813/",
        "thetv.jp-news-detail-204813-/",
        ["https://thetv.jp/i/nw/204813/1245283.jpg",
            "https://thetv.jp/i/nw/204813/1245284.jpg",
            "https://thetv.jp/i/nw/204813/1245285.jpg",
            "https://thetv.jp/i/nw/204813/1245286.jpg",
            "https://thetv.jp/i/nw/204813/1245287.jpg"],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        });
});

test("Test talent.thetv.jp single image", async () => {
    await testDirectDownload(
        browser,
        "https://talent.thetv.jp/person/1000031439/",
        "talent.thetv.jp-person-1000031439-/",
        ["https://thetv.jp/i/tl/100/0031/1000031439_r.jpg"]);
});

test("Test thetv.jp program home page", async () => {
    await testDirectDownload(
        browser,
        "https://thetv.jp/program/0000974553/",
        "thetv.jp-program-0000974553-/",
        ["https://thetv.jp/i/pg/program_images/0000665404_2_v.jpg"]);
});

test("Test thetv.jp matome home page", async () => {
    await testDirectDownload(
        browser,
        "https://thetv.jp/feature/matome/725/",
        "thetv.jp-feature-matome-725-/",
        ["https://thetv.jp/i/nw/matome/725.jpg"]);
});

