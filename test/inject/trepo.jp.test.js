const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("entertainment/ysl-twicesana/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://trepo.jp/entertainment/ysl-twicesana/",
        "trepo.jp-entertainment-ysl-twicesana-/",
        [
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_1.jpg",
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_75.jpg",
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_116.jpg",
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_112.jpg",
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_107.jpg",
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_105.jpg",
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_3.jpg",
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_91.jpg"
        ]);
});

test("entertainment/ysl-twicesana/3/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://trepo.jp/entertainment/ysl-twicesana/3/",
        "trepo.jp-entertainment-ysl-twicesana-3-/",
        [
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_1.jpg",
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_39.jpg",
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_41.jpg",
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_108.jpg",
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_31.jpg",
            "https://trepo.jp/wp-content/uploads/2023/03/LINE_ALBUM_2023.3.25_230325_54.jpg"
        ]);
});

test("entertainment/ashidamana_/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://trepo.jp/entertainment/ashidamana_/",
        "trepo.jp-entertainment-ashidamana_-/",
        [
            "https://trepo.jp/wp-content/uploads/2023/04/IMG_6651.jpg",
            "https://trepo.jp/wp-content/uploads/2023/04/IMG_6432.jpg",
            "https://trepo.jp/wp-content/uploads/2023/04/IMG_6420.jpg",
            "https://trepo.jp/wp-content/uploads/2023/04/IMG_6419.jpg",
            "https://trepo.jp/wp-content/uploads/2023/04/IMG_6453.jpg",
            "https://trepo.jp/wp-content/uploads/2023/04/IMG_6462.jpg",
            "https://trepo.jp/wp-content/uploads/2023/04/IMG_6478.jpg",
            "https://trepo.jp/wp-content/uploads/2023/04/IMG_6489.jpg"
        ]);
});
