const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite emogram.sankei.com", () => {
    // article: hero + body images, originals taken from the largest srcset entry
    test("112061", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://emogram.sankei.com/112061",
            "emogram.sankei.com-青葉坂46、賀喜遥香ら現役6人が後輩へ熱いエール/",
            [
                "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06206.jpeg",
                "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06213.jpeg",
                "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06536.jpeg",
                "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06256.jpeg",
                "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06419.jpeg",
                "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06652.jpeg",
                "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06362.jpeg",
                "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06343.jpeg"
            ]);
    });

    // photo page: current photo first, then the rest of the gallery from the thumbnail strip; same folder as the article
    test("112061/photo/112066", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://emogram.sankei.com/112061/photo/112066",
            "emogram.sankei.com-青葉坂46、賀喜遥香ら現役6人が後輩へ熱いエール/",
            [
                "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06206.jpeg",
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06213.jpeg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06213-150x150.jpeg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06536.jpeg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06536-150x150.jpeg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06256.jpeg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06256-150x150.jpeg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06419.jpeg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06419-150x150.jpeg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06652.jpeg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06652-150x150.jpeg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06362.jpeg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06362-150x150.jpeg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06343.jpeg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/DSC06343-150x150.jpeg"
                    ]
                }
            ]);
    });

    // article with an extra-photo gallery (追加写真) of 300x200 thumbnails
    test("111765", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://emogram.sankei.com/111765",
            "emogram.sankei.com-門前仲町駅すぐ、普通とは違う「あぶり水炊き」に舌鼓/",
            [
                "https://emogram.sankei.com/wp-content/uploads/2026/09/cc7d90937a056d95741b9c7fcff45ded.jpg",
                "https://emogram.sankei.com/wp-content/uploads/2026/09/02-11.jpg",
                "https://emogram.sankei.com/wp-content/uploads/2026/09/03-11.jpg",
                "https://emogram.sankei.com/wp-content/uploads/2026/09/04-11.jpg",
                "https://emogram.sankei.com/wp-content/uploads/2026/09/05-10.jpg",
                "https://emogram.sankei.com/wp-content/uploads/2026/09/06-10.jpg",
                "https://emogram.sankei.com/wp-content/uploads/2026/09/10-9.jpg",
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/07-10.jpg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/07-10-300x200.jpg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/09-10.jpg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/09-10-300x200.jpg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/08-10.jpg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/08-10-300x200.jpg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/01-11.jpg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/01-11-300x200.jpg"
                    ]
                }
            ]);
    });

    // photo page of an article with extra photos
    test("111765/photo/111777", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://emogram.sankei.com/111765/photo/111777",
            "emogram.sankei.com-門前仲町駅すぐ、普通とは違う「あぶり水炊き」に舌鼓/",
            [
                "https://emogram.sankei.com/wp-content/uploads/2026/09/07-10.jpg",
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/02-11.jpg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/02-11-150x150.jpg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/03-11.jpg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/03-11-150x150.jpg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/04-11.jpg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/04-11-150x150.jpg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/05-10.jpg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/05-10-150x150.jpg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/06-10.jpg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/06-10-150x150.jpg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/10-9.jpg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/10-9-150x150.jpg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/09-10.jpg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/09-10-150x150.jpg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/08-10.jpg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/08-10-150x150.jpg"
                    ]
                },
                {
                    "url": "https://emogram.sankei.com/wp-content/uploads/2026/09/01-11.jpg",
                    "retries": [
                        "https://emogram.sankei.com/wp-content/uploads/2026/09/01-11-150x150.jpg"
                    ]
                }
            ]);
    });

    // hero image repeated in the body is included only once
    test("113970", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://emogram.sankei.com/113970",
            "emogram.sankei.com-よこはま動物園ズーラシアに新しい家族 オカピの赤ちゃん誕生/",
            [
                "https://emogram.sankei.com/wp-content/uploads/2026/10/c88ecfab170ebecff44dd27749b4605d.jpg",
                "https://emogram.sankei.com/wp-content/uploads/2026/10/be3c09341d4ef8a4aa40c4111911050a.jpg"
            ]);
    });
});
