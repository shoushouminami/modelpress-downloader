const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("news/article/1009954/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://press.moviewalker.jp/news/article/1009954/",
        "press.moviewalker.jp-news-article-1009954-/",
        [
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082388?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082532?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082527?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082533?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082528?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082534?w=2048"
        ]);
});


test("news/article/1009954/image10082388/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://press.moviewalker.jp/news/article/1009954/image10082388/",
        "press.moviewalker.jp-news-article-1009954-image10082388-/",
        [
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082388?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082532?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082527?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082533?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082528?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082534?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082529?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082530?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082535?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082536?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082537?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082538?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082539?w=2048",
            "https://press.moviewalker.jp/api/resizeimage/news/article/1009954/10082531?w=2048"
        ]);
});

