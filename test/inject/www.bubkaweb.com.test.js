const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("geinou/81973/attachment_id/82063/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.idol-culture.jp/geinou/81973/attachment_id/82063/",
        "www.idol-culture.jp-geinou-81973-attachment_id-82063-/",
        [
            "https://www.idol-culture.jp/wp-content/uploads/2023/08/DSC00059.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/20230703_800.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/08/DSC00071.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/06/20230626_6.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/08/DSC00027.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/06/90c2eb66581af0e5118a66a4d1f12016.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/08/DSC00032.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/c890b353ad43675315b461f224308022.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/08/DSC00076.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/06/d0d1a14f5100ed2f98e188b654a6c3b5.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/08/DSC00087.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/1a2fee894655db2eccba362792721120.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/08/DSC00041.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/06/7e433110dc5190e7f245b5cce550aa75.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/08/DSC00020.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/dc9263f4417b0288cc5511544f8009cb.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/08/DSC00054.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/06/de58b58bb71bf59e59373b9f5bc561a0.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/08/DSC00035.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/9cd69c214661ec42b008e7c70721d27b.jpg"
        ]);
});

test("geinou/81240/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.idol-culture.jp/geinou/81240/",
        "www.idol-culture.jp-geinou-81240-/",
        [
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/603b85be92a7c6aea78ab57ad950af0d.jpg"
        ]);
});


test("geinou/81240/attachment_id/81242/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.idol-culture.jp/geinou/81240/attachment_id/81242/",
        "www.idol-culture.jp-geinou-81240-attachment_id-81242-/",
        [
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/603b85be92a7c6aea78ab57ad950af0d.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/a4bdeed49eeb420c43068059c19a3149.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/571457f868546f42ea02a2af6934b396.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/20230725_TSUTAYA.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/5c7d3bdcd66a2ee5fa0a70a4677b8e7b.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/20230725_HMV.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/e062b74114c07c3ad3e27b4cd85a2028.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/ea6f2fecb8a54bea18d4860cc972e9b5.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/7cc75cfced5cd36666388b3789523d79.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/46d5ccbef6fc513ab01dad9f041c9572.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/38b10c4d9db5aeb709684370c4b87c3f.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/20230720_800.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/4f10ee27f9ff8cfc8f0d4e93c8181ede.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/5e10ab18eb3651d259da20ab78f339ca.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/0bda5c7e28e0edea52b0e669a292c82d.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/40bdc30273c99ad958577298cc1c75ea.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/0719_800.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/0706_1_800.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/07/0706_2_800.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/06/2e628546dbca3b4ead098366632b96d6.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/06/889fe3b7ba80358c724fc59cf3b87425.jpg",
            "https://www.idol-culture.jp/wp-content/uploads/2023/06/6b9937930e49357ea58599613499588a.jpg"
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

