const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/image_detail/22794332/?img_id=34472927", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.livedoor.com/article/image_detail/22794332/?img_id=34472927",
        "news.livedoor.com-article-image_detail-22794332-/",
        [
            "https://image.news.livedoor.com/newsimage/stf/8/1/81fc7daa63989e0ac6e0ff9a378c16cd.jpg",
            "https://image.news.livedoor.com/newsimage/stf/5/9/5952650b87dbe35869fb880e23946328.jpg",
            "https://image.news.livedoor.com/newsimage/stf/5/2/528ec63e705fa62930df271b3773bf48.jpg",
            "https://image.news.livedoor.com/newsimage/stf/3/7/37e12162cff15e6a9d82b05ced4281c4.jpg",
            "https://image.news.livedoor.com/newsimage/stf/2/f/2faba04d86939e9d47fc847ba41cd96f.jpg",
            "https://image.news.livedoor.com/newsimage/stf/4/4/4484fdfb2da0cfb067ec9f5b8ce2dd85.jpg",
            "https://image.news.livedoor.com/newsimage/stf/2/5/25f24ba33918d228b4d6611e3b4937e5.jpg",
            "https://image.news.livedoor.com/newsimage/stf/6/f/6f9e0e23648b3391d4a8c2a1cbe0b290.jpg",
            "https://image.news.livedoor.com/newsimage/stf/b/2/b2ab72f95d12e216fa7db056b27a918b.jpg",
            "https://image.news.livedoor.com/newsimage/stf/9/b/9b50c93ecc310036feca7f808346b4ef.jpg",
            "https://image.news.livedoor.com/newsimage/stf/e/8/e843ce30ea927085a084939fa2e1d2d3.jpg",
            "https://image.news.livedoor.com/newsimage/stf/4/c/4c85d01d59d3c27114a667d7a82f81ed.jpg",
            "https://image.news.livedoor.com/newsimage/stf/0/b/0b9e96a45c55af929279ef4b15ddf7ac.jpg",
            "https://image.news.livedoor.com/newsimage/stf/6/a/6a7948469b88f0870dd00b5cfae65092.jpg"
        ]);
});

test("article/detail/25259059/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.livedoor.com/article/detail/25259059/",
        "news.livedoor.com-article-detail-25259059-/",
        [
            "https://image.news.livedoor.com/newsimage/stf/8/b/8b16f_1433_19d4ab982c159818db664a8126a701e4.jpg"
        ]);
});

