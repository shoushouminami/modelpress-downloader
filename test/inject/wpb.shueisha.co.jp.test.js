const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("gravure/info/20241015-124824/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/gravure/info/20241015-124824/",
        "wpb.shueisha.co.jp-gravure-info-20241015-124824-/",
        [
            "https://wpb.shueisha.co.jp/gravure/info/images/WPB_tanaka001.jpg",
            "https://wpb.shueisha.co.jp/gravure/info/images/WPB_tanaka002.jpg",
            "https://wpb.shueisha.co.jp/gravure/info/images/WPB_tanaka003.jpg",
            "https://wpb.shueisha.co.jp/gravure/info/images/WPB_tanaka004.jpg",
            "https://wpb.shueisha.co.jp/gravure/info/images/WPB_tanaka005.jpg",
            "https://wpb.shueisha.co.jp/gravure/info/images/WPB_tanaka_bookcover.jpg"
        ]);
});

test("gravure/news/20241006-124747/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/gravure/news/20241006-124747/",
        "wpb.shueisha.co.jp-gravure-news-20241006-124747-/",
        [
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/habu01.jpg",
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/1habumizuho_039.jpg",
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/habumizuho_001.jpg"
        ]);
});

test("gravure/news/20240818-124146/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/gravure/news/20240818-124146/",
        "wpb.shueisha.co.jp-gravure-news-20240818-124146-/",
        [
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/%E4%BA%94%E7%99%BE%E5%9F%8E01.jpg"
        ]);
});

test("gravure/news/20240818-124173/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/gravure/news/20240818-124173/",
        "wpb.shueisha.co.jp-gravure-news-20240818-124173-/",
        [
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/a17348aacd49c93a1bc40ab16a5378403beffbf2.jpg",
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/tomisato02.jpg",
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/927f28818609910c654896c4b0365c589ea656af.jpg",
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/a1943283e2943aaa6ff689a247abb0a49406f5d1.jpg"
        ]);
});

test("gravure/news/20240818-124173/photo/#gallery-item-1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/gravure/news/20240818-124173/photo/#gallery-item-1",
        "wpb.shueisha.co.jp-gravure-news-20240818-124173-photo-/",
        [
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/927f28818609910c654896c4b0365c589ea656af.jpg",
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/a1943283e2943aaa6ff689a247abb0a49406f5d1.jpg"
        ]);
});

test("gravure/news/20240818-124145/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/gravure/news/20240818-124145/",
        "wpb.shueisha.co.jp-gravure-news-20240818-124145-/",
        [
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/ca7c9d208f22e5496582886563ed068434b831bb.jpg"
        ]);
});

test("gravure/news/20240401-122716/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/gravure/news/20240401-122716/",
        "wpb.shueisha.co.jp-gravure-news-20240401-122716-/",
        [
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/9fab274a437fd0bf59d53bf6ac4dd24f80e404fb.jpg"
        ]);
});

test("gravure/movie/20241013-124791/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/gravure/movie/20241013-124791/",
        "wpb.shueisha.co.jp-gravure-movie-20241013-124791-/",
        [
            "https://wpb.shueisha.co.jp/gravure/movie/2024/images/1562cbf025ab6c10858238d942584e0a_l.jpg"
        ]);
});

test("comic/kinnikuman2/20251214-129409/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/comic/kinnikuman2/20251214-129409/",
        "wpb.shueisha.co.jp-comic-kinnikuman2-20251214-129409-/",
        [
            "https://wpb.shueisha.co.jp/news/entertainment/2025/images/15e3413e83d4b0336cc8722c3a6659bc55406b79.jpg",
            "https://wpb.shueisha.co.jp/comic/assets_c/2025/08/Seaso3-thumb-autox467-261081.jpg",
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/7b0e2fbdf23622b6087ef405910e09780f372358.jpg",
            "https://wpb.shueisha.co.jp/comic/images/kin515_02-3.jpg"
        ]);
});

test("gravure/20251130-129312/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wpb.shueisha.co.jp/gravure/20251130-129312/",
        "wpb.shueisha.co.jp-gravure-20251130-129312-/",
        [
            "https://wpb.shueisha.co.jp/gravure/2025/images/304d280dfb6dc238c113e7959a1ab24d7cfd8128.jpg"
        ]);
});
