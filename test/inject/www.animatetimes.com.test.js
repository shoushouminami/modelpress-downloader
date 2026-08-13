const {testDirectDownload, getBrowserFactory} = require("./testbase");
let browser =  getBrowserFactory(beforeAll, afterAll);

test("Test news page", async () => {
    await testDirectDownload(
        browser(),
        "https://www.animatetimes.com/news/details.php?id=1646210396",
        "www.animatetimes.com-news-details.php-1646210396/",
        [
            "https://img2.animatetimes.com/2022/03/621f466f72018_17c1febba982ba7e266c33641c9fc7f5.jpg",
            "https://img2.animatetimes.com/2022/03/621f46864c026_2df600cc1110302a1b8c7ba8afbdb1f2.jpg",
            "https://img2.animatetimes.com/2022/03/621f3d93bcad9_7de85634a1495e48f75ded1c3c501607.jpg",
            "https://img2.animatetimes.com/2022/03/621f3e1e675e1_1ccfe9906947480b2619292d4054f9ca.jpg",
            "https://img2.animatetimes.com/2022/03/621f3e272de57_739778c1daab06afedeef374a80dc9e7.jpg",
            "https://img2.animatetimes.com/2022/03/621f3e3078420_51c7dd5ffbe582374846c73bc8b3df16.jpg",
            "https://img2.animatetimes.com/2022/03/621f3e5c8793b_8ec8f77b3a60b61bf4598b5ba09f39a6.jpg",
            "https://img2.animatetimes.com/2022/03/621f3e65b2da7_51784636b6e2de72ad9514b94a247b31.jpg",
            "https://img2.animatetimes.com/2022/03/621f403e975ff_3493c94f26be30b2e1232a91805a853b.jpg",
            "https://img2.animatetimes.com/2022/03/621f4245494e5_7a7bbc33a0b818a3e34e57b0138a7049.jpg",
            "https://img2.animatetimes.com/2022/03/621f451486104_316bfe3a2dd2f371fe6b954cfe4ae958.jpg",
            "https://img2.animatetimes.com/2022/03/621f45347ce4b_74ea224434f0ddc7c5e38aab004812f5.jpg"
        ]
    );
});

test("Test image page", async () => {
    await testDirectDownload(
        browser(),
        "https://www.animatetimes.com/news/img.php?id=1782351080&p=1&n=1#title",
        "www.animatetimes.com-news-img.php-1782351080/",
        [
            "https://img2.animatetimes.com/2026/06/d527d3f856bf9d1c909d5326a2d2c1ed6a3c87524aa365_55412134_50ec0f484e08c14b0fd0e2c0277769b9204ec0d1.jpg",
            "https://img2.animatetimes.com/2026/06/0b298ddcb24617db29492607382f08ea6a3c882e25dd80_27785402_70a166e4d06c1a37ea0c8c5743148bcfa328a5fa.png",
            "https://img2.animatetimes.com/2026/06/3c9b9025a90fc265e2a774477fe6886a6a3c883c075767_35577533_615d934820ee8dad9820e91d8c181314b7b61f02.png",
            "https://img2.animatetimes.com/2026/06/b1419121c31ac46512fdb4056aa78eed6a3c8848b39651_60234615_acaa4598cc3ce1b65795986052488fc92a3cae54.png",
            "https://img2.animatetimes.com/2026/06/9d1f68d2e21827dbbad2eaca202209c66a3c88557ab981_40277964_ffccd91bbc72c042e337d41469441f8ec058f7cd.png",
            "https://img2.animatetimes.com/2026/06/a512650bd71ade691ad2ecb2514580fb6a3c886167b024_59950386_f9f3b1c7d8ca6cb344d399edfa390675d9ee9a03.png",
            "https://img2.animatetimes.com/2026/06/f3fda96ab15c97a6e37ab73d66c2eb8f6a3c8870405247_28923468_09a1e137cbdcbdcacdd996a2cdce5970249e2677.png"
        ]
    );
});

test("Test image page", async () => {
        await testDirectDownload(
            browser(),
            "https://www.animatetimes.com/news/details.php?id=1624439649",
            "www.animatetimes.com-news-details.php-1624439649/",
            [
                    "https://img2.animatetimes.com/2021/06/60d2ff750b4d0_c0874d54dd68e8fefed21b4c97fe89b8.jpg",
                    "https://img.animatetimes.com/2018/11/%E7%B4%84%E6%9D%9F%E3%81%AE%E3%83%8D%E3%83%8F%E3%82%99%E3%83%BC%E3%83%A9%E3%83%B3%E3%83%88%E3%82%99642.png",
                    "https://img2.animatetimes.com/2021/06/60d18e2a1dd2d_b0b1db91159ddf7845614de179946345.jpg",
                    "https://tc-animate.techorus-cdn.com/resize_image/resize_image.php?image=06181458_60cc3600e34a0.jpg&width=&height=&age_limit=&sex_characteristic=&image_display_restriction=0&warning_restriction=0",
                    "https://tc-animate.techorus-cdn.com/resize_image/resize_image.php?image=01250953_5c4a5e183f4c0.jpg&width=&height=&age_limit=&sex_characteristic=&image_display_restriction=0&warning_restriction=0"
            ]
        );
});
