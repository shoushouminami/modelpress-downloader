const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article with 1 image", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.musicvoice.jp/news/202009120163313/",
        "www.musicvoice.jp-news-202009120163313-/",
        [
                "https://www.musicvoice.jp/wp-content/uploads/2020/09/P200806-K026.jpg"
        ]);
});

test("Test news article with 4 images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.musicvoice.jp/news/202008190160451/",
        "www.musicvoice.jp-news-202008190160451-/",
        [
            "https://www.musicvoice.jp/wp-content/uploads/2020/08/P200819-K011.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/08/P200819-K009.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/08/P200819-K010.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/08/P200819-K012.jpg"
        ]);
});

test("Test news article single image view", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.musicvoice.jp/news/202008190160451/p200819-k012/",
        "www.musicvoice.jp-news-202008190160451-p200819-k012-/",
        [
            "https://www.musicvoice.jp/wp-content/uploads/2020/08/P200819-K012.jpg"
        ]);
});

test("Test news interview article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.musicvoice.jp/news/202009110163179/",
        "www.musicvoice.jp-news-202009110163179-/",
        [
            "https://www.musicvoice.jp/wp-content/uploads/2020/09/P200911-K026.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/09/P200911-K028.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/09/P200911-K024.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/09/P200911-K032.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/09/P200911-K022.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/09/P200911-K023.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/09/P200911-K025.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/09/P200911-K027.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/09/P200911-K029.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/09/P200911-K030.jpg",
            "https://www.musicvoice.jp/wp-content/uploads/2020/09/P200911-K031.jpg"
        ]);
});
