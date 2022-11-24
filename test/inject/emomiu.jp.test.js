const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("news/99154/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://emomiu.jp/news/99154/",
            "emomiu.jp-news-99154-/",
            [
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%91%EF%BC%93.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%98.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%91.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%92.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%94.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%95.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%99.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%97.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%91%EF%BC%91.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%91%EF%BC%94.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%91%EF%BC%92.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%91%EF%BC%99.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%91%EF%BC%98.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%91%EF%BC%90.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%92%EF%BC%91.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%92%EF%BC%90.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%92%EF%BC%95.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%91%EF%BC%96.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%91%EF%BC%95.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%E3%83%81%E3%82%A7%E3%82%AD%E6%8C%81%E3%81%A1.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%E3%83%9C%E3%83%BC%E3%83%89.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%93.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%96.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%91%EF%BC%97.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%92%EF%BC%92.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%92%EF%BC%93.jpg",
                    "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%EF%BC%92%EF%BC%94.jpg"
            ]);
});

test("news/113812/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://emomiu.jp/news/113812/",
        "emomiu.jp-news-113812-/",
        [
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION16.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION15.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION6.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION13.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION3.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION14.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION8.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION11.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION12.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION10.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION9.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION7.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION5.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION4.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION1.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/CHARLESKEITH_PIXAR_LOTSO_COLLECTION2.jpg"
        ]);
});

test("news/113982/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://emomiu.jp/news/113982/",
        "emomiu.jp-news-113982-/",
        [
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/%E9%A3%B4%E8%89%B2%E3%83%91%E3%83%A9%E3%83%89%E3%83%83%E3%82%AF%E3%82%B9_%E8%BF%BD%E5%8A%A0%E3%82%AD%E3%83%A3%E3%82%B9%E3%83%884.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/%E9%A3%B4%E8%89%B2%E3%83%91%E3%83%A9%E3%83%89%E3%83%83%E3%82%AF%E3%82%B9_%E8%BF%BD%E5%8A%A0%E3%82%AD%E3%83%A3%E3%82%B9%E3%83%882.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/%E9%A3%B4%E8%89%B2%E3%83%91%E3%83%A9%E3%83%89%E3%83%83%E3%82%AF%E3%82%B9_%E8%BF%BD%E5%8A%A0%E3%82%AD%E3%83%A3%E3%82%B9%E3%83%883.jpg",
            "https://emomiu.jp/wp/wp-content/uploads/2022/11/%E9%A3%B4%E8%89%B2%E3%83%91%E3%83%A9%E3%83%89%E3%83%83%E3%82%AF%E3%82%B9_%E8%BF%BD%E5%8A%A0%E3%82%AD%E3%83%A3%E3%82%B9%E3%83%881.jpg"
        ]);
});
