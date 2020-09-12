const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test image gallery page", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.tvlife.jp/entame/316402",
            "www.tvlife.jp-entame-316402/",
            [
                "https://www.tvlife.jp/wps/wp-content/uploads/2020/08/316402_00.jpg",
                "https://www.tvlife.jp/wps/wp-content/uploads/2020/08/316402_01.jpg",
                "https://www.tvlife.jp/wps/wp-content/uploads/2020/08/316402_02.jpg",
                "https://www.tvlife.jp/wps/wp-content/uploads/2020/08/316402_03.jpg"
            ]);
});

test("Test variety news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.tvlife.jp/variety/313524",
        "www.tvlife.jp-variety-313524/",
        [
            "https://www.tvlife.jp/wps/wp-content/uploads/2020/08/313524_01.jpg",
            "https://www.tvlife.jp/wps/wp-content/uploads/2020/08/313524_02.jpg",
            "https://www.tvlife.jp/wps/wp-content/uploads/2020/08/313524_03.jpg",
            "https://www.tvlife.jp/wps/wp-content/uploads/2020/08/313524_04.jpg",
            "https://www.tvlife.jp/wps/wp-content/uploads/2020/08/313524_05.jpg"
        ]);
});

test("Test movie news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.tvlife.jp/movie/307854",
        "www.tvlife.jp-movie-307854/",
        [
            "https://www.tvlife.jp/wps/wp-content/uploads/2020/07/307854_01.jpg",
            "https://www.tvlife.jp/wps/wp-content/uploads/2020/07/307854_04.jpg",
            "https://www.tvlife.jp/wps/wp-content/uploads/2020/07/307854_03.jpg",
            "https://www.tvlife.jp/wps/wp-content/uploads/2020/07/307854_02.jpg"
        ]);
});

test("Test entame news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.tvlife.jp/entame/304819",
        "www.tvlife.jp-entame-304819/",
        [
            "https://www.tvlife.jp/wps/wp-content/uploads/2020/07/304819_03.jpg",
            "https://www.tvlife.jp/wps/wp-content/uploads/2020/07/304819_01.jpg",
            "https://www.tvlife.jp/wps/wp-content/uploads/2020/07/304819_04.jpg"
        ]);
});
