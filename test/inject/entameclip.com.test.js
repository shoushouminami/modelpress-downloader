const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("news/391831/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://entameclip.com/news/391831/",
        "entameclip.com-news-391831-/",
        [
            "https://cdn.entameclip.com/2024/03/pic20240317joy2.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy3.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy4.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy5.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy6.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy7.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy8.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy9.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy10.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy11.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy12.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy13.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy14.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy15.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy16.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy17.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy18.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy19.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy20.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy21.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy22.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy23.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy24.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy1.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317joy25.jpg"
        ]);
});

test("news/391685/attachment/pic20240317soundorion2/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://entameclip.com/news/391685/attachment/pic20240317soundorion2/",
        "entameclip.com-news-391685-attachment-pic20240317soundorion2-/",
        [
            "https://img.youtube.com/vi/7BL9WPOGsKE/maxresdefault.jpg"
        ]);
});

test("news/391769/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://entameclip.com/news/391769/",
        "entameclip.com-news-391769-/",
        [
            "https://cdn.entameclip.com/2024/03/pic20240317FLY4.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317FLY5.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317FLY2.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317FLY1.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317FLY3.jpg",
            "https://cdn.entameclip.com/2024/03/pic20240317FLY6.jpg"
        ]);
});

test("picture/391772/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://entameclip.com/picture/391772/",
        "entameclip.com-picture-391772-/",
        [
            "https://cdn.entameclip.com/2024/03/pic20240317CRAVITY.jpg"
        ]);
});

test("news/444782/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://entameclip.com/news/444782/",
        "entameclip.com-news-444782-/",
        [
            "https://cdn.entameclip.com/2025/07/pic20250710chekikko4.jpg",
            "https://cdn.entameclip.com/2025/07/pic20250710chekikko2.jpg",
            "https://cdn.entameclip.com/2025/07/pic20250710chekikko1.jpg",
            "https://cdn.entameclip.com/2025/07/pic20250710chekikko5.jpg",
            "https://cdn.entameclip.com/2025/07/pic20250710chekikko3.jpg"
        ]);
});
