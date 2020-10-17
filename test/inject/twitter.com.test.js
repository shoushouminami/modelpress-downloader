const { testDirectDownload, getBrowserFactory } = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test 1 image", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://twitter.com/mai_westcoast/status/1312721916520587264",
        "twitter.com-mai_westcoast-status-1312721916520587264/",
        [
            "https://pbs.twimg.com/media/Eje5n-FUcAEFvc3?format=jpg&name=large"
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(1500);
            }
        });
});

test("Test 3 images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://twitter.com/nogizaka46/status/1312658348064428032",
        "twitter.com-nogizaka46-status-1312658348064428032/",
        [
            "https://pbs.twimg.com/media/Ejd_zkyVoAAAWxK?format=jpg&name=large",
            "https://pbs.twimg.com/media/Ejd_zkwU0AAvYze?format=jpg&name=large",
            "https://pbs.twimg.com/media/Ejd_zkwVoAEBXmV?format=jpg&name=large"
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(1500);
            }
        });
});

test("Test 1 image slide show", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://twitter.com/nogizaka46/status/1312710164730970117",
        "twitter.com-nogizaka46-status-1312710164730970117-photo-1/",
        [
            "https://pbs.twimg.com/media/Ejeu7fDU0AIBJjC?format=jpg&name=large"
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(1500);
                let executionContext = await page.mainFrame().executionContext();
                await executionContext.evaluate(() => {
                    try {
                        document.querySelectorAll("article")[0].querySelectorAll("div[aria-label=Image] img")[0].click();
                    } catch (ignored){}
                });
            }
        });
});

test.skip("Test 3 images slide show", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://twitter.com/nogizaka46/status/1312658348064428032/",
        "twitter.com-nogizaka46-status-1312658348064428032-photo-1/",
        [
            "https://pbs.twimg.com/media/Ejd_zkyVoAAAWxK.jpg:large",
            "https://pbs.twimg.com/media/Ejd_zkwU0AAvYze.jpg:large",
            "https://pbs.twimg.com/media/Ejd_zkwVoAEBXmV.jpg:large"
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(1500);
                let executionContext = await page.mainFrame().executionContext();
                await executionContext.evaluate(() => {
                    try {
                        document.querySelectorAll("article")[0].querySelectorAll("div[aria-label=Image] img")[0].click();
                    } catch (ignored){}
                });
            }
        });
});
