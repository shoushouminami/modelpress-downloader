const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite deview.co.jp", () => {
    // interview: photos + information box image, cache-buster query removed
    test("Interview?am_interview_id=1479&am_ko2=pickup&set_cookie=2", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://deview.co.jp/Interview?am_interview_id=1479&am_ko2=pickup&set_cookie=2",
            "deview.co.jp-如月優衣×真田美璃×神楽彩加（愛乙女★DOLL）/",
            [
                "https://cdn.deview.co.jp/imgs/pc/articles/1479/main_lovedoll2609.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1479/s6_lovedoll2609.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1479/s8_kisaragil2609.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1479/s1_kagura2609.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1479/s2_sanada2609.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1479/s7_lovedoll2609.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1479/s5_lovedoll2609.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1479/s3_lovedoll2609.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1479/s4_lovedoll2609.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1479/s9_lovedoll2609.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1479/info_new_lovedoll2609.jpg"
            ]);
    });

    // interview with several information box images
    test("Interview?am_interview_id=1474", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://deview.co.jp/Interview?am_interview_id=1474",
            "deview.co.jp-Luce Twinkle Wink☆/",
            [
                "https://cdn.deview.co.jp/imgs/pc/articles/1474/main__LTW2608.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1474/s4_usami_LTW2608.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1474/s5_ichinose_LTW2608.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1474/info01a_LTW2608.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1474/info02a_LTW2608.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1474/info03a_LTW2608.jpg",
                "https://cdn.deview.co.jp/imgs/pc/articles/1474/Audition_arcjewel202608.jpg"
            ]);
    });

    // old (2015) interview template: season_* photos, decorative heading images excluded
    test("Interview?am_interview_id=600", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://deview.co.jp/Interview?am_interview_id=600",
            "deview.co.jp-松下優也(X4)×白洲迅×真剣佑×上山竜治/",
            [
                "https://cdn.deview.co.jp/imgs/pc/topinterview/m_hanadan1512.jpg",
                "https://cdn.deview.co.jp/imgs/pc/topinterview/s2_hanadan1512.jpg",
                "https://cdn.deview.co.jp/imgs/pc/topinterview/s4_hanadan1512.jpg",
                "https://cdn.deview.co.jp/imgs/pc/topinterview/s5_hanadan1512.jpg",
                "https://cdn.deview.co.jp/imgs/pc/topinterview/s1_hanadan1512.jpg",
                "https://cdn.deview.co.jp/imgs/pc/topinterview/s3_hanadan1512.jpg",
                "https://cdn.deview.co.jp/imgs/pc/topinterview/info_hanadan1512.jpg"
            ]);
    });

    // news: main photo + photo list as full size news_image.img.php (am_width=0), with the stored file as fallback and popup thumbnail, and <hash>.jpg as filename
    test("News?am_article_id=2484179", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://deview.co.jp/News?am_article_id=2484179",
            "deview.co.jp-Hカップの現役歯科衛生士・葉月ゆめ、「奇跡の三十路」が気品のある顔立ちとエレガントなボディを見せつける/",
            [
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=04373138ede32ffd3441d9ae85f1480b.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/0/4/3/04373138ede32ffd3441d9ae85f1480b.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/0/4/3/04373138ede32ffd3441d9ae85f1480b.jpg",
                    "filename": "04373138ede32ffd3441d9ae85f1480b.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=721be254b6c07184c20d47f4654d7a33.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/7/2/1/721be254b6c07184c20d47f4654d7a33.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/7/2/1/721be254b6c07184c20d47f4654d7a33.jpg",
                    "filename": "721be254b6c07184c20d47f4654d7a33.jpg"
                }
            ]);
    });

    // news photo page: http:// image url, current photo first then the article photos, folder without "3枚目"
    test("NewsImage?am_article_id=2484193&am_image_no=3", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://deview.co.jp/NewsImage?am_article_id=2484193&am_image_no=3",
            "deview.co.jp-『Oggi』レギュラーモデルのほか、ドラマ・映画などで活躍中の髙橋ひかるが所属するオスカープロモーションが新人を募集『モデル特別オーディション2026』/",
            [
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=0f54c333afb36096e58fe686c447c928.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/0/f/5/0f54c333afb36096e58fe686c447c928.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/0/f/5/0f54c333afb36096e58fe686c447c928.jpg",
                    "filename": "0f54c333afb36096e58fe686c447c928.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=44b252f63c2c982450d398a2c2c6499c.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/4/4/b/44b252f63c2c982450d398a2c2c6499c.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/4/4/b/44b252f63c2c982450d398a2c2c6499c.jpg",
                    "filename": "44b252f63c2c982450d398a2c2c6499c.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=6f40f9989e11da13e5e2af243cd6570e.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/6/f/4/6f40f9989e11da13e5e2af243cd6570e.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/6/f/4/6f40f9989e11da13e5e2af243cd6570e.jpg",
                    "filename": "6f40f9989e11da13e5e2af243cd6570e.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=af7ab23d9f1e308f229901ec99f1d402.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/a/f/7/af7ab23d9f1e308f229901ec99f1d402.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/a/f/7/af7ab23d9f1e308f229901ec99f1d402.jpg",
                    "filename": "af7ab23d9f1e308f229901ec99f1d402.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=02679dd341233b24b2b9cb3dfc0dd30c.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/0/2/6/02679dd341233b24b2b9cb3dfc0dd30c.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/0/2/6/02679dd341233b24b2b9cb3dfc0dd30c.jpg",
                    "filename": "02679dd341233b24b2b9cb3dfc0dd30c.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=6fc8d22ba0a9f71de69d573f3c997bfb.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/6/f/c/6fc8d22ba0a9f71de69d573f3c997bfb.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/6/f/c/6fc8d22ba0a9f71de69d573f3c997bfb.jpg",
                    "filename": "6fc8d22ba0a9f71de69d573f3c997bfb.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=1f7f217933ce215219e6de0a1a35a228.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/1/f/7/1f7f217933ce215219e6de0a1a35a228.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/1/f/7/1f7f217933ce215219e6de0a1a35a228.jpg",
                    "filename": "1f7f217933ce215219e6de0a1a35a228.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=95b94b9e5727d0058d89cb755a784f66.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/9/5/b/95b94b9e5727d0058d89cb755a784f66.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/9/5/b/95b94b9e5727d0058d89cb755a784f66.jpg",
                    "filename": "95b94b9e5727d0058d89cb755a784f66.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=ca29b699a42132c7ce1164aa5af491c5.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/c/a/2/ca29b699a42132c7ce1164aa5af491c5.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/c/a/2/ca29b699a42132c7ce1164aa5af491c5.jpg",
                    "filename": "ca29b699a42132c7ce1164aa5af491c5.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=9ad3d518541f8921299f39d90c24c4a7.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/9/a/d/9ad3d518541f8921299f39d90c24c4a7.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/9/a/d/9ad3d518541f8921299f39d90c24c4a7.jpg",
                    "filename": "9ad3d518541f8921299f39d90c24c4a7.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=7f0923366231503d38e2ec5498ec45df.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/7/f/0/7f0923366231503d38e2ec5498ec45df.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/7/f/0/7f0923366231503d38e2ec5498ec45df.jpg",
                    "filename": "7f0923366231503d38e2ec5498ec45df.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=c2a2b28727f6e8b35d212c3e27a5c075.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/c/2/a/c2a2b28727f6e8b35d212c3e27a5c075.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/c/2/a/c2a2b28727f6e8b35d212c3e27a5c075.jpg",
                    "filename": "c2a2b28727f6e8b35d212c3e27a5c075.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=97c09c812b0122d297c6be274dcda03e.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/9/7/c/97c09c812b0122d297c6be274dcda03e.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/9/7/c/97c09c812b0122d297c6be274dcda03e.jpg",
                    "filename": "97c09c812b0122d297c6be274dcda03e.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=9d5d09a3abcacd6f22554d246c5f10f3.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/9/d/5/9d5d09a3abcacd6f22554d246c5f10f3.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/9/d/5/9d5d09a3abcacd6f22554d246c5f10f3.jpg",
                    "filename": "9d5d09a3abcacd6f22554d246c5f10f3.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=ac0c03a67774a2ae7921928353f81143.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/a/c/0/ac0c03a67774a2ae7921928353f81143.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/a/c/0/ac0c03a67774a2ae7921928353f81143.jpg",
                    "filename": "ac0c03a67774a2ae7921928353f81143.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=73f905b824000ab91ef956bc3ef16ea4.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/7/3/f/73f905b824000ab91ef956bc3ef16ea4.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/7/3/f/73f905b824000ab91ef956bc3ef16ea4.jpg",
                    "filename": "73f905b824000ab91ef956bc3ef16ea4.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=94202440aa2bda51d99b2aceb90d15b7.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/9/4/2/94202440aa2bda51d99b2aceb90d15b7.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/9/4/2/94202440aa2bda51d99b2aceb90d15b7.jpg",
                    "filename": "94202440aa2bda51d99b2aceb90d15b7.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=f84e8a46bb844e17994e917ecaf21e74.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/f/8/4/f84e8a46bb844e17994e917ecaf21e74.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/f/8/4/f84e8a46bb844e17994e917ecaf21e74.jpg",
                    "filename": "f84e8a46bb844e17994e917ecaf21e74.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=62e971929510b8b5a8470ac2abb758d6.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/6/2/e/62e971929510b8b5a8470ac2abb758d6.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/6/2/e/62e971929510b8b5a8470ac2abb758d6.jpg",
                    "filename": "62e971929510b8b5a8470ac2abb758d6.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=6262d468d351a456a4ad64fa74a780c0.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/6/2/6/6262d468d351a456a4ad64fa74a780c0.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/6/2/6/6262d468d351a456a4ad64fa74a780c0.jpg",
                    "filename": "6262d468d351a456a4ad64fa74a780c0.jpg"
                },
                {
                    "url": "https://cdn.deview.co.jp/imgs/news_image.img.php?am_file=b89b32f11bebc74d7b8758113cc77f45.jpg&am_width=0&am_height=0",
                    "retries": [
                        "https://cdn.deview.co.jp/imgs/news/b/8/9/b89b32f11bebc74d7b8758113cc77f45.jpg"
                    ],
                    "thumbnail": "https://cdn.deview.co.jp/imgs/news/b/8/9/b89b32f11bebc74d7b8758113cc77f45.jpg",
                    "filename": "b89b32f11bebc74d7b8758113cc77f45.jpg"
                }
            ]);
    });
});
