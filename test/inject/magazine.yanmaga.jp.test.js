const {testDirectDownload, getBrowserFactory} = require("./testbase");
let browser =  getBrowserFactory(beforeAll, afterAll);

test("Test gravure page", async () => {
    await testDirectDownload(
        browser(),
        "https://magazine.yanmaga.jp/gravure/2022mym4back.html",
        "magazine.yanmaga.jp-gravure-2022mym4back.html/",
        [
            "https://magazine.yanmaga.jp/content/images/_gravure-style/2022mym4back01_pUzpTbTBZNym.jpg",
            "https://magazine.yanmaga.jp/content/images/_gravure-style/2022mym4back02_pUzpTbTBZNym.jpg"
        ]
    );
});

test("Test gravure page 2", async () => {
    await testDirectDownload(
        browser(),
        "https://magazine.yanmaga.jp/gravure/2022ym17cover.html",
        "magazine.yanmaga.jp-gravure-2022ym17cover.html/",
        [
            "https://magazine.yanmaga.jp/content/images/_gravure-style/2022ym17cover01_oyeitHAsBTLG.jpg",
            "https://magazine.yanmaga.jp/content/images/_gravure-style/2022ym17cover02_oyeitHAsBTLG.jpg",
            "https://magazine.yanmaga.jp/content/images/_gravure-style/2022ym17cover03_oyeitHAsBTLG.jpg"
        ]
    );
});


