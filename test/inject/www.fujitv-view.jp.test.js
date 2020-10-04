const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");

let browserFactory = getBrowserFactory(beforeAll, afterAll);

test("Test news article", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://www.fujitv-view.jp/article/post-166141/",
        "www.fujitv-view.jp-article-post-166141-/",
        [
            "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0015-1-scaled.jpg?resize=1536,864&crop=4px,58px,2556px,1433px",
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0025-1-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0025-1.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0032-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0032.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0045-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0045.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0056-1-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0056-1.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0092-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0092.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0089-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0089.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0015-1-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0015-1.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0065-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0065.jpg"
            }
        ]);
});

test("Test image gallery", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://www.fujitv-view.jp/gallery/post-171526/?imgid=1",
        "www.fujitv-view.jp-gallery-post-171526-/",
        [
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0025-1-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0025-1.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0032-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0032.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0045-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0045.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0056-1-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0056-1.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0092-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0092.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0089-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0089.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0015-1-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0015-1.jpg"
            },
            {
                "retries": [
                    "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0065-scaled.jpg"
                ],
                "url": "https://www.fujitv-view.jp/tachyon/2020/09/DSC_0065.jpg"
            }
        ]
    );
});

