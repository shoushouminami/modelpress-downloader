const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("news/detail?news_id=40046", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://m.ex-m.jp/news/detail?news_id=40046",
        "m.ex-m.jp-news-detail/",
        [
            "https://cf-stat.ex-m.jp/img/uplcmn/2022/1021/f9f4e04f302a7ed0a55abb5240975c67.jpg",
            "https://cf-stat.ex-m.jp/img/uplcmn/2022/0425/413e3fca32a0a2dc5a614a169ded158d.jpg"
        ]);
});
