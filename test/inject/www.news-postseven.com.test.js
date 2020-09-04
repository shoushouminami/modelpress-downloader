const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article image gallery page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.news-postseven.com/archives/20200813_1584763.html?DETAIL&IMAGE&PAGE=1",
        "www.news-postseven.com-archives-20200813_1584763.html/",
        [
                "https://www.news-postseven.com/uploads/2020/08/05/nishino_nanase_01.jpg",
                "https://www.news-postseven.com/uploads/2020/08/05/nishino_nanase_02.jpg",
                "https://www.news-postseven.com/uploads/2020/08/13/nanase_nishino_photobook01.jpg"
        ]);
});

test("Test news article detail page", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.news-postseven.com/archives/20200813_1584763.html?DETAIL",
            "www.news-postseven.com-archives-20200813_1584763.html/",
            [
                    "https://www.news-postseven.com/uploads/2020/08/05/nishino_nanase_01.jpg",
                    "https://www.news-postseven.com/uploads/2020/08/05/nishino_nanase_02.jpg",
                    "https://www.news-postseven.com/uploads/2020/08/13/nanase_nishino_photobook01.jpg"
            ]);
});
