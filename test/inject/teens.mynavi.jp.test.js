const {testDirectDownload, launchBrowser, dummyItems} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

// teens.mynavi.jp
test("Test news.mynavi.jp article page", async () => {
    await testDirectDownload(
        browser,
        "https://teens.mynavi.jp/report/detail/12397",
        "teens.mynavi.jp-report-detail-12397/",
        [ "https://teens.mynavi.jp/main/files/20200811/jkmem0812.jpg",
            "https://teens.mynavi.jp/main/files/20200421/11826098884764.jpg",
    "https://teens.mynavi.jp/main/files/20200421/11826109797108%20(1).jpg",
    "https://teens.mynavi.jp/main/files/20200421/11826085721918.jpg",
    "https://teens.mynavi.jp/main/files/20200421/11826085691653.jpg",
    "https://teens.mynavi.jp/main/files/20200421/11826085675587.jpg",
    "https://teens.mynavi.jp/main/files/20200421/11826085724312.jpg",
    "https://teens.mynavi.jp/main/files/20200421/11826325307566.jpg",
    "https://teens.mynavi.jp/main/files/20200421/11826325347850.jpg",
    "https://teens.mynavi.jp/main/files/20200422/11826325297385.jpg",
     "https://teens.mynavi.jp/main/files/20200422/11826325286473.jpg"]);
});
