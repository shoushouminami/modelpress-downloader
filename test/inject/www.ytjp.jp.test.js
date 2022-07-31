const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser =  getBrowserFactory(beforeAll, afterAll);

test("2022/07/22/book-generations", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.ytjp.jp/2022/07/22/book-generations",
        "www.ytjp.jp-2022-07-22-book-generations/",
        [
            "https://www.ytjp.jp/wp-content/uploads/2022/07/main-1-98.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/07/sub1-2-49.jpg"
        ]);
});

test("2022/06/11/book-kakiharuka", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.ytjp.jp/2022/06/11/book-kakiharuka",
        "www.ytjp.jp-2022-06-11-book-kakiharuka/",
        [
            "https://www.ytjp.jp/wp-content/uploads/2022/06/main-7-2.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/sub1-1-12.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/sub2-2-6.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/sub3-3-4.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/sub4-6-5.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/sub5-8-1.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/sub6-9-1.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/sub7-4-1.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/sub8-5-1.jpg"
        ]);
});

test("2022/07/29/koukouseiresearch-cm", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.ytjp.jp/2022/07/29/koukouseiresearch-cm",
        "www.ytjp.jp-2022-07-29-koukouseiresearch-cm/",
        [
            "https://www.ytjp.jp/wp-content/uploads/2022/07/141.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/07/141b.jpg"
        ]);
});

test("2022/06/28/highschool-photogallery-kamishihoro", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.ytjp.jp/2022/06/28/highschool-photogallery-kamishihoro",
        "www.ytjp.jp-2022-06-28-highschool-photogallery-kamishihoro/",
        [
            "https://www.ytjp.jp/wp-content/uploads/2022/06/IMG_0556-8.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/2_1-9.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/IMG_0396-2.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/IMG_0375-1.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/IMG_0407-3.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/IMG_0419-4.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/IMG_0443-5.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/IMG_0543-7.jpg",
            "https://www.ytjp.jp/wp-content/uploads/2022/06/IMG_0501-6.jpg"
        ]);
});
