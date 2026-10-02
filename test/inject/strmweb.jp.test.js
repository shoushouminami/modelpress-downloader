const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite strmweb.jp", () => {
    // Multi-page article: pages 2 and 3 are fetched. Page 3 has inline SNS icons (pf_*.png) that must be excluded.
    test("archives/22344/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://strmweb.jp/archives/22344/",
            "strmweb.jp-archives-22344-",
            [
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02621.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02630.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02775.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02697.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02728.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02659.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02649.jpg"
            ]);
    });

    // Opened on page 2: still collects all pages in order, with the same folder as page 1
    test("archives/22344/2/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://strmweb.jp/archives/22344/2/",
            "strmweb.jp-archives-22344-",
            [
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02621.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02630.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02775.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02697.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02728.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02659.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/07/DSC02649.jpg"
            ]);
    });

    // Single-page column article
    test("archives/22997/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://strmweb.jp/archives/22997/",
            "strmweb.jp-archives-22997-",
            [
                "https://strmweb.jp/home/wp-content/uploads/2026/10/IMG_9146.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/10/d1c4370d65909a25bc7fef110d2af0c8.jpg"
            ]);
    });

    // Multi-page column article
    test("archives/22939/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://strmweb.jp/archives/22939/",
            "strmweb.jp-archives-22939-",
            [
                "https://strmweb.jp/home/wp-content/uploads/2026/09/DSC00177.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/09/DSC00269.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/09/DSC00302.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/09/DSC00204.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/09/DSC00234.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/09/DSC00264.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/09/DSC00252.jpg"
            ]);
    });

    // Older (2024) interview article
    test("archives/15284/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://strmweb.jp/archives/15284/",
            "strmweb.jp-archives-15284-",
            [
                "https://strmweb.jp/home/wp-content/uploads/2024/10/2024.7.29.2.104189.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2024/10/2024.7.29.2.104270.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2024/10/2024.7.29.2.104224.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2024/10/2024.7.29.2.104343.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2024/10/2024.7.29.2.104397.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2024/10/2024.7.29.2.104365.jpg"
            ]);
    });

    test("archives/22958/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://strmweb.jp/archives/22958/",
            "strmweb.jp-archives-22958-",
            [
                "https://strmweb.jp/home/wp-content/uploads/2026/09/DSC02646.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/09/DSC02649.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/09/DSC02830.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/09/DSC02722.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/09/DSC02685.jpg",
                "https://strmweb.jp/home/wp-content/uploads/2026/09/DSC02718.jpg"
            ]);
    });
});
