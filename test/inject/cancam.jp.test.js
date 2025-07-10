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
            "https://cancam.jp/wp-content/uploads/2019/09/01-20190920150029.jpg",
            "https://cancam.jp/wp-content/uploads/2019/09/02-20190920150031.jpg",
            "https://cancam.jp/wp-content/uploads/2019/09/03-20190920150033.jpg",
            "https://cancam.jp/wp-content/uploads/2019/09/abbfcb00ca660382d990baad8261f55b-20190920150035.jpg"
        ]);
});

test("Test cancam.jp media collection page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://cancam.jp/medias/%e3%80%90%e7%94%bb%e5%83%8f%e4%b8%80%e8%a6%a7%e3%80%91%e6%9d%be%e6%9d%91%e6%b2%99%e5%8f%8b%e7%90%86",
        "cancam.jp-medias-%e3%80%90%e7%94%bb%e5%83%8f%e4%b8%80%e8%a6%a7%e3%80%91%e6%9d%be%e6%9d%91%e6%b2%99%e5%8f%8b%e7%90%86/",
        dummyItems(20)
    );
});
