const {testDirectDownload, launchBrowser, dummyItems} = require("./testbase");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test apress.jp article with only embeded image", async () => {
    await testDirectDownload(
        browser,
        "https://apress.jp/archives/10032",
        "apress.jp-archives-10032/",
        [
            "https://apress.jp/wp-content/uploads/2020/01/unnamed-file-1-3622492935-1578220996437.jpg",
            "https://apress.jp/wp-content/uploads/2020/01/unnamed-file.jpg"
        ]
    );
});

test("Test apress.jp article with image gallery", async () => {
    await testDirectDownload(
        browser,
        "https://apress.jp/archives/10040",
        "apress.jp-archives-10040/",
        ["https://apress.jp/wp-content/uploads/2020/01/46%E6%88%90%E4%BA%BA%E5%BC%8F2020-01684.jpg",
            "https://apress.jp/wp-content/uploads/2020/01/46%E6%88%90%E4%BA%BA%E5%BC%8F2020-01685.jpg",
            "https://apress.jp/wp-content/uploads/2020/01/46%E6%88%90%E4%BA%BA%E5%BC%8F2020-01697.jpg",
            "https://apress.jp/wp-content/uploads/2020/01/46%E6%88%90%E4%BA%BA%E5%BC%8F2020-01700.jpg",
            "https://apress.jp/wp-content/uploads/2020/01/46%E6%88%90%E4%BA%BA%E5%BC%8F2020-01710.jpg",
            "https://apress.jp/wp-content/uploads/2020/01/46%E6%88%90%E4%BA%BA%E5%BC%8F2020%E3%82%A2%E3%82%A4%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81-01850.jpg"].concat(dummyItems(35)));
});

test("Test apress.jp article with more embeded images", async () => {
    await testDirectDownload(
        browser,
        "https://apress.jp/archives/378",
        "apress.jp-archives-378/",
        ["https://apress.jp/wp-content/uploads/2017/08/44cacae9afc2f9b93fb1a26dfe515c93_d48380ce590f730b18556f6b96b1d2fc.jpg",
            "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/230815/724e5d568af58369b725a44834745548_ae5718e59903e9bba754a36ab9f61bb6.jpg",
            "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/230815/940046f44740816dd1ced5a728274cc1_355b7726b59ee4bbded40db2825f8a48.jpg",
            "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/230815/eb0aa41ddab8eaf803f3dc73896f192b_535e5ced904b9041401175b82c8c0754.jpg",
            "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/230815/9315ae2852f50ef930177ea1501dbe6b_9847b727b4263511d6544c6dedd3ea4c.jpg",
            "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/230815/312194b91c563e2611cdc3c5e1cf1331_2b849365168ddc988ebbd442b4797983.jpg"].concat(dummyItems(47)));
});

test("Test apress.jp article with embeded images excluding ads", async () => {
    await testDirectDownload(
        browser,
        "https://apress.jp/archives/10003",
        "apress.jp-archives-10003/",
        ["https://apress.jp/wp-content/uploads/2019/12/main-8-2914344712-1577333035183.jpg",
            "https://apress.jp/wp-content/uploads/2019/12/main-9.jpg"]);
});

test("Test apress.jp article with images", async () => {
    await testDirectDownload(
        browser,
        "https://apress.jp/archives/13005",
        "apress.jp-archives-13005/",
        [
            "https://apress.jp/wp-content/uploads/2020/11/00939.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00819.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00822.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00823.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00829.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00831.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00834.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00835.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00838.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00854.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00860.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00862.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00875.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00916.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00920.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00923.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00936.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00937.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00938.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00939.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00940.jpg",
            "https://apress.jp/wp-content/uploads/2020/11/%E7%99%BD%E7%9F%B3%E9%BA%BB%E8%A1%A3-00942.jpg"
        ]
    );
});
