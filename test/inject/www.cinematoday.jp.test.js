const {re, getLargeImg} = require("../../src/inject/www.cinematoday.jp");
const {testDirectDownload, launchBrowser, dummyItems} = require("./testbase");
const pageutils = require("../pageutils");

test("Test regex", () => {
    let m = "https://img.cinematoday.jp/a/CZJYMLQU-j7p/_size_640x/_v_1335279600/2.jpg".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("_size_640x/");

    m = "https://img.cinematoday.jp/a/E0000454/_size_c200x200/_v_1335279600/1.jpg".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("_size_c200x200/");
    expect("https://img.cinematoday.jp/a/E0000454/_v_1335279600/1.jpg".match(re)).toBeNull();
});

test("Test getLargeImg", () => {
    expect(getLargeImg("https://img.cinematoday.jp/a/CZJYMLQU-j7p/_size_640x/_v_1335279600/2.jpg"))
        .toBe("https://img.cinematoday.jp/a/CZJYMLQU-j7p/_v_1335279600/2.jpg");
    expect(getLargeImg("https://img.cinematoday.jp/a/E0000454/_size_c200x200/_v_1335279600/1.jpg"))
        .toBe("https://img.cinematoday.jp/a/E0000454/_v_1335279600/1.jpg");
    expect(getLargeImg("https://img.cinematoday.jp/a/E0000454/_v_1335279600/1.jpg"))
        .toBe("https://img.cinematoday.jp/a/E0000454/_v_1335279600/1.jpg");
});

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test www.cinematoday.jp image gallery page", async () => {
    await testDirectDownload(
        browser,
        "https://www.cinematoday.jp/gallery/E0014987",
        "www.cinematoday.jp-gallery-E0014987/",
        [
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4753.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4754.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4755.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4760.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4762.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4767.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4768.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4771.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4777.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4780.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4784.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4787.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4789.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4796.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4802.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4812.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4813.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4815.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4821.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4822.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4824.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4827.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4838.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4843.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4844.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4848.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4864.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/DSC_4877.JPG",
            "https://img.cinematoday.jp/a/WC6mcC_u5blE/_v_1554204847/main.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 80);
            }
        });
});

test("Test www.cinematoday.jp news article page", async () => {
    await testDirectDownload(
        browser,
        "https://www.cinematoday.jp/news/N0107799",
        "www.cinematoday.jp-news-N0107799/",
        ["https://img.cinematoday.jp/a/a79leE2d9924/_v_1554204902/main.jpg"]);
});

test("Test www.cinematoday.jp news article page 2", async () => {
    await testDirectDownload(
        browser,
        "https://www.cinematoday.jp/news/N0115490",
        "www.cinematoday.jp-news-N0115490/",
        ["https://img.cinematoday.jp/a/KQkvapdJLpQk/_v_1587188602/main.jpg"]);
});

test("Test www.cinematoday.jp interview article", async () => {
    await testDirectDownload(
        browser,
        "https://www.cinematoday.jp/interview/A0007153",
        "www.cinematoday.jp-interview-A0007153/",
        ["https://img.cinematoday.jp/a/vhh2nCXqKV2j/A0007153-00.jpg",
            "https://img.cinematoday.jp/a/vhh2nCXqKV2j/A0007153-02.jpg",
            "https://img.cinematoday.jp/a/vhh2nCXqKV2j/A0007153-03.jpg",
            "https://img.cinematoday.jp/a/vhh2nCXqKV2j/A0007153-04.jpg",
            "https://img.cinematoday.jp/a/vhh2nCXqKV2j/A0007153-05.jpg",
            "https://img.cinematoday.jp/a/vhh2nCXqKV2j/A0007153-06.jpg"]);
});
