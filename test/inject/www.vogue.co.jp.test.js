const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
let browserFactory = getBrowserFactory(beforeAll, afterAll);

test("Test feature audi article", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://www.vogue.co.jp/change/feature/2021-04/15/audi/page/6",
        "www.vogue.co.jp-change-feature-2021-04-15-audi-page-6/",
        [
            "https://www.vogue.co.jp/uploads/media/2021/04/15/audi_01.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/15/audi05fin.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/07/_DSF1177.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/01/P5.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/15/audi_fin_04.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/15/audi_VOGUE.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 70, 500);
            }
        }
    );
});

test("Test feature accenture article", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://www.vogue.co.jp/change/feature/2021-04/12/accenture",
        "www.vogue.co.jp-change-feature-2021-04-12-accenture/",
        [
            "https://www.vogue.co.jp/uploads/media/2021/04/06/ac_fix_1.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/06/ac_fix_3-1.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/14/ac_fix_5++.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/06/ac_fix_4-1.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/07/ac_fix_6+-2.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/06/ac_fix_7.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/14/ac_fix_8++.jpg"
        ]
    );
});

test("Test feature perfume forevermark", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://www.vogue.co.jp/special-feature/2021-04/28/forevermark/page/2",
        "www.vogue.co.jp-special-feature-2021-04-28-forevermark-page-2/",
        [
            "https://www.vogue.co.jp/uploads/media/2021/04/20/pc_top.gif",
            "https://www.vogue.co.jp/uploads/media/2021/04/19/fin_FM_01.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/13/q-04-a_1.gif",
            "https://www.vogue.co.jp/uploads/media/2021/04/20/01_a-chan.gif",
            "https://www.vogue.co.jp/uploads/media/2021/04/13/q-06-a.gif",
            "https://www.vogue.co.jp/uploads/media/2021/04/20/03_nocchi.gif",
            "https://www.vogue.co.jp/uploads/media/2021/04/13/q-05-a.gif",
            "https://www.vogue.co.jp/uploads/media/2021/04/20/02_kashiyuka.gif",
            "https://www.vogue.co.jp/uploads/media/2021/04/19/fin_FM_02.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/q04.gif",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/product01.gif",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/g-04-1-420-420.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/g-02-420-420.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/product02.gif",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/g-05-1-420-420.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/g-06-1-420-420.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/g-06.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/details_01.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/details_04.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/details_02.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/details_03.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/08/details_05.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 70, 500);
            }
        }
    );
});
