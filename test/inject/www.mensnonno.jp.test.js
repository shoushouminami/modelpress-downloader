const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test fashion article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.mensnonno.jp/post/97973/",
        "www.mensnonno.jp-post-97973-/",
        [
                "https://www.mensnonno.jp/wp-content/uploads/2021/06/MN2107-AsukaSaito-eyecatch.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2021/06/MN2107-AsukaSaito-m1.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2021/06/MN2107-AsukaSaito-m2.jpg"
        ]
    );
});

test("Test special article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.mensnonno.jp/post/96235/",
        "www.mensnonno.jp-post-96235-/",
        [
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24-thum.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2020/11/458efdec20e6968c239527132c020565.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_01.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_02.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_03.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_04.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_05.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_06.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_07.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_08.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_09.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_10.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_11.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_12.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_13.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_14.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_15.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_16.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_17.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_18.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_19.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_20.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_21.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_22.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_23.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_24.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku24_25.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/06/fukufuku24_26.jpeg"
        ]
    );
});
