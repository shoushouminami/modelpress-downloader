const { testDirectDownload, getBrowserFactory, dummyItems } = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.fashion-press.net/news/56100",
        "www.fashion-press.net-news-56100/",
        [
            {
                "url": "https://www.fashion-press.net/img/movies/23487/FLw.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/DWM.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/32U.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/GW0.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/es8.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/sY0.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/gEE.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/movies/23487/w300_XZw.jpg"
                ],
                "url": "https://www.fashion-press.net/img/movies/23487/XZw.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/movies/23487/w300_hn8.jpg"
                ],
                "url": "https://www.fashion-press.net/img/movies/23487/hn8.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/movies/23487/w300_lFU.jpg"
                ],
                "url": "https://www.fashion-press.net/img/movies/23487/lFU.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/movies/23487/w300_g8Y.jpg"
                ],
                "url": "https://www.fashion-press.net/img/movies/23487/g8Y.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/movies/23487/w300_cpU.jpg"
                ],
                "url": "https://www.fashion-press.net/img/movies/23487/cpU.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/movies/23487/w300_yEw.jpg"
                ],
                "url": "https://www.fashion-press.net/img/movies/23487/yEw.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/movies/23487/w300_n0w.jpg"
                ],
                "url": "https://www.fashion-press.net/img/movies/23487/n0w.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        }
    );
});

test("Test collection article page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.fashion-press.net/collections/13552",
        "www.fashion-press.net-collections-13552/",
        [
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_001.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_002.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_007.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_008.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_009.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_012.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_013.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_014.jpg"
            }
        ].concat(dummyItems(52)),
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        }
    );
});

test("Test snaps article page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.fashion-press.net/snaps/5485",
        "www.fashion-press.net-snaps-5485/",
        [
            {
                "url": "https://www.fashion-press.net/img/snaps/5485/-rQ.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_jZo.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/jZo.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_cp8.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/cp8.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_Mrc.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/Mrc.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_hLw.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/hLw.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_Xjg.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/Xjg.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_1XI.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/1XI.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_SPE.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/SPE.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_q2Y.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/q2Y.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        }
    );
});