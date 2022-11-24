const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("news/99154", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://emomiu.jp/news/99154/",
        "emomiu-jp-news-99154/",
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
            "https://emomiu.jp/wp/wp-content/uploads/2022/07/%E4%BD%90%E8%97%A4%E5%A4%A7%E6%A8%B9_%E7%90%86%E6%83%B3%E3%83%8E%E3%82%AB%E3%83%AC%E3%82%B7_Emomiu%E3%83%9C%E3%83%BC%E3%83%89.jpg"
        ]);
});