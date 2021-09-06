const {testDirectDownload, getBrowserFactory} = require("./testbase");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test girls article page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://fineboys-online.jp/girls/detail.php?id=2844",
        "fineboys-online.jp-girls-detail.php-id-2844-p-1/",
        [
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2844/FB_M%28data%29A-133.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2844/FB_(data)A-129.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2844/FB_(data)A-123.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2844/FB_(data)A-108.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2844/FB_flashdance_main.jpg"
        ]
    );
});

test("Test girls article page with slide show", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://fineboys-online.jp/girls/regular/detail.php?id=2897",
        "fineboys-online.jp-girls-regular-detail.php-id-2897-p-1/",
        [
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2897/anokokotaki2.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2897/anokokotaki3.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2897/anokokotaki4.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2897/anokokotaki5.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/img/org/article/2897/slider_5f47a4cf6a56a_3.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/img/org/article/2897/slider_5f47a4cf6a56a_1.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/img/org/article/2897/slider_5f47a4cf6a56a_2.jpg"
        ]
    );
});

test("Test fashion article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://fineboys-online.jp/fashion/detail.php?id=2889",
        "fineboys-online.jp-fashion-detail.php-id-2889-p-3/",
        [
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2886/_0611_0801.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2886/_SHI9561a.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2886/Img285369a.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2886/Img285379a.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2886/Img285397a.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2886/Img285386a.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2886/_0611_1312.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2886/_0611_1635.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2886/th_0611_1461.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2886/th_0611_2186.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2886/th_0611_2190.jpg"
        ]
    );
});

test("Test shoes article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://fineboys-online.jp/shoes/regular/detail.php?id=2888",
        "fineboys-online.jp-shoes-regular-detail.php-id-2888/",
        [
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2888/anokoitoakari2.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2888/anokoitoakari3.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2888/anokoitoakari4.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/media/2/FBO_2020_08/2888/anokoitoakari5.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/img/org/article/2888/slider_5f3e082b712d1_3.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/img/org/article/2888/slider_5f3e082b712d1_1.jpg",
            "https://cdn.fineboys-online.jp/thegear/content/theme/img/org/article/2888/slider_5f3e082b712d1_2.jpg"
        ]
    );
});
