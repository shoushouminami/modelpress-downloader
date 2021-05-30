const {testDirectDownload, getBrowserFactory} = require("./testbase");
const {getLargeImg} = require("../../src/inject/popnroll.tv");

test("Test getLargeImg", () => {
    expect(
        getLargeImg("https://img.popnroll.tv/uploads/news_item/image/17304/thumb_A-sha_S.jpg")
    ).toBe("https://img.popnroll.tv/uploads/news_item/image/17304/A-sha_S.jpg");
});

let browser = getBrowserFactory(beforeAll, afterAll);

test("Test news article", async () => {
    await testDirectDownload(
        browser(),
        "https://popnroll.tv/articles/17647",
        "popnroll.tv-articles-17647/",
        [
            "https://img.popnroll.tv/uploads/news_image/image/110731/sub2.jpg",
            "https://img.popnroll.tv/uploads/news_image/image/110732/sub3.jpg",
            "https://img.popnroll.tv/uploads/news_image/image/110733/sub4.jpg",
            "https://img.popnroll.tv/uploads/news_image/image/110734/main.jpg",
            "https://img.popnroll.tv/uploads/news_item/image/17647/sub1.jpg"
        ]
    );
});

test("Test image slide show", async () => {
    await testDirectDownload(
        browser(),
        "https://popnroll.tv/articles/17647/images/110731",
        "popnroll.tv-articles-17647-images-110731/",
        [
            "https://img.popnroll.tv/uploads/news_item/image/17647/sub1.jpg",
            "https://img.popnroll.tv/uploads/news_image/image/110731/sub2.jpg",
            "https://img.popnroll.tv/uploads/news_image/image/110732/sub3.jpg",
            "https://img.popnroll.tv/uploads/news_image/image/110733/sub4.jpg",
            "https://img.popnroll.tv/uploads/news_image/image/110734/main.jpg"
        ]
    );
});

test("Test image thumbnail page", async () => {
    await testDirectDownload(
        browser(),
        "https://popnroll.tv/articles/17647/images/",
        "popnroll.tv-articles-17647-images-/",
        [
            "https://img.popnroll.tv/uploads/news_item/image/17647/sub1.jpg",
            "https://img.popnroll.tv/uploads/news_image/image/110731/sub2.jpg",
            "https://img.popnroll.tv/uploads/news_image/image/110732/sub3.jpg",
            "https://img.popnroll.tv/uploads/news_image/image/110733/sub4.jpg",
            "https://img.popnroll.tv/uploads/news_image/image/110734/main.jpg"
        ]
    );
});
