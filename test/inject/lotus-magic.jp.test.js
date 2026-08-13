const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite lotus-magic.jp", () => {
    test("music/9881/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://lotus-magic.jp/music/9881/",
            "lotus-magic.jp-music-9881-/",
            [
                "https://lotus-magic.jp/wp-content/uploads/2026/08/%E8%A7%A3%E7%A6%81%E6%B8%88_%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%AB%E3%83%98%E3%83%B3%E5%80%B6%E6%A5%BD%E9%83%A8.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/06/%E3%83%90%E3%83%8A%E3%83%BC_1_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89-1-02-up01.jpg"
            ]);
    });

    test("music/9578/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://lotus-magic.jp/music/9578/",
            "lotus-magic.jp-music-9578-/",
            [
                "https://lotus-magic.jp/wp-content/uploads/2026/06/26.06.04_%E8%AE%9A%EF%BD%BB%E8%9D%AE%E3%83%BB6%E7%B9%9D%EF%BD%AC%E7%B9%A7%EF%BD%BF%E7%B9%9D%E3%83%BB%E3%83%A1%E8%B2%82%E3%83%BBlotus192200.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/06/26.06.04_%E8%AE%9A%EF%BD%BB%E8%9D%AE%E3%83%BB6%E7%B9%9D%EF%BD%AC%E7%B9%A7%EF%BD%BF%E7%B9%9D%E3%83%BB%E3%83%A1%E8%B2%82%E3%83%BBlotus192233.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/06/lotus192268.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/06/26.06.04_%E8%AE%9A%EF%BD%BB%E8%9D%AE%E3%83%BB6%E7%B9%9D%EF%BD%AC%E7%B9%A7%EF%BD%BF%E7%B9%9D%E3%83%BB%E3%83%A1%E8%B2%82%E3%83%BBlotus192349.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/06/lotus192324.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/06/26.06.04_%E8%AE%9A%EF%BD%BB%E8%9D%AE%E3%83%BB6%E7%B9%9D%EF%BD%AC%E7%B9%A7%EF%BD%BF%E7%B9%9D%E3%83%BB%E3%83%A1%E8%B2%82%E3%83%BBlotus192180.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/06/lotus192307.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/06/26.06.04_%E8%AE%9A%EF%BD%BB%E8%9D%AE%E3%83%BB6%E7%B9%9D%EF%BD%AC%E7%B9%A7%EF%BD%BF%E7%B9%9D%E3%83%BB%E3%83%A1%E8%B2%82%E3%83%BBlotus192256.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/06/26.06.04_%E8%AE%9A%EF%BD%BB%E8%9D%AE%E3%83%BB6%E7%B9%9D%EF%BD%AC%E7%B9%A7%EF%BD%BF%E7%B9%9D%E3%83%BB%E3%83%A1%E8%B2%82%E3%83%BBlotus192207.jpg"
            ]);
    });

    test("gallery/9943/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://lotus-magic.jp/gallery/9943/",
            "lotus-magic.jp-gallery-9943-/",
            [
                "https://lotus-magic.jp/wp-content/uploads/2026/08/26.07.16_%E8%9E%9F%EF%BD%A7%E8%9F%B2%EF%BD%B6%E9%84%92%E4%B8%BB%E2%94%81%E7%B9%9D%EF%BD%AC%E7%B9%A7%EF%BD%BF%E7%B9%9D%E3%83%BB%E3%83%A1%E8%B2%82%E3%83%BBlotus-59.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/08/26.07.16_%E8%9E%9F%EF%BD%A7%E8%9F%B2%EF%BD%B6%E9%84%92%E4%B8%BB%E2%94%81%E7%B9%9D%EF%BD%AC%E7%B9%A7%EF%BD%BF%E7%B9%9D%E3%83%BB%E3%83%A1%E8%B2%82%E3%83%BBlotus-63.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/08/26.07.16_%E8%9E%9F%EF%BD%A7%E8%9F%B2%EF%BD%B6%E9%84%92%E4%B8%BB%E2%94%81%E7%B9%9D%EF%BD%AC%E7%B9%A7%EF%BD%BF%E7%B9%9D%E3%83%BB%E3%83%A1%E8%B2%82%E3%83%BBlotus-100.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/08/26.07.16_%E8%9E%9F%EF%BD%A7%E8%9F%B2%EF%BD%B6%E9%84%92%E4%B8%BB%E2%94%81%E7%B9%9D%EF%BD%AC%E7%B9%A7%EF%BD%BF%E7%B9%9D%E3%83%BB%E3%83%A1%E8%B2%82%E3%83%BBlotus-39.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/08/26.07.16_%E8%9E%9F%EF%BD%A7%E8%9F%B2%EF%BD%B6%E9%84%92%E4%B8%BB%E2%94%81%E7%B9%9D%EF%BD%AC%E7%B9%A7%EF%BD%BF%E7%B9%9D%E3%83%BB%E3%83%A1%E8%B2%82%E3%83%BBlotus-77.jpg"
            ]);
    });

    // regression test: article text contains an emoji character, which WordPress replaces with
    // <img class="emoji" src="https://s.w.org/images/core/emoji/..."> - must not be treated as content
    test("music/8141/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://lotus-magic.jp/music/8141/",
            "lotus-magic.jp-music-8141-/",
            [
                "https://lotus-magic.jp/wp-content/uploads/2026/02/main-4.jpg",
                "https://lotus-magic.jp/wp-content/uploads/2026/02/sub1-1.jpg"
            ]);
    });
})
