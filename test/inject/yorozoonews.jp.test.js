const {testDirectDownload, getBrowserFactory} = require("./testbase");
let browser = getBrowserFactory(beforeAll, afterAll);

test("Test article page", async () => {
    await testDirectDownload(
        browser(),
        "https://yorozoonews.jp/article/14551218",
        "yorozoonews.jp-article-14551218/",
        [
            "https://public.potaufeu.asahi.com/99cd-p/picture/26661124/81bc72a87a5a475c65da4a6007c582f3.jpg",
            "https://public.potaufeu.asahi.com/d97b-p/picture/26661134/f4d505fdc16cc747045055ea09e09ec1.jpg",
            "https://public.potaufeu.asahi.com/81b1-p/picture/26661150/59ddb970638f6f7e6da8a0e9cd2845b6.jpg",
            "https://public.potaufeu.asahi.com/febb-p/picture/26661148/6ccf9561a66f3163fa036ddaff468a92.jpg",
            "https://public.potaufeu.asahi.com/1781-p/picture/26661142/e16314d0325fd9b00f2536409261af31.jpg",
            "https://public.potaufeu.asahi.com/84f3-p/picture/26661135/9b1f1cc128ee8472702c5985d2115093.jpg",
            "https://public.potaufeu.asahi.com/ab70-p/picture/26661133/292b07bf1874639b0bb58b437887b5cf.jpg",
            "https://public.potaufeu.asahi.com/4311-p/picture/26661132/352a10b9c51dfd4b0e722e3482661460.jpg",
            "https://public.potaufeu.asahi.com/53c0-p/picture/26661131/929c12ad753e8a3b8469b8fd780f7eec.jpg",
            "https://public.potaufeu.asahi.com/9542-p/picture/26661130/05d71402d879d158962d380f4b438e51.jpg",
            "https://public.potaufeu.asahi.com/3ca9-p/picture/26661129/0601568953f56346359e40d74e5391eb.jpg",
            "https://public.potaufeu.asahi.com/463f-p/picture/26661128/988e23836f89834a83b173d09ae59956.jpg",
            "https://public.potaufeu.asahi.com/14e8-p/picture/26661126/d6e3f5b6599e7cc5f5aa6e46e68818f2.jpg",
            "https://public.potaufeu.asahi.com/40d0-p/picture/26661125/eb146ca9c41de77e055c8c8520ff906d.jpg",
            "https://public.potaufeu.asahi.com/702e-p/picture/26661121/441911e8d5ae69b73275ef68639b2696.jpg",
            "https://public.potaufeu.asahi.com/b4ab-p/picture/26661120/9953dabf39c36912c88bdceac476daf8.jpg",
            "https://public.potaufeu.asahi.com/2e8d-p/picture/26661119/9df162b29be3af9c321eab002c0c6ef2.jpg",
            "https://public.potaufeu.asahi.com/914b-p/picture/26661118/a75dc04c62a0b1ea1d826e3a6811b03d.jpg"
        ]
    );
});

test("Test article page with 2 images", async () => {
    await testDirectDownload(
        browser(),
        "https://yorozoonews.jp/article/14550998",
        "yorozoonews.jp-article-14550998/",
        [
                "https://public.potaufeu.asahi.com/a4bb-p/picture/26662236/9b20281cd71017c82967cec5c02d3cde.jpg",
                "https://public.potaufeu.asahi.com/3f5c-p/picture/26662237/111be3be0e6f34477e29c2495770360b.jpg"
        ]
    );
});

test("Test gallery page with 3 images", async () => {
    await testDirectDownload(
        browser(),
        "https://yorozoonews.jp/article/14549214",
        "yorozoonews.jp-article-14549214/",
        [
            "https://public.potaufeu.asahi.com/ccd7-p/picture/26657494/51494b66b20eaec11fe501f5bdf797f4.jpg",
            "https://public.potaufeu.asahi.com/e8f5-p/picture/26657493/08eda328709362bbddee22f11759f368.jpg",
            "https://public.potaufeu.asahi.com/4fd0-p/picture/26657492/29aa750d1aa4d768eb84a3e42c7257ee.jpg"
        ]
    );
});

