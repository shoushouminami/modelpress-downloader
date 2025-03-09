const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test image gallery page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://hominis.media/category/idol/post6256/gallery/",
        "hominis.media-category-idol-post6256-gallery-/",
        [
            "https://hominis.media/2020/08/images/kimioi01.jpg",
            "https://hominis.media/2020/08/images/kimioi02.jpg",
            "https://hominis.media/2020/08/images/kimioi03.jpg",
            "https://hominis.media/2020/08/images/kimioi04.jpg",
            "https://hominis.media/2020/08/images/kimioi05.jpg",
            "https://hominis.media/2020/09/images/banner_nogizaka46.jpg"
        ]);
});

test("Test news article page", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://hominis.media/category/idol/post6137/",
            "hominis.media-category-idol-post6137-/",
            [
                "https://hominis.media/2020/08/images/ikuta01.jpg",
                "https://hominis.media/2020/08/images/ikuta02.jpg"
            ]);
});

test("category/idol/post6256/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://hominis.media/category/idol/post6256/",
        "hominis.media-category-idol-post6256-/",
        [
            "https://hominis.media/2020/08/images/kimioi01.jpg",
            "https://hominis.media/2020/08/images/kimioi02.jpg",
            "https://hominis.media/2020/08/images/kimioi03.jpg",
            "https://hominis.media/2020/08/images/kimioi04.jpg",
            "https://hominis.media/2020/08/images/kimioi05.jpg",
            "https://hominis.media/2020/09/images/banner_nogizaka46.jpg"
        ]);
});

test("Test news article lazy loading 1st image", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://hominis.media/category/idol/post5649/",
        "hominis.media-category-idol-post5649-/",
        [
            "https://hominis.media/2020/04/images/01eizouken.jpg",
        ],
        {
            sizeMatch: function (expectedSize, actualSize) {
                expect(actualSize).toBeGreaterThanOrEqual(1);
            }
        });
});
