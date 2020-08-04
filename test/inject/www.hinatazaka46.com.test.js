const {testDirectDownload, launchBrowser, dummyItems} = require("./testbase");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test hinatazaka46 blog article", async () => {
    await testDirectDownload(
        browser,
        "https://www.hinatazaka46.com/s/official/diary/detail/35006",
        "www.hinatazaka46.com-s-official-diary-detail-35006/",
        ["https://cdn.hinatazaka46.com/files/14/diary/official/member/moblog/202008/mobmBbBmy.jpg",
            "https://cdn.hinatazaka46.com/files/14/diary/official/member/moblog/202008/mobOPxm6s.jpg",
            "https://cdn.hinatazaka46.com/files/14/diary/official/member/moblog/202008/mobwNe8uq.jpg"]);
});
