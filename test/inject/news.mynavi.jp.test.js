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
                    "https://news.mynavi.jp/article/20200404-minamisara/index_images/index.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/001l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/002l_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/003l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/004l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/005l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/006l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/007l_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/008l_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/009l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/010l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/011l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/012l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/013l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/014l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20200404-minamisara/images/015l_wm_large.jpg"
            ]);
});

test("article/20240523-2950574/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://news.mynavi.jp/article/20240523-2950574/",
            "news.mynavi.jp-article-20240523-2950574-/",
            [
                    "https://news.mynavi.jp/article/20240523-2950574/index_images/index.jpg",
                    "https://news.mynavi.jp/article/20240523-2950574/images/001_large.jpg",
                    "https://news.mynavi.jp/article/20240523-2950574/images/002_large.jpg",
                    "https://news.mynavi.jp/article/20240523-2950574/images/003_large.jpg",
                    "https://news.mynavi.jp/article/20240523-2950574/images/004_large.jpg",
                    "https://news.mynavi.jp/article/20240523-2950574/images/005_large.jpg"
            ]);
});

test("article/20241009-3041691/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/article/20241009-3041691/",
        "news.mynavi.jp-article-20241009-3041691-/",
        [
            "https://news.mynavi.jp/article/20241009-3041691/index_images/index.jpg",
            "https://news.mynavi.jp/article/20241009-3041691/images/001_large.jpg"
        ]);
});

test("photo/article/20190612-842046/images/001l.jpg", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://news.mynavi.jp/photo/article/20190612-842046/images/001l.jpg",
            "news.mynavi.jp-photo-article-20190612-842046-images-001l.jpg/",
            [
                    "https://news.mynavi.jp/article/20190612-842046/images/001l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/012l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/013l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/014l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/015l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/016l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/017l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/002l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/003l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/004l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/005l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/006l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/007l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/008l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/009l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/010l_large.jpg",
                    "https://news.mynavi.jp/article/20190612-842046/images/011l_large.jpg"
            ]);
});

test("photo/article/20230910-zom100/images/002.jpg", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://news.mynavi.jp/photo/article/20230910-zom100/images/002.jpg",
            "news.mynavi.jp-photo-article-20230910-zom100-images-002.jpg/",
            [
                    "https://news.mynavi.jp/article/20230910-zom100/images/002l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/images/006l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/images/007l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/images/008l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/images/009l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/images/010l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/images/001l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/images/003l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/images/004l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/images/005l_wm_large.jpg"
            ]);
});

test("article/20230911-zom100/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://news.mynavi.jp/article/20230911-zom100/",
            "news.mynavi.jp-article-20230911-zom100-/",
            [
                    "https://news.mynavi.jp/article/20230911-zom100/index_images/index.jpg",
                    "https://news.mynavi.jp/article/20230911-zom100/images/001l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20230911-zom100/images/002l_large.jpg",
                    "https://news.mynavi.jp/article/20230911-zom100/images/003l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20230911-zom100/images/004l_large.jpg",
                    "https://news.mynavi.jp/article/20230911-zom100/images/005l_large.jpg",
                    "https://news.mynavi.jp/article/20230911-zom100/images/006l_large.jpg",
                    "https://news.mynavi.jp/article/20230911-zom100/images/007l_large.jpg",
                    "https://news.mynavi.jp/article/20230911-zom100/images/008l_large.jpg",
                    "https://news.mynavi.jp/article/20230911-zom100/images/009l_large.jpg"
            ]);
});

test("article/20230910-zom100/2", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://news.mynavi.jp/article/20230910-zom100/2",
            "news.mynavi.jp-article-20230910-zom100-2/",
            [
                    "https://news.mynavi.jp/article/20230910-zom100/index_images/index.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/2/images/001l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/2/images/002l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/2/images/003l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/2/images/004l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/2/images/005l_wm_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/2/images/006l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/2/images/007l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/2/images/008l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/2/images/009l_large.jpg",
                    "https://news.mynavi.jp/article/20230910-zom100/2/images/010l_large.jpg"
            ]);
});
