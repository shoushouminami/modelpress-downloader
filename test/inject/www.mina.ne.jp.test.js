const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test magzine page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.mina.ne.jp/magazine/4480/",
        "www.mina.ne.jp-magazine-4480-/",
        [
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/DMA-mi00303.jpg",
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/DMA-135000020032.jpg",
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/DMA-567.jpg",
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/12164325.jpg",
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/DMA-2020_12_10_mina4701.jpg",
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/DMA-2020_12_10_mina5292.jpg",
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/DMA-0521.jpg"
        ]
    );
});

test("Test fashion page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.mina.ne.jp/fashion/4605/",
        "www.mina.ne.jp-fashion-4605-/",
        [
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/DMA-60.jpg",
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/DMA-868-1.jpg",
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/LACOSTE.jpg",
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/APC.jpg",
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/DMA-374.jpg",
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/2.jpg",
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/anatomica.jpg",
            "https://www.mina.ne.jp/wp-content/uploads/2021/01/DMA-399.jpg"
        ]
    );
});
