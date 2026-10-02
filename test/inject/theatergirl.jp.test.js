const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite theatergirl.jp", () => {
    // size-large figures are de-resized (-724x1024) with the resized url kept as retry
    test("?p=79931", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://theatergirl.jp/?p=79931",
            "theatergirl.jp-井上小百合インタビュー 『リア王』 「誰かに勇気や元気を与えられる存在になりたい」（前編）/",
            [
                "https://theatergirl.jp/wp-content/uploads/2026/08/0331_井上小百合1537.jpg",
                "https://theatergirl.jp/wp-content/uploads/2026/08/0331_井上小百合1527.jpg",
                {
                    "url": "https://theatergirl.jp/wp-content/uploads/2026/08/0331_井上小百合1550.jpg",
                    "retries": [
                        "https://theatergirl.jp/wp-content/uploads/2026/08/0331_井上小百合1550-724x1024.jpg"
                    ]
                },
                "https://theatergirl.jp/wp-content/uploads/2026/08/0331_井上小百合1531.jpg",
                {
                    "url": "https://theatergirl.jp/wp-content/uploads/2026/08/0331_井上小百合1593.jpg",
                    "retries": [
                        "https://theatergirl.jp/wp-content/uploads/2026/08/0331_井上小百合1593-724x1024.jpg"
                    ]
                },
                {
                    "url": "https://theatergirl.jp/wp-content/uploads/2026/08/0331_井上小百合1561.jpg",
                    "retries": [
                        "https://theatergirl.jp/wp-content/uploads/2026/08/0331_井上小百合1561-724x1024.jpg"
                    ]
                }
            ]);
    });

    // size-full figure whose real file name looks like a resize (-724x1024-1) must be kept as is
    test("?p=81424", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://theatergirl.jp/?p=81424",
            "theatergirl.jp-作・演出：藤田貴大×丸山隆平（SUPER EIGHT）インタビュー 『water』 「観る人自身へ返ってくる物語になれば」（前編）/",
            [
                "https://theatergirl.jp/wp-content/uploads/2026/09/021.jpg",
                "https://theatergirl.jp/wp-content/uploads/2026/09/065.jpg",
                "https://theatergirl.jp/wp-content/uploads/2026/09/102-1.jpg",
                "https://theatergirl.jp/wp-content/uploads/2026/09/waterチラシ_表枠-724x1024-1.jpg"
            ]);
    });

    // -683x1024 resize
    test("?p=81281", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://theatergirl.jp/?p=81281",
            "theatergirl.jp-渡邊圭祐インタビュー 『Yerma イェルマ』 「シアタートラムの舞台に立つことは念願だった」（前編）/",
            [
                "https://theatergirl.jp/wp-content/uploads/2026/09/059.jpg",
                "https://theatergirl.jp/wp-content/uploads/2026/09/078.jpg",
                "https://theatergirl.jp/wp-content/uploads/2026/09/010-1.jpg",
                "https://theatergirl.jp/wp-content/uploads/2026/09/036.jpg",
                "https://theatergirl.jp/wp-content/uploads/2026/09/032.jpg",
                {
                    "url": "https://theatergirl.jp/wp-content/uploads/2026/09/037.jpg",
                    "retries": [
                        "https://theatergirl.jp/wp-content/uploads/2026/09/037-683x1024.jpg"
                    ]
                },
                "https://theatergirl.jp/wp-content/uploads/2026/09/s『Yerma-イェルマ』メインビジュアル左から：小林咲妃渡邊圭祐渡辺いっけい撮影：皆川-聡yoko-1.jpg"
            ]);
    });

    // 2022 stage report: figures without size-* class, many images
    test("?p=20000", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://theatergirl.jp/?p=20000",
            "theatergirl.jp-萩谷慧悟、長妻怜央W主演。舞台「Little Fandango」初日会見＆ゲネプロレポート！/",
            [
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_0733.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_0603.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_0143.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_0248.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_0457.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_0460.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_0369.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_0383.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_0802.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_0926.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_0996.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_1211.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_1260.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_1307.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_1393.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_1397.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_1611.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_1636.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_1664.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_1728.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_1840.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_1904.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_1931.jpg",
                "https://theatergirl.jp/wp-content/uploads/2022/06/re20220610_KON_1985.jpg"
            ]);
    });

    // 2019 column article
    test("?p=223", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://theatergirl.jp/?p=223",
            "theatergirl.jp-コレクション整理に！ 魅せる『グッズ収納術』3選/",
            [
                "https://theatergirl.jp/wp-content/uploads/2019/06/AdobeStock_196645432.jpg",
                "https://theatergirl.jp/wp-content/uploads/2019/06/01.jpg",
                "https://theatergirl.jp/wp-content/uploads/2019/06/02.jpg",
                "https://theatergirl.jp/wp-content/uploads/2019/06/re03.jpg"
            ]);
    });
});
