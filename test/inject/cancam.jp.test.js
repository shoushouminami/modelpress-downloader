const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test cancam.jp magzine main page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://cancam.jp/cancam201911",
        "cancam.jp-cancam201911/",
        dummyItems(12)
    );
});

test("cancam", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://cancam.jp/cancam",
        "cancam.jp-cancam/",
        [],
        {
            sizeMatch: function (expectedSize, actualSize) {
                expect(actualSize).toBeGreaterThan(10);
            }
        });
});


test("archives/711412", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://cancam.jp/archives/711412",
        "cancam.jp-archives-711412/",
        [
            "https://cancam.jp/uploads/2019/09/01-20190920150029.jpg",
            "https://cancam.jp/uploads/2019/09/02-20190920150031.jpg",
            "https://cancam.jp/uploads/2019/09/03-20190920150033.jpg",
            "https://cancam.jp/uploads/2019/09/abbfcb00ca660382d990baad8261f55b-20190920150035.jpg"
        ]);
});

test("Test cancam.jp media collection page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://cancam.jp/medias/%e3%80%90%e7%94%bb%e5%83%8f%e4%b8%80%e8%a6%a7%e3%80%91%e6%9d%be%e6%9d%91%e6%b2%99%e5%8f%8b%e7%90%86",
        "cancam.jp-medias-%e3%80%90%e7%94%bb%e5%83%8f%e4%b8%80%e8%a6%a7%e3%80%91%e6%9d%be%e6%9d%91%e6%b2%99%e5%8f%8b%e7%90%86/",
        ["https://cancam.jp/uploads/2017/12/CanCam201802_cover-20171220165822.jpg","https://cancam.jp/uploads/2017/12/ACCU_1P-20171211185335.jpg","https://cancam.jp/uploads/2017/11/2285f0d5676d0576d15a0226aba3f613-20171108130452-20171108132029.jpg","https://cancam.jp/uploads/2017/09/IMG_9561-20170928135633.jpg","https://cancam.jp/uploads/2017/09/MG_8563-20170928135627.jpg","https://cancam.jp/uploads/2017/09/MG_8519-20170928135621.jpg","https://cancam.jp/uploads/2017/09/MG_8468-20170928135616.jpg","https://cancam.jp/uploads/2017/10/12aeb9453f9519d2a2e60374dedcf54f-20171001202913.jpg","https://cancam.jp/uploads/2017/10/bf90e36116ba7423ba35fd4abff303fa-20171001202908.jpg","https://cancam.jp/uploads/2017/10/dadd0a1bb09b0eefb6035608b7296431-20171001202902.jpg","https://cancam.jp/uploads/2017/10/8402-20171005165624.jpg","https://cancam.jp/uploads/2017/10/MG_8389-20171005165458.jpg","https://cancam.jp/uploads/2017/10/MG_8405-20171005165431.jpg","https://cancam.jp/uploads/2017/10/MG_8397-20171005165348.jpg","https://cancam.jp/uploads/2017/11/IMG_2287-20171123203840.jpg","https://cancam.jp/uploads/2017/10/MG_8396-20171005165311.jpg","https://cancam.jp/uploads/2017/10/MG_8386-20171005165251.jpg","https://cancam.jp/uploads/2017/10/MG_8377-20171005165233.jpg","https://cancam.jp/uploads/2017/10/MG_8369-20171005165217.jpg","https://cancam.jp/uploads/2017/09/asahinagu_11-20170922215716.jpg"]
    );
});
