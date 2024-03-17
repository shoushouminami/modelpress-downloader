const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const pageutils = require("../pageutils");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

// news.mynavi.jp
test("article/20200404-minamisara/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/article/20200404-minamisara/",
        "news.mynavi.jp-article-20200404-minamisara-/",
        [
            "https://news.mynavi.jp/article/20200404-minamisara/images/001_wml.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/002l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/003_wml.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/004_wml.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/005_wml.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/006_wml.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/007l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/008l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/009_wml.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/010_wml.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/011_wml.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/012_wml.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/013_wml.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/014_wml.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/015_wml.jpg"
        ]);
});

test("photo/article/20190612-842046/images/001l.jpg", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/photo/article/20190612-842046/images/001l.jpg",
        "news.mynavi.jp-photo-article-20190612-842046-images-001l.jpg/",
        [
            "https://news.mynavi.jp/article/20190612-842046/images/001_largel.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/012l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/013l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/014l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/015l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/016l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/017l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/001l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/002l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/003l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/004l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/005l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/006l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/007l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/008l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/009l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/010l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/011l.jpg"
        ]);
});

test("Test news.mynavi.jp article with only inline image", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/article/20200424-1023132/",
        "news.mynavi.jp-article-20200424-1023132-/",
        ["https://news.mynavi.jp/article/20200424-1023132/images/001l.jpg"]
    );
});

test("photo/article/20230910-zom100/images/001l.jpg", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/photo/article/20230910-zom100/images/001l.jpg",
        "news.mynavi.jp-photo-article-20230910-zom100-images-001l.jpg/",
        [
            "https://news.mynavi.jp/article/20230910-zom100/images/001_large_wml.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/images/005_wml.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/images/006l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/images/007l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/images/008l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/images/009l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/images/010l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/images/001_wml.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/images/002l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/images/003l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/images/004l.jpg"
        ]);
});

test("article/20230911-zom100/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/article/20230911-zom100/",
        "news.mynavi.jp-article-20230911-zom100-/",
        [
            "https://news.mynavi.jp/article/20230911-zom100/images/001_wml.jpg",
            "https://news.mynavi.jp/article/20230911-zom100/images/002l.jpg",
            "https://news.mynavi.jp/article/20230911-zom100/images/003_wml.jpg",
            "https://news.mynavi.jp/article/20230911-zom100/images/004l.jpg",
            "https://news.mynavi.jp/article/20230911-zom100/images/005l.jpg",
            "https://news.mynavi.jp/article/20230911-zom100/images/006l.jpg",
            "https://news.mynavi.jp/article/20230911-zom100/images/007l.jpg",
            "https://news.mynavi.jp/article/20230911-zom100/images/008l.jpg",
            "https://news.mynavi.jp/article/20230911-zom100/images/009l.jpg"
        ]);
});

test("article/20230910-zom100/2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/article/20230910-zom100/2",
        "news.mynavi.jp-article-20230910-zom100-2/",
        [
            "https://news.mynavi.jp/article/20230910-zom100/2/images/001_wml.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/2/images/002l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/2/images/003l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/2/images/004l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/2/images/005_wml.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/2/images/006l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/2/images/007l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/2/images/008l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/2/images/009l.jpg",
            "https://news.mynavi.jp/article/20230910-zom100/2/images/010l.jpg"
        ]);
});
