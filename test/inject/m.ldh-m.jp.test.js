const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("m-ldh-m-news-39457", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://m.ldh-m.jp/news/detail?news_id=39457",
        "m-ldh-m-news-39457/",
        [
            "https://cf-stat.ldh-m.jp/img/uplcmn/2022/0817/684d8b132595f6e897c7e824a3f443f7.jpg",
            "https://cf-stat.ldh-m.jp/img/uplcmn/2022/0929/2f0f8fff1ed24a4b4013eb2b43eec34c.jpg",
        ]
    );
});
