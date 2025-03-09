const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test fashion article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ananweb.jp/news/303125/",
        "ananweb.jp-news-303125-/",
        [
            {
                "retries": [
                    "https://img.ananweb.jp/2020/08/01100647/2-600x399.jpg"
                ],
                "url": "https://img.ananweb.jp/2020/08/01100647/2.jpg"
            },
            {
                "retries": [
                    "https://img.ananweb.jp/2020/08/01100709/3-596x600.jpg"
                ],
                "url": "https://img.ananweb.jp/2020/08/01100709/3.jpg"
            },
            {
                "retries": [
                    "https://img.ananweb.jp/2020/08/01100737/4-578x600.jpg"
                ],
                "url": "https://img.ananweb.jp/2020/08/01100737/4.jpg"
            },
            {
                "retries": [
                    "https://img.ananweb.jp/2020/08/01100728/5-574x600.jpg"
                ],
                "url": "https://img.ananweb.jp/2020/08/01100728/5.jpg"
            },
            {
                "retries": [
                    "https://img.ananweb.jp/2020/08/01100809/6-600x416.jpg"
                ],
                "url": "https://img.ananweb.jp/2020/08/01100809/6.jpg"
            }
        ]
    );
});

test("Test beauty article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ananweb.jp/news/304729/",
        "ananweb.jp-news-304729-/",
        [
            {
                "retries": [
                    "https://img.ananweb.jp/2020/08/17170449/5-1-600x408.jpg"
                ],
                "url": "https://img.ananweb.jp/2020/08/17170449/5-1.jpg"
            },
            {
                "retries": [
                    "https://img.ananweb.jp/2020/08/17170507/6-1-423x600.jpg"
                ],
                "url": "https://img.ananweb.jp/2020/08/17170507/6-1.jpg"
            },
            {
                "retries": [
                    "https://img.ananweb.jp/2020/08/17170523/7-2-600x409.jpg"
                ],
                "url": "https://img.ananweb.jp/2020/08/17170523/7-2.jpg"
            },
            {
                "retries": [
                    "https://img.ananweb.jp/2020/08/17170539/8-1-422x600.jpg"
                ],
                "url": "https://img.ananweb.jp/2020/08/17170539/8-1.jpg"
            },
            {
                "retries": [
                    "https://img.ananweb.jp/2020/08/17170554/9-1-600x407.jpg"
                ],
                "url": "https://img.ananweb.jp/2020/08/17170554/9-1.jpg"
            },
            {
                "retries": [
                    "https://img.ananweb.jp/2020/08/17170617/10-1-287x600.jpg"
                ],
                "url": "https://img.ananweb.jp/2020/08/17170617/10-1.jpg"
            }
        ]
    );
});

test("Test entame article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ananweb.jp/news/305621/",
        "ananweb.jp-news-305621-/",
        [
            {
                "retries": [
                    "https://img.ananweb.jp/2020/08/23112913/2214-takayama-600x492.jpg"
                ],
                "url": "https://img.ananweb.jp/2020/08/23112913/2214-takayama.jpg"
            }
        ]
    );
});

test("categories/beauty/45811", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ananweb.jp/categories/beauty/45811",
        "ananweb.jp-categories-beauty-45811/",
        [
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2025/02/55f02aaf5c3ef69d16ff4f0f232051b4.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2025/02/55f02aaf5c3ef69d16ff4f0f232051b4.jpg"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2025/02/d36f1be12f26d0592c6753138d67ef7d.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2025/02/d36f1be12f26d0592c6753138d67ef7d.jpg"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2025/02/2c1bbf835902baa41fcf28a6f9fa050f.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2025/02/2c1bbf835902baa41fcf28a6f9fa050f.jpg"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2025/02/0d7c2b3a521865c2fa972e576712026e.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2025/02/0d7c2b3a521865c2fa972e576712026e.jpg"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2025/02/f1f51144d8289a36f38190d360de01c7.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2025/02/f1f51144d8289a36f38190d360de01c7.jpg"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2025/02/b59277819502ea46c4ef8d76d9d693d3.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2025/02/b59277819502ea46c4ef8d76d9d693d3.jpg"
            }
        ]);
});

test("categories/lifestyle/214", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ananweb.jp/categories/lifestyle/214",
        "ananweb.jp-categories-lifestyle-214/",
        [
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2024/12/241014_AN0303-1.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2024/12/241014_AN0303-1.jpg"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2024/12/20241022-1-1.png"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2024/12/20241022-1-1.png"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2024/12/20241022-2.png"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2024/12/20241022-2.png"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2024/12/241014_AN0379-1.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2024/12/241014_AN0379-1.jpg"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2024/12/95b5f7d7cba856aa880c1a893169b37a.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2024/12/95b5f7d7cba856aa880c1a893169b37a.jpg"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2024/12/20241022-3.png"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2024/12/20241022-3.png"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2024/12/241014_AN0455-1.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2024/12/241014_AN0455-1.jpg"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2024/12/4e723ee78a56ce42013478e9ff11a733.png"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2024/12/4e723ee78a56ce42013478e9ff11a733.png"
            }
        ]);
});

test("categories/entertainment/32122", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ananweb.jp/categories/entertainment/32122",
        "ananweb.jp-categories-entertainment-32122/",
        [
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2024/11/2424-ISSUE0.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2024/11/2424-ISSUE0.jpg"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2024/11/2424-ISSUE-NANO.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2024/11/2424-ISSUE-NANO.jpg"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2024/11/2424-ISSUE-RINO.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2024/11/2424-ISSUE-RINO.jpg"
            },
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2024/11/2424-ISSUE-YUUKI.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2024/11/2424-ISSUE-YUUKI.jpg"
            }
        ]);
});

test("categories/star/24504", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ananweb.jp/categories/star/24504",
        "ananweb.jp-categories-star-24504/",
        [
            {
                "retries": [
                    "https://api.ananweb.jp/wp-content/uploads/2024/10/2420-Perfume2.jpg"
                ],
                "url": "https://api.ananweb.jp/wp-content/uploads/2024/10/2420-Perfume2.jpg"
            }
        ]);
});
