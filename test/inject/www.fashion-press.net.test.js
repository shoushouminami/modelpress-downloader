const { testDirectDownload, getBrowserFactory, dummyItems } = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("news/56100", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.fashion-press.net/news/56100",
        "www.fashion-press.net-news-56100/",
        [
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
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/cpU.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/yEw.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/es8.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/n0w.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/FLw.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/5Uk.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/T3Y.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/Jcg.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/hd8.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/vEE.jpg"
            }
        ]);
});

test("collections/13552", async () => {
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
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_018.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_019.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_020.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_027.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_028.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_029.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_030.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_031.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_032.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_033.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_034.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_035.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_036.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_037.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_038.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_039.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_040.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_041.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_042.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_043.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_044.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_045.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_046.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_055.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_069.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_070.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_071.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_072.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_073.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_074.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_075.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_076.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_080.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_081.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_082.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_083.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_084.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_085.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_086.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_087.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_088.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_089.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_090.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_091.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_092.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_093.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_094.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_095.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_096.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_097.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_098.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/news/65061/GiorgioArmani_2021ss_099.jpg"
            }
        ]);
});

test("snaps/5485", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.fashion-press.net/snaps/5485",
        "www.fashion-press.net-snaps-5485/",
        [
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_-rQ.jpg"
                ],
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
        ]);
});
