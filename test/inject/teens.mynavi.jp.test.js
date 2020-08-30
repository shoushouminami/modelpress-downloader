const {testDirectDownload, launchBrowser, dummyItems} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test news.mynavi.jp report article page", async () => {
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
     "https://teens.mynavi.jp/main/files/20200422/11826325286473.jpg"].concat(dummyItems(16)));
});

test("Test news.mynavi.jp challenge article page", async () => {
    await testDirectDownload(
        browser,
        "https://teens.mynavi.jp/challenge/detail/12485",
        "teens.mynavi.jp-challenge-detail-12485/",
        [ "https://teens.mynavi.jp/main/files/20200731/hurihura07303.jpg",
            "https://teens.mynavi.jp/main/files/20200731/hurihura07304.jpg",
     "https://teens.mynavi.jp/main/files/20200731/hurihura07301.jpg",
     "https://teens.mynavi.jp/main/files/20200731/hurihura07305.jpg",
     "https://teens.mynavi.jp/main/files/20200731/hamabepre.jpg",
     "https://teens.mynavi.jp/main/files/20200709/mynavitwitter0709a.jpg",
     "https://teens.mynavi.jp/main/files/20200709/mynaviinstagram0709a..jpg",
     "https://teens.mynavi.jp/main/files/20200818/profile0621.jpg",
     "https://teens.mynavi.jp/main/files/20200818/story06213.jpg"]);
});

test("Test news.mynavi.jp report article single page", async () => {
    await testDirectDownload(
        browser,
        "https://teens.mynavi.jp/report/detail/12516",
        "teens.mynavi.jp-report-detail-12516/",
        [ "https://teens.mynavi.jp/main/files/20200827/takikabu0828.jpg"]);
});
