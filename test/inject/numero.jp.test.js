const { testDirectDownload, getBrowserFactory } = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("20230526", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://numero.jp/20230526-fantastics-taiki-sato/",
        "numero.jp-20230526-fantastics-taiki-sato/",
        [
            "https://numero.jp/wp-content/uploads/2023/05/TS_main650.jpg",
            "https://numero.jp/wp-content/uploads/2023/05/TS2.jpg",
            "https://numero.jp/wp-content/uploads/2023/05/TS3.jpg",
            "https://numero.jp/wp-content/uploads/2023/05/TS4.jpg",
        ]
    );
});
