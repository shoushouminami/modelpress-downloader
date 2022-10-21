const {testDirectDownload, getBrowserFactory} = require("./testbase");
const browser = getBrowserFactory(beforeAll, afterAll);

test("Test thetv.jp image page", async () => {
    await testDirectDownload(
        browser(),
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
        browser(),
        "https://thetv.jp/news/detail/204813/",
        "thetv.jp-news-detail-204813-/",
        ["https://thetv.jp/i/nw/204813/1245283.jpg",
            "https://thetv.jp/i/nw/204813/1245284.jpg",
            "https://thetv.jp/i/nw/204813/1245285.jpg",
            "https://thetv.jp/i/nw/204813/1245286.jpg",
            "https://thetv.jp/i/nw/204813/1245287.jpg"]);
});

test("Test talent.thetv.jp single image", async () => {
    await testDirectDownload(
        browser(),
        "https://thetv.jp/person/1000031439/",
        "thetv.jp-person-1000031439-/",
        [
            "https://thetv.jp/i/tl/100/0031/1000031439_r.jpg"
        ]
    );
});

test("Test thetv.jp program home page", async () => {
    await testDirectDownload(
        browser(),
        "https://thetv.jp/news/detail/235367/",
        "thetv.jp-news-detail-235367-/",
        [
            "https://thetv.jp/i/nw/235367/1475224.jpg",
            "https://thetv.jp/i/nw/235367/1475226.jpg",
            "https://thetv.jp/i/nw/235367/1475227.jpg"
        ]);
});

test("Test thetv.jp matome home page", async () => {
    await testDirectDownload(
        browser(),
        "https://thetv.jp/feature/matome/11131/",
        "thetv.jp-feature-matome-11131-/",
        [
            "https://thetv.jp/i/nw/matome/11131/725.jpg"
        ]
    );
});
