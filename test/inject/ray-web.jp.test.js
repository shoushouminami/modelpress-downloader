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
        [
            "https://ray-web.jp/wp-content/uploads/2020/07/472bf892ee3bd4be918741d2ae64eb3cb9434dbd.jpg",
            "https://ray-web.jp/wp-content/uploads/migration/3e8ac64274eb3c9d9f75fff83e1aa20ea26fbf2d.jpg",
            "https://ray-web.jp/wp-content/uploads/migration/8230affdf4bfbbfdfd1da9676a088763301fba0d.jpg",
            "https://ray-web.jp/wp-content/uploads/migration/d5017bc2b468c27c355c2e541c8094c90e5a972f.jpg"
        ]
    );
});

test("Test ray-web.jp intro page ", async () => {
    await testDirectDownload(
        browser,
        "https://ray-web.jp/54526",
        "ray-web.jp-54526/",
        [
            "https://ray-web.jp/wp-content/uploads/2020/07/472bf892ee3bd4be918741d2ae64eb3cb9434dbd.jpg"
        ]
    );
});

test("Test ray-web.jp article 2 ", async () => {
    await testDirectDownload(
        browser,
        "https://ray-web.jp/56094?page=1",
        "ray-web.jp-56094/",
        [
            "https://ray-web.jp/wp-content/uploads/2020/09/520781574fc5b6e9c418d8836c7345f5dd41408d-1.jpg",
            "https://ray-web.jp/wp-content/uploads/migration/c89ebb4c459f19271c27722f52a7ca6736b1fa4e.jpg",
            "https://ray-web.jp/wp-content/uploads/migration/d34914720f8049d91a97daba707a5ca55efbc041.jpg",
            "https://ray-web.jp/wp-content/uploads/migration/504319d299628734789ec83c8943659bc443bd46.jpg",
            "https://ray-web.jp/wp-content/uploads/migration/fd38c0d5064661a4955e09ea180f5125ddef48be.jpg",
            "https://ray-web.jp/wp-content/uploads/migration/439e98ad441496e6881207794a49a749fd896426.jpg",
            "https://ray-web.jp/wp-content/uploads/migration/d43cdc3f1ddbb7d11d4c982e88ae7cc9ea947f5b.jpg",
            "https://ray-web.jp/wp-content/uploads/migration/b6b436245fd99a225f1e4e4b8746677205145c66.jpg",
            "https://ray-web.jp/wp-content/uploads/migration/35b9e921677f62337be8890a866a93dc77895072.jpg"
        ]
    );
});

test("Test ray-web.jp photos gallery page ", async () => {
    await testDirectDownload(
        browser,
        "https://ray-web.jp/56094/photos/fd38c0d5064661a4955e09ea180f5125ddef48be",
        "ray-web.jp-56094-photos-fd38c0d5064661a4955e09ea180f5125ddef48be/",
        [
            "https://ray-web.jp/wp-content/uploads/2020/09/fd38c0d5064661a4955e09ea180f5125ddef48be.jpg",
            "https://ray-web.jp/wp-content/uploads/2020/09/c89ebb4c459f19271c27722f52a7ca6736b1fa4e.jpg",
            "https://ray-web.jp/wp-content/uploads/2020/09/d34914720f8049d91a97daba707a5ca55efbc041.jpg",
            "https://ray-web.jp/wp-content/uploads/2020/09/504319d299628734789ec83c8943659bc443bd46.jpg",
            "https://ray-web.jp/wp-content/uploads/2020/09/439e98ad441496e6881207794a49a749fd896426.jpg",
            "https://ray-web.jp/wp-content/uploads/2020/09/d43cdc3f1ddbb7d11d4c982e88ae7cc9ea947f5b.jpg",
            "https://ray-web.jp/wp-content/uploads/2020/09/b6b436245fd99a225f1e4e4b8746677205145c66.jpg",
            "https://ray-web.jp/wp-content/uploads/2020/09/35b9e921677f62337be8890a866a93dc77895072.jpg"
        ]
    );
});
