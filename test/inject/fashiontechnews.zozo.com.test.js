const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const pageutils = require("../pageutils");

let getBrowser = getBrowserFactory(beforeAll, afterAll, {headless: true});
describe("Test suite fashiontechnews.zozo.com", () => {
    test("special/sakamichi_vintage/ayame_tsutsui?page=7", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://fashiontechnews.zozo.com/special/sakamichi_vintage/ayame_tsutsui?page=7",
            "fashiontechnews.zozo.com-special-sakamichi_vintage-ayame_tsutsui/",
            dummyItems(13),
            {
                preinject: async function (page) {
                    await pageutils.scrollTo(page, 70);
                }
            }
        );
    });

    test("special/sakamichi_vintage/mao_ioki_iwakuvintage?page=6", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://fashiontechnews.zozo.com/special/sakamichi_vintage/mao_ioki_iwakuvintage?page=6",
            "fashiontechnews.zozo.com-special-sakamichi_vintage-mao_ioki_iwakuvintage/",
            dummyItems(18),
            {
                preinject: async function (page) {
                                await pageutils.scrollTo(page, 70);
                            }
            }
        );
    });

})
