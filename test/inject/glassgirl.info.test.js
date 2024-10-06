const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/post-22119/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://glassgirl.info/article/post-22119/",
        "glassgirl.info-article-post-22119-/",
        [
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/08/TAK5327.jpg"
        ]);
});

test("article/post-21609/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://glassgirl.info/article/post-21609/",
            "glassgirl.info-article-post-21609-/",
            [
                    "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/LIVE_01_MOMO_main.jpg",
                    "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/%E3%82%82%E3%82%82%E3%81%AB%E3%82%83%E3%82%93_2.jpg",
                    "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/%E3%82%82%E3%82%82%E3%81%AB%E3%82%83%E3%82%93_3%EF%BC%88%E5%85%83%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E3%83%9E%E3%83%9E%EF%BC%89.jpeg"
            ]);
});

test("article/post-21341/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://glassgirl.info/article/post-21341/",
            "glassgirl.info-article-post-21341-/",
            [
                    "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/funaimiku_vol1_01.jpg",
                    "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/funaimiku_vol1_02.jpg",
                    "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/funaimiku_vol1_03.jpg",
                    "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/funaimiku_vol1_04.jpg",
                    "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/funaimiku_vol1_05.jpg",
                    "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/cfunaimiku_vol1_06.jpg",
                    "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/funaimiku_vol1_07.jpg",
                    "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/funaimiku_vol1_08.jpg"
            ]);
});

test("article/post-22606/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://glassgirl.info/article/post-22606/",
        "glassgirl.info-article-post-22606-/",
        [
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/09/01mikurin.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/09/02mikurin.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/09/03mikurin.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/09/nakamen01.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/09/nakamen02.jpg"
        ]);
});

test("article/post-22506/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://glassgirl.info/article/post-22506/",
        "glassgirl.info-article-post-22506-/",
        dummyItems(84));
});
