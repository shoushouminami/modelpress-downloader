const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/post-22119/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://glassgirl.info/article/post-22119/",
        "glassgirl.info-article-post-22119-/",
        dummyItems(1)
    );
});

test("article/post-21609/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://glassgirl.info/article/post-21609/",
            "glassgirl.info-article-post-21609-/",
            dummyItems(3)
        );
});

test("article/post-21341/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://glassgirl.info/article/post-21341/",
            "glassgirl.info-article-post-21341-/",
            dummyItems(8)
        );
});

test("article/post-22606/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://glassgirl.info/article/post-22606/",
        "glassgirl.info-article-post-22606-/",
        dummyItems(5)
    );
});

test("article/post-22506/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://glassgirl.info/article/post-22506/",
        "glassgirl.info-article-post-22506-/",
        dummyItems(84));
});
