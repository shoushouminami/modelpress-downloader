const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article with 1 image", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.musicvoice.jp/news/166964/188192/",
        "www.musicvoice.jp-news-166964-188192-/",
        [
            "https://www.musicvoice.jp/wp-content/uploads/2020/10/pmu201021-m101.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/10/pmu201021-m104.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/10/pmu201021-m103.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/10/pmu201021-m102.jpg"
        ]
    );
});

test("Test news article with 3 images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.musicvoice.jp/news/166964/188223/",
        "www.musicvoice.jp-news-166964-188223-/",
        [
            "https://www.musicvoice.jp/wp-content/uploads/2020/10/pmu201021-m101.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/10/pmu201021-m104.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/10/pmu201021-m103.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/10/pmu201021-m102.jpg"
        ]
    );
});

test("Test news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.musicvoice.jp/news/223852/",
        "www.musicvoice.jp-news-223852-/",
        [
            "https://www.musicvoice.jp/wp-content/uploads/2022/04/pmu2022-04-15-200806-214k.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2022/04/pmu2022-04-15-200806-215k.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2022/04/pmu2022-04-15-200805-213k.jpg"
        ]
    );
});
