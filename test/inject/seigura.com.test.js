const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");

let browserFactory = getBrowserFactory(beforeAll, afterAll);

test("Test news article", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://seigura.com/news/45789/",
        "seigura.com-news-45789-/",
        [
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/16-1280x853.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/16.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/10-1-320x320.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/10-1.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/6-1-320x320.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/6-1.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/4-1-320x320.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/4-1.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/3-1-320x320.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/3-1.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/11-1-320x320.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/11-1.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/9-1-320x320.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/9-1.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/7-1-320x320.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/7-1.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/5-1-320x320.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/5-1.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/8-1-320x320.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/8-1.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/1-1-320x320.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/1-1.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/2-1-320x320.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/2-1.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/15-640x427.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/15.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/12-640x427.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/12.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/13-640x426.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/13.jpg"
            },
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/09/14-640x427.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/09/14.jpg"
            }
        ]
    );
});

test("Test news article with 1 image", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://seigura.com/news/46518/",
        "seigura.com-news-46518-/",
        [
            {
                "retries": [
                    "https://seigura.com/wp-content/uploads/2020/10/amamiya1002.jpg"
                ],
                "url": "https://seigura.com/wp-content/uploads/2020/10/amamiya1002.jpg"
            }
        ]
    );
});
