const mod = require("../../src/inject/entamenext.com").test;
const {testDirectDownload, resolvePath, launchBrowser} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test pattern", () => {
    expect("https://images.entamenext.com/articles_photos/3000/3908/231x410/8873ee858bbbb110f73e67ec63c44ddd.jpg"
        .match(mod.pattern)).toBeTruthy();
});

test("Test getLargeImgFromUrl", () => {
    let largeUrl = mod.getLargeImgFromUrl("https://images.entamenext.com/articles_photos/3000/3908/231x410/8873ee858bbbb110f73e67ec63c44ddd.jpg");
    expect(largeUrl).toBeDefined();
    expect(largeUrl).toBe("https://images.entamenext.com/articles_photos/3000/3908/ORG/8873ee858bbbb110f73e67ec63c44ddd.jpg");
});

// https://entamenext.com/
test("Test entamenext.com image page", async () => {
    await testDirectDownload(
        browser,
        "https://entamenext.com/articles/gallery/4011/1",
        "entamenext.com-articles-gallery-4011-1/",
        ["https://images.entamenext.com/articles_photos/4000/4011/ORG/aef621b8d71c50e985c8872510939652.jpg",
            "https://images.entamenext.com/articles_photos/4000/4011/ORG/ed55d3709ff988df9927b048182153f7.jpg",
            "https://images.entamenext.com/articles_photos/4000/4011/ORG/e488f818267c15aadaeddec5218e45ac.jpg",
            "https://images.entamenext.com/articles_photos/4000/4011/ORG/195144b32b0cb508ee3606138fd60233.jpg",
            "https://images.entamenext.com/articles_photos/4000/4011/ORG/ce10836abde6e79ad985b59ef5f2b4e0.jpg",
            "https://images.entamenext.com/articles_photos/4000/4011/ORG/dcc727986b3bacae2e8c27f92cf75957.jpg"]);
});

test("Test entamenext.com article page", async () => {
    await testDirectDownload(
        browser,
        "https://entamenext.com/articles/detail/4011",
        "entamenext.com-articles-detail-4011/",
        ["https://images.entamenext.com/articles/4000/4011/ORG/7b97380f695ac9f13d5170d6ce47d144.jpg"]);
});

