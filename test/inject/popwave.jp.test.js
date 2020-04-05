const {testDirectDownload, launchBrowser} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

// http://popwave.jp/
test("Test popwave.jp archives article", async () => {
    await testDirectDownload(
        browser,
        "http://popwave.jp/archives/6586",
        "popwave.jp-archives-6586/",
        ["http://popwave.jp/wp-content/uploads/2019/08/collage.jpg",
            "http://popwave.jp/wp-content/uploads/2019/08/sub2.jpg",
            "http://popwave.jp/wp-content/uploads/2019/08/sub6.jpg",
            "http://popwave.jp/wp-content/uploads/2019/08/sub5.jpg",
            "http://popwave.jp/wp-content/uploads/2019/08/sub4.jpg",
            "http://popwave.jp/wp-content/uploads/2019/08/sub3.jpg"],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        });
});

test("Test popwave.jp archives article with different pattern", async () => {
    await testDirectDownload(
        browser,
        "http://popwave.jp/archives/7197",
        "popwave.jp-archives-7197/",
        ["http://popwave.jp/wp-content/uploads/2020/03/AG0I5133.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I5159.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I4594.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I4708.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I4729.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I4960.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I4996.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I5016.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I5105.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I5190.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I5220.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I5223.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I5352.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I5354.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/AG0I5165.jpg"],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        });
});

test("Test popwave.jp archives article 2 with different pattern", async () => {
    await testDirectDownload(
        browser,
        "http://popwave.jp/archives/7222",
        "popwave.jp-archives-7222/",
        ["http://popwave.jp/wp-content/uploads/2020/03/25680.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25582.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25585.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25592.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25594.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25607.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25612.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25614.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25617.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25627.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25633.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25639.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25670.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25704.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25739.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25741.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25742.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25746.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25756.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25757.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25758.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25766.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25767.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25768.jpg",
            "http://popwave.jp/wp-content/uploads/2020/03/25784.jpg"],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        });
});
