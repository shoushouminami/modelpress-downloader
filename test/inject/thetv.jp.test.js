const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);
const pageutils = require("../pageutils");

test("Test thetv.jp image page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://thetv.jp/news/detail/204813/1245284/",
        "thetv.jp-news-detail-204813-1245284-/",
        ["https://thetv.jp/i/nw/204813/1245283.jpg",
            "https://thetv.jp/i/nw/204813/1245284.jpg",
            "https://thetv.jp/i/nw/204813/1245285.jpg",
            "https://thetv.jp/i/nw/204813/1245286.jpg",
            "https://thetv.jp/i/nw/204813/1245287.jpg"]);
});

test("Test thetv.jp article page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://thetv.jp/news/detail/204813/",
        "thetv.jp-news-detail-204813-/",
        ["https://thetv.jp/i/nw/204813/1245283.jpg",
            "https://thetv.jp/i/nw/204813/1245284.jpg",
            "https://thetv.jp/i/nw/204813/1245285.jpg",
            "https://thetv.jp/i/nw/204813/1245286.jpg",
            "https://thetv.jp/i/nw/204813/1245287.jpg"]);
});

test("person/1000031439/", async () => {
    // Note: div.newsimage .thumblist on a person page is a "関連画像" (related images)
    // widget aggregating images from the person's recent news articles - it's an
    // inherently-changing feed (not this person's fixed photo set), so it legitimately
    // shows different picture IDs over time as new articles are published. Matched by
    // prefix/count rather than exact URLs. The profile thumbnail is fixed.
    await testDirectDownload(
        getBrowser(),
        "https://thetv.jp/person/1000031439/",
        "thetv.jp-person-1000031439-/",
        [
            {"prefix": "https://thetv.jp/i/nw/", "count": 6},
            "https://thetv.jp/i/tl/100/0031/1000031439_r.jpg"
        ]);
});

test("Test thetv.jp program home page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://thetv.jp/news/detail/235367/",
        "thetv.jp-news-detail-235367-/",
        [
            "https://thetv.jp/i/nw/235367/1475224.jpg",
            "https://thetv.jp/i/nw/235367/1475226.jpg",
            "https://thetv.jp/i/nw/235367/1475227.jpg"
        ]);
});

test("feature/matome/11131/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://thetv.jp/feature/matome/11131/",
        "thetv.jp-feature-matome-11131-/",
        [
            "https://thetv.jp/i/nw/matome/11131/725.jpg"
        ]);
});
