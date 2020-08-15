const {testDirectDownload, launchBrowser, dummyItems} = require("./testbase");
const {getLargeImg} = require("../../src/inject/mantan-web.jp");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test mantan-web.jp article with 8 images", async () => {
    await testDirectDownload(
        browser,
        "https://mantan-web.jp/article/20200814dog00m200101000c.html",
        "mantan-web.jp-article-20200814dog00m200101000c.html/",
        [{
            retries: [
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size9.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size8.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size7.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size6.jpg"],
            url: "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size10.jpg"
        }, {
            retries: [
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size9.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size8.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size7.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size6.jpg"],
            url: "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size10.jpg"
        }].concat(dummyItems(6)));
});

test("Test mantan-web.jp gallery with 12 images", async () => {
    await testDirectDownload(
        browser,
        "https://mantan-web.jp/photo/20200814dog00m200101000c.html",
        "mantan-web.jp-photo-20200814dog00m200101000c.html/",
        [{
            retries: [
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size9.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size8.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size7.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size6.jpg"],
            url: "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size10.jpg"
        }, {
            retries: [
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size9.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size8.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size7.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size6.jpg"],
            url: "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size10.jpg"
        }].concat(dummyItems(10)));
});

test("Test mantan-web.jp article with only 1 image", async () => {
    await testDirectDownload(
        browser,
        "https://mantan-web.jp/article/20200814dog00m200031000c.html",
        "mantan-web.jp-article-20200814dog00m200031000c.html/",
        [{
            retries: [
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size9.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size8.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size7.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size6.jpg"],
            url: "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size10.jpg"
        }]);
});

test("Test getLargeImg function", () => {
    expect(getLargeImg("https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_thumb.jpg")).toStrictEqual({
        "retries": [
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size9.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size8.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size7.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size6.jpg",
            ],
        "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size10.jpg",
    });

    expect(getLargeImg("https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size6.jpg")).toStrictEqual({
        "retries": [
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size9.jpg",
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size8.jpg",
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size7.jpg",
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size6.jpg",
        ],
        "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size10.jpg",
    });

    expect(getLargeImg("https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size10.jpg")).toStrictEqual({
        "retries": [
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size9.jpg",
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size8.jpg",
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size7.jpg",
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size6.jpg",
        ],
        "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size10.jpg",
    });
})
