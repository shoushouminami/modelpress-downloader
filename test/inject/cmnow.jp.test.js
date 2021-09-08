const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test feature page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://cmnow.jp/feature/2102097318/",
        "cmnow.jp-feature-2102097318-/",
        [
            "https://cmnow.jp/wp-content/uploads/2021/02/CMNOW209hyo1-e1612874290900.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/kuboshiori1.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/kubosihori2.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/satokaede.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/komiyaarisa1.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/komiyaarisa2.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/photocard_komiya_02_sample.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/photocard_komiya_03_sample.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/photocard_komiya_01_sample.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/miyaseryubi.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/siraishisei.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/riko.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/71qM9h0jhEL.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/yamamotomikana.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/CMNOWtakeuchi.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/DSC00163-1.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/01/CMNOW209hyo1.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/02/CMNOW209hyo1.jpg"
        ]
    );
});

test("Test cm page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://cmnow.jp/cm/2108279133/",
        "cmnow.jp-cm-2108279133-/",
        [
            "https://cmnow.jp/wp-content/uploads/2021/08/C2.png",
            "https://cmnow.jp/wp-content/uploads/2021/08/C3.png",
            "https://cmnow.jp/wp-content/uploads/2021/08/C4.png",
            "https://cmnow.jp/wp-content/uploads/2021/08/C5.png",
            "https://cmnow.jp/wp-content/uploads/2021/08/C6.png",
            "https://cmnow.jp/wp-content/uploads/2021/08/C10.png"
        ]
    );
});

test("Test series page 2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://cmnow.jp/series/2102137385-2/",
        "cmnow.jp-series-2102137385-2-/",
        [
            "https://cmnow.jp/wp-content/uploads/2021/04/watanabe3.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/04/DSC05758.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/04/DSC05690.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/04/DSC05716.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/04/DSC05955.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/04/DSC06006.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/04/DSC05702.jpg",
            "https://cmnow.jp/wp-content/uploads/2021/04/380cbc0b9e44d36b8d12ea85b6feea6d.jpg"
        ]
    );
});
