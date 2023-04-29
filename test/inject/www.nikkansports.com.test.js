const {testDirectDownload, getBrowserFactory} = require("./testbase");
const {getLargeImgFromDom} = require("../../src/inject/www.nikkansports.com");
const retries = require("../utils/retries");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test getLargeImgFromDom", () => {
    expect(getLargeImgFromDom({
        style: {
            backgroundImage: "url(https://www.nikkansports.com/entertainment/news/img/202011180000713-w500_0.jpg)"
        }
    }).url).toBe("https://www.nikkansports.com/entertainment/news/img/202011180000713-w1300_0.jpg");

    expect(getLargeImgFromDom({
        style: {
            backgroundImage: "url(https://www.nikkansports.com/entertainment/news/img/202011180000713-w300_0.jpg)"
        }
    }).url).toBe("https://www.nikkansports.com/entertainment/news/img/202011180000713-w1300_0.jpg");

    expect(getLargeImgFromDom({
        style: {
            backgroundImage: "url(https://www.nikkansports.com/entertainment/news/img/202011180000713-w500_1.jpg)"
        }
    }).url).toBe("https://www.nikkansports.com/entertainment/news/img/202011180000713-w1300_1.jpg");
    expect(getLargeImgFromDom({
        style: {
            backgroundImage: "url(https://www.nikkansports.com/entertainment/news/img/202011180000713-w500_10.jpg)"
        }
    }).url).toBe("https://www.nikkansports.com/entertainment/news/img/202011180000713-w1300_10.jpg");
});

test("Test news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.nikkansports.com/entertainment/news/202011180000713.html",
        "www.nikkansports.com-entertainment-news-202011180000713.html/",
        [
            {
                "retries": [
                    "https://www.nikkansports.com/entertainment/news/img/202011180000713-w500_0.jpg"
                ],
                "url": "https://www.nikkansports.com/entertainment/news/img/202011180000713-w1300_0.jpg"
            },
            {
                "retries": [
                    "https://www.nikkansports.com/entertainment/news/img/202011180000713-w200_1.jpg"
                ],
                "url": "https://www.nikkansports.com/entertainment/news/img/202011180000713-w1300_1.jpg"
            },
            {
                "retries": [
                    "https://www.nikkansports.com/entertainment/news/img/202011180000713-w200_2.jpg"
                ],
                "url": "https://www.nikkansports.com/entertainment/news/img/202011180000713-w1300_2.jpg"
            },
            {
                "retries": [
                    "https://www.nikkansports.com/entertainment/news/img/202011180000713-w200_3.jpg"
                ],
                "url": "https://www.nikkansports.com/entertainment/news/img/202011180000713-w1300_3.jpg"
            }
        ]
    );
});

test("Test news image page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.nikkansports.com/entertainment/photonews/photonews_nsInc_202011180000713-3.html",
        "www.nikkansports.com-entertainment-photonews-photonews_nsInc_202011180000713-3.html/",
        [
            {
                "retries": [
                    "https://www.nikkansports.com/entertainment/news/img/202011180000713-w200_0.jpg"
                ],
                "url": "https://www.nikkansports.com/entertainment/news/img/202011180000713-w1300_0.jpg"
            },
            {
                "retries": [
                    "https://www.nikkansports.com/entertainment/news/img/202011180000713-w200_1.jpg"
                ],
                "url": "https://www.nikkansports.com/entertainment/news/img/202011180000713-w1300_1.jpg"
            },
            {
                "retries": [
                    "https://www.nikkansports.com/entertainment/news/img/202011180000713-w200_2.jpg"
                ],
                "url": "https://www.nikkansports.com/entertainment/news/img/202011180000713-w1300_2.jpg"
            },
            {
                "retries": [
                    "https://www.nikkansports.com/entertainment/news/img/202011180000713-w200_3.jpg"
                ],
                "url": "https://www.nikkansports.com/entertainment/news/img/202011180000713-w1300_3.jpg"
            }
        ]
    );
});

test("Test news image page 2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.nikkansports.com/entertainment/photonews/photonews_nsInc_202011270000052-0.html",
        "www.nikkansports.com-entertainment-photonews-photonews_nsInc_202011270000052-0.html/",
        [
            {
                "retries": [
                    "https://www.nikkansports.com/entertainment/news/img/202011270000052-w200_0.jpg"
                ],
                "url": "https://www.nikkansports.com/entertainment/news/img/202011270000052-w1300_0.jpg"
            },
            {
                "retries": [
                    "https://www.nikkansports.com/entertainment/news/img/202011270000052-w200_1.jpg"
                ],
                "url": "https://www.nikkansports.com/entertainment/news/img/202011270000052-w1300_1.jpg"
            }
        ]
    );
});

test("Test news image page 3", async () => {
    await retries(3,  () => {
        testDirectDownload(
        getBrowser(),
        "https://www.nikkansports.com/entertainment/column/sakamichi/photonews/photonews_nsInc_202101120000038-0.html",
        "www.nikkansports.com-entertainment-column-sakamichi-photonews-photonews_nsInc_202101120000038-0.html/",
        [
            {
                "retries": [
                    "https://www.nikkansports.com/entertainment/column/sakamichi/news/img/202101120000038-w200_0.jpg"
                ],
                "url": "https://www.nikkansports.com/entertainment/column/sakamichi/news/img/202101120000038-w1300_0.jpg"
            },
            {
                "retries": [
                    "https://www.nikkansports.com/entertainment/column/sakamichi/news/img/202101120000038-w200_1.jpg"
                ],
                "url": "https://www.nikkansports.com/entertainment/column/sakamichi/news/img/202101120000038-w1300_1.jpg"
            },
            {
                "retries": [
                    "https://www.nikkansports.com/entertainment/column/sakamichi/news/img/202101120000038-w200_2.jpg"
                ],
                "url": "https://www.nikkansports.com/entertainment/column/sakamichi/news/img/202101120000038-w1300_2.jpg"
            }
        ]
    )
    });
});

