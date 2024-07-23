const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/post-21446/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://glassgirl.info/article/post-21446/",
        "glassgirl.info-article-post-21446-/",
        [
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_001.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_002.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_003.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_004.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_005.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_006.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_007.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_008.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_009.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_010.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_011.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_012.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_013.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_014.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_015.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_016.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_017.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_018.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_019.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_020.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_021.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_022.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_023.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_024.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_025-1.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_026.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_027.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_028.jpg",
            "https://glassgirl.info/ggwp/wp-content/uploads/2024/07/ASUKA_G_029.jpg"
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
