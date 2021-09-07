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

test("Test beauty article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://seventeen-web.jp/news/14269",
        "seventeen-web.jp-news-14269/",
        [
            "https://cdn-st-news-image.st-channel.jp/4ca5a839-370c-48a9-af97-b233fa86bd39.jpg",
            "https://cdn-st-news-image.st-channel.jp/e2d81daa-4a5b-43cf-8a55-98bf3b138afb.png",
            "https://cdn-st-news-image.st-channel.jp/d27f4368-bca2-4aa6-9bc4-44320afded2f.png",
            "https://cdn-st-news-image.st-channel.jp/36d1e937-b489-4837-b9a2-ae9d8aa285f3.png",
            "https://cdn-st-news-image.st-channel.jp/bcbf84ed-88a9-423b-bfac-569bce4cab86.png",
            "https://cdn-st-news-image.st-channel.jp/2780901f-821a-48b9-888f-23b003ea8c00.jpg",
            "https://cdn-st-news-image.st-channel.jp/c4e85d34-f385-49f4-9074-2d1614447c2d.png"
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

test("Test magazine", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://my.ebook5.net/stchannel/202110/",
        "my.ebook5.net-stchannel-202110-/",
        [
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0001.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0002.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0003.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0004.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0005.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0006.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0007.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0008.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0009.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0010.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0011.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0012.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0013.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0014.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0015.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0016.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0017.jpg",
            "https://img01.ebook5.net/stchannel/202110/contents/image/book/large/image-0018.jpg"
        ]
    );
});
