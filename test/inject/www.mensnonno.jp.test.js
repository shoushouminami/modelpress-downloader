const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test fashion article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.mensnonno.jp/post/90378/",
        "www.mensnonno.jp-post-90378-/",
        [
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/MN2106-AsukaSaito-eyecatch.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2020/10/asuka_2her_title_03.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/MN2106-AsukaSaito-m1.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/MN2106-AsukaSaito-m2.jpg"
        ]
    );
});

test("Test special article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.mensnonno.jp/post/90127/",
        "www.mensnonno.jp-post-90127-/",
        [
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku23-thum.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2020/11/458efdec20e6968c239527132c020565.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_01.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_02.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_03.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_04.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_05.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_06.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_07.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_08.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_09.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_10.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_11.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_12.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_13.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_14.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_15.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_16.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_17.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_18.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_19.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_20.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_21.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_22.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_23.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/04/fukufuku23_24.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/05/fukufuku23_25.jpeg"
        ]
    );
});
