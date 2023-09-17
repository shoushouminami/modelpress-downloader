const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("fashion/watch/72528/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://more.hpplus.jp/fashion/watch/72528/",
        "more.hpplus.jp-fashion-watch-72528-/",
        [
            "https://image-more.hpplus.jp/block/image/sp/upload/3c0/3c009313eed2fd163bf04cf6e83eb988.jpg",
            "https://image-more.hpplus.jp/block/image/sp/upload/a8c/a8c4e22d4f9fe7c0a5cc52b239eb60d6.jpg",
            "https://image-more.hpplus.jp/block/image/sp/upload/5c6/5c6dbe3b6432cd61c833279b295a5eec.jpg",
            "https://image-more.hpplus.jp/block/image/sp/upload/4ae/4ae053b2ec27ea4a7546193088b1ca21.jpg",
            "https://image-more.hpplus.jp/block/image/sp/upload/584/584d76207f3d725ed87a7aa174bf1a7b.jpg"
        ]);
});

test("fashion/coordinate/72910/1/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://more.hpplus.jp/fashion/coordinate/72910/1/",
        "more.hpplus.jp-fashion-coordinate-72910-1-/",
        [
            "https://image-more.hpplus.jp/block/image/sp/upload/791/7914376e76e932aa1c9510a84fb6e1c0.jpg",
            "https://image-more.hpplus.jp/block/image/sp/upload/139/13902bb8fb39d600810203b34949b9a2.jpg",
            "https://image-more.hpplus.jp/block/image/sp/upload/713/7131be76417779e32da0bc7c7b455e81.jpg",
            "https://image-more.hpplus.jp/block/image/sp/upload/c4d/c4de8a8b02c98dca833af228ef7981dc.jpg",
            "https://image-more.hpplus.jp/block/image/sp/upload/497/497e30e3763ca9e25f3b2c811e8b92a0.jpg"
        ]);
});
test("beauty/make/72497/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://more.hpplus.jp/beauty/make/72497/",
        "more.hpplus.jp-beauty-make-72497-/",
        [
            "https://image-more.hpplus.jp/block/image/sp/upload/ba6/ba61b6e6914ef7069ff4d48bbcfeb0db.jpg",
            "https://image-more.hpplus.jp/block/image/sp/upload/2c9/2c9f0893d4f8c14364f1c2a48e7c7922.jpg",
            "https://image-more.hpplus.jp/block/image/sp/upload/a4d/a4d43ad9e3abea22fa25b159987492d5.jpg",
            "https://image-more.hpplus.jp/block/image/sp/upload/faa/faa81b5114a8e24937f64935d8615e16.jpg"
        ]);
});

test("entame/people/102910/2/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://more.hpplus.jp/entame/people/102910/2/",
        "more.hpplus.jp-entame-people-102910-2-/",
        [
            "https://img-more.hpplus.jp/article/parts/image/4e/4ed00c57-bc38-4acf-9ad1-962df21eae67-1280x1920.jpg",
            "https://img-more.hpplus.jp/article/parts/image/89/89d9a878-7364-4da1-9ee1-cb916fe1753c-1280x1920.jpg",
            "https://img-more.hpplus.jp/article/parts/image/3d/3d121679-e0fb-4b2a-84e1-ae416faa33ab-1280x1843.jpg",
            "https://img-more.hpplus.jp/article/parts/image/10/10d53d37-9386-4edd-8847-c4bf7b37bfa5-1280x1843.jpg"
        ]);
});

test("Test magazine preview", async () => {
    await testDirectDownload(
        getBrowser(),
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

