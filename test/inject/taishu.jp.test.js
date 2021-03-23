const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test single image full article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://taishu.jp/articles/-/93066?page=1",
        "taishu.jp-articles---93066/",
        [
            "https://taishu.jp/mwimgs/5/3/-/img_5305dbc9b99f0473f5221a9cea5ac25935903.jpg"
        ]
    );
});

test("Test single image half article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://taishu.jp/articles/-/93066",
        "taishu.jp-articles---93066/",
        [
            "https://taishu.jp/mwimgs/5/3/-/img_5305dbc9b99f0473f5221a9cea5ac25935903.jpg"
        ]
    );
});

test("Test multiple images full article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://taishu.jp/articles/-/93163?page=1",
        "taishu.jp-articles---93163/",
        [
            "https://taishu.jp/mwimgs/6/3/-/img_6356b9583fc4456027892e82fb44d295176236.jpg",
            {
                "retries": [
                    "https://taishu.ismcdn.jp/mwimgs/3/d/120w/img_3d499646fc0990ce6448a411907ea993382352.jpg"
                ],
                "url": "https://taishu.ismcdn.jp/mwimgs/3/d/-/img_3d499646fc0990ce6448a411907ea993382352.jpg"
            },
            {
                "retries": [
                    "https://taishu.ismcdn.jp/mwimgs/2/7/120w/img_274a559733e8459b621b19fb59c2f322307315.jpg"
                ],
                "url": "https://taishu.ismcdn.jp/mwimgs/2/7/-/img_274a559733e8459b621b19fb59c2f322307315.jpg"
            },
            {
                "retries": [
                    "https://taishu.ismcdn.jp/mwimgs/4/c/120w/img_4cc31848ab19de689d648a3396747c14359169.jpg"
                ],
                "url": "https://taishu.ismcdn.jp/mwimgs/4/c/-/img_4cc31848ab19de689d648a3396747c14359169.jpg"
            },
            {
                "retries": [
                    "https://taishu.ismcdn.jp/mwimgs/1/0/120w/img_10ada54e400dd28c1cd4e2070d5059a5206308.jpg"
                ],
                "url": "https://taishu.ismcdn.jp/mwimgs/1/0/-/img_10ada54e400dd28c1cd4e2070d5059a5206308.jpg"
            },
            {
                "retries": [
                    "https://taishu.ismcdn.jp/mwimgs/7/2/120w/img_724c17232c503fb76c91901396bef7a3155059.jpg"
                ],
                "url": "https://taishu.ismcdn.jp/mwimgs/7/2/-/img_724c17232c503fb76c91901396bef7a3155059.jpg"
            },
            {
                "retries": [
                    "https://taishu.ismcdn.jp/mwimgs/6/f/120w/img_6fd568ce6004997f867cf62ef3c02b44316317.jpg"
                ],
                "url": "https://taishu.ismcdn.jp/mwimgs/6/f/-/img_6fd568ce6004997f867cf62ef3c02b44316317.jpg"
            }
        ]
    );
});


test("Test multiple images photo page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://taishu.jp/articles/photo/93163",
        "taishu.jp-articles-photo-93163/",
        [
            "https://taishu.ismcdn.jp/mwimgs/3/d/-/img_3d499646fc0990ce6448a411907ea993382352.jpg",
            "https://taishu.ismcdn.jp/mwimgs/2/7/-/img_274a559733e8459b621b19fb59c2f322307315.jpg",
            "https://taishu.ismcdn.jp/mwimgs/4/c/-/img_4cc31848ab19de689d648a3396747c14359169.jpg",
            "https://taishu.ismcdn.jp/mwimgs/1/0/-/img_10ada54e400dd28c1cd4e2070d5059a5206308.jpg",
            "https://taishu.ismcdn.jp/mwimgs/7/2/-/img_724c17232c503fb76c91901396bef7a3155059.jpg",
            "https://taishu.ismcdn.jp/mwimgs/6/f/-/img_6fd568ce6004997f867cf62ef3c02b44316317.jpg",
            "https://taishu.ismcdn.jp/mwimgs/4/d/-/img_4d3c95bb552a623ea7915f4ba73420bf134545.jpg",
            "https://taishu.ismcdn.jp/mwimgs/d/7/-/img_d759bd67a0fd3a92ceba785241f252a3188321.jpg",
            "https://taishu.ismcdn.jp/mwimgs/6/3/-/img_6356b9583fc4456027892e82fb44d295176236.jpg",
            "https://taishu.ismcdn.jp/mwimgs/0/7/-/img_073186c96e72efdfe6eb1e76feca85d2108784.jpg",
            "https://taishu.ismcdn.jp/mwimgs/6/5/-/img_6508a60d7f15ef758da40d0eec7b6623124895.jpg"
        ]
    );
});
