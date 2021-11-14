const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news page with photos", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://okmusic.jp/news/445073",
        "okmusic.jp-news-445073/",
        [
            {
                "retries": [
                    "https://c.okmusic.jp/news_items/images/445073/extra_large.jpg?1635785875"
                ],
                "url": "https://c.okmusic.jp/news_items/images/445073/original.jpg"
            },
            {
                "url": "https://c.okmusic.jp/news_details/images/188736704/original.jpg?1635785899"
            },
            {
                "url": "https://c.okmusic.jp/news_details/images/188736717/original.jpg?1635785910"
            },
        ].concat(dummyItems(32))
    );
});

test("Test news page with slider photos", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://okmusic.jp/news/446651",
        "okmusic.jp-news-446651/",
        [
            {
                "retries": [
                    "https://c.okmusic.jp/news_items/images/446651/extra_large.jpeg?1636693412"
                ],
                "url": "https://c.okmusic.jp/news_items/images/446651/original.jpeg"
            },
            {
                "retries": [
                    "https://c.okmusic.jp/news_details/images/188951530/large.jpeg?1636693413"
                ],
                "url": "https://c.okmusic.jp/news_details/images/188951530/original.jpeg"
            },
            {
                "retries": [
                    "https://c.okmusic.jp/news_details/images/188951531/large.jpeg?1636693414"
                ],
                "url": "https://c.okmusic.jp/news_details/images/188951531/original.jpeg"
            }
        ]
    );
});

test("Test news page with slider photos with malformed filename", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://okmusic.jp/news/446903/",
        "okmusic.jp-news-446903-/",
        [
            {
                "retries": [
                    "https://c.okmusic.jp/news_items/images/446903/extra_large.?1636837370"
                ],
                "url": "https://c.okmusic.jp/news_items/images/446903/original."
            },
            {
                "retries": [
                    "https://c.okmusic.jp/news_details/images/188990288/large.?1636837372"
                ],
                "url": "https://c.okmusic.jp/news_details/images/188990288/original."
            },
            {
                "retries": [
                    "https://c.okmusic.jp/news_details/images/188990289/large.?1636837373"
                ],
                "url": "https://c.okmusic.jp/news_details/images/188990289/original."
            },
            {
                "retries": [
                    "https://c.okmusic.jp/news_details/images/188990290/large.?1636837373"
                ],
                "url": "https://c.okmusic.jp/news_details/images/188990290/original."
            },
            {
                "retries": [
                    "https://c.okmusic.jp/news_details/images/188990291/large.?1636837374"
                ],
                "url": "https://c.okmusic.jp/news_details/images/188990291/original."
            }
        ]
    );
});
