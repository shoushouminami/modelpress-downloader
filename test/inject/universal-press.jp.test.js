const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite universal-press.jp", () => {
    test("news/46292", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://universal-press.jp/news/46292",
            "universal-press.jp-news-46292/",
            [
                "https://universal-press.jp/wp-content/uploads/2025/12/UNI_2143.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/main-1.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/y012_6647.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/UNI_2265.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/ddf1942ad8a2460d19a5e322e68ca9d0-1.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/y001_0348.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/4G5A0963.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/UNI_2119.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/y007_2944.jpg"
            ]);
    });


    test("news/46290", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://universal-press.jp/news/46290",
            "universal-press.jp-news-46290/",
            [
                "https://universal-press.jp/wp-content/uploads/2025/12/UNI_1835.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/UNI_1786.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/UNI_1797.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/UNI_1895.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/UNI_2010.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/UNI_1870p2.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/UNI_1812.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/UNI_1822.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/12/UNI_1848.jpg"
            ]);
    });

    test("news/44246", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://universal-press.jp/news/44246",
            "universal-press.jp-news-44246/",
            [
                "https://universal-press.jp/wp-content/uploads/2025/10/84db2dad456cf91d4ce2f2f50acee794.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/10/cf0fffd2b2bc12a3b8a68557845943e9.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/10/97b54370d4824f428c36e71cc569eb59.jpg"
            ]);
    });

    test("news/42775", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://universal-press.jp/news/42775",
            "universal-press.jp-news-42775/",
            [
                "https://universal-press.jp/wp-content/uploads/2025/08/557f4c3532f663a9ff8226bd74680500.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/08/80f64fe223dbbb589b4e22a358f4733b.jpg",
                "https://universal-press.jp/wp-content/uploads/2025/08/6df1f896e66414c6088cd4bc02aa3753-1.jpg"
            ]);
    });
}); 

