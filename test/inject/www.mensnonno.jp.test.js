const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test fashion article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.mensnonno.jp/post/121332/",
        "www.mensnonno.jp-post-121332-/",
        [
            "https://www.mensnonno.jp/wp-content/uploads/2021/09/MN2110-AsukaSaito-eyecatch.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2020/10/asuka_2her_title_03.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/09/MN2110-AsukaSaito-m1.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/09/MN2110-AsukaSaito-m2.jpg"
        ]
    );
});

test("Test special article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.mensnonno.jp/post/122393/",
        "www.mensnonno.jp-post-122393-/",
        [
            "https://www.mensnonno.jp/wp-content/uploads/2021/09/2021-10-cover.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/09/2021-10_1.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/09/2021-10_2.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/09/2021-10-next.jpg"
        ]
    );
});
