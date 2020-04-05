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
        "https://dogatch.jp/news/nhk/73943/photo/0/",
        "dogatch.jp-news-nhk-73943-photo-0-/",
        ["https://dogatch.jp/prod/kanren_news/20200124/2529ace9ef979fcb49bdd7fc0cb2fe9f.jpg",
            "https://dogatch.jp/prod/kanren_news/20200124/77735540dd66bf9a751bc2c6202b1263.jpg",
            "https://dogatch.jp/prod/kanren_news/20200124/501576501292ebadb052e4a9d9a657d3.jpg"]);
});

test("Test dogatch.jp detail page", async () => {
    await testDirectDownload(
        browser,
        "https://dogatch.jp/news/nhk/73943/detail/",
        "dogatch.jp-news-nhk-73943-detail-/",
        ["https://dogatch.jp/prod/kanren_news/20200124/2529ace9ef979fcb49bdd7fc0cb2fe9f.jpg",
            "https://dogatch.jp/prod/kanren_news/20200124/77735540dd66bf9a751bc2c6202b1263.jpg",
            "https://dogatch.jp/prod/kanren_news/20200124/501576501292ebadb052e4a9d9a657d3.jpg"]);
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

test("Test dogatch.jp single image article", async () => {
    await testDirectDownload(
        browser,
        "https://dogatch.jp/news/nhk/73941/detail/",
        "dogatch.jp-news-nhk-73941-detail-/",
        ["https://dogatch.jp/prod/kanren_news/20200124/b3d4f1b0e973c0c707f8f7a1ca28f6cb.jpg"]);
});
