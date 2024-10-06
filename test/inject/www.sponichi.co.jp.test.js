const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("entertainment/news/2024/05/22/gazo/20240522s00041000582000p.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.sponichi.co.jp/entertainment/news/2024/05/22/gazo/20240522s00041000582000p.html",
        "www.sponichi.co.jp-entertainment-news-2024-05-22-gazo-20240522s00041000582000p.html/",
        [
            "https://www.sponichi.co.jp/entertainment/news/2024/05/22/jpeg/20240522s00041000582000p_view.webp",
            "https://www.sponichi.co.jp/entertainment/news/2024/05/22/jpeg/20240522s00041000620000p_view.webp"
        ]);
});

test("entertainment/news/2024/10/05/gazo/20241005s10041000074000p.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.sponichi.co.jp/entertainment/news/2024/10/05/gazo/20241005s10041000074000p.html",
        "www.sponichi.co.jp-entertainment-news-2024-10-05-gazo-20241005s10041000074000p.html/",
        [
            "https://www.sponichi.co.jp/entertainment/news/2024/10/05/jpeg/20241005s10041000074000p_view.webp"
        ]);
});

test("entertainment/news/2024/07/18/kiji/20240718s00041000222000c.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.sponichi.co.jp/entertainment/news/2024/07/18/kiji/20240718s00041000222000c.html",
        "www.sponichi.co.jp-entertainment-news-2024-07-18-kiji-20240718s00041000222000c.html/",
        [
            "https://www.sponichi.co.jp/entertainment/news/2024/07/18/jpeg/20240718s10041000215000p_view.webp"
        ]);
});

test("baseball/news/2024/07/23/gazo/20240723s10001007092000p.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.sponichi.co.jp/baseball/news/2024/07/23/gazo/20240723s10001007092000p.html",
        "www.sponichi.co.jp-baseball-news-2024-07-23-gazo-20240723s10001007092000p.html/",
        [
            "https://www.sponichi.co.jp/baseball/news/2024/07/23/jpeg/20240723s10001007092000p_view.webp",
            "https://www.sponichi.co.jp/baseball/news/2024/07/23/jpeg/20240723s10001007101000p_view.webp",
            "https://www.sponichi.co.jp/baseball/news/2024/07/23/jpeg/20240723s10001007125000p_view.webp"
        ]);
});

test("baseball/news/2024/07/23/kiji/20240723s00001007127000c.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.sponichi.co.jp/baseball/news/2024/07/23/kiji/20240723s00001007127000c.html",
        "www.sponichi.co.jp-baseball-news-2024-07-23-kiji-20240723s00001007127000c.html/",
        [
            "https://www.sponichi.co.jp/baseball/news/2024/07/23/jpeg/20240723s10001007092000p_view.webp",
            "https://www.sponichi.co.jp/baseball/news/2024/07/23/jpeg/20240723s10001007127000p_view.webp",
            "https://www.sponichi.co.jp/baseball/news/2024/07/23/jpeg/20240723s10001007125000p_view.webp",
            "https://www.sponichi.co.jp/baseball/news/2024/07/23/jpeg/20240723s10001007101000p_view.webp"
        ]);
});
