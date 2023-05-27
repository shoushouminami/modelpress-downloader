const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("feature/feature-2216905/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.tvguide.or.jp/feature/feature-2216905/",
        "www.tvguide.or.jp-feature-feature-2216905-/",
        [
            "https://www.tvguide.or.jp/wp/wp-content/uploads/2023/05/tbs_cyokusou_230527_02_01.jpg",
            "https://www.tvguide.or.jp/wp/wp-content/uploads/2023/05/tbs_cyokusou_230527_02_02.jpg",
            "https://www.tvguide.or.jp/wp/wp-content/uploads/2023/05/tbs_cyokusou_230527_02_03.jpg",
            "https://www.tvguide.or.jp/wp/wp-content/uploads/2023/05/tbs_cyokusou_230527_02_04.jpg",
            "https://www.tvguide.or.jp/wp/wp-content/uploads/2023/05/tbs_cyokusou_230527_02_05.jpg",
            "https://www.tvguide.or.jp/wp/wp-content/uploads/2023/05/tbs_cyokusou_230527_02_06.jpg",
            "https://www.tvguide.or.jp/wp/wp-content/uploads/2023/05/tbs_cyokusou_230527_02_07.jpg",
            "https://www.tvguide.or.jp/wp/wp-content/uploads/2023/05/tbs_cyokusou_230527_02_08.jpg"
        ]);
});

test("news/news-2221752/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.tvguide.or.jp/news/news-2221752/",
        "www.tvguide.or.jp-news-news-2221752-/",
        [
            "https://www.tvguide.or.jp/wp/wp-content/uploads/2023/05/news_230526_06_01.jpg"
        ]);
});
