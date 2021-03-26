const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test lifestyle page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://domani.shogakukan.co.jp/469176",
        "domani.shogakukan.co.jp-469176/",
        [
            "https://domani.shogakukan.co.jp/wp-content/uploads/2021/02/Queens-Gambit_main.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2021/02/Queens-Gambit1.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2021/02/QG_104_STILLS_06_00112901RC.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2021/02/QG_104_STILLS_02_00098672RC.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2021/02/TQG_103_Unit_01362RC.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2021/02/Queens-Gambit3.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2021/02/Queens-Gambit2.jpg"
        ]
    );
});

test("Test fashion page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://domani.shogakukan.co.jp/482665",
        "domani.shogakukan.co.jp-482665/",
        [
            "https://domani.shogakukan.co.jp/wp-content/uploads/2021/03/95a2059c4257821333376d06a5e60a76.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2021/03/01674.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2021/03/90e115f307ac449226bf2d1fa4a3dbed.jpg"
        ]
    );
});

test("Test series page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://domani.shogakukan.co.jp/448448",
        "domani.shogakukan.co.jp-448448/",
        [
            "https://domani.shogakukan.co.jp/wp-content/uploads/2018/12/IMG_0583.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2020/12/IMG_1715_a.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2020/12/0417a.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2020/12/0551-e.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2020/12/0755_a.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2021/01/hanazawamatome1.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2021/01/hanazawamatome2.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2021/01/hanazawamatome3.jpg",
            "https://domani.shogakukan.co.jp/wp-content/uploads/2020/12/6ab431edd9b9795420ff53d405913bf6-1.jpg"
        ]
    );
});
