const {testDirectDownload, getBrowserFactory} = require("./testbase");
let browser =  getBrowserFactory(beforeAll, afterAll);

test("Test gravure page", async () => {
    await testDirectDownload(
        browser(),
        "https://magazine.yanmaga.jp/gravure/2022ym21-22cover.html",
        "magazine.yanmaga.jp-gravure-2022ym21-22cover.html/",
        [
            "https://magazine.yanmaga.jp/content/images/_gravure-style/2022ym21-22cover01_0vdxZUrXFeEx.jpg",
            "https://magazine.yanmaga.jp/content/images/_gravure-style/2022ym21-22cover02_0vdxZUrXFeEx.jpg",
            "https://magazine.yanmaga.jp/content/images/_gravure-style/2022ym21-22cover03_0vdxZUrXFeEx.jpg"
        ]
    );
});


