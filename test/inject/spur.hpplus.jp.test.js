const {testDirectDownload, getBrowserFactory} = require("./testbase");
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

test("Test fashion special page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://spur.hpplus.jp/fashion/special/a01_dior2103/content01/area02/",
        "spur.hpplus.jp-fashion-special-a01_dior2103-content01-area02-/",
        [
            "https://cf-special-spur.hpplus.jp/spur-special02/210323_dior/assets/img/fashion/kv_fashion.jpg",
            "https://cf-special-spur.hpplus.jp/spur-special02/210323_dior/assets/img/fashion/img_fashion_01.jpg",
            "https://cf-special-spur.hpplus.jp/spur-special02/210323_dior/assets/img/fashion/img_fashion_02.jpg"
        ]
    );
});

test("Test fashion special page 2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://spur.hpplus.jp/fashion/special/a01_ralphlauren2103/content01/",
        "spur.hpplus.jp-fashion-special-a01_ralphlauren2103-content01-/",
        [
            "https://cf-special-spur.hpplus.jp/spur-special02/210323_ralphlauren/assets/img/style/style01.jpg",
            "https://cf-special-spur.hpplus.jp/spur-special02/210323_ralphlauren/assets/img/style/style02.jpg",
            "https://cf-special-spur.hpplus.jp/spur-special02/210323_ralphlauren/assets/img/style/style03.jpg",
            "https://cf-special-spur.hpplus.jp/spur-special02/210323_ralphlauren/assets/img/style/style04.jpg",
            "https://cf-special-spur.hpplus.jp/spur-special02/210323_ralphlauren/assets/img/style/style05.jpg",
            "https://cf-special-spur.hpplus.jp/spur-special02/210323_ralphlauren/assets/img/style/style06.jpg"
        ]
    );
});

test("Test magazine page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://spur.hpplus.jp/magazine/202103/JXl1Z5Q/?page=2",
        "spur.hpplus.jp-magazine-202103-JXl1Z5Q-/",
        [
            "https://static-spur.hpplus.jp/upload/image/manager/184/IUWHJGI-1200.jpg"
        ]
    );
});
