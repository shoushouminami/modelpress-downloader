const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test blogs article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://seventeen-web.jp/blogs/263062",
        "seventeen-web.jp-blogs-263062/",
        [
            "https://cdn-st-community-blog-image.st-channel.jp/6757b97c-5a04-4cd9-b11f-c5762bb6421c.png",
            "https://cdn-st-community-blog-image.st-channel.jp/597f24fa-3997-4010-a02a-5ba1e71d749a.jpg",
            "https://cdn-st-community-blog-image.st-channel.jp/f4082ed4-5be6-4473-96ee-ff78c9666e4b.jpg",
            "https://cdn-st-community-blog-image.st-channel.jp/38c1854c-02c9-4b1e-a627-9e1a344651eb.jpg",
            "https://cdn-st-community-blog-image.st-channel.jp/a87bce18-9a21-4dc6-9781-0ad689759367.jpg"
        ]
    );
});

test("Test news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://seventeen-web.jp/news/14323",
        "seventeen-web.jp-news-14323/",
        [
            "https://cdn-st-news-image.st-channel.jp/4cb112f5-9264-4f04-954a-0dd6a5bb258c.png",
            "https://cdn-st-news-image.st-channel.jp/e19a9452-879c-416c-ab26-716403383c5f.png",
            "https://cdn-st-news-image.st-channel.jp/cf61d306-bdc6-44eb-a61c-9e452c2006bf.png",
            "https://cdn-st-news-image.st-channel.jp/27a855c9-3d61-4114-b3a8-ee031b844c48.png",
            "https://cdn-st-news-image.st-channel.jp/c9d4fb20-eff9-4faf-aab3-15cce799f93d.png"
        ]
    );
});
