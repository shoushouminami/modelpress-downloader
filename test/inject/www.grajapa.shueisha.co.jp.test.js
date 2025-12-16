const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);


test("news/4589", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.grajapa.shueisha.co.jp/news/4589",
        "www.grajapa.shueisha.co.jp-news-4589/",
        [
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/0913AKS1180192.jpg",
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/ef6160d4970ac689cd648b6ebaef7406ba4c5f87.jpg",
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/dad466f15384ba9b0b868c83cf96d59181e05206.jpg",
            "https://wpb.shueisha.co.jp/gravure/news/2024/images/de8aa742a18b9d8639cdc1ae3c13130cf7d34314.jpg"
        ]);
});

test("news/2589", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.grajapa.shueisha.co.jp/news/2589",
        "www.grajapa.shueisha.co.jp-news-2589/",
        [
            "https://wpb.shueisha.co.jp/gravure/news/2021/images/Nagahamaneru02.jpg",
            "https://wpb.shueisha.co.jp/gravure/news/2021/images/Nagahamaneru03.jpg",
            "https://wpb.shueisha.co.jp/gravure/news/2021/images/Nagahamaneru04.jpg",
            "https://wpb.shueisha.co.jp/gravure/news/2021/images/Nagahamaneru05.jpg"
        ]);
});

test("plus/season_girl/archives/01", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.grajapa.shueisha.co.jp/plus/season_girl/archives/01",
        "www.grajapa.shueisha.co.jp-青にとける。 - ねお - ＋Season Girl - 週プレ グラジャパ！ - GRAVURE JAPAN! -/",
        [
            "https://www.grajapa.shueisha.co.jp/plus/season_girl/contents/sample/01_2025-10-01/sample/2025-10-01/001-sample_1001_neo.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/season_girl/contents/sample/01_2025-10-01/sample/2025-10-01/002-sample_1001_neo.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/season_girl/contents/sample/01_2025-10-01/sample/2025-10-01/003-sample_1001_neo.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/season_girl/contents/sample/01_2025-10-01/sample/2025-10-01/004-sample_1001_neo.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/season_girl/contents/sample/01_2025-10-01/sample/2025-10-01/005-sample_1001_neo.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/season_girl/contents/sample/01_2025-10-01/sample/2025-10-01/006-sample_1001_neo.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/season_girl/contents/sample/01_2025-10-01/sample/2025-10-01/007-sample_1001_neo.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/season_girl/contents/sample/01_2025-10-01/sample/2025-10-01/008-sample_1001_neo.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/season_girl/contents/sample/01_2025-10-01/sample/2025-10-01/009-sample_1001_neo.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/season_girl/contents/sample/01_2025-10-01/sample/2025-10-01/010-sample_1001_neo.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/season_girl/contents/sample/01_2025-10-01/sample/2025-10-01/011-sample_1001_neo.jpg"
        ]);
});

test("plus/special/archives/248/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.grajapa.shueisha.co.jp/plus/special/archives/248/",
        "www.grajapa.shueisha.co.jp-plus-special-archives-248-/",
        [
            "https://www.grajapa.shueisha.co.jp/plus/special/archives/248/contents/images/sample/sample-header-large-01.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/special/archives/248/contents/images/sample/sample-header-large-02.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/special/archives/248/contents/images/sample/sample-header-large-03.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/special/archives/248/contents/images/sample/sample-header-large-04.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/special/archives/248/contents/images/sample/001-sample-toyoshima_cocoro_sample_01.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/special/archives/248/contents/images/sample/002-sample-toyoshima_cocoro_sample_02.jpg",
            "https://www.grajapa.shueisha.co.jp/plus/special/archives/248/contents/images/sample/003-sample-toyoshima_cocoro_sample_03.jpg"
        ]);
});
