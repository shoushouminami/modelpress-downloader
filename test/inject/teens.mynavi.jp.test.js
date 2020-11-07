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
        "https://teens.mynavi.jp/report/detail/12602",
        "teens.mynavi.jp-report-detail-12602/",
        [
            "https://teens.mynavi.jp/main/files/20201022/teshima10271.jpg",
            "https://teens.mynavi.jp/main/files/20201022/teshima10272.jpg",
            "https://teens.mynavi.jp/main/files/20201022/teshima1027.png",
            "https://teens.mynavi.jp/main/files/20200818/profile0621.jpg",
            "https://teens.mynavi.jp/main/files/20200818/story06213.jpg",
            "https://teens.mynavi.jp/main/files/20201022/teshima10274.jpg"
        ]
    );
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
