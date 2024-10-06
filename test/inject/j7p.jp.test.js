const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("57687", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://j7p.jp/57687",
        "j7p.jp-57687/",
        [
            "https://j7p.jp/wp-content/uploads/2020/08/SeoJihye.jpg",
            "https://j7p.jp/wp-content/uploads/2020/08/SeoJihye1.jpg",
            "https://j7p.jp/wp-content/uploads/2020/08/SeoJihye4.jpg",
            "https://j7p.jp/wp-content/uploads/2020/08/SeoJihye2.jpg",
            "https://j7p.jp/wp-content/uploads/2020/08/SeoJihye5.jpg",
            "https://j7p.jp/wp-content/uploads/2020/08/SeoJihye3.jpg"
        ]);
});

test("59356", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://j7p.jp/59356",
        "j7p.jp-59356/",
        [
            "https://j7p.jp/wp-content/uploads/2020/05/naoko_Img107869.jpg",
            "https://j7p.jp/wp-content/uploads/2020/10/naoko_Img107052.jpg",
            "https://j7p.jp/wp-content/uploads/2020/10/naoko_Img107055.jpg",
            "https://j7p.jp/wp-content/uploads/2020/10/naoko_Img107060.jpg",
            "https://m.media-amazon.com/images/I/517xcxouNGL.jpg"
        ]);
});

test("120945", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://j7p.jp/120945",
        "j7p.jp-120945/",
        [
            "https://j7p.jp/wp-content/uploads/2024/09/eye_yumi_kaoru_03.jpg",
            "https://j7p.jp/wp-content/uploads/2024/09/re_yumi_kaoru_02.jpg",
            "https://j7p.jp/wp-content/uploads/2024/09/re_asagohan_21.jpg",
            "https://j7p.jp/wp-content/uploads/2024/09/asagohan_22.jpg",
            "https://j7p.jp/wp-content/uploads/2024/09/yumi_kaoru_04.jpg",
            "https://j7p.jp/wp-content/uploads/2024/09/re_asagohan_20.jpg",
            "https://j7p.jp/wp-content/uploads/2024/09/re_yumi_kaoru_01.jpg"
        ]);
});
