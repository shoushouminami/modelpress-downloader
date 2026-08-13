const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

// NOTE: www.idol-culture.jp now permanently 301-redirects some (but not all - see
// geinou/136112 below) articles to www.dolce-gravure.jp (handled by
// src/inject/www.dolce-gravure.jp.js). Image content/order verified unchanged
// across the migration for these two, just served from the new domain.
test("geinou/81973/attachment_id/82063/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.idol-culture.jp/geinou/81973/attachment_id/82063/",
        "www.idol-culture.jp-geinou-81973-attachment_id-82063-/",
        [
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/08/DSC00059.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/20230703_800.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/08/DSC00071.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/06/20230626_6.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/08/DSC00027.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/06/90c2eb66581af0e5118a66a4d1f12016.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/08/DSC00032.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/c890b353ad43675315b461f224308022.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/08/DSC00076.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/06/d0d1a14f5100ed2f98e188b654a6c3b5.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/08/DSC00087.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/1a2fee894655db2eccba362792721120.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/08/DSC00041.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/06/7e433110dc5190e7f245b5cce550aa75.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/08/DSC00020.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/dc9263f4417b0288cc5511544f8009cb.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/08/DSC00054.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/06/de58b58bb71bf59e59373b9f5bc561a0.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/08/DSC00035.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/9cd69c214661ec42b008e7c70721d27b.jpg"
        ]);
});

test("geinou/81240/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.idol-culture.jp/geinou/81240/",
        "www.idol-culture.jp-geinou-81240-/",
        [
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/603b85be92a7c6aea78ab57ad950af0d.jpg"
        ]);
});


test("geinou/81240/attachment_id/81242/", async () => {
    // NOTE: www.idol-culture.jp (and www.bubkaweb.com) permanently redirect to
    // www.dolce-gravure.jp now (handled by src/inject/www.dolce-gravure.jp.js).
    // Image count dropped from 22 to 17 during the site migration (last 5 images
    // from the original set - 0706_1_800/0706_2_800 and three 2023/06 photos - are
    // no longer present on the migrated page). Verified stable across repeated
    // real-Chrome runs.
    await testDirectDownload(
        getBrowser(),
        "https://www.idol-culture.jp/geinou/81240/attachment_id/81242/",
        "www.idol-culture.jp-geinou-81240-attachment_id-81242-/",
        [
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/603b85be92a7c6aea78ab57ad950af0d.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/a4bdeed49eeb420c43068059c19a3149.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/571457f868546f42ea02a2af6934b396.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/20230725_TSUTAYA.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/5c7d3bdcd66a2ee5fa0a70a4677b8e7b.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/20230725_HMV.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/e062b74114c07c3ad3e27b4cd85a2028.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/ea6f2fecb8a54bea18d4860cc972e9b5.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/7cc75cfced5cd36666388b3789523d79.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/46d5ccbef6fc513ab01dad9f041c9572.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/38b10c4d9db5aeb709684370c4b87c3f.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/20230720_800.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/4f10ee27f9ff8cfc8f0d4e93c8181ede.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/5e10ab18eb3651d259da20ab78f339ca.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/0bda5c7e28e0edea52b0e669a292c82d.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/40bdc30273c99ad958577298cc1c75ea.jpg",
            "https://www.dolce-gravure.jp/wp-content/uploads/2023/07/0719_800.jpg"
        ]);
});

test("geinou/136112/attachment_id/136113/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.idol-culture.jp/geinou/136112/attachment_id/136113/",
        "www.idol-culture.jp-geinou-136112-attachment_id-136113-/",
        [
            "https://www.idol-culture.jp/wp-content/uploads/2024/08/sub3-6.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2024/08/main-11.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2024/08/sub1-8.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2024/08/sub2-7.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2024/08/sub4-6.jpg"
        ]);
});

