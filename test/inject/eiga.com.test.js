const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("news/20220907/15", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://eiga.com/news/20220907/15/",
        "eiga.com-news-20220907-15/",
        [
            "https://eiga.k-img.com/images/buzz/98624/085c54f044df2759.jpg",
            "https://eiga.k-img.com/images/buzz/98624/2764531ce8102108.jpg",
            "https://eiga.k-img.com/images/buzz/98624/830366d4f449b940.jpg",
            "https://eiga.k-img.com/images/buzz/98624/07ab99f122e7b28d.jpg",
            "https://eiga.k-img.com/images/buzz/98624/0cdd03793d8b591e.jpg",
            "https://eiga.k-img.com/images/buzz/98624/4fa2309643655c0d.jpg",
            "https://eiga.k-img.com/images/buzz/98624/0e7e061d79b62120.jpg",
            "https://eiga.k-img.com/images/buzz/98624/09a603a811d48f84.jpg",
            "https://eiga.k-img.com/images/buzz/98624/024eef603d338ca6.jpg",
            "https://eiga.k-img.com/images/buzz/98624/6d458ee22af6c1cb.jpg",
            "https://eiga.k-img.com/images/buzz/98624/ff34d4a12ca0cbe5.jpg",
            "https://eiga.k-img.com/images/buzz/98624/fe73fb2a10ed3d30.jpg",
            "https://eiga.k-img.com/images/buzz/98624/8145d13463e00c30.jpg",
            "https://eiga.k-img.com/images/buzz/98624/c68ffc0681ab67bd.jpg",
            "https://eiga.k-img.com/images/buzz/98624/4f4e9728b4ba24e1.jpg",
            "https://eiga.k-img.com/images/buzz/98624/3731f1dfae8f6779.jpg",
            "https://eiga.k-img.com/images/buzz/98624/72539856de850e0a.jpg",
            "https://eiga.k-img.com/images/buzz/98624/6cabf531814e38f6.jpg",
        ]
    );
});

test("news/20220902/6", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://eiga.com/news/20220902/6/",
        "eiga.com-news-20220902-6/",
        ["https://eiga.k-img.com/images/buzz/98525/c2ccc2c4c5c66bf9.jpg"]
    );
});
