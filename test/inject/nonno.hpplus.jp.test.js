const {testDirectDownload, getBrowserFactory} = require("./testbase");

let getBrowser = getBrowserFactory(beforeAll, afterAll);


test("article/57274/02/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://nonno.hpplus.jp/article/57274/02/",
            "nonno.hpplus.jp-article-57274-02-/",
            [
                    "https://image-hp.hpplus.jp/org/52/52fbbccab183e1406c1cc0ec378febe2_1080x276_w.jpg",
                    "https://image-hp.hpplus.jp/org/8e/8e48cf16320b2462027df6f5b819f6a3_1080x131_w.jpg",
                    "https://image-hp.hpplus.jp/org/0d/0d2efbe0ecc11938db68baeac5a85e93_1080x1673_h.jpg",
                    "https://image-hp.hpplus.jp/org/e3/e3951dfe6d1d946ef1ec029ad8470456_1080x937_w.jpg",
                    "https://image-hp.hpplus.jp/org/47/47238a3377b5ae3851ac304c4fda5447_1080x1378_h.jpg"
            ]);
});

test("article/56660/02/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://nonno.hpplus.jp/article/56660/02/",
            "nonno.hpplus.jp-article-56660-02-/",
            [
                    "https://image-hp.hpplus.jp/org/5b/5b1be0181da5a48495a007bd1ee2dc50_1080x217_w.jpg",
                    "https://image-hp.hpplus.jp/org/2e/2e106ba9f08d04fc22bd6ccf48e8420e_1080x1074_w.jpg",
                    "https://image-hp.hpplus.jp/org/f6/f617247cad4a76e51799d9361381b4a6_1080x600_w.jpg",
                    "https://image-hp.hpplus.jp/org/04/0479e4050c513986cd3440b64a494994_1080x600_w.jpg",
                    "https://image-hp.hpplus.jp/org/d9/d90c33dfe8b6171c595d42c83a0ee550_1080x600_w.jpg",
                    "https://image-hp.hpplus.jp/org/c0/c0f577775fd7587d0b7a44e1074cb663_1080x600_w.jpg",
                    "https://image-hp.hpplus.jp/org/f6/f6d5c308a31a8152b2f216a0a5108241_1080x600_w.jpg",
                    "https://image-hp.hpplus.jp/org/f0/f087c107586c4db6b2302f0bd7ca9fbc_1080x600_w.jpg",
                    "https://image-hp.hpplus.jp/org/89/894e2fafed27930278e0775f930e45a6_1080x600_w.jpg",
                    "https://image-hp.hpplus.jp/org/69/69611d750cd5f8f8350ff455a5c070a5_1080x600_w.jpg",
                    "https://image-hp.hpplus.jp/org/6a/6a7d5768c56c65e8e185fc5b7808ae57_1080x600_w.jpg",
                    "https://image-hp.hpplus.jp/org/da/da27b03771af250bdab182b527190304_1080x600_w.jpg"
            ]);
});


test("magazine?content_id=56207", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://nonno.hpplus.jp/magazine?content_id=56207",
            "nonno.hpplus.jp-magazine/",
            [
                    "https://image-hp.hpplus.jp/org/f0/f0f42ef9051a5f8607283c7e10edd9bf_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/c1/c13cc4e3a6bde3175945ae0cef1065f0_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/de/de7c3add21346fe4d76d86861c6c69f3_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/58/58b694c55b9f1aa1ee064834e4ac95b4_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/85/8535cae45dc207369e85d9917b3d535f_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/67/674d821533fa9c7ee4bb7b5f5a170c60_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/5e/5e5f8e4b2b4a668d1733b6ec077d941b_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/55/5527b6f7ee80ec1ee3b4abc70ed1e4ec_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/d2/d26b6bd18212880b3eeeebcc4f2705c3_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/fb/fb840b882b503ee1a1234a7bf5d0523f_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/56/566c61b2ccd8174bedfcb480492e5e48_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/bd/bdbf84f9ba75fb6bd8c7200b6052016e_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/e3/e3528cf577305f940b071af2291f4d4c_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/d7/d7628c10e538121453b1847b7fe5fabc_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/a9/a9894b03484eb3c3241a9fddae70b517_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/11/114d4a59aa21b0ec1ef16d5f42cc75d8_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/c3/c34127d362130be6642b8b7533fb2f9f_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/90/9009b938c724d547e5840afc5820a337_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/a4/a49f885d39e619a152acf1a189f104bb_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/86/86085eb7ccadc5286d50fdf64e1b0411_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/7c/7c0aa3a8778ab325fdf3c0af96d5feb3_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/7f/7f0a145b6960697ceb0f2174166e8e6b_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/7a/7ae0476f0796f1d1256b8fb082c56c04_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/4b/4b2690d64c15f526c2976a0a8a2ec1dd_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/a0/a0e7721a018b8eb86acee8851e9fd5ff_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/1b/1be312d6812b245d0a432948794f6f58_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/6c/6ca5bf59326aba67201ce21388bad61c_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/63/63893331e298b88bcf086a9731bd61f5_1080x1383_h.jpg",
                    "https://image-hp.hpplus.jp/org/80/80330f1d29ce2d3538bde9421bedcfb0_1080x1383_h.jpg"
            ]);
});
