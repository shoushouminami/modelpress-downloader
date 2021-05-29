const {testDirectDownload, launchBrowser, getBrowserFactory} = require("./testbase");

let browser = getBrowserFactory(beforeAll, afterAll);

test("Test news article 1 image", async () => {
    await testDirectDownload(
        browser(),
        "https://news.merumo.ne.jp/article/genre/10777625",
        "news.merumo.ne.jp-article-genre-10777625/",
        [
            "https://images.merumo.ne.jp/010/777/625/10777625_normal_0.jpg"
        ]
    );
});

test("Test news article 4 images", async () => {
    await testDirectDownload(
        browser(),
        "https://news.merumo.ne.jp/article/genre/10770775",
        "news.merumo.ne.jp-article-genre-10770775/",
        [
            "https://images.merumo.ne.jp/010/770/775/10770775_normal_0.jpg",
            "https://images.merumo.ne.jp/010/770/775/10770775_normal_1.jpg",
            "https://images.merumo.ne.jp/010/770/775/10770775_normal_2.jpg",
            "https://images.merumo.ne.jp/010/770/775/10770775_normal_3.jpg"
        ]
    );
});
