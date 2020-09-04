const {testDirectDownload, launchBrowser} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test girlswalker.com article page", async () => {
    await testDirectDownload(
        browser,
        "https://girlswalker.com/archives/238732/",
        "girlswalker.com-archives-238732-/",
        ["https://girlswalker.com/wp-content/uploads/2020/01/0d40a5e4a645fc6b96e767d64ac0878e-6.jpg",
            "https://girlswalker.com/wp-content/uploads/2020/01/384b71410a13f6e7eb9fbe615a00b656.jpg"],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        });
});

test("Test girlswalker.com gallery page", async () => {
    await testDirectDownload(
        browser,
        "https://girlswalker.com/archives/238732/%e7%84%a1%e9%a1%8c-48/",
        "girlswalker.com-archives-238732-%e7%84%a1%e9%a1%8c-48-/",
        ["https://girlswalker.com/wp-content/uploads/2020/01/0d40a5e4a645fc6b96e767d64ac0878e-6.jpg",
            "https://girlswalker.com/wp-content/uploads/2020/01/384b71410a13f6e7eb9fbe615a00b656.jpg"],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        });
});

test("Test girlswalker.com article page lazy load", async () => {
    await testDirectDownload(
        browser,
        "https://girlswalker.com/archives/256147/",
        "girlswalker.com-archives-256147-/",
        [
            "https://girlswalker.com/wp-content/uploads/2020/08/642d295b13e606fae7f5c437262e1824.jpg"
        ]);
});
