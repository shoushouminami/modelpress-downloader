const { testDirectDownload, getBrowserFactory, dummyItems } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite www.fashion-press.net", () => {
    test("news/56100", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.fashion-press.net/news/56100",
            "www.fashion-press.net-news-56100/",
            [
                {
                    "url": "https://www.fashion-press.net/img/news/56100/top.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/movies/23487/DWM.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/movies/23487/XZw.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/movies/23487/32U.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/movies/23487/GW0.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/movies/23487/gEE.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/movies/23487/hn8.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/movies/23487/lFU.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/movies/23487/sY0.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/movies/23487/g8Y.jpg"
                }
            ]);
    });



    test("collections/13552", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.fashion-press.net/collections/13552",
            "www.fashion-press.net-collections-13552/",
            dummyItems(61));
    });

    test("snaps/5485", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.fashion-press.net/snaps/5485",
            "www.fashion-press.net-snaps-5485/",
            [
                {
                    "url": "https://www.fashion-press.net/img/snaps/5485/-rQ.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/snaps/5485/jZo.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/snaps/5485/cp8.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/snaps/5485/Mrc.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/snaps/5485/hLw.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/snaps/5485/Xjg.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/snaps/5485/1XI.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/snaps/5485/SPE.jpg"
                },
                {
                    "url": "https://www.fashion-press.net/img/snaps/5485/q2Y.jpg"
                }
            ]);
    });

})

