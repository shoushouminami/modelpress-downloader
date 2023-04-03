const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);
test("1849635?cx_clicks_art_mdl=2_img", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://nikkan-spa.jp/1849635?cx_clicks_art_mdl=2_img",
        "nikkan-spa.jp-1849635/",
        [
            "https://nikkan-spa.jp/wp-content/uploads/2022/08/MicrosoftTeams-image-10-2.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2022/08/MicrosoftTeams-image-6-10.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2022/08/MicrosoftTeams-image-5-9.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2022/08/MicrosoftTeams-image-4-10.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2022/08/MicrosoftTeams-image-3-11.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2022/08/MicrosoftTeams-image-2-9.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2022/08/MicrosoftTeams-image-8-4.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2022/08/MicrosoftTeams-image-7-6.jpg"
        ]);
});

test("1896647?cx_clicks_sldbox=2_slidemdl", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://nikkan-spa.jp/1896647?cx_clicks_sldbox=2_slidemdl",
        "nikkan-spa.jp-1896647/",
        [
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/14_2.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/11_2.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/arifureta_main.jpg"
        ]);
});

test("1896647/3", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://nikkan-spa.jp/1896647/3",
        "nikkan-spa.jp-1896647-3/",
        [
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/8_2.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/aoyama.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/matsuura.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/fuchikami.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/gekidan.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/kitamura.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/maki.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/matsuura_kanazawa.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/sugimoto.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/sugimoto_sendou.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/takashina.jpg",
            "https://nikkan-spa.jp/wp-content/uploads/2023/03/tezuka.jpg"
        ]);
});
