const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sumabo.jp/123481",
        "sumabo.jp-123481/",
        [
            "https://sumabo.jp/smartboys/news/wp-content/uploads/2021/03/cast_rebornr.jpg",
            "https://sumabo.jp/smartboys/news/wp-content/uploads/2021/03/cast_tsunar.jpg",
            "https://sumabo.jp/smartboys/news/wp-content/uploads/2021/03/cast_gokuderar.jpg",
            "https://sumabo.jp/smartboys/news/wp-content/uploads/2021/03/cast_yamamotor.jpg",
            "https://sumabo.jp/smartboys/news/wp-content/uploads/2021/03/cast_ryoheir.jpg",
            "https://sumabo.jp/smartboys/news/wp-content/uploads/2021/03/cast_lambor.jpg",
            "https://sumabo.jp/smartboys/news/wp-content/uploads/2021/03/cast_hibarir.jpg",
            "https://sumabo.jp/smartboys/news/wp-content/uploads/2021/03/cast_chromer.jpg"
        ]
    );
});

test("Test movie page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sumabo.jp/moviepc/secret",
        "sumabo.jp-moviepc-secret/",
        [
            "https://sumabo.jp/smartboys/news/wp-content/uploads/2018/02/secretTOP.jpg"
        ]
    );
});
