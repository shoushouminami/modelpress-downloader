const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article.ksn?articleNo=2219259&categoryCode=ET", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.kstyle.com/article.ksn?articleNo=2219259&categoryCode=ET",
        "news.kstyle.com-article.ksn-articleNo-2219259/",
        [
            "https://cdn.livedoor.jp/kstyle/300132573e7c7de9992be2d1b91a7e5a.jpg",
            "https://cdn.livedoor.jp/kstyle/13e390cf20947168dff2576946e0e39b.jpg",
            "https://cdn.livedoor.jp/kstyle/9e52c9592f9c714daae46d7495352f53.jpg",
            "https://cdn.livedoor.jp/kstyle/9524a3cab0482ce8ee439d20beb7215b.jpg",
            "https://cdn.livedoor.jp/kstyle/ec7a62b88d91b2e299b0621d33a5e687.jpg"
        ]);
});

test("article.ksn?articleNo=2218169&categoryCode=ET", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.kstyle.com/article.ksn?articleNo=2218169&categoryCode=ET",
        "news.kstyle.com-article.ksn-articleNo-2218169/",
        [
            "https://cdn.livedoor.jp/kstyle/ffb07b0856ab990699b24a51ed2c71ee.jpg",
            "https://cdn.livedoor.jp/kstyle/f492f0053a613965a6002e4fb4ad60cd.jpg",
            "https://cdn.livedoor.jp/kstyle/47866c849fa0020f921a8189c9a5c1e1.jpg",
            "https://cdn.livedoor.jp/kstyle/1e5795f578c0be9a6f9e17fbe54d69e1.jpg",
            "https://cdn.livedoor.jp/kstyle/027b6c7c8aad3d4a0f7d13ac1e3c1f18.jpg",
            "https://cdn.livedoor.jp/kstyle/cfba22703aaf79956d6efbb211ad05df.jpg",
            "https://cdn.livedoor.jp/kstyle/e419f7861fe86424820f8e7ac4261b83.jpg"
        ]);
});
