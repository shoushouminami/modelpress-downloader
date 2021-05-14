const {testDirectDownload, getBrowserFactory} = require("./testbase");
const {getLargeImg} = require("../../src/inject/mantan-web.jp");
const pageutils = require("../pageutils");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test mantan-web.jp article with 4 images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mantan-web.jp/article/20200814dog00m200101000c.html",
        "mantan-web.jp-article-20200814dog00m200101000c.html/",
        [
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size6.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size5.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size4.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size3.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size6.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size5.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size4.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size3.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/003_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/003_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/003_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/003_size6.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/003_size5.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/003_size4.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/003_size3.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/003_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/004_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/004_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/004_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/004_size6.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/004_size5.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/004_size4.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/004_size3.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/004_size10.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 70);
            }
        }
    );
});

test("Test mantan-web.jp gallery with 12 images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mantan-web.jp/article/20200814dog00m200101000c.html?photo=001",
        "mantan-web.jp-article-20200814dog00m200101000c.html/",
        [
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size6.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/001_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size6.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/002_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/003_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/003_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/003_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/003_size6.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/003_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/004_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/004_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/004_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/004_size6.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/004_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/005_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/005_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/005_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/005_size6.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/005_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/006_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/006_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/006_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/006_size6.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/006_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/007_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/007_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/007_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/007_size6.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/007_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/008_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/008_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/008_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/008_size6.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/008_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/009_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/009_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/009_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/009_size6.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/009_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/010_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/010_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/010_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/010_size6.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/010_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/011_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/011_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/011_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/011_size6.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/011_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/012_size9.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/012_size8.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/012_size7.jpg",
                    "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/012_size6.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200101000c/012_size10.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 50);
            }
        }
    );
});

test("Test mantan-web.jp article with only 1 image", async () => {
    await testDirectDownload(
        getBrowser(),
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
        "retries": [],
        "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size10.jpg",
    });
})

test("Test mantan-web.jp page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mantan-web.jp/article/20191228dog00m200028000c.html",
        "mantan-web.jp-article-20191228dog00m200028000c.html/",
        [
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size9.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size8.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size7.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size6.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size5.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size4.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size3.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size9.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size8.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size7.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size6.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size5.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size4.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size3.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size9.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size8.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size7.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size6.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size5.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size4.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size3.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size9.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size8.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size7.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size6.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size5.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size4.jpg",
                    "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size3.jpg"
                ],
                "url": "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size10.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 50);
            }
        }
    );
});
