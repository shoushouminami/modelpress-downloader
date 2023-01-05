const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("news/2023/01/574790/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.lmaga.jp/news/2023/01/574790/",
        "www.lmaga.jp-news-2023-01-574790-/",
        [
            "https://www.lmaga.jp/wp-content/uploads/2022/12/perfume-2023.jpg"
        ]);
});

test("news/2023/01/579767/?cv=y", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.lmaga.jp/news/2023/01/579767/?cv=y",
        "www.lmaga.jp-news-2023-01-579767-/",
        [
            "https://www.lmaga.jp/wp-content/uploads/2023/01/TRF.jpg"
        ]);
});

test("news/2022/11/551493/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.lmaga.jp/news/2022/11/551493/",
        "www.lmaga.jp-news-2022-11-551493-/",
        [
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_nijojyo_main.jpg",
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_chochin_heian.jpg",
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_uji.jpg",
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_chasen.jpg",
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_tsukubai.jpg",
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_kibune.jpg",
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_kyotango.jpg"
        ]);
});


test("news/2022/11/551493/?cv=p#photo1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.lmaga.jp/news/2022/11/551493/?cv=p#photo1",
        "www.lmaga.jp-news-2022-11-551493-/",
        [
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_nijojyo_main.jpg",
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_chochin_heian.jpg",
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_uji.jpg",
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_chasen.jpg",
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_tsukubai.jpg",
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_kibune.jpg",
            "https://www.lmaga.jp/wp-content/uploads/2022/11/naked_kyotango.jpg"
        ]);
});


test("omoshiro/2022/02/03/0203/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.lmaga.jp/omoshiro/2022/02/03/0203/",
        "www.lmaga.jp-omoshiro-2022-02-03-0203-/",
        [
            "https://www.lmaga.jp/wp-content/uploads/sites/10/2022/02/neko_7.jpg",
            "https://www.lmaga.jp/wp-content/uploads/sites/10/2022/02/neko_6.jpg",
            "https://www.lmaga.jp/wp-content/uploads/sites/10/2022/02/neko_8.jpg",
            "https://www.lmaga.jp/wp-content/uploads/sites/10/2022/02/neko_9.jpg",
            "https://www.lmaga.jp/wp-content/uploads/sites/10/2022/02/neko_11.jpg",
            "https://www.lmaga.jp/wp-content/uploads/sites/10/2022/02/neko_4.jpg",
            "https://www.lmaga.jp/wp-content/uploads/sites/10/2022/02/neko_1.jpg",
            "https://www.lmaga.jp/wp-content/uploads/sites/10/2022/02/neko_3.jpg",
            "https://www.lmaga.jp/wp-content/uploads/sites/10/2022/02/neko_5.jpg",
            "https://www.lmaga.jp/wp-content/uploads/sites/10/2022/02/neko_10.jpg",
            "https://www.lmaga.jp/wp-content/uploads/sites/10/2022/02/neko_2.jpg",
            "https://www.lmaga.jp/wp-content/uploads/sites/10/2022/02/neko_0.jpg"
        ]);
});
