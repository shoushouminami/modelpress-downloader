const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article single image ", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mainichikirei.jp/article/20200809dog00m100005000c.html",
        "mainichikirei.jp-article-20200809dog00m100005000c.html/",
        [
                {
                        "retries": [
                                "https://storage.mainichikirei.jp/images/2020/08/09/20200809dog00m100005000c/001_size9.jpg",
                                "https://storage.mainichikirei.jp/images/2020/08/09/20200809dog00m100005000c/001_size8.jpg",
                                "https://storage.mainichikirei.jp/images/2020/08/09/20200809dog00m100005000c/001_size7.jpg",
                                "https://storage.mainichikirei.jp/images/2020/08/09/20200809dog00m100005000c/001_size6.jpg"
                        ],
                        "url": "https://storage.mainichikirei.jp/images/2020/08/09/20200809dog00m100005000c/001_size10.jpg"
                }
        ]);
});

test("Test news article single image 2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mainichikirei.jp/article/20200906dog00m100003000c.html",
        "mainichikirei.jp-article-20200906dog00m100003000c.html/",
        [
            {
                "retries": [
                    "https://storage.mainichikirei.jp/images/2020/09/06/20200906dog00m100003000c/001_size9.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/06/20200906dog00m100003000c/001_size8.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/06/20200906dog00m100003000c/001_size7.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/06/20200906dog00m100003000c/001_size6.jpg"
                ],
                "url": "https://storage.mainichikirei.jp/images/2020/09/06/20200906dog00m100003000c/001_size10.jpg"
            }
        ]);
});

test("Test photo slide show page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mainichikirei.jp/article/20200905dog00m100017000c.html?photo=001",
        "mainichikirei.jp-article-20200905dog00m100017000c.html/",
        [
            {
                "retries": [
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/001_size9.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/001_size8.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/001_size7.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/001_size6.jpg"
                ],
                "url": "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/001_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/002_size9.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/002_size8.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/002_size7.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/002_size6.jpg"
                ],
                "url": "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/002_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/003_size9.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/003_size8.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/003_size7.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/003_size6.jpg"
                ],
                "url": "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/003_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/004_size9.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/004_size8.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/004_size7.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/004_size6.jpg"
                ],
                "url": "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/004_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/005_size9.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/005_size8.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/005_size7.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/005_size6.jpg"
                ],
                "url": "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/005_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/006_size9.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/006_size8.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/006_size7.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/006_size6.jpg"
                ],
                "url": "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/006_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/007_size9.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/007_size8.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/007_size7.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/007_size6.jpg"
                ],
                "url": "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/007_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/008_size9.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/008_size8.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/008_size7.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/008_size6.jpg"
                ],
                "url": "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/008_size10.jpg"
            },
            {
                "retries": [
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/009_size9.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/009_size8.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/009_size7.jpg",
                    "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/009_size6.jpg"
                ],
                "url": "https://storage.mainichikirei.jp/images/2020/09/05/20200905dog00m100017000c/009_size10.jpg"
            }
        ]);
});
