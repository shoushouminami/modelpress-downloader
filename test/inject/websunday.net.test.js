const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("95792/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://websunday.net/95792/",
        "websunday.net-95792-/",
        [
            "https://websunday.net/wp-content/uploads/2026/08/17853817322t.jpg",
            "https://websunday.net/wp-content/uploads/2026/08/17853817321t.jpg",
            "https://websunday.net/wp-content/uploads/2026/08/17853817320t.jpg",
            "https://websunday.net/wp-content/uploads/2026/08/ssc9.png"
        ]);
});

test("95892/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://websunday.net/95892/",
        "websunday.net-95892-/",
        [
            "https://websunday.net/wp-content/uploads/2026/08/17853815501t.jpg",
            "https://websunday.net/wp-content/uploads/2026/08/17853815500t.jpg",
            "https://websunday.net/wp-content/uploads/2026/08/ssc2.png"
        ]);
});
