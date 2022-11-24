const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser =  getBrowserFactory(beforeAll, afterAll);

test.skip("gravure/2022ym50cover.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://magazine.yanmaga.jp/gravure/2022ym50cover.html",
        "magazine.yanmaga.jp-gravure-2022ym50cover.html/",
        [
            "https://magazine.yanmaga.jp/content/images/_gravure-style/2022ym50cover01_pwiOO8fgTbI0.jpg",
            "https://magazine.yanmaga.jp/content/images/_gravure-style/2022ym50cover02_pwiOO8fgTbI0.jpg",
            "https://magazine.yanmaga.jp/content/images/_gravure-style/2022ym50cover03_pwiOO8fgTbI0.jpg"
        ]);
});


