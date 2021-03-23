const {testDirectDownload, getBrowserFactory} = require("./testbase");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test article images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://exweb.jp/articles/-/84180",
        "exweb.jp-articles---84180/",
        [
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/c/6/704w/img_c64475feb6397ce4c1ea5ac21b1d2105129570.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/c/6/-/img_c64475feb6397ce4c1ea5ac21b1d2105129570.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/b/8/120w/img_b89dbf82ea86c0f6f645ddf46d5e605999978.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/b/8/-/img_b89dbf82ea86c0f6f645ddf46d5e605999978.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/5/1/120w/img_51e487e133e221871446081f5543906678050.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/5/1/-/img_51e487e133e221871446081f5543906678050.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/a/f/120w/img_aff72bf7df790024253fd9450fd5cc7f114836.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/a/f/-/img_aff72bf7df790024253fd9450fd5cc7f114836.jpg"
            }
        ]
    );
});

test("Test image page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://exweb.jp/articles/photo/84180",
        "exweb.jp-articles-photo-84180/",
        [
            "https://exweb.ismcdn.jp/mwimgs/c/6/-/img_c64475feb6397ce4c1ea5ac21b1d2105129570.jpg",
            "https://exweb.ismcdn.jp/mwimgs/b/8/-/img_b89dbf82ea86c0f6f645ddf46d5e605999978.jpg",
            "https://exweb.ismcdn.jp/mwimgs/5/1/-/img_51e487e133e221871446081f5543906678050.jpg",
            "https://exweb.ismcdn.jp/mwimgs/a/f/-/img_aff72bf7df790024253fd9450fd5cc7f114836.jpg"
        ]
    );
});

test("Test single left image page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://exweb.jp/articles/-/82728",
        "exweb.jp-articles---82728/",
        [
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/8/0/704w/img_80f4b1836c157a1b65d227845ea32033780951.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/8/0/-/img_80f4b1836c157a1b65d227845ea32033780951.jpg"
            }
        ]
    );
});

test("Test list magzine page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://exweb.jp/list/magazine/5ffe66617765616296060000",
        "exweb.jp-list-magazine-5ffe66617765616296060000/",
        [
            {
                "retries": [
                    "https://exweb.jp/mwimgs/c/3/1200wm/img_c354ae62a21ee6f67d6821d0b2ee8947603333.jpg"
                ],
                "url": "https://exweb.jp/mwimgs/c/3/-/img_c354ae62a21ee6f67d6821d0b2ee8947603333.jpg"
            }
        ]
    );
});
