const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("news/article/Jisin_2303854/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.excite.co.jp/news/article/Jisin_2303854/",
        "www.excite.co.jp-news-article-Jisin_2303854-/",
        [
            "https://s.eximg.jp/exnews/feed/Jisin/1d/Jisin_2303854/Jisin_2303854_1.jpg"
        ]);
});

test("news/article/Jisin_2303854/image/1/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.excite.co.jp/news/article/Jisin_2303854/image/1/",
        "www.excite.co.jp-news-article-Jisin_2303854-image-1-/",
        [
            "https://s.eximg.jp/exnews/feed/Jisin/1d/Jisin_2303854/Jisin_2303854_1.jpg"
        ]);
});

test("Test article page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.excite.co.jp/news/article/E1637952598330/",
        "www.excite.co.jp-news-article-E1637952598330-/",
        [
            "https://s.eximg.jp/exnews/feed/Excite_review/reviewmov/2021/E1637952598330_c235_1.jpg",
            "https://s.eximg.jp/exnews/feed/Excite_review/reviewmov/2021/E1637952598330_277c_3.jpg",
            "https://s.eximg.jp/exnews/feed/Excite_review/reviewmov/2021/E1637952598330_e8d0_2.jpg"
        ]
    );
});
