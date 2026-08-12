const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);
describe("Test suite hochi.news", () => {
    test("articles/20260812-OHT1T51100.html?page=1", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://hochi.news/articles/20260812-OHT1T51100.html?page=1",
            "hochi.news-articles-20260812-OHT1T51100.html/",
            [
                "https://hochi.news/images/2026/08/12/20260812-OHT1I51169-L.jpg",
                "https://hochi.news/images/2026/08/12/20260812-OHT1I51170-L.jpg",
                "https://hochi.news/images/2026/08/12/20260812-OHT1I51171-L.jpg",
                "https://hochi.news/images/2026/08/12/20260812-OHT1I51172-L.jpg",
                "https://hochi.news/images/2026/08/12/20260812-OHT1I51173-L.jpg"
            ]);
    });

    test("articles/20260812-OHT1T51100.html?mode=photo&photoid=1", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://hochi.news/articles/20260812-OHT1T51100.html?mode=photo&photoid=1",
            "hochi.news-articles-20260812-OHT1T51100.html/",
            [
                "https://hochi.news/images/2026/08/12/20260812-OHT1I51169-L.jpg",
                "https://hochi.news/images/2026/08/12/20260812-OHT1I51170-L.jpg",
                "https://hochi.news/images/2026/08/12/20260812-OHT1I51171-L.jpg",
                "https://hochi.news/images/2026/08/12/20260812-OHT1I51172-L.jpg",
                "https://hochi.news/images/2026/08/12/20260812-OHT1I51173-L.jpg"
            ]);
    });

})
