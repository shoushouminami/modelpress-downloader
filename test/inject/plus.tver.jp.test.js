const {testDirectDownload, launchBrowser, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test image page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://plus.tver.jp/news/91924/photo/0/",
        "plus.tver.jp-news-91924-photo-0-/",
        [
            "https://plus.tver.jp/prod/kanren_news/20210126/32e1b86eff82a8321c3688dfb37ccf96.jpg",
            "https://plus.tver.jp/prod/kanren_news/20210126/5981aa146208618f22c3d568325c4dc2.jpg",
            "https://plus.tver.jp/prod/kanren_news/20210126/ae790fd3aa5556f7ee6e96afd80278bd.jpg"
        ]
    );
});

test("Test detail page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://plus.tver.jp/news/91924/detail/",
        "plus.tver.jp-news-91924-detail-/",
        [
            "https://plus.tver.jp/prod/kanren_news/20210126/32e1b86eff82a8321c3688dfb37ccf96.jpg",
            "https://plus.tver.jp/prod/kanren_news/20210126/5981aa146208618f22c3d568325c4dc2.jpg",
            "https://plus.tver.jp/prod/kanren_news/20210126/ae790fd3aa5556f7ee6e96afd80278bd.jpg"
        ]
    );
});

test("news/abc-magazine_160155/detail/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://plus.tver.jp/news/abc-magazine_160155/detail/",
        "plus.tver.jp-news-abc-magazine_160155-detail-/",
        [
            "https://abc-magazine.asahi.co.jp/wp-content/uploads/2024/05/6606a243263ceb59d70ecd4295d6a0a0-1024x683.jpg",
            "https://abc-magazine.asahi.co.jp/wp-content/uploads/2024/05/e7db8b56b0ea7aba67744646c67b039f-1024x683.jpg",
            "https://abc-magazine.asahi.co.jp/wp-content/uploads/2024/05/386567221880d0978f877f9aa9274693-1024x683.jpg",
            "https://abc-magazine.asahi.co.jp/wp-content/uploads/2024/05/8005f3f0b71bed21f2fab4eac38f3e2c-1024x683.jpg",
            "https://abc-magazine.asahi.co.jp/wp-content/uploads/2024/05/d24e880bb327dcca18f894fad2901288-1024x683.jpg"
        ]);
});
