const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
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
        ], {
            preinject: async function (page) {
                await pageutils.scrollTo(page,  50);
            }
        });
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
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page,  50);
            }
        });
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
        ],
        {
        preinject: async function (page) {
            await pageutils.scrollTo(page,  50);
        }
    });
});

