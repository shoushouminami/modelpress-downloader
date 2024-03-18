const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
const {getLargeImg} = require("../../src/inject/www.vogue.co.jp");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test getLargeImg func", () => {
    expect(getLargeImg("https://media.vogue.co.jp/photos/608473999cee8adc4325f26b/master/w_100%2cc_limit/pb_1.jpg"))
        .toBe("https://media.vogue.co.jp/photos/608473999cee8adc4325f26b/master/pb_1.jpg");
    expect(getLargeImg("https://media.vogue.co.jp/photos/608473b49cee8adc4325f26d/master/w_100%2cc_limit/pb_2.jpeg"))
        .toBe("https://media.vogue.co.jp/photos/608473b49cee8adc4325f26d/master/pb_2.jpeg");
});

test("Test feature audi article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.vogue.co.jp/change/feature/2021-04/15/audi/",
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
        getBrowser(),
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
        getBrowser(),
        "https://www.vogue.co.jp/special-feature/2021-04/28/forevermark/page/2",
        "www.vogue.co.jp-special-feature-2021-04-28-forevermark-page-2/",
        [
            "https://www.vogue.co.jp/uploads/media/2021/04/19/fin_FM_01.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/19/fin_FM_02.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/g-04-1-420-420.jpg",
            "https://www.vogue.co.jp/uploads/media/2021/04/05/g-02-420-420.jpg",
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
