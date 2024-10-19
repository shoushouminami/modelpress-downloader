const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);


test("news/4589", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.grajapa.shueisha.co.jp/news/4589",
        "www.grajapa.shueisha.co.jp-news-4589/",
        [
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/0913AKS1180192.jpg",
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/ef6160d4970ac689cd648b6ebaef7406ba4c5f87.jpg",
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/dad466f15384ba9b0b868c83cf96d59181e05206.jpg",
            "https://wpb.shueisha.co.jp/news/entertainment/2024/images/de8aa742a18b9d8639cdc1ae3c13130cf7d34314.jpg"
        ]);
});

test("news/2589", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.grajapa.shueisha.co.jp/news/2589",
        "www.grajapa.shueisha.co.jp-news-2589/",
        [
            "https://wpb.shueisha.co.jp/news/entertainment/2021/images/Nagahamaneru02.jpg",
            "https://wpb.shueisha.co.jp/news/entertainment/2021/images/Nagahamaneru03.jpg",
            "https://wpb.shueisha.co.jp/news/entertainment/2021/images/Nagahamaneru04.jpg",
            "https://wpb.shueisha.co.jp/news/entertainment/2021/images/Nagahamaneru05.jpg"
        ]);
});
