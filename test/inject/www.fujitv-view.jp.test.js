const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/post-166141/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.fujitv-view.jp/article/post-166141/",
        "www.fujitv-view.jp-article-post-166141-/",
        [
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0015-1-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0015-1.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0025-1-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0025-1.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0032-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0032.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0045-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0045.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0056-1-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0056-1.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0092-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0092.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0089-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0089.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0065-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0065.jpg"
            }
        ]);
});

test("gallery/post-171526/?imgid=1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.fujitv-view.jp/gallery/post-171526/?imgid=1",
        "www.fujitv-view.jp-gallery-post-171526-/",
        [
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0025-1-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0025-1.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0032-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0032.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0045-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0045.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0056-1-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0056-1.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0092-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0092.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0089-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0089.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0015-1-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0015-1.jpg"
            },
            {
                "retries": [
                    "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0065-scaled.jpg"
                ],
                "url": "https://cdn.prod.media.fujitv-view.jp/wp-content/uploads/2020/09/DSC_0065.jpg"
            }
        ]);
});
