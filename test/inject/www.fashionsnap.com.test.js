const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/2023-09-18/monet-rensaku-no-jokei/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.fashionsnap.com/article/2023-09-18/monet-rensaku-no-jokei/",
        "www.fashionsnap.com-article-2023-09-18-monet-rensaku-no-jokei-/",
        [
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/monet-rensaku-no-jokei-20230912.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/monet-rensaku-no-jokei-20230912-7-1.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/monet-rensaku-no-jokei-20230912-5.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/monet-rensaku-no-jokei-20230912-6.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/monet-rensaku-no-jokei-20230912-12.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/monet-rensaku-no-jokei-20230912-9.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/monet-rensaku-no-jokei-20230912-13.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/monet-rensaku-no-jokei-20230912-10.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/monet-rensaku-no-jokei-20230912-11.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/monet-rensaku-no-jokei-20230912-4.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/monet-rensaku-no-jokei-20230912-8.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/monet-rensaku-no-jokei-20230912-3.jpg"
        ]);
});

test("article/roundup-september16-2023/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.fashionsnap.com/article/roundup-september16-2023/",
        "www.fashionsnap.com-article-roundup-september16-2023-/",
        [
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/collage-roundup0915.png",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/apple-hermes-2023-20230911_003-1.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/losangels-apparel-20230914_001.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/jonathan-anderson-20230915.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/asics-mitsuyukitominaga-230915-001.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/alexander-mcqueen-20230912.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/trs.jpg"
        ]);
});

test("article/tokyokaikan/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.fashionsnap.com/article/tokyokaikan/",
        "www.fashionsnap.com-article-tokyokaikan-/",
        [
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/trs-top-05.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/0904_okashi_00021-1.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/0904_okashi_00019.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/tokyokaikan-20230913-1.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/0904_okashi_00023.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/0904_okashi_00024.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/0904_okashi_00025.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/0904_okashi_00026.jpg",
            "https://fashionsnap-assets.com/asset/-/article/images/2023/09/trs-inside-b-05.jpg"
        ]);
});
