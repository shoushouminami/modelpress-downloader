const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const pageutils = require("../pageutils");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("samplebook/val_maouno86/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.comic-valkyrie.com/samplebook/val_maouno86/",
        "www.comic-valkyrie.com-samplebook-val_maouno86-/",
        dummyItems(20),
        {
            pagetimeout: 20000,
            preinject: async function () {
                await pageutils.wait(6000);
            }
        }
    );
});
