const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite ameblo.jp", () => {
    test("morningmusume15ki/entry-12975565697.html", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://ameblo.jp/morningmusume15ki/entry-12975565697.html",
            "ameblo.jp-morningmusume15ki-今日も沢山踊った〜 岡村ほまれ/",
            [
                "https://stat.ameba.jp/user_images/20260812/22/morningmusume15ki/9e/9f/j/o1080072115811701392.jpg"
            ]);
    });

    // "image-<entryId>-<imageId>.html" is a single-image permalink page. Below the main photo
    // there is a "more photos" thumbnail list (<li><button><img data-entry-id data-image-id></button></li>)
    // spanning many of this blogger's other entries - all of them get returned, not just the one
    // the permalink URL points at. Since that list keeps growing as the blogger posts more, match
    // by prefix/count rather than an exact URL list which would go stale.
    test("morningmusume15ki/image-12897316870-15576808591.html", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://ameblo.jp/morningmusume15ki/image-12897316870-15576808591.html",
            "ameblo.jp-morningmusume15ki-62番です！ 岡村ほまれの画像/",
            [],
            {
                sizeMatch: function (expected, actual) {
                    expect(actual).toBeGreaterThan(7);
                }
            });
    });

    test("morningmusume15ki/image-12975276020-15810709888.html", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://ameblo.jp/morningmusume15ki/image-12975276020-15810709888.html",
            "ameblo.jp-morningmusume15ki-No.2296 TOYOTA ARENA・2日目♪♪ 山﨑愛生の画像 2枚中2枚目/",
            [],
            {
                sizeMatch: function (expected, actual) {
                    expect(actual).toBeGreaterThan(7);
                }
            });
    });
})

describe("Test suite news.ameba.jp", () => {
    test("entry/20260813-20618356/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://news.ameba.jp/entry/20260813-20618356/",
            "news.ameba.jp-橋本環奈、河了貂の蓑羽織って始球式に挑戦…グランドに一礼する動画に「さすが環奈ちゃん」「好感度爆上がり」の声/",
            [
                "https://image.ext-news.ameba.jp/40822674/NThkMzc1NzktY2E3Ny00NWU4LWE1MzYtYzMxZTA5MTQ1YmZk",
                "https://img.kadpos.kadokawa.jp/article/1432347/18236734"
            ]);
    });

    // regression test: multiple inline body images (not just the hero) on one article
    test("entry/20260813-37839438/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://news.ameba.jp/entry/20260813-37839438/",
            "news.ameba.jp-森咲智美、水着ロケ後に大反省「子どもの顔見たら“やっちゃったな”って」母になってからの変化を語る＜愛のハイエナ＞/",
            [
                "https://image.ext-news.ameba.jp/4bd4d2fc/NzgxZTA3OWEtY2YyMi00NWE4LWFkNTgtYjExNmRjMWUwZTNi",
                "https://img.kadpos.kadokawa.jp/article/1432243/18231369",
                "https://img.kadpos.kadokawa.jp/article/1432243/18231372",
                "https://img.kadpos.kadokawa.jp/article/1432243/18231374"
            ]);
    });

    test("entry/20260813-39022662/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://news.ameba.jp/entry/20260813-39022662/",
            "news.ameba.jp-時を巻き戻したよう…加藤小夏、エプロンでピース姿に「清楚」「美人」と称賛＜夫を殺したはずなのに＞/",
            [
                "https://image.ext-news.ameba.jp/ec8b1717/Y2UxMzQyNjgtYTc2OS00OWMzLWJlNDgtOThhMmFjZDBmYTJk",
                "https://img.kadpos.kadokawa.jp/article/1432311/18233163",
                "https://img.kadpos.kadokawa.jp/article/1432311/18233164"
            ]);
    });

    // "special report" pages (/article/<slug>/) use a completely different chat/comic-style
    // template (MainVisual/ProfileList/Chat/Picture components) than regular /entry/... articles.
    // Chat-personImage avatars repeat many times in the DOM (same 2 speaker icons reused per
    // bubble) but dedupe down to 2 unique URLs. LinkCard-thumbnail (a product link preview) and
    // the base64 data-uri header logo must not be picked up.
    test("article/yokosawa_natsuko/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://news.ameba.jp/article/yokosawa_natsuko/",
            "news.ameba.jp-朝ドラヒロインになりきってポジティブに解消！横澤夏子の明るいお悩み相談/",
            [
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/d26f329934724fe99f9ce0a20f09c14a/%E3%82%B5%E3%83%A0%E3%83%8D.png",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/2b5336f606b34d2e95d626f8fbc5c7d9/prf001.png",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/c55aaa5c55b9470bb29ea115622baa51/icon001.png",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/a505cdab4a8e4d518247a904e11ba253/icon002.png",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/103feec456324312a14ff57f9430b6e5/001.png",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/424b06407ff146febc439c86c15ba87c/002.png",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/e17db6cbcb164fcdb84d94dd31ccb050/003.png",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/adc353292c984f4d8c3102fd46aae722/004.png",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/cf7e263aad654e51b28b714a64b2ff2e/005.png",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/12d502c7704b4b9786e0c1d0dff0f49c/006.png",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/27442cf890734b26a647a922f18280e7/007.png",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/1b17433704414b998d5a98229238308d/008.png",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/d9e13af751fb4e66870306d7bb0d96b4/009.png"
            ]);
    });

    test("article/beeryevent/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://news.ameba.jp/article/beeryevent/",
            "news.ameba.jp-ビアリー片手に軽快トーク！ミキティのYouTube公開収録に潜入/",
            [
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/40ea7c237ab44e319dba3f73f968867b/beeryevent_header.jpg",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/e3020a769452486c9a07c0f956ac7d88/beeryevent_1.jpg",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/3af8bda78d514a6e9f1efa63bb251679/beeryevent_2.jpg",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/c61fa080c0ed403f9d31cd2bb37d00bd/beeryevent_3.jpg",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/3aa4f00c9cf644169d0647f9c1c2cd6a/beeryevent_4.jpg",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/cc7d1fb701de4519b24a7b633a4b8e88/beeryevent_5.jpg",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/7b7e919f6f594639b7360adde3ced2f9/beeryevent_6.jpg",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/d19ea8c9fcce4f8c813efc1155c0b31a/beeryevent_7.jpg",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/9a04860884554adab64c50d07ced156f/beeryevent_8.jpg",
                "https://image.news.ameba.jp/assets/bc1751bd0e20464ebcaea007d4e77e64/1e25c8ed476349f89a514b90a5535240/beeryevent_9.jpg"
            ]);
    });
})
