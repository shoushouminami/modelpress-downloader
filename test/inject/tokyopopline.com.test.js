const {testDirectDownload, launchBrowser} = require("./testbase");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test tokyopopline.com", async () => {
    await testDirectDownload(
        browser,
        "https://tokyopopline.com/archives/120390",
        "tokyopopline.com-archives-120390/",
        ["https://tokyopopline.com/images/2019/09/35aa78b184a2d03872048d9f935cf013.jpg",
            "https://tokyopopline.com/images/2019/09/e2b04f74e8f47d7b1fd9a87bcaa0188c.jpg",
            "https://tokyopopline.com/images/2019/09/78572fb300b61a74dc1ec33f8c8c4424.jpg",
            "https://tokyopopline.com/images/2019/09/729501a0b060b68cda4bb2a97aab4a52.jpg",
            "https://tokyopopline.com/images/2019/09/ff4b19d5911f472538d5cea0c3d6e029.jpg",
            "https://tokyopopline.com/images/2019/09/44e9a4c23de9ad87377180e75be4179a.jpg",
            "https://tokyopopline.com/images/2019/09/2e1d5ed03d8839391fe8293d9f3e68c8.jpg"]);
});
