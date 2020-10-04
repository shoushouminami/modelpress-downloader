const {testDirectDownload, getBrowserFactory} = require("./testbase");
let browserFactory = getBrowserFactory(beforeAll, afterAll);

test("Test news article page with gallery", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://tokyo.whatsin.jp/610679/2",
        "tokyo.whatsin.jp-610679-2/",
        [
                "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25132644/2020-0909_0287.jpg",
                "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25133831/ffdb1d175df577ad9375fd64528763e3-1.jpg",
                "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25134221/8025a2a1878608cf7e0bb8eef32bdcc6-1.jpg",
                "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25132650/2020-0909_0134.jpg",
                "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25132641/2020-0909_0101.jpg",
                "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25132659/2020-0909_0147.jpg",
                "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25135849/DSC_4882.jpg",
                "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25132656/2020-0909_0176.jpg",
                "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25132653/2020-0909_0196.jpg",
                "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25132647/2020-0909_0057.jpg"
        ]);
});

test("Test news article page with vertical image", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://tokyo.whatsin.jp/610679",
        "tokyo.whatsin.jp-610679/",
        [
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25132644/2020-0909_0287.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25133642/53119575775aea2566fdf879001471b9.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25132656/2020-0909_0176.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25132647/2020-0909_0057.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/25133821/0086ffd6944ee7f7088325d744a083ab-1.jpg"
        ]
    );
});

test("Test news article page", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://tokyo.whatsin.jp/568974",
        "tokyo.whatsin.jp-568974/",
        [
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085711/A2_2831.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085717/B1_0168.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085719/B2_0220.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085700/A1_0002.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085725/5042b791c37a663866b5e91932727980.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085724/b58f90d135606753f54ef997db236d74.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085702/A1_1209.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085714/A4_2136.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085716/A4_2279.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085704/A1_1238.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085706/A2_2061.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085707/A2_2212.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085709/A2_2244.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085712/A2_3271.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085722/B3_1187.jpg.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2019/11/29085721/B2_0599.jpg.jpg"
        ]
    );
});

test("Test game news article page", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://tokyo.whatsin.jp/610236",
        "tokyo.whatsin.jp-610236/",
        [
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194230/No-Straight-Roads-screenshot-1.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194205/a830a77057c054116844edb2e4ffc5d2.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194403/01f427411b9fc70a95ec1fe582ab0907.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194407/34f635df7a01a421c78c7a665f6e4306.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194300/e319bab5f3598a9dd4867f990d07c153.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194304/2ce911a2a1e089b830511c2e3c581e2b.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194309/0bfd04d4fd1c561a9363e07c0302c06c.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194313/1d957585412d9b3a27bcfd336d00faa8.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194317/2af61cc12775d6e56aa9e2346d5329a8.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194321/6d58f877a83b152a3c3b13756107b189.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194325/150959d4ab52349cdf0bcb83e72c980e.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194329/f470ecac932000fe5a8dfd123084d891.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194334/cb79e4279c41f852ca70d64e3b88ed04.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194338/c1afbf4162ab12ae0b90d81b40760587.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194342/2d2a7c4e661bd24089796172dcaa48fd.jpg",
            "https://d2wi3xvhr3qrd7.cloudfront.net/wp/wp-content/uploads/2020/09/22194400/926387a6eae691b8029b28cbcd2dfadf.jpg"
        ]
    );
});
