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

test("news/157796/detail/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://plus.tver.jp/news/157796/detail/",
        "plus.tver.jp-news-157796-detail-/",
        [
            "https://plus.tver.jp/prod/kanren_news/20240329/e6c458914cc0b75b98d54970ba318c9d.jpg",
            "https://plus.tver.jp/prod/kanren_news/20240329/35fac624506289dd58c222f997517b5b.jpg",
            "https://plus.tver.jp/prod/kanren_news/20240329/258adf4dc3362ced05a70c2fe6e9c985.jpg",
            "https://plus.tver.jp/prod/kanren_news/20240329/318deb3a97d7a5fde1ff86aaa37cb25d.jpg"
        ]);
});
