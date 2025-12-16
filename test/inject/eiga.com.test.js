const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("news/20220907/15/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://eiga.com/news/20220907/15/",
        "eiga.com-news-20220907-15-/",
        [
            "https://media.eiga.com/images/buzz/98624/085c54f044df2759.jpg",
            "https://media.eiga.com/images/buzz/98624/2764531ce8102108.jpg",
            "https://media.eiga.com/images/buzz/98624/830366d4f449b940.jpg",
            "https://media.eiga.com/images/buzz/98624/07ab99f122e7b28d.jpg",
            "https://media.eiga.com/images/buzz/98624/0cdd03793d8b591e.jpg",
            "https://media.eiga.com/images/buzz/98624/4fa2309643655c0d.jpg",
            "https://media.eiga.com/images/buzz/98624/0e7e061d79b62120.jpg",
            "https://media.eiga.com/images/buzz/98624/09a603a811d48f84.jpg",
            "https://media.eiga.com/images/buzz/98624/024eef603d338ca6.jpg",
            "https://media.eiga.com/images/buzz/98624/6d458ee22af6c1cb.jpg",
            "https://media.eiga.com/images/buzz/98624/ff34d4a12ca0cbe5.jpg",
            "https://media.eiga.com/images/buzz/98624/fe73fb2a10ed3d30.jpg",
            "https://media.eiga.com/images/buzz/98624/8145d13463e00c30.jpg",
            "https://media.eiga.com/images/buzz/98624/c68ffc0681ab67bd.jpg",
            "https://media.eiga.com/images/buzz/98624/4f4e9728b4ba24e1.jpg",
            "https://media.eiga.com/images/buzz/98624/3731f1dfae8f6779.jpg",
            "https://media.eiga.com/images/buzz/98624/72539856de850e0a.jpg",
            "https://media.eiga.com/images/buzz/98624/6cabf531814e38f6.jpg",
            "https://media.eiga.com/images/buzz/98624/c2d82e0cc534ae87.jpg",
            "https://media.eiga.com/images/buzz/98624/0b282b7a95ace187.jpg",
            "https://media.eiga.com/images/buzz/98624/c84f126f8371291b.jpg",
            "https://media.eiga.com/images/buzz/98624/0478aa25cbdf1c7e.jpg",
            "https://media.eiga.com/images/buzz/98624/ed2ac8b4ed576c9b.jpg",
            "https://media.eiga.com/images/buzz/98624/c076ce1fc13bb2e1.jpg",
            "https://media.eiga.com/images/buzz/98624/d039d4763674eb30.jpg",
            "https://media.eiga.com/images/buzz/98624/b965a3c76ba2539a.jpg",
            "https://media.eiga.com/images/buzz/98624/16a686bbd19bcb09.jpg",
            "https://media.eiga.com/images/buzz/98624/b6befe214c96dffc.jpg",
            "https://media.eiga.com/images/buzz/98624/1a98e89e715ff35a.jpg"
        ]);
});


test("news/20220902/6/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://eiga.com/news/20220902/6/",
        "eiga.com-news-20220902-6-/",
        [
            "https://media.eiga.com/images/buzz/98525/c2ccc2c4c5c66bf9.jpg"
        ]);
});

test("news/20220609/5/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://eiga.com/news/20220609/5/",
        "eiga.com-news-20220609-5-/",
        [
            "https://media.eiga.com/images/buzz/96980/291bad642e985f30.jpg",
            "https://media.eiga.com/images/buzz/96980/b55d5746002f1c5c.jpg",
            "https://media.eiga.com/images/buzz/96980/3b7a5f6a1874b659.jpg",
            "https://media.eiga.com/images/buzz/96980/25ed4cf75e923d02.jpg",
            "https://media.eiga.com/images/buzz/96980/5538c84d9adaa11f.jpg",
            "https://media.eiga.com/images/buzz/96980/26dd2d6c4aa57f8e.jpg",
            "https://media.eiga.com/images/buzz/96980/dd970dbe8af1c66c.jpg",
            "https://media.eiga.com/images/buzz/96980/a6dfe8d7865b0981.jpg",
            "https://media.eiga.com/images/buzz/96980/05f2434440e27d07.jpg",
            "https://media.eiga.com/images/buzz/96980/1b1831202c8980cd.jpg",
            "https://media.eiga.com/images/buzz/96980/1976e8f232fd7619.jpg",
            "https://media.eiga.com/images/buzz/96980/17f06dee50c252bc.jpg",
            "https://media.eiga.com/images/buzz/96980/883c12c24d9a4b0d.jpg",
            "https://media.eiga.com/images/buzz/96980/00d0a1e34e14967a.jpg",
            "https://media.eiga.com/images/buzz/96980/7039d41316784218.jpg",
            "https://media.eiga.com/images/buzz/96980/b23eadf59c97b9e3.jpg",
            "https://media.eiga.com/images/buzz/96980/2f50ae102e14832c.jpg",
            "https://media.eiga.com/images/buzz/96980/ae83f837a151d0e2.jpg",
            "https://media.eiga.com/images/buzz/96980/e2626f0fa6d1eb62.jpg",
            "https://media.eiga.com/images/buzz/96980/f380647775532e31.jpg",
            "https://media.eiga.com/images/buzz/96980/122a0fd72fa8f552.jpg",
            "https://media.eiga.com/images/buzz/96980/a0f70deae42a3063.jpg",
            "https://media.eiga.com/images/buzz/96980/0957874c1b46bc3b.jpg",
            "https://media.eiga.com/images/buzz/96980/e6845e8e474e5c22.jpg"
        ]);
});

test("movie/98960/special/?lid=tp_top_special", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://eiga.com/movie/98960/special/?lid=tp_top_special",
        "eiga.com-movie-98960-special-/",
        [
            "https://media.eiga.com/images/special/3530/0c12998566f86481.jpg",
            "https://media.eiga.com/images/special/3530/e2b07e9384d151ce.jpg",
            "https://media.eiga.com/images/special/3530/04c242a973622cd0.jpg",
            "https://media.eiga.com/images/special/3530/f1658ea6a08faf67.jpg",
            "https://media.eiga.com/images/special/3530/718110052ac05aaf.jpg",
            "https://media.eiga.com/images/special/3530/03a8e9d56c68ba44.jpg",
            "https://media.eiga.com/images/special/3530/6afde63199f610c5.jpg",
            "https://media.eiga.com/images/special/3530/80f972d096a4b517.jpg",
            "https://media.eiga.com/images/special/3530/e06d73423978b805.jpg",
            "https://media.eiga.com/images/special/3530/89a0495c4d846449.jpg",
            "https://media.eiga.com/images/special/3530/fc7bea87871f14d2.jpg",
            "https://media.eiga.com/images/special/3530/20d2efe8e93bc85d.jpg",
            "https://media.eiga.com/images/special/3530/41727ee1b56a2000.jpg",
            "https://media.eiga.com/images/special/3530/22b59da17183e7ee.jpg",
            "https://media.eiga.com/images/special/3530/78fc0bfc498a3959.jpg",
            "https://media.eiga.com/images/special/3530/41cc2ccd8cd3c783.jpg",
            "https://media.eiga.com/images/special/3530/6e7403a2ac7f5f24.jpg",
            "https://media.eiga.com/images/special/3530/938d959704662723.jpg",
            "https://media.eiga.com/images/special/3530/06dda129916d50dd.jpg",
            "https://media.eiga.com/images/special/3530/ca39327e8c0e882d.jpg",
            "https://media.eiga.com/images/special/3530/df1b75b114c80ef4.jpg",
            "https://media.eiga.com/images/special/3530/f6d59e3834b78b3b.jpg",
            "https://media.eiga.com/images/special/3530/7f09d3f947d68170.jpg",
            "https://media.eiga.com/images/special/3530/df0f764416c2be61.jpg",
            "https://media.eiga.com/images/special/3530/fcf2f03ae63746d1.jpg",
            "https://media.eiga.com/images/special/3530/43decb529304b57f.jpg"
        ]);
});
