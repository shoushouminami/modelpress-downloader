const {testDirectDownload, launchBrowser} = require("./testbase");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test dogatch.jp image page", async () => {
    await testDirectDownload(
        browser,
        "https://dogatch.jp/news/ntv/91924/photo/0/",
        "dogatch.jp-news-ntv-91924-photo-0-/",
        [
            "https://dogatch.jp/prod/kanren_news/20210126/32e1b86eff82a8321c3688dfb37ccf96.jpg",
            "https://dogatch.jp/prod/kanren_news/20210126/5981aa146208618f22c3d568325c4dc2.jpg",
            "https://dogatch.jp/prod/kanren_news/20210126/ae790fd3aa5556f7ee6e96afd80278bd.jpg"
        ]
    );
});

test("Test dogatch.jp detail page", async () => {
    await testDirectDownload(
        browser,
        "https://dogatch.jp/news/ntv/91924/detail/",
        "dogatch.jp-news-ntv-91924-detail-/",
        [
            "https://dogatch.jp/prod/kanren_news/20210126/32e1b86eff82a8321c3688dfb37ccf96.jpg",
            "https://dogatch.jp/prod/kanren_news/20210126/5981aa146208618f22c3d568325c4dc2.jpg",
            "https://dogatch.jp/prod/kanren_news/20210126/ae790fd3aa5556f7ee6e96afd80278bd.jpg"
        ]
    );
});

test("Test dogatch.jp article page", async () => {
    await testDirectDownload(
        browser,
        "https://dogatch.jp/news/tbs/catari_73949/detail/",
        "dogatch.jp-news-tbs-tbstopics_73949-detail-/",
        ["https://topics.tbs.co.jp/files/topics/6992_ext_01_0.jpg",
            "https://topics.tbs.co.jp/files/user/article/from_tbs/2020/01/13_0.jpg",
            "https://topics.tbs.co.jp/files/user/article/from_tbs/2020/01/13_1.jpg",
            "https://topics.tbs.co.jp/files/user/article/from_tbs/2020/01/13_2.jpg"]);
});
