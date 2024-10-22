const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("myspa/contents/6166", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://nikkan-spa.jp/myspa/contents/6166",
        "nikkan-spa.jp-myspa-contents-6166/",
        [
            "https://nikkan-spa.jp/myspa/wp-content/uploads/2024/10/My_kodama_3_009500.jpg",
            "https://nikkan-spa.jp/myspa/wp-content/uploads/2024/10/My_kodama_3_007500.jpg",
            "https://nikkan-spa.jp/myspa/wp-content/uploads/2024/10/My_kodama_3_018500.jpg"
        ]);
});

test("2039471", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://nikkan-spa.jp/2039471",
        "nikkan-spa.jp-2039471/",
        [
            "https://nikkan-spa.jp/wp-content/uploads/2024/10/spa2024101522_atoaji1.jpg"
        ]);
});
