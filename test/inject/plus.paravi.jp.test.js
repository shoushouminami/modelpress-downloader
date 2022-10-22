const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("entertainment/012778.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://plus.paravi.jp/entertainment/012778.html",
        "plus.paravi.jp-entertainment-012778.html/",
        [
            "https://plus.paravi.jp/images/20221019_sin_01.jpg",
            "https://plus.paravi.jp/images/20221019_sin_02.jpg",
            "https://plus.paravi.jp/images/20221019_sin_03.jpg"
        ]);
});

test("entertainment/012708.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://plus.paravi.jp/entertainment/012708.html",
        "plus.paravi.jp-entertainment-012708.html/",
        [
            "https://plus.paravi.jp/images/20221006_mimi_tsutsui_01.jpg",
            "https://plus.paravi.jp/images/20221006_mimi_tsutsui_03.jpg",
            "https://plus.paravi.jp/images/20221006_mimi_tsutsui_02.jpg",
            "https://plus.paravi.jp/images/20221006_mimi_tsutsui_04.jpg"
        ]);
});

test("lifestyle/000382.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://plus.paravi.jp/lifestyle/000382.html",
        "plus.paravi.jp-lifestyle-000382.html/",
        [
            "https://plus.paravi.jp/images/20180922_wacoal_02.jpg",
            "https://plus.paravi.jp/images/20180922_wacoal_03.jpg",
            "https://plus.paravi.jp/images/20180922_wacoal_04.jpg"
        ]);
});
