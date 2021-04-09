const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test nogizaka46 page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.tfm.co.jp/lock/nogizaka46/",
        "www.tfm.co.jp-lock-nogizaka46-/",
        [
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk01.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk14.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk02.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk07.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk06.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk16.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk15.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk03.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk13.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk04.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk08.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk11.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk17.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk09.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk10.jpg",
            "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_nkkhrk05.jpg"
        ]
    );
});

test("Test suzu page", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.tfm.co.jp/lock/girls/suzu/index.php?itemid=16566",
            "www.tfm.co.jp-lock-girls-suzu-index.php/",
            [
                    "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_gfeha01.jpg",
                    "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_gfeha02.jpg",
                    "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_gfeha03.jpg",
                    "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_gfeha04.jpg",
                    "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_gfeha05.jpg",
                    "https://www.tfm.co.jp/lock/cms/media/y2021/20210408_gfeha06.jpg"
            ]
        );
});
