const {testDirectDownload, launchBrowser, dummyItems} = require("./testbase");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test nonno fasion article", async () => {
    await testDirectDownload(
        browser,
        "https://nonno.hpplus.jp/article/57274/02/",
        "nonno.hpplus.jp-article-57274-02-/",
        ["https://d3bhdfps5qyllw.cloudfront.net/org/52/52fbbccab183e1406c1cc0ec378febe2_1080x276_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/8e/8e48cf16320b2462027df6f5b819f6a3_1080x131_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/0d/0d2efbe0ecc11938db68baeac5a85e93_1080x1673_h.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/e3/e3951dfe6d1d946ef1ec029ad8470456_1080x937_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/47/47238a3377b5ae3851ac304c4fda5447_1080x1378_h.jpg"]);
});

test("Test nonno beauty article", async () => {
    await testDirectDownload(
        browser,
        "https://nonno.hpplus.jp/article/56660/01/",
        "nonno.hpplus.jp-article-56660-01-/",
        ["https://d3bhdfps5qyllw.cloudfront.net/org/5b/5b1be0181da5a48495a007bd1ee2dc50_1080x217_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/2e/2e106ba9f08d04fc22bd6ccf48e8420e_1080x1074_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/f6/f617247cad4a76e51799d9361381b4a6_1080x600_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/04/0479e4050c513986cd3440b64a494994_1080x600_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/d9/d90c33dfe8b6171c595d42c83a0ee550_1080x600_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/c0/c0f577775fd7587d0b7a44e1074cb663_1080x600_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/f6/f6d5c308a31a8152b2f216a0a5108241_1080x600_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/f0/f087c107586c4db6b2302f0bd7ca9fbc_1080x600_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/89/894e2fafed27930278e0775f930e45a6_1080x600_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/69/69611d750cd5f8f8350ff455a5c070a5_1080x600_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/6a/6a7d5768c56c65e8e185fc5b7808ae57_1080x600_w.jpg",
            "https://d3bhdfps5qyllw.cloudfront.net/org/da/da27b03771af250bdab182b527190304_1080x600_w.jpg"]);
});
