const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("archives/60896", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sweetweb.jp/archives/60896",
        "sweetweb.jp-archives-60896/",
        [
            "https://sweetweb.jp/wp-content/uploads/2022/08/e323a261f6df689cac7a6566180e2b9a.jpg",
            "https://sweetweb.jp/wp-content/uploads/2022/08/29136244e0c3d3e7f647d8bbf43a8c14-1.jpg",
            "https://sweetweb.jp/wp-content/uploads/2022/08/f4c0af4be16170ad6eaac0f3aa42da76-1.jpg",
            "https://sweetweb.jp/wp-content/uploads/2022/08/263c55e72eb34ac8f4ac797b1b88488a.jpg",
            "https://sweetweb.jp/wp-content/uploads/2022/08/7b167303e384bd23346c3256b3533827.jpg",
            "https://sweetweb.jp/wp-content/uploads/2022/08/37fdedaac6d1ce98dcea0a95a8f93b06.jpg",
            "https://sweetweb.jp/wp-content/uploads/2022/08/1b7385c6ba0515c691f219cc291b94af.jpg",
            "https://sweetweb.jp/wp-content/uploads/2022/08/6d585229a063497e7437c130de71e927.jpg"
        ]);
});

test("archives/60103", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sweetweb.jp/archives/60103",
        "sweetweb.jp-archives-60103/",
        [
            "https://sweetweb.jp/wp-content/uploads/2022/07/757f2b5f18138ad93da87744738b947c-e1657524663350.jpg",
            "https://sweetweb.jp/wp-content/uploads/2022/07/aaec49031f95513c3d1c9b5b72b8ed7b-e1657523540875.jpg",
            "https://sweetweb.jp/wp-content/uploads/2022/07/0df345089b36af6bcf734ca8834db87a-e1657523573517.jpg",
            "https://sweetweb.jp/wp-content/uploads/2022/07/7bbf047c9ec0ca72d375505f05a35add-e1657523966842.jpg",
            "https://sweetweb.jp/wp-content/uploads/2022/07/ecdf92581f25fb21d9eb27cb11bdcce4-e1657524151727.jpg",
            "https://sweetweb.jp/wp-content/uploads/2022/07/f78226fc0e37dbc963a64617b0ef4a59-e1657524398588.jpg"
        ]);
});
