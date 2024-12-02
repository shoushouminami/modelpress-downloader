const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const pageutils = require("../pageutils");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test samplebook page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.comic-valkyrie.com/samplebook/val_bomber03/",
        "www.comic-valkyrie.com-samplebook-val_bomber03-/",
        dummyItems(34),
        {
            pagetimeout: 20000,
            preinject: async function () {
                await pageutils.wait(6000);
            }
        }
    );
});
