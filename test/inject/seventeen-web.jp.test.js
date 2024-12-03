const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("blogs/ao_ichinose/18599/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://seventeen-web.jp/blogs/ao_ichinose/18599/",
        "seventeen-web.jp-blogs-ao_ichinose-18599-/",
        [
            "https://img.seventeen-web.jp/image/archive/6757b97c-5a04-4cd9-b11f-c5762bb6421c.png",
            "https://img.seventeen-web.jp/article/parts/image/archive/597f24fa-3997-4010-a02a-5ba1e71d749a.jpg",
            "https://img.seventeen-web.jp/article/parts/image/archive/f4082ed4-5be6-4473-96ee-ff78c9666e4b.jpg",
            "https://img.seventeen-web.jp/article/parts/image/archive/38c1854c-02c9-4b1e-a627-9e1a344651eb.jpg",
            "https://img.seventeen-web.jp/article/parts/image/archive/a87bce18-9a21-4dc6-9781-0ad689759367.jpg"
        ]);
});

test("lifestyle/l-news/13494/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://seventeen-web.jp/lifestyle/l-news/13494/",
        "seventeen-web.jp-lifestyle-l-news-13494-/",
        [
            "https://img.seventeen-web.jp/image/archive/4cb112f5-9264-4f04-954a-0dd6a5bb258c.png",
            "https://img.seventeen-web.jp/article/parts/image/archive/e19a9452-879c-416c-ab26-716403383c5f.png",
            "https://img.seventeen-web.jp/article/parts/image/archive/cf61d306-bdc6-44eb-a61c-9e452c2006bf.png",
            "https://img.seventeen-web.jp/article/parts/image/archive/27a855c9-3d61-4114-b3a8-ee031b844c48.png",
            "https://img.seventeen-web.jp/article/parts/image/archive/c9d4fb20-eff9-4faf-aab3-15cce799f93d.png"
        ]);
});

test("lifestyle/l-news/20524/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://seventeen-web.jp/lifestyle/l-news/20524/",
        "seventeen-web.jp-lifestyle-l-news-20524-/",
        [
            "https://img.seventeen-web.jp/image/7a/7aa39c00-7737-45fd-8534-2a1d4889f57a-5976x3014.jpg",
            "https://img.seventeen-web.jp/image/archive/83e5ba19-1b08-483e-9da5-28d9a91b7b51.jpg",
            "https://img.seventeen-web.jp/image/archive/2cbb5f86-5954-4df4-a092-085ae60f52aa.jpg"
        ]);
});
