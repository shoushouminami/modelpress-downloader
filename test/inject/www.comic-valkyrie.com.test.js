const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const pageutils = require("../pageutils");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("samplebook/val_classmate71/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.comic-valkyrie.com/samplebook/val_classmate71/",
        "www.comic-valkyrie.com-samplebook-val_classmate71-/",
        dummyItems(23),
        {
            pagetimeout: 20000,
            preinject: async function () {
                await pageutils.wait(6000);
            }
        }
    );
});
