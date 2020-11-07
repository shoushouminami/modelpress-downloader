const {testDirectDownload, getBrowserFactory} = require("./testbase");
const {getLargeImg} = require("../../src/inject/www.walkerplus.com");
const pageutils = require("../pageutils");

let browserFactory = getBrowserFactory(beforeAll, afterAll);
test("Test news article", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://movie.walkerplus.com/news/article/1009954/",
        "movie.walkerplus.com-news-article-1009954-/",
        [
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082388?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082532?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082527?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082533?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082528?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082534?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082529?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082530?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082535?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082536?w=2048"
        ]
    );
});

test("Test news article images", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://movie.walkerplus.com/news/article/1009954/images/",
        "movie.walkerplus.com-news-article-1009954-images-/",
        [
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082388?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082532?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082527?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082533?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082528?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082534?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082529?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082530?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082535?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082536?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082537?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082538?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082539?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082531?w=2048"
        ]
    );
});

test("Test movie article", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://movie.walkerplus.com/mv67839/",
        "movie.walkerplus.com-mv67839-/",
        [
            "https://movie.walkerplus.com/api/resizeimage/news/article/1006621/10049465?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1008890/10073049?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1003240/10020785?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1007537/10058694?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1009201/10075549?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1005647/10040763?w=2048",
            "https://movie.walkerplus.com/api/resizeimage/news/article/1008545/10069947?w=2048"
        ]
    );
});

