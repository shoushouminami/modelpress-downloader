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

test("Test article page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://plus.tver.jp/news/tbstopics_73949/detail/",
        "plus.tver.jp-news-tbstopics_73949-detail-/",
        [
            "https://topics.tbs.co.jp/files/user/article/from_tbs/2020/01/13_0.jpg",
            "https://topics.tbs.co.jp/files/user/article/from_tbs/2020/01/13_1.jpg",
            "https://topics.tbs.co.jp/files/user/article/from_tbs/2020/01/13_2.jpg",
            "https://topics.tbs.co.jp/files/topics/6992_ext_01_0.jpg"
        ]
    );
});
