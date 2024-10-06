const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("post/202410041745.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.entax.news/post/202410041745.html",
        "www.entax.news-post-202410041745.html/",
        [
            "https://www.entax.news/wp-content/uploads/2024/10/THE-CACAO_release_aragaki_top.jpg.webp",
            "https://www.entax.news/wp-content/uploads/2024/10/THE-CACAO_release_aragaki_1.jpg.webp",
            "https://www.entax.news/wp-content/uploads/2024/10/THE-CACAO_release_aragaki_2.jpg.webp"
        ]);
});

test("post/202410041140.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.entax.news/post/202410041140.html",
        "www.entax.news-post-202410041140.html/",
        [
            "https://www.entax.news/wp-content/uploads/2024/10/1002ueda_ogura.jpg.webp"
        ]);
});

test("post/202409271845.html/2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.entax.news/post/202409271845.html/2",
        "www.entax.news-post-202409271845.html-2/",
        [
            "https://www.entax.news/wp-content/uploads/2024/09/IKUTALIVE_0927_release_2.jpg.webp",
            "https://www.entax.news/wp-content/uploads/2024/09/IKUTALIVE_0927_release_3.jpg.webp"
        ]);
});

test("post/202409261245.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.entax.news/post/202409261245.html",
        "www.entax.news-post-202409261245.html/",
        [
            "https://www.entax.news/wp-content/uploads/2024/09/Sakurazaka46_10thSingle.jpg.webp",
            "https://www.entax.news/wp-content/uploads/2024/09/sakura_2_1600.jpg.webp"
        ]);
});

test("post/202402281315.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.entax.news/post/202402281315.html",
        "www.entax.news-post-202402281315.html/",
        [
            "https://www.entax.news/wp-content/uploads/2024/02/23_12_01_CHONOGILIVE_12896.jpg.webp",
            "https://www.entax.news/wp-content/uploads/2024/02/24_01_19_CHONOGISUTA_16648.jpg.webp"
        ]);
});

test("post/202401291700.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.entax.news/post/202401291700.html",
        "www.entax.news-post-202401291700.html/",
        [
            "https://www.entax.news/wp-content/uploads/2024/01/0122top.jpg.webp",
            "https://www.entax.news/wp-content/uploads/2024/01/0122aonatsu_G.jpg.webp",
            "https://www.entax.news/wp-content/uploads/2024/01/0122happiness_G.jpg.webp",
            "https://www.entax.news/wp-content/uploads/2024/01/0122top_G.jpg.webp",
            "https://www.entax.news/wp-content/uploads/2024/01/LIVEhuniki_G.jpg.webp"
        ]);
});
