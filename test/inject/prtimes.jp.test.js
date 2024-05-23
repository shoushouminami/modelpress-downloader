const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("main/html/rd/p/000000898.000030865.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://prtimes.jp/main/html/rd/p/000000898.000030865.html",
        "prtimes.jp-main-html-rd-p-000000898.000030865.html/",
        [
            "https://prcdn.freetls.fastly.net/release_image/30865/898/30865-898-e4bf540405c44a162ec30c0ffb87f201-1920x1080.jpg",
            "https://prcdn.freetls.fastly.net/release_image/30865/898/30865-898-fb252e8b5b44107ce8c379687dd71ad4-1110x1110.jpg",
            "https://prcdn.freetls.fastly.net/release_image/30865/898/30865-898-3dba19bea05f8ad7d7b160359b6f34c4-1110x1110.jpg",
            "https://prcdn.freetls.fastly.net/release_image/30865/898/30865-898-a6e840d7b365c5c36f03a4a30ef672eb-3900x3900.jpg",
            "https://prcdn.freetls.fastly.net/release_image/30865/898/30865-898-fc003e571028d40d3dcaa1aca33f9160-1110x1110.jpg",
            "https://prcdn.freetls.fastly.net/release_image/30865/898/30865-898-cf31d87c0841cdc0704866ea5acacf71-1110x1110.jpg",
            "https://prcdn.freetls.fastly.net/release_image/30865/898/30865-898-d05957472e074ab3dea025671a0b271c-1110x1110.jpg",
            "https://prcdn.freetls.fastly.net/release_image/30865/898/30865-898-103deeeae4fd667e8402e4d2def4b3af-1110x1110.jpg",
            "https://prcdn.freetls.fastly.net/release_image/30865/898/30865-898-26ad4e1768b62e656e2874ec74e3dc72-1110x1110.jpg",
            "https://prcdn.freetls.fastly.net/release_image/30865/898/30865-898-631a2230fcb1b234ceef7389fc27be92-1950x486.png",
            "https://prcdn.freetls.fastly.net/release_image/30865/898/30865-898-7b324c18193b8ea0172f621002df43a2-1000x751.png"
        ]);
});

test("main/html/rd/p/000000530.000040601.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://prtimes.jp/main/html/rd/p/000000530.000040601.html",
        "prtimes.jp-main-html-rd-p-000000530.000040601.html/",
        [
            "https://prcdn.freetls.fastly.net/release_image/40601/530/40601-530-ac59a8c504ebdbbbd7092f45280dec30-1884x2700.jpg",
            "https://prcdn.freetls.fastly.net/release_image/40601/530/40601-530-6bd72a001804257f718350d3a3984531-835x1200.jpg",
            "https://prcdn.freetls.fastly.net/release_image/40601/530/40601-530-cbe84604e8b9f83fb1a17b75387c592f-835x1200.jpg",
            "https://prcdn.freetls.fastly.net/release_image/40601/530/40601-530-7ddc49c3dc4c26ac924904ec87976f4e-835x1200.jpg"
        ]);
});

test("main/html/rd/p/000000334.000025939.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://prtimes.jp/main/html/rd/p/000000334.000025939.html",
        "prtimes.jp-main-html-rd-p-000000334.000025939.html/",
        [
            "https://prcdn.freetls.fastly.net/release_image/25939/334/25939-334-95d1b85759a81be4b9aa71d0a42c7001-3413x1920.jpg",
            "https://prcdn.freetls.fastly.net/release_image/25939/334/25939-334-de49b658ddc5fc9d2963a6b8ee7daac5-675x900.jpg",
            "https://prcdn.freetls.fastly.net/release_image/25939/334/25939-334-14171869ed881c7a0a95c4dca245b981-675x900.jpg",
            "https://prcdn.freetls.fastly.net/release_image/25939/334/25939-334-bf8edce1dac3fbb6fc7d9f2aa38d651a-675x900.jpg",
            "https://prcdn.freetls.fastly.net/release_image/25939/334/25939-334-66cda4618086c47866b00586f0296b10-675x900.jpg",
            "https://prcdn.freetls.fastly.net/release_image/25939/334/25939-334-754c0be5b7cc5a96b8a36b4c2ec3b825-675x900.jpg",
            "https://prcdn.freetls.fastly.net/release_image/25939/334/25939-334-0335188c7a5df7153599f288e4782531-675x900.jpg",
            "https://prcdn.freetls.fastly.net/release_image/25939/334/25939-334-10e924a0d06cccb7796fdccc911a69dc-675x900.jpg",
            "https://prcdn.freetls.fastly.net/release_image/25939/334/25939-334-4c31f8728916a80d3e6104000da43908-3600x1440.jpg",
            "https://prcdn.freetls.fastly.net/release_image/25939/334/25939-334-e3c8b27c70f3bb746a052bdba31ac8b2-3413x1920.jpg"
        ]);
});


test("main/html/rd/p/000000552.000025141.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://prtimes.jp/main/html/rd/p/000000552.000025141.html",
        "prtimes.jp-main-html-rd-p-000000552.000025141.html/",
        [
            "https://prcdn.freetls.fastly.net/release_image/25141/552/25141-552-b46539626e8530e15e870140fb3e9f0f-1200x799.jpg",
            "https://prcdn.freetls.fastly.net/release_image/25141/552/25141-552-ef23f2924b28153b51902e7361b1ad79-780x439.jpg"
        ]);
});
