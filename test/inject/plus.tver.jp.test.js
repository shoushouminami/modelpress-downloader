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

test("news/ntvtopics_158633/detail/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://plus.tver.jp/news/ntvtopics_158633/detail/",
        "plus.tver.jp-news-ntvtopics_158633-detail-/",
        [
            "https://plus.tver.jp/prod/kanren_news/20240416/f9a1c8d23d9e5bfb15c001ce02d5fa64.jpg",
            "https://www.ntv.co.jp/topics/articles/images/a2kcnkg2jxk0kd68vfoqtdiex6t6or.jpg",
            "https://www.ntv.co.jp/topics/articles/images/okzuzp779xwzraxy8ai753kigd4v1a.jpg"
        ]);
});
