const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser =  getBrowserFactory(beforeAll, afterAll);

describe("Test suite mainichi.jp", () => {

    test("articles/20250703/k00/00m/200/425000c", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://mainichi.jp/articles/20250703/k00/00m/200/425000c",
            "mainichi.jp-articles-20250703-k00-00m-200-425000c/",
            [
                "https://cdn.mainichi.jp/vol1/2025/07/04/20250704k0000m200065000p/9.jpg"
            ]);
    });

    test("articles/20260814/k00/00m/040/196000c", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://mainichi.jp/articles/20260814/k00/00m/040/196000c",
            "mainichi.jp-articles-20260814-k00-00m-040-196000c/",
            [
                "https://cdn.mainichi.jp/vol1/2026/08/14/20260814k0000m040199000p/9.jpg",
                "https://cdn.mainichi.jp/vol1/2026/08/14/20260814k0000m040200000p/9.jpg"
            ]);
    });


    test("graphs/20250705/mpj/00m/050/131000f/20250705mpj00m050132000p", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://mainichi.jp/graphs/20250705/mpj/00m/050/131000f/20250705mpj00m050132000p",
            "mainichi.jp-graphs-20250705-mpj-00m-050-131000f-20250705mpj00m050132000p/",
            dummyItems(27)
        );
    });


})

