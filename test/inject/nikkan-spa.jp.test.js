const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite nikkan-spa.jp", () => { 
    test("2180085", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://nikkan-spa.jp/2180085",
            "nikkan-spa.jp-2180085/",
            [
                "https://nikkan-spa.jp/wp-content/uploads/2026/08/ishibashi_4Y5A3186.jpg",
                "https://nikkan-spa.jp/wp-content/uploads/2026/08/ryuto_4Y5A3197.jpg",
                "https://nikkan-spa.jp/wp-content/uploads/2026/08/izawa_4Y5A3194.jpg",
                "https://nikkan-spa.jp/wp-content/uploads/2026/08/takemoto_4Y5A3191.jpg",
                "https://nikkan-spa.jp/wp-content/uploads/2026/08/kurihara_.jpg",
                "https://nikkan-spa.jp/wp-content/uploads/2026/08/toyonaga_4Y5A3203.jpg",
                "https://nikkan-spa.jp/wp-content/uploads/2026/08/all_4Y5A3230.jpg",
                "https://nikkan-spa.jp/wp-content/uploads/2026/08/all_4Y5A3239.jpg"
            ]);
    });

}); 

