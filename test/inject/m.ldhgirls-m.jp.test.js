const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("m-ldhgirls-m-news-40225", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://m.ldhgirls-m.jp/news/detail?news_id=40225",
        "m-ldhgirls-m-news-40225/",
        [
            "https://cf-stat.ldhgirls-m.jp/img/uplcmn/2022/1006/my_popup_210305_gs.jpg",
            "https://cf-stat.ldhgirls-m.jp/img/uplcmn/2022/1003/my_info_EG.jpg",
        ]
    );
});