const {testDirectDownload, getBrowserFactory} = require("./testbase");
let browser = getBrowserFactory(beforeAll, afterAll);

test("Test fashion article", async () => {
    await testDirectDownload(
        browser(),
        "https://more.hpplus.jp/fashion/news/72528/3/",
        "more.hpplus.jp-fashion-news-72528-3-/",
        [
            "https://image-more.hpplus.jp/block/image/pc/upload/3c0/3c009313eed2fd163bf04cf6e83eb988.jpg",
            "https://image-more.hpplus.jp/block/image/pc/upload/a8c/a8c4e22d4f9fe7c0a5cc52b239eb60d6.jpg",
            "https://image-more.hpplus.jp/block/image/pc/upload/5c6/5c6dbe3b6432cd61c833279b295a5eec.jpg",
            "https://image-more.hpplus.jp/block/image/pc/upload/4ae/4ae053b2ec27ea4a7546193088b1ca21.jpg",
            "https://image-more.hpplus.jp/block/image/pc/upload/584/584d76207f3d725ed87a7aa174bf1a7b.jpg"
        ]
    );
});

test("Test fashion article 2", async () => {
    await testDirectDownload(
        browser(),
        "https://more.hpplus.jp/fashion/news/72910/1/",
        "more.hpplus.jp-fashion-news-72910-1-/",
        [
            "https://image-more.hpplus.jp/block/image/pc/upload/791/7914376e76e932aa1c9510a84fb6e1c0.jpg",
            "https://image-more.hpplus.jp/block/image/pc/upload/139/13902bb8fb39d600810203b34949b9a2.jpg",
            "https://image-more.hpplus.jp/block/image/pc/upload/713/7131be76417779e32da0bc7c7b455e81.jpg",
            "https://image-more.hpplus.jp/block/image/pc/upload/c4d/c4de8a8b02c98dca833af228ef7981dc.jpg",
            "https://image-more.hpplus.jp/block/image/pc/upload/497/497e30e3763ca9e25f3b2c811e8b92a0.jpg"
        ]
    );
});

test("Test beauty article", async () => {
    await testDirectDownload(
        browser(),
        "https://more.hpplus.jp/beauty/b-news/72497/2/",
        "more.hpplus.jp-beauty-b-news-72497-2-/",
        [
            "https://image-more.hpplus.jp/block/image/pc/upload/ba6/ba61b6e6914ef7069ff4d48bbcfeb0db.jpg",
            "https://image-more.hpplus.jp/block/image/pc/upload/2c9/2c9f0893d4f8c14364f1c2a48e7c7922.jpg",
            "https://image-more.hpplus.jp/block/image/pc/upload/a4d/a4d43ad9e3abea22fa25b159987492d5.jpg",
            "https://image-more.hpplus.jp/block/image/pc/upload/faa/faa81b5114a8e24937f64935d8615e16.jpg"
        ]
    );
});

test("Test magazine preview", async () => {
    await testDirectDownload(
        browser(),
        "https://more.hpplus.jp/magazine",
        "more.hpplus.jp-magazine/",
        [],
        {
            sizeMatch : function (expectedSize, actualSize) {
                expect(actualSize).toBeGreaterThanOrEqual(10);
            }
        }
    );
});

