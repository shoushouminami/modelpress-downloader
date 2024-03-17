const {testDirectDownload, launchBrowser, getBrowserFactory} = require("./testbase");

let browser = getBrowserFactory(beforeAll, afterAll);

test.skip("Test news article 1 image", async () => {
    await testDirectDownload(
        browser(),
        "https://news.merumo.ne.jp/article/genre/10884339",
        "news.merumo.ne.jp-article-genre-10884339/",
        [
            "https://images.merumo.ne.jp/010/884/339/10884339_normal_0.jpg"
        ]
    );
});

test.skip("Test news article 4 images", async () => {
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
