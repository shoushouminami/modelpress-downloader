const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("m-ex-m-news-40046", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://m.ex-m.jp/news/detail?news_id=40046",
        "m-ex-m-news-40046/",
        [
            "https://cf-stat.ex-m.jp/img/uplcmn/2022/0925/b2d620106b4eb6926691ecc9c0827ab6.jpg",
            "https://cf-stat.ex-m.jp/img/uplcmn/2022/0425/413e3fca32a0a2dc5a614a169ded158d.jpg",
        ]
    );
});