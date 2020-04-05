const {testDirectDownload, launchBrowser} = require("./testbase");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test mikan-incomplete.com game article", async () => {
    await testDirectDownload(
        browser,
        "https://mikan-incomplete.com/game/55932",
        "mikan-incomplete.com-game-55932/",
        ["https://mikan-incomplete.com/wp-content/uploads/2019/09/449.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/124.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/179-1.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/207.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/226-1.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/173-2.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/174.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/238.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/268.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/316-2.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/332.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/410.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/414.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/426.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/430.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/442.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/088-1.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/114.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/186.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/214.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/230.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/301.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/444.jpg"]);
});

test("Test mikan-incomplete.com character article", async () => {
    await testDirectDownload(
        browser,
        "https://mikan-incomplete.com/character/55983",
        "mikan-incomplete.com-character-55983/",
        ["https://mikan-incomplete.com/wp-content/uploads/2019/09/08d1ca8582b80c45a5b3b3d278e576c8.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/024423ecc3cd13d0cd6c054656bcae05.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/0e8bc1e7970b1324d77e045ba8d3b1a4.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/18a7f4f545a16ca9c72551e79046d033.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/f1ea29a728dafa39c6df1e680d98475a.jpg"]);
});

test("Test mikan-incomplete.com girls/news-girls article", async () => {
    await testDirectDownload(
        browser,
        "https://mikan-incomplete.com/girls/news-girls/55579",
        "mikan-incomplete.com-girls-news-girls-55579/",
        ["https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-941773-17-1.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-941773-17.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-448624-9.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-890535-11.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-155733-7.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-175733-6.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-347954-4.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-870129-5.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-990737-3.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-446123-8.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-211403-13.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-234826-14.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-954803-15.jpg"]
    );
});
