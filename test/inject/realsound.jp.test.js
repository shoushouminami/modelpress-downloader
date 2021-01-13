const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test movie news article with slider", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://realsound.jp/movie/2020/08/post-596435_2.html",
            "realsound.jp-movie-2020-08-post-596435_2.html/",
            [
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-main.jpg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-main.jpg"
                },
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub7.jpeg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub7.jpeg"
                },
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/08/20200805-grandblue-bamen3.jpeg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/08/20200805-grandblue-bamen3.jpeg"
                },
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-cheki-598x468.jpg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-cheki.jpg"
                },
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub2.jpeg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub2.jpeg"
                },
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub8.jpeg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub8.jpeg"
                },
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub6.jpeg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub6.jpeg"
                },
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub1.jpeg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub1.jpeg"
                },
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub5.jpeg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub5.jpeg"
                },
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub9.jpeg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub9.jpeg"
                },
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub3.jpeg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub3.jpeg"
                }
            ]);
});

test("Test news article with slider", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://realsound.jp/2020/09/post-614366.html",
        "realsound.jp-2020-09-post-614366.html/",
        [
            {
                "retries": [
                    "https://realsound.jp/wp-content/uploads/2020/09/20200905-watanaberisa-950x633.jpg"
                ],
                "url": "https://realsound.jp/wp-content/uploads/2020/09/20200905-watanaberisa.jpg"
            },
            {
                "retries": [
                    "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie1.jpg"
                ],
                "url": "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie1.jpg"
            },
            {
                "retries": [
                    "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie8.jpg"
                ],
                "url": "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie8.jpg"
            },
            {
                "retries": [
                    "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie3.jpg"
                ],
                "url": "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie3.jpg"
            },
            {
                "retries": [
                    "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie2.jpg"
                ],
                "url": "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie2.jpg"
            },
            {
                "retries": [
                    "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie7.jpg"
                ],
                "url": "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie7.jpg"
            }
        ]);
});

test("Test movie special post", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://realsound.jp/movie/2020/03/post-524336.html",
            "realsound.jp-movie-2020-03-post-524336.html/",
            [
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/03/20200318-satsukyu-header.jpg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/03/20200318-satsukyu-header.jpg"
                },
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/03/20190318-satsukyu-main-702x468.jpeg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/03/20190318-satsukyu-main.jpeg"
                },
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/03/20190319-satsukyu-main-702x468.jpeg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/03/20190319-satsukyu-main.jpeg"
                },
                {
                    "retries": [
                        "https://realsound.jp/wp-content/uploads/2020/03/20200318-satsukyu-sub2.jpeg"
                    ],
                    "url": "https://realsound.jp/wp-content/uploads/2020/03/20200318-satsukyu-sub2.jpeg"
                }
            ]);
});
