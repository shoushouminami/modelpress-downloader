const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article with 1 image", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.musicvoice.jp/music/188192/",
        "www.musicvoice.jp-music-188192-/",
        [
            "https://www.musicvoice.jp/wp-content/uploads/2021/05/pmu210501-m104.jpg"
        ]
    );
});

test("Test news article with 3 images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.musicvoice.jp/music/188223/",
        "www.musicvoice.jp-music-188223-/",
        [
            "https://www.musicvoice.jp/wp-content/uploads/2021/05/pmu210501-m110-e1619923928808.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2021/05/pmu210501-m111.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2021/05/pmu210501-m110.jpg"
        ]
    );
});

test("Test news interview article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.musicvoice.jp/interview/entame-interview/187897/",
        "www.musicvoice.jp-interview-entame-interview-187897-/",
        [
            "https://www.musicvoice.jp/wp-content/uploads/2021/04/pen210428-k022.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2021/04/pen210428-k023.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2021/04/pen210428-k024.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2021/04/pen210428-k025.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2021/04/pen210428-k020.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2021/04/pen210428-k021.jpg"
        ]
    );
});
