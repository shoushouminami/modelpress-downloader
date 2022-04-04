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
        "https://www.animatetimes.com/news/img.php?id=1545783577&p=1&n=1#title",
        "www.animatetimes.com-news-img.php-1545783577/",
        [
            "https://img2.animatetimes.com/2021/08/61bbe77e9b384_daaf25166fca7b7c6df3b5444e717109.png",
            "https://img2.animatetimes.com/2021/12/61aeccfd04bd8_05e264f0bcefb3ddfd0f3d75988ee3a6.jpg",
            "https://img2.animatetimes.com/2021/12/621c30856c42b_6175e090a01eb9f1273e4849024b8d3b.jpeg",
            "https://img2.animatetimes.com/2021/12/621f364fdecaa_24ba3d19d58f53d5ef7e531761e50da8.jpeg",
            "https://img2.animatetimes.com/2021/12/61ee09eb705f6_1b92f92707ade621714009203f51aad3.jpeg",
            "https://img2.animatetimes.com/2021/11/623a71d81646a_a4f527d71ef6555df6e1ed4b89d17b73.jpeg",
            "https://img2.animatetimes.com/2022/01/61e4d9e85c5e9_3162a8f5af3ecb3c9b5fe143a92f9a2a.png",
            "https://img2.animatetimes.com/2021/11/62256b24c2260_a2e9b4f0f7ed32092421905e61ec49d9.jpeg",
            "https://img2.animatetimes.com/2021/12/62413b5777da1_d7cc84e4c876ab9f33332ff5434df5ad.jpg",
            "https://img2.animatetimes.com/2021/10/61710d25d9510_a89845e1fae4d3b1b5efe3428870a43f.jpg",
            "https://img2.animatetimes.com/2021/08/622579eb92ed8_e7abd5d0c39a1a038c290929156a7f38.jpeg",
            "https://img2.animatetimes.com/2022/03/62207cbce0095_90926fd266a4bff42435be04c54d90d9.jpg",
            "https://img2.animatetimes.com/2022/02/62136244ea18b_5bbd8cfd20ece9fcc9a9bab986293980.jpg",
            "https://img2.animatetimes.com/2022/03/62302f81c18b8_775030e78bc313ce006b3962043b987a.jpg",
            "https://img2.animatetimes.com/2022/02/620dee655f476_010305e224b0f40f28f69a443256ea57.jpg",
            "https://img2.animatetimes.com/2021/11/618a1dc588acf_9d4bd0ac2ceb87421ce2d44e3ac4283f.png",
            "https://img2.animatetimes.com/2022/02/620ca3cda5678_7bd2d82f90677fd8d38ee48e50da336d.jpg"
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
