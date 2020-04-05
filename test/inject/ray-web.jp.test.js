const {testDirectDownload, resolvePath, launchBrowser} = require("./testbase");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test ray-web.jp article page ", async () => {
    await testDirectDownload(
        browser,
        "https://ray-web.jp/54526?page=1",
        "ray-web.jp-54526/",
        ["https://content.ray-web.jp/articles/images/54526/large/472bf892ee3bd4be918741d2ae64eb3cb9434dbd.jpg",
            "https://content.ray-web.jp/photos/pictures/72185/medium/3e8ac64274eb3c9d9f75fff83e1aa20ea26fbf2d.jpg",
            "https://content.ray-web.jp/photos/pictures/72186/medium/8230affdf4bfbbfdfd1da9676a088763301fba0d.jpg",
            "https://content.ray-web.jp/photos/pictures/72187/medium/d5017bc2b468c27c355c2e541c8094c90e5a972f.jpg"]);
});

test("Test ray-web.jp intro page ", async () => {
    await testDirectDownload(
        browser,
        "https://ray-web.jp/54526",
        "ray-web.jp-54526/",
        ["https://content.ray-web.jp/articles/images/54526/large/472bf892ee3bd4be918741d2ae64eb3cb9434dbd.jpg"]);
});

test("Test ray-web.jp photos page ", async () => {
    await testDirectDownload(
        browser,
        "https://ray-web.jp/54526/photos/72185",
        "ray-web.jp-54526-photos-72185/",
        ["https://content.ray-web.jp/photos/pictures/72185/medium/3e8ac64274eb3c9d9f75fff83e1aa20ea26fbf2d.jpg",
            "https://content.ray-web.jp/photos/pictures/72186/medium/8230affdf4bfbbfdfd1da9676a088763301fba0d.jpg",
            "https://content.ray-web.jp/photos/pictures/72187/medium/d5017bc2b468c27c355c2e541c8094c90e5a972f.jpg"]);
});
