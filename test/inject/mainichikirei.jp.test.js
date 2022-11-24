const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
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
        ]
    );
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
        ]
    );
});

test("article/20200905dog00m100017000c.html?photo=002", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mainichikirei.jp/article/20200905dog00m100017000c.html?photo=002",
        "mainichikirei.jp-article-20200905dog00m100017000c.html/",
        dummyItems(9));
});
