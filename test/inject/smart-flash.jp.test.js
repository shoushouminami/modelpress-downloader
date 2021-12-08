const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test akbsp page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://smart-flash.jp/akbsp/125975",
        "smart-flash.jp-akbsp-125975/",
        [
            "https://data.smart-flash.jp/wp-content/uploads/2020/12/22120926/S__84706601.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2020/12/22120927/S__84706621.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2020/12/22115235/S__8470663_1_thumb.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2020/12/22120929/S__84706641.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2020/12/28080058/2021_special.jpg"
        ]
    );
});

test("Test lifemoney page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://smart-flash.jp/lifemoney/136298/image/0",
        function (folder) {
            expect(folder.startsWith("smart-flash.jp-lifemoney-136298-image-")).toBe(true);
        },
        [
            "https://data.smart-flash.jp/wp-content/uploads/2021/03/23134352/quiz4_41.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2021/03/23134345/quiz1_1_thumb2.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2021/03/23134347/quiz2_22.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2021/03/23134349/quiz3_32.jpg"
        ]
    );
});

test("Test gravure page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://smart-flash.jp/gravure/162097//image/9",
        "smart-flash.jp-gravure-162097--image-9/",
        [
            "https://data.smart-flash.jp/wp-content/uploads/2021/10/29214433/oowadanana11_1.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2021/10/29214653/oowadanana2_1_thumb.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2021/10/29214703/oowadanana1_1.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2021/10/29214643/oowadanana3_1.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2021/10/29214630/oowadanana4_1.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2021/10/29214619/oowadanana5_1.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2021/10/29214606/oowadanana7_1.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2021/10/29214554/oowadanana8_1.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2021/10/29214542/oowadanana9_1.jpg",
            "https://data.smart-flash.jp/wp-content/uploads/2021/10/29214517/oowadanana10_1.jpg"
        ]
    );
});
