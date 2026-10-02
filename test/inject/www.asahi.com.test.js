const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite www.asahi.com", () => {
    // photo page: current photo + the article gallery, original "comm" size with hd1280 and the displayed size as fallbacks
    test("articles/photo/AS20260902003656.html", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.asahi.com/articles/photo/AS20260902003656.html",
            "www.asahi.com-日向坂46「ひなたフェス」中止 開催地・宮崎、警報級大雨の恐れ/",
            [
                {
                    "url": "https://www.asahicom.jp/imgopt/img/0c45449922/comm/AS20260902003656.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/0c45449922/hd1280/AS20260902003656.jpg",
                        "https://www.asahicom.jp/imgopt/img/0c45449922/hd640/AS20260902003656.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/fcf5e406b4/comm/AS20260902003650.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/fcf5e406b4/hd1280/AS20260902003650.jpg",
                        "https://www.asahicom.jp/imgopt/img/fcf5e406b4/comm_L/AS20260902003650.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/03dae78cec/comm/AS20260902003660.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/03dae78cec/hd1280/AS20260902003660.jpg",
                        "https://www.asahicom.jp/imgopt/img/03dae78cec/comm_L/AS20260902003660.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/1705ea5b47/comm/AS20260902003651.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/1705ea5b47/hd1280/AS20260902003651.jpg",
                        "https://www.asahicom.jp/imgopt/img/1705ea5b47/comm_L/AS20260902003651.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/a84fc2ea55/comm/AS20260902003649.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/a84fc2ea55/hd1280/AS20260902003649.jpg",
                        "https://www.asahicom.jp/imgopt/img/a84fc2ea55/comm_L/AS20260902003649.jpg"
                    ]
                }
            ]);
    });

    // article page of the same gallery: same images and folder
    test("articles/ASV923DBZV92TNAB003M.html", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.asahi.com/articles/ASV923DBZV92TNAB003M.html",
            "www.asahi.com-日向坂46「ひなたフェス」中止 開催地・宮崎、警報級大雨の恐れ/",
            [
                {
                    "url": "https://www.asahicom.jp/imgopt/img/0c45449922/comm/AS20260902003656.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/0c45449922/hd1280/AS20260902003656.jpg",
                        "https://www.asahicom.jp/imgopt/img/0c45449922/comm_L/AS20260902003656.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/fcf5e406b4/comm/AS20260902003650.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/fcf5e406b4/hd1280/AS20260902003650.jpg",
                        "https://www.asahicom.jp/imgopt/img/fcf5e406b4/hw120/AS20260902003650.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/03dae78cec/comm/AS20260902003660.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/03dae78cec/hd1280/AS20260902003660.jpg",
                        "https://www.asahicom.jp/imgopt/img/03dae78cec/hw120/AS20260902003660.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/1705ea5b47/comm/AS20260902003651.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/1705ea5b47/hd1280/AS20260902003651.jpg",
                        "https://www.asahicom.jp/imgopt/img/1705ea5b47/hw120/AS20260902003651.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/a84fc2ea55/comm/AS20260902003649.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/a84fc2ea55/hd1280/AS20260902003649.jpg",
                        "https://www.asahicom.jp/imgopt/img/a84fc2ea55/hw120/AS20260902003649.jpg"
                    ]
                }
            ]);
    });

    // article with inline hd640 figures instead of a thumbnail strip
    test("articles/ASV7621V8V76OIPE00WM.html", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.asahi.com/articles/ASV7621V8V76OIPE00WM.html",
            "www.asahi.com-大観衆と熱気そして人の優しさも 開幕迫るアジアパラ 思い出様々/",
            [
                {
                    "url": "https://www.asahicom.jp/imgopt/img/e003496ce1/comm/AS20260706002655.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/e003496ce1/hd1280/AS20260706002655.jpg",
                        "https://www.asahicom.jp/imgopt/img/e003496ce1/hd640/AS20260706002655.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/576aaef12e/comm/AS20260706002654.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/576aaef12e/hd1280/AS20260706002654.jpg",
                        "https://www.asahicom.jp/imgopt/img/576aaef12e/hd640/AS20260706002654.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/a40f89242e/comm/AS20260706002660.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/a40f89242e/hd1280/AS20260706002660.jpg",
                        "https://www.asahicom.jp/imgopt/img/a40f89242e/hd640/AS20260706002660.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/cec9b5964d/comm/AS20260706002659.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/cec9b5964d/hd1280/AS20260706002659.jpg",
                        "https://www.asahicom.jp/imgopt/img/cec9b5964d/hd640/AS20260706002659.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/f9e202f5a4/comm/AS20260706002648.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/f9e202f5a4/hd1280/AS20260706002648.jpg",
                        "https://www.asahicom.jp/imgopt/img/f9e202f5a4/hd640/AS20260706002648.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/c4462ccef6/comm/AS20260706002649.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/c4462ccef6/hd1280/AS20260706002649.jpg",
                        "https://www.asahicom.jp/imgopt/img/c4462ccef6/hd640/AS20260706002649.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/6b7b3227ec/comm/AS20260706002661.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/6b7b3227ec/hd1280/AS20260706002661.jpg",
                        "https://www.asahicom.jp/imgopt/img/6b7b3227ec/hd640/AS20260706002661.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/a2b29bde34/comm/AS20260706002658.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/a2b29bde34/hd1280/AS20260706002658.jpg",
                        "https://www.asahicom.jp/imgopt/img/a2b29bde34/hd640/AS20260706002658.jpg"
                    ]
                }
            ]);
    });

    // photo page opened in the middle of a 9-photo gallery: current photo first
    test("articles/photo/AS20260418001380.html", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.asahi.com/articles/photo/AS20260418001380.html",
            "www.asahi.com-「限りない芸の道に精進」 夢の舞台への一歩、宝塚音楽学校で入学式/",
            [
                {
                    "url": "https://www.asahicom.jp/imgopt/img/c489e471b5/comm/AS20260418001380.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/c489e471b5/hd1280/AS20260418001380.jpg",
                        "https://www.asahicom.jp/imgopt/img/c489e471b5/hd640/AS20260418001380.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/1994a60aa8/comm/AS20260418001377.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/1994a60aa8/hd1280/AS20260418001377.jpg",
                        "https://www.asahicom.jp/imgopt/img/1994a60aa8/comm_L/AS20260418001377.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/deb8e6dddc/comm/AS20260418001376.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/deb8e6dddc/hd1280/AS20260418001376.jpg",
                        "https://www.asahicom.jp/imgopt/img/deb8e6dddc/comm_L/AS20260418001376.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/a7d72f5ddb/comm/AS20260418001378.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/a7d72f5ddb/hd1280/AS20260418001378.jpg",
                        "https://www.asahicom.jp/imgopt/img/a7d72f5ddb/comm_L/AS20260418001378.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/9c2607b097/comm/AS20260418001381.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/9c2607b097/hd1280/AS20260418001381.jpg",
                        "https://www.asahicom.jp/imgopt/img/9c2607b097/comm_L/AS20260418001381.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/8989e1d38d/comm/AS20260418001382.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/8989e1d38d/hd1280/AS20260418001382.jpg",
                        "https://www.asahicom.jp/imgopt/img/8989e1d38d/comm_L/AS20260418001382.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/ee4148f89f/comm/AS20260418001383.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/ee4148f89f/hd1280/AS20260418001383.jpg",
                        "https://www.asahicom.jp/imgopt/img/ee4148f89f/comm_L/AS20260418001383.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/71f2145d8b/comm/AS20260418001384.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/71f2145d8b/hd1280/AS20260418001384.jpg",
                        "https://www.asahicom.jp/imgopt/img/71f2145d8b/comm_L/AS20260418001384.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/d2e1c6c286/comm/AS20260418001379.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/d2e1c6c286/hd1280/AS20260418001379.jpg",
                        "https://www.asahicom.jp/imgopt/img/d2e1c6c286/comm_L/AS20260418001379.jpg"
                    ]
                }
            ]);
    });

    // 2024 article: comment-panel avatars and profile images are not included
    test("articles/ASS3X5GK9S3XUCVL003.html", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.asahi.com/articles/ASS3X5GK9S3XUCVL003.html",
            "www.asahi.com-宝塚歌劇団、パワハラ認めて謝罪 劇団員死亡問題で遺族側と合意/",
            [
                {
                    "url": "https://www.asahicom.jp/imgopt/img/3b702abe13/comm/AS20240328002711.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/3b702abe13/hd1280/AS20240328002711.jpg",
                        "https://www.asahicom.jp/imgopt/img/3b702abe13/comm_L/AS20240328002711.jpg"
                    ]
                },
                {
                    "url": "https://www.asahicom.jp/imgopt/img/2c4b797745/comm/AS20240328002715.jpg",
                    "retries": [
                        "https://www.asahicom.jp/imgopt/img/2c4b797745/hd1280/AS20240328002715.jpg",
                        "https://www.asahicom.jp/imgopt/img/2c4b797745/hw120/AS20240328002715.jpg"
                    ]
                }
            ]);
    });
});
