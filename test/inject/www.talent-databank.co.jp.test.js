const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll); 

describe("Test suite www.talent-databank.co.jp", () => {
    test("special/topics/56260/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.talent-databank.co.jp/special/topics/56260/",
            "www.talent-databank.co.jp-special-topics-56260-/",
            [
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/DSC_2788.jpg",
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/55.jpg",
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/33-1.jpg",
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/DSC_2788-1.jpg"
            ]);
    });

    test("special/topics/56120/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.talent-databank.co.jp/special/topics/56120/",
            "www.talent-databank.co.jp-special-topics-56120-/",
            [
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/0812topex.jpg",
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/352b047844c135cf9f5b5de1feb2580c.jpg",
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/af0de4debd9ffb5e6f91e410ab63b8c5.jpg"
            ]);
    });

    test("special/topics/55992/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.talent-databank.co.jp/special/topics/55992/",
            "www.talent-databank.co.jp-special-topics-55992-/",
            [
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/0810topnogi.jpg",
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/cc527ef9ea507c0c3cfc982535250e74.jpg",
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/81b70f365d58492ca43c88a10d21ae56.jpg",
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/da495640c3ff0e341994d6b43171d03e.jpg",
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/183931e13dfce8926a97e8a9434800ba.jpg",
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/8feada33115af3fdc1c9c58f59368967.jpg",
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/8dfb95bb79c4ceb79d894197d2dfe230.jpg",
                "https://www.talent-databank.co.jp/special/wp-content/uploads/2026/08/d8bb3260b7a22c0188f77ca010d0670d.jpg"
            ]);
    });
})
