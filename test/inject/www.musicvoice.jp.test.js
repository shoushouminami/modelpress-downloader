const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article with 4 images", async () => {
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

test("news/239463/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.musicvoice.jp/news/239463/",
        "www.musicvoice.jp-news-239463-/",
        [
            "https://www.musicvoice.jp/wp-content/uploads/2022/10/pmu221031m302.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2022/10/pmu221031m305.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2022/10/pmu221031m304.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2022/10/pmu221031m303.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2022/10/pmu221031m301.jpg"
        ]);
});

test("news/234927/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.musicvoice.jp/news/234927/",
        "www.musicvoice.jp-news-234927-/",
        [
            "https://www.musicvoice.jp/wp-content/uploads/2022/08/pmu220825m110.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2022/08/pmu220825m112.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2022/08/pmu220825m111.jpg"
        ]);
});
