const {testDirectDownload, getBrowserFactory} = require("./testbase");
const {getLargeImg} = require("../../src/inject/www.walkerplus.com");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test getLargeImg function ", () => {
    expect(getLargeImg("https://news.walkerplus.com/article/1005180/10036741_615.jpg"))
        .toStrictEqual({
            "retries":
                ["https://news.walkerplus.com/article/1005180/10036741_615.jpg"],
            "url": "https://news.walkerplus.com/article/1005180/10036741.jpg"
        });
});

test("Test news article gallery", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.walkerplus.com/trend/matome/article/1005180/image10036743.html",
        "www.walkerplus.com-trend-matome-article-1005180-image10036743.html/",
        [
            {
                "retries": [
                    "https://news.walkerplus.com/article/1005180/10036743_615.jpg"
                ],
                "url": "https://news.walkerplus.com/article/1005180/10036743.jpg"
            },
            {
                "retries": [
                    "https://news.walkerplus.com/article/1005180/10036748_615.jpg"
                ],
                "url": "https://news.walkerplus.com/article/1005180/10036748.jpg"
            },
            {
                "retries": [
                    "https://news.walkerplus.com/article/1005180/10036742_615.jpg"
                ],
                "url": "https://news.walkerplus.com/article/1005180/10036742.jpg"
            },
            {
                "retries": [
                    "https://news.walkerplus.com/article/1005180/10036747_615.jpg"
                ],
                "url": "https://news.walkerplus.com/article/1005180/10036747.jpg"
            },
            {
                "retries": [
                    "https://news.walkerplus.com/article/1005180/10036746_615.jpg"
                ],
                "url": "https://news.walkerplus.com/article/1005180/10036746.jpg"
            },
            {
                "retries": [
                    "https://news.walkerplus.com/article/1005180/10036744_615.jpg"
                ],
                "url": "https://news.walkerplus.com/article/1005180/10036744.jpg"
            },
            {
                "retries": [
                    "https://news.walkerplus.com/article/1005180/10036745_615.jpg"
                ],
                "url": "https://news.walkerplus.com/article/1005180/10036745.jpg"
            },
            {
                "retries": [
                    "https://news.walkerplus.com/article/1005180/10036740_615.jpg"
                ],
                "url": "https://news.walkerplus.com/article/1005180/10036740.jpg"
            },
            {
                "retries": [
                    "https://news.walkerplus.com/article/1005180/10036741_615.jpg"
                ],
                "url": "https://news.walkerplus.com/article/1005180/10036741.jpg"
            }
        ]
    );
});

test("Test news article 2 images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.walkerplus.com/article/227986/",
        "www.walkerplus.com-article-227986-/",
        [
            {
                "retries": [
                    "https://news.walkerplus.com/article/227986/1427257_615.jpg"
                ],
                "url": "https://news.walkerplus.com/article/227986/1427257.jpg"
            },
            {
                "retries": [
                    "https://news.walkerplus.com/article/227986/1427258_615.jpg"
                ],
                "url": "https://news.walkerplus.com/article/227986/1427258.jpg"
            }
        ]);
});

