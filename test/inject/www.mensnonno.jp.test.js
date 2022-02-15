const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test fashion article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.mensnonno.jp/post/140283/",
        "www.mensnonno.jp-post-140283-/",
        [
            "https://www.mensnonno.jp/wp-content/uploads/2021/11/2714b7856e44332930d33d530f391ba0.jpg",
            "https://www.mensnonno.jp/wp-content/uploads/2021/11/1e23e5360752a3ee7ff06f738daa1f74.png",
            "https://www.mensnonno.jp/wp-content/uploads/2021/11/fd96127e80d1ad27dbc467dd384f93cd.png",
            "https://www.mensnonno.jp/wp-content/uploads/2021/11/09b4c1ae3d778f706ea00b6868fcd77f.png",
            "https://www.mensnonno.jp/wp-content/uploads/2021/11/4685bc2da199d385898d0bac2f4d7509.png"
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
