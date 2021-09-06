const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test fashion article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.mensnonno.jp/post/104803/",
        "www.mensnonno.jp-post-104803-/",
        [
            "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-AsukaSaito-eyecatch.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-AsukaSaito-m1.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-AsukaSaito-m2.jpg"
        ]
    );
});

test("Test special article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.mensnonno.jp/post/112687/",
        "www.mensnonno.jp-post-112687-/",
        [
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-eyecatch.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-3.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-6.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-9.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-12.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-15.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-16.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-1.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-2.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-4.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-5.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-7.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-8.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-10.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-11.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-13.jpg",
                "https://www.mensnonno.jp/wp-content/uploads/2121/07/MN2108-09-try-on-2-14.jpg"
        ]
    );
});
