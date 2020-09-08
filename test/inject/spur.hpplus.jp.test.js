const {testDirectDownload, getBrowserFactory} = require("./testbase");
const {pattern} = require("../../src/inject/www.rbbtoday.com");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test fashion news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://spur.hpplus.jp/fashion/topics/202009/08/KJl4Qig/",
        "spur.hpplus.jp-fashion-topics-202009-08-KJl4Qig-/",
        [
            "https://static-spur.hpplus.jp/upload/image/manager/108/FyVYI0Y-1200.jpg",
            "https://static-spur.hpplus.jp/upload/image/manager/108/MhYXUik-1200.jpg",
            "https://static-spur.hpplus.jp/upload/image/manager/108/JpJ2GJI-1200.jpg",
            "https://static-spur.hpplus.jp/upload/image/manager/108/MoNjaYQ-1200.jpg",
            "https://static-spur.hpplus.jp/upload/image/manager/108/lZWTCSA-1200.jpg",
            "https://static-spur.hpplus.jp/upload/image/manager/108/EwMShRU-1200.jpg"
        ]);
});

test("Test fashion news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://spur.hpplus.jp/fashion/feature/b01_200718/",
        "spur.hpplus.jp-fashion-feature-b01_200718-/",
        [
            "https://static-spur.hpplus.jp/upload/image/manager/216/ITVVETg-1200.jpg"
        ]);
});
