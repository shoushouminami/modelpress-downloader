const { testDirectDownload, getBrowserFactory, dummyItems } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite trendnewscaster.jp", () => { 
    test("entertainment/202512226755/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://trendnewscaster.jp/entertainment/202512226755/",
            "trendnewscaster.jp-entertainment-202512226755-/",
            dummyItems(21)
        );
    });

    test("entertainment/202512198768/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://trendnewscaster.jp/entertainment/202512198768/",
            "trendnewscaster.jp-entertainment-202512198768-/",
            [
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/no2.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/no3.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/no1.jpg"
            ]);
    });

    test("topic/202512239856/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://trendnewscaster.jp/topic/202512239856/",
            "trendnewscaster.jp-topic-202512239856-/",
            [
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/na1-3.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/na4-1.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/na3-1.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/na2-2.jpg"
            ]);
    });


    test("entertainment/202512221849845/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://trendnewscaster.jp/entertainment/202512221849845/",
            "trendnewscaster.jp-entertainment-202512221849845-/",
            [
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/main-2.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/main-3.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/tp5.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/tp9.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/tp6.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/c1.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/c8.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/c9.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/k1-1.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/k12.jpg",
                "https://trendnewscaster.jp/wp-content/uploads/2025/12/k10.jpg"
            ]);
    });

});
