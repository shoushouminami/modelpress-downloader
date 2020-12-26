const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const pageutils = require("../pageutils");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

// news.mynavi.jp
test("Test news.mynavi.jp article page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/article/20200404-minamisara/",
        "news.mynavi.jp-article-20200404-minamisara-/",
        ["https://news.mynavi.jp/article/20200404-minamisara/images/001l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/002l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/003l.jpg"],
        {
            preinject: async function (page) {
                try {
                    await page.goto("https://news.mynavi.jp/article/20200404-minamisara/", {timeout: 3000, waitUtil: ["load", "domcontentloaded", "networkidle0"]});
                } catch (ignored) {}
                try {
                    await page.goto("https://news.mynavi.jp/article/20200404-minamisara/", {timeout: 3000, waitUtil: ["load", "domcontentloaded", "networkidle0"]});
                } catch (ignored) {}
                await pageutils.scrollToBottom(page, 300);
            },
            sizeMatch: function (expectedSize, actualSize) {
                expect(actualSize).toBeGreaterThanOrEqual(3);
            }
        });
});

test("Test news.mynavi.jp image gallery", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/photo/article/20190612-842046/images/001l.jpg",
        "news.mynavi.jp-photo-article-20190612-842046-images-001l.jpg/",
        ["https://news.mynavi.jp/article/20190612-842046/images/001l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/002l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/003l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/004l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/005l.jpg"].concat(dummyItems(12)));
});

test("Test news.mynavi.jp article with only inline image", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/article/20200424-1023132/",
        "news.mynavi.jp-article-20200424-1023132-/",
        ["https://news.mynavi.jp/article/20200424-1023132/images/001l.jpg"]
    );
});
