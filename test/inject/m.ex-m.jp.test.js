const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("news/detail?news_id=40046", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://m.ex-m.jp/news/detail?news_id=40760",
        "m.ex-m.jp-news-detail/",
        [
            "https://cf-stat.ex-m.jp/img/uplcmn/2022/1109/0e162a63f0502dd1248b66d395e7c74b.jpg"
        ]);
});

test("m-ldh-m-news-39457", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://m.ldh-m.jp/news/detail?news_id=39457",
        "m-ldh-m-news-39457/",
        [
            "https://cf-stat.ldh-m.jp/img/uplcmn/2022/0817/684d8b132595f6e897c7e824a3f443f7.jpg",
            "https://cf-stat.ldh-m.jp/img/uplcmn/2022/0929/2f0f8fff1ed24a4b4013eb2b43eec34c.jpg",
        ]
    );
});

test("m-ldhgirls-m-news-40225", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://m.ldhgirls-m.jp/news/detail?news_id=40225",
        "m-ldhgirls-m-news-40225/",
        [
            "https://cf-stat.ldhgirls-m.jp/img/uplcmn/2022/1006/my_popup_210305_gs.jpg",
            "https://cf-stat.ldhgirls-m.jp/img/uplcmn/2022/1003/my_info_EG.jpg",
            "https://cf-stat.ldhgirls-m.jp/img/uplcmn/2020/0729/button_gasya_eg.png"
        ]
    );
});

test("m-tribe-m-news-40294", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://m.tribe-m.jp/news/detail?news_id=40294",
        "m-tribe-m-news-40294/",
        [
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1011/edf54b1b15d3c710ea3a88c0ba9733de.jpg",
        ]
    );
});

test("tribe-m-artist-photo-high-fever", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://m.tribe-m.jp/Cts/discography/fantastics/2020/single/high_fever/artist_photo/index",
        "tribe-m-artist-photo-high-fever/",
        [
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/1.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/2.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/3.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/4.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/5.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/6.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/7.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/8.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/9.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/10.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/11.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/12.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/13.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/14.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/15.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/16.jpg",
            "https://cf-stat.tribe-m.jp/images/discography/fantastics/2020/single/high_fever/artist_photo/17.jpg",
        ]
    );
});

test("tribe-m-artist-photo-choochootrain", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://m.tribe-m.jp/ldh_page/discography_fantastics_2022_single_choochootrain_artistphoto",
        "tribe-m-artist-photo-choochootrain/",
        [
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1012/3249de555196e4c690b923e151e1a002.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1012/1b19d89be665d60c062acdd1d8d31a76.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1013/dc938b43d6f7f67cf9327781d3d9f692.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1012/9c5ea0d29dc9a7f94dc3c63f417c8235.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1013/b3715ba462e62a6f671a07629205d6e9.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1012/ea81cfedffc2d8ae0d6c07421fefa6b2.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1013/ac2fc94be035b4922e681613fed6e561.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1012/2364acf8c96b1362a5d4a7f411484ecc.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1013/e5b7a6e46e6dacab50cee5e3ae3fcd0b.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1012/8a161bdb6e072aa584c75fe7d7de2ed9.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1013/8633a23016a94286da34a75ac815199c.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1012/47c494e8276bba5db77b1566d133bfce.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1013/699ba6fd9698de97fca3a098f49f0a97.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1012/8ffe31c6e0ce6365c949070fd038362c.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1013/eab2e88b5cbf2be2e60b76056c50d100.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1012/8533535fa7b71dd219f42959a4c9a12d.jpg",
            "https://cf-stat.tribe-m.jp/img/uplcmn/2022/1013/79a61aac221e2f538c1d83565a9f79b3.jpg",
        ]
    );
});