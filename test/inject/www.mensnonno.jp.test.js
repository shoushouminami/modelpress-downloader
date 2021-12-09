const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test fashion article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.mensnonno.jp/post/146442/",
        "www.mensnonno.jp-post-146442-/",
        [
            "https://www.mensnonno.jp/wp-content/uploads/2021/12/MN2201-02-AsukaSaito-eyecatch-2.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2020/10/asuka_2her_title_03.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/12/MN2201-02-AsukaSaito-m1.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/12/MN2201-02-AsukaSaito-m2.jpg"
        ]
    );
});

test("Test special article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.mensnonno.jp/post/146499/?cx_top=news#shm-vp-1",
        "www.mensnonno.jp-post-146499-/",
        [
            "https://www.mensnonno.jp/wp-content/uploads/2021/12/d39b7edc76e66599a969af1ea6128870.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2020/08/tokyosaisyun_rogo.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/12/211118-0012.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/12/a6dab3d738ca605c9c9d1709496365c1.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/12/76c1ee61376540b1259ebfa21c59c903.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2020/08/tokyosaisyun_banner-1.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/12/4dcf8059a839dc9177978eefc46989be.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/12/eb976864aff85d6a25be121130e62a57.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/12/db3552c6e612d6e0ad80a3c4ed436c03.jpg"
        ]
    );
});
