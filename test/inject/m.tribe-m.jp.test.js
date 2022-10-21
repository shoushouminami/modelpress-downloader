const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("m-tribe-m-news-40294", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://m.tribe-m.jp/news/detail?news_id=40294",
        "m-tribe-m-news-40294/",
        [
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1011/edf54b1b15d3c710ea3a88c0ba9733de.jpg",
        ]
    );
});