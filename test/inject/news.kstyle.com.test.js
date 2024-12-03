const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article.ksn?articleNo=2219259&categoryCode=ET", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://kstyle.com/article.ksn?articleNo=2219259&categoryCode=ET",
        "kstyle.com-article.ksn-articleNo-2219259/",
        [
            "https://cdn.livedoor.jp/kstyle/kstyle/300132573e7c7de9992be2d1b91a7e5a.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/13e390cf20947168dff2576946e0e39b.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/9e52c9592f9c714daae46d7495352f53.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/9524a3cab0482ce8ee439d20beb7215b.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/ec7a62b88d91b2e299b0621d33a5e687.jpg"
        ]);
});

test("article.ksn?articleNo=2218169&categoryCode=ET", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://kstyle.com/article.ksn?articleNo=2218169&categoryCode=ET",
        "kstyle.com-article.ksn-articleNo-2218169/",
        [
            "https://cdn.livedoor.jp/kstyle/kstyle/ffb07b0856ab990699b24a51ed2c71ee.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/f492f0053a613965a6002e4fb4ad60cd.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/47866c849fa0020f921a8189c9a5c1e1.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/1e5795f578c0be9a6f9e17fbe54d69e1.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/027b6c7c8aad3d4a0f7d13ac1e3c1f18.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/cfba22703aaf79956d6efbb211ad05df.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/e419f7861fe86424820f8e7ac4261b83.jpg"
        ]);
});

test("article.ksn?articleNo=2252209", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://kstyle.com/article.ksn?articleNo=2252209",
        "kstyle.com-article.ksn-articleNo-2252209/",
        [
            "https://cdn.livedoor.jp/kstyle/kstyle/6c1812a3c02b300d9fa36c8efed31f35.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/c1a8077a213f5609095eaae40ab04dfc.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/f7d621485a1655ee0fdbc6835c7eb6fa.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/00aa2026722fb052f935f1685f58a8ee.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/f49ddc3348a1bdbbd3c15514b16cb514.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/79468137c1e7fb2a28a41307f5368ae9.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/71c17791a6963f80df48a87fab813221.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/05c177f141aa83fd7e99d7cc5331821b.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/d59cfe72dd545f03657d9b61c5eba043.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/6bff70629dd3446fa43f00141dee8874.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/e357c35438d16b818a773b8677650289.jpg",
            "https://cdn.livedoor.jp/kstyle/kstyle/719dde08d1260e3f2b689b19eca0e863.jpg"
        ]);
});

test("article.ksn?articleNo=2252016", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://kstyle.com/article.ksn?articleNo=2252016",
        "kstyle.com-article.ksn-articleNo-2252016/",
        dummyItems(20)
    );
});
