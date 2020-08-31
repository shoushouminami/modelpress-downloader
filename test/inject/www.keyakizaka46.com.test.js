const {testDirectDownload, launchBrowser, dummyItems} = require("./testbase");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test keyakizaka46 blog article", async () => {
    await testDirectDownload(
        browser,
        "https://www.keyakizaka46.com/s/k46o/diary/detail/35182",
        "www.keyakizaka46.com-s-k46o-diary-detail-35182/",
        ["https://cdn.keyakizaka46.com/files/14/diary/k46/member/moblog/202008/mob9VpR6l.jpg",
            "https://cdn.keyakizaka46.com/files/14/diary/k46/member/moblog/202008/mobFNEkQC.jpg"]);
});

test("Test keyakizaka46 blog article 2", async () => {
    await testDirectDownload(
        browser,
        "https://www.keyakizaka46.com/s/k46o/diary/detail/35372",
        "www.keyakizaka46.com-s-k46o-diary-detail-35372/",
        ["https://cdn.keyakizaka46.com/files/14/diary/k46/member/moblog/202008/mobCejED7.jpg",
            "https://cdn.keyakizaka46.com/files/14/diary/k46/member/moblog/202008/mobwY7lqT.jpg",
            "https://cdn.keyakizaka46.com/files/14/diary/k46/member/moblog/202008/mobaQfM1H.jpg",
            "https://cdn.keyakizaka46.com/files/14/diary/k46/member/moblog/202008/mobymt99y.jpg",
            "https://cdn.keyakizaka46.com/files/14/diary/k46/member/moblog/202008/mobMBuNVs.jpg"]);
});
