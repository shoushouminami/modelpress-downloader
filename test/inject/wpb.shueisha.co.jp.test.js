const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);
const pageutils = require("../pageutils");

test("news/info/2024/10/15/124824/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/news/info/2024/10/15/124824/",
        "wpb.shueisha.co.jp-news-info-2024-10-15-124824-/",
        [
            "https://wpb.shueisha.co.jp/news/info/images/WPB_tanaka001.jpg",
            "https://wpb.shueisha.co.jp/news/info/images/WPB_tanaka002.jpg",
            "https://wpb.shueisha.co.jp/news/info/images/WPB_tanaka003.jpg",
            "https://wpb.shueisha.co.jp/news/info/images/WPB_tanaka004.jpg",
            "https://wpb.shueisha.co.jp/news/info/images/WPB_tanaka005.jpg",
            "https://wpb.shueisha.co.jp/news/info/images/WPB_tanaka_bookcover.jpg"
        ]);
});

test("news/entertainment/2024/10/06/124747/#goog_rewarded", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/news/entertainment/2024/10/06/124747/#goog_rewarded",
        "wpb.shueisha.co.jp-news-entertainment-2024-10-06-124747-/",
        [
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/habu01.jpg",
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/1habumizuho_039.jpg",
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/habumizuho_001.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 60);
            }
        });
});

test("news/entertainment/2024/08/18/124146/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/news/entertainment/2024/08/18/124146/",
        "wpb.shueisha.co.jp-news-entertainment-2024-08-18-124146-/",
        [
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/%E4%BA%94%E7%99%BE%E5%9F%8E01.jpg"
        ]);
});

test("news/entertainment/2024/08/18/124173/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/news/entertainment/2024/08/18/124173/",
        "wpb.shueisha.co.jp-news-entertainment-2024-08-18-124173-/",
        [
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/a17348aacd49c93a1bc40ab16a5378403beffbf2.jpg",
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/tomisato02.jpg"
        ]);
});

test("news/photo/entertainment/2024/08/18/124173/#gallery-item-1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/news/photo/entertainment/2024/08/18/124173/#gallery-item-1",
        "wpb.shueisha.co.jp-news-photo-entertainment-2024-08-18-124173-/",
        [
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/927f28818609910c654896c4b0365c589ea656af.jpg",
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/a1943283e2943aaa6ff689a247abb0a49406f5d1.jpg"
        ]);
});

test("news/entertainment/2024/08/18/124145/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/news/entertainment/2024/08/18/124145/",
        "wpb.shueisha.co.jp-news-entertainment-2024-08-18-124145-/",
        [
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/ca7c9d208f22e5496582886563ed068434b831bb.jpg"
        ]);
});

test("news/entertainment/2024/04/01/122716/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/news/entertainment/2024/04/01/122716/",
        "wpb.shueisha.co.jp-news-entertainment-2024-04-01-122716-/",
        [
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/9fab274a437fd0bf59d53bf6ac4dd24f80e404fb.jpg"
        ]);
});

test("movie/2024/10/13/124791/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/movie/2024/10/13/124791/",
        "wpb.shueisha.co.jp-movie-2024-10-13-124791-/",
        [
            "https://wpb.shueisha.co.jp/movie/2024/images/1562cbf025ab6c10858238d942584e0a_l.jpg"
        ]);
});

test("comic/2024/10/12/124781/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/comic/2024/10/12/124781/",
        "wpb.shueisha.co.jp-comic-2024-10-12-124781-/",
        [
            "https://wpb.shueisha.co.jp/comic/assets_c/2024/09/hotta-evolution_600x360-fs8-thumb-640xauto-227152.png",
            "https://wpb.shueisha.co.jp/comic/assets_c/2024/10/hotta003_02-3-thumb-274xauto-230350.jpg"
        ]);
});
