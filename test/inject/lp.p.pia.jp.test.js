const { testDirectDownload, getBrowserFactory } = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/news/414051/index.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://lp.p.pia.jp/article/news/414051/index.html",
        "lp.p.pia.jp-article-news-414051-index.html/",
        [
            [
                {
                    prefix: "https://lp.p.pia.jp/shared/materials/",
                    count: 16
                }
            ]
        ]);
});

test("article/news/414051/photo-gallery/index.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://lp.p.pia.jp/article/news/414051/photo-gallery/index.html",
        "lp.p.pia.jp-article-news-414051-photo-gallery-index.html/",
        [
            {
                prefix: "https://lp.p.pia.jp/shared/materials/",
                count: 34
            }
        ]);
});

test("article/news/412489/index.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://lp.p.pia.jp/article/news/412489/index.html",
        "lp.p.pia.jp-article-news-412489-index.html/",
        [
            "https://lp.p.pia.jp/shared/materials/a516669b-6ebe-433c-8500-2a91b4cbc11a/origin.jpg"
        ]);
});

test("article/news/414028/photo-gallery/index.html?id=2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://lp.p.pia.jp/article/news/414028/photo-gallery/index.html?id=2",
        "lp.p.pia.jp-article-news-414028-photo-gallery-index.html/",
        [
            "https://lp.p.pia.jp/shared/materials/f2e22406-21b2-4c06-8725-376ecff28c1c/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/075ceabf-3f56-414b-9a71-c701d50e2a08/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/a56aaa3d-c9fd-4cfa-82b5-422dc8e0ca6d/origin.jpg"
        ]);
});
